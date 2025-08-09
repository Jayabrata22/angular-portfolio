import { Component, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';

@Component({
  selector: 'app-animated-text',
  templateUrl: './animated-text.component.html',
  styleUrls: ['./animated-text.component.scss']
})
export class AnimatedTextComponent implements OnInit, OnDestroy {
  @Input() text: string = '';
  @Input() items: string[] = [];
  @Input() period: number = 2000;
  @Input() typeSpeed: number = 100;
  @Input() cursor: boolean = true;
  @Input() loop: boolean = true;
  
  currentIndex: number = 0;
  currentText: string = '';
  isDeleting: boolean = false;
  isWaiting: boolean = false;
  typingInterval: any;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.startTyping();
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
    }
  }

  startTyping(): void {
    this.typingInterval = setInterval(() => {
      this.typeText();
    }, this.typeSpeed);
  }

  typeText(): void {
    if (this.items.length === 0) return;

    const fullText = this.items[this.currentIndex];
    
    if (this.isDeleting) {
      this.currentText = fullText.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = fullText.substring(0, this.currentText.length + 1);
    }

    if (!this.isDeleting && this.currentText === fullText) {
      // Finished typing current text, wait before deleting
      this.isDeleting = true;
      this.isWaiting = true;
      clearInterval(this.typingInterval);
      setTimeout(() => {
        this.isWaiting = false;
        this.typingInterval = setInterval(() => {
          this.typeText();
        }, this.typeSpeed / 2);
      }, this.period);
    } else if (this.isDeleting && this.currentText === '') {
      // Finished deleting, move to next item
      this.isDeleting = false;
      this.currentIndex = this.loop ? 
        (this.currentIndex + 1) % this.items.length : 
        Math.min(this.currentIndex + 1, this.items.length - 1);
      
      clearInterval(this.typingInterval);
      setTimeout(() => {
        this.typingInterval = setInterval(() => {
          this.typeText();
        }, this.typeSpeed);
      }, 500);
    }
  }
}