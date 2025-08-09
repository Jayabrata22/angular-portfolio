import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

@Component({
  selector: 'app-particles-background',
  templateUrl: './particles-background.component.html',
  styleUrls: ['./particles-background.component.scss']
})
export class ParticlesBackgroundComponent implements OnInit, AfterViewInit {
  @ViewChild('particleCanvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  @Input() particleCount: number = 80;
  @Input() primaryColor: string = '#64ffda';
  @Input() secondaryColor: string = '#8892b0';
  @Input() connectionDistance: number = 150;
  @Input() maxSize: number = 3;
  @Input() minSize: number = 1;
  @Input() maxSpeed: number = 0.5;
  @Input() interactive: boolean = true;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId!: number;
  private mouse = { x: 0, y: 0 };
  private canvasWidth = 0;
  private canvasHeight = 0;
  private dpr = 1;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initCanvas();
    this.createParticles();
    this.animate();
    this.setupListeners();
  }

  private initCanvas(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d')!;
    this.dpr = window.devicePixelRatio || 1;
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    const canvas = this.canvas.nativeElement;
    const parent = canvas.parentElement!;
    
    this.canvasWidth = parent.clientWidth;
    this.canvasHeight = parent.clientHeight;
    
    // Set display size
    canvas.style.width = this.canvasWidth + 'px';
    canvas.style.height = this.canvasHeight + 'px';
    
    // Set actual size adjusted for pixel ratio
    canvas.width = this.canvasWidth * this.dpr;
    canvas.height = this.canvasHeight * this.dpr;
    
    // Scale the context to match the pixel ratio
    this.ctx.scale(this.dpr, this.dpr);
  }

  private createParticles(): void {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvasWidth,
        y: Math.random() * this.canvasHeight,
        size: Math.random() * (this.maxSize - this.minSize) + this.minSize,
        speedX: (Math.random() - 0.5) * this.maxSpeed * 2,
        speedY: (Math.random() - 0.5) * this.maxSpeed * 2,
        color: Math.random() > 0.5 ? this.primaryColor : this.secondaryColor
      });
    }
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.updateParticles();
    this.drawParticles();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  private updateParticles(): void {
    this.particles.forEach(particle => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvasWidth) {
        particle.speedX = -particle.speedX;
      }
      if (particle.y < 0 || particle.y > this.canvasHeight) {
        particle.speedY = -particle.speedY;
      }
    });
  }

  private drawParticles(): void {
    // Draw particles
    this.particles.forEach(particle => {
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fillStyle = particle.color;
      this.ctx.fill();
    });
    
    // Draw connections
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.connectionDistance) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(100, 255, 218, ${1 - distance / this.connectionDistance})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
      
      // Draw connections to mouse if interactive
      if (this.interactive && this.mouse.x && this.mouse.y) {
        const dx = this.particles[i].x - this.mouse.x;
        const dy = this.particles[i].y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.connectionDistance) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(100, 255, 218, ${1 - distance / this.connectionDistance})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }
  }

  private setupListeners(): void {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.createParticles();
    });
    
    if (this.interactive) {
      const canvas = this.canvas.nativeElement;
      canvas.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        this.mouse.x = event.clientX - rect.left;
        this.mouse.y = event.clientY - rect.top;
      });
      
      canvas.addEventListener('mouseleave', () => {
        this.mouse = { x: 0, y: 0 };
      });
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', () => {});
  }
}