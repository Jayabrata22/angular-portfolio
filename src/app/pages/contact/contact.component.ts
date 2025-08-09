import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitted = false;
  isSuccess = false;
  isError = false;

  socialLinks = [
    { name: 'GitHub', icon: 'fa-github', url: 'https://github.com/Jayabrata22' },
    { name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/jayabrata-das22/' },
    { name: 'Twitter', icon: 'fa-twitter', url: 'https://x.com/Jayabrata_Das22' },
    { name: 'Stack Overflow', icon: 'fa-stack-overflow', url: '' }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isSubmitted = true;
    
    if (this.contactForm.valid) {
      // In a real application, you would send this data to a backend service
      console.log('Form submitted:', this.contactForm.value);
      
      // Simulate API call success
      setTimeout(() => {
        this.isSuccess = true;
        this.contactForm.reset();
        this.isSubmitted = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.isSuccess = false;
        }, 5000);
      }, 1500);
    } else {
      this.isError = true;
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        this.isError = false;
      }, 5000);
    }
  }

  // Convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }
}