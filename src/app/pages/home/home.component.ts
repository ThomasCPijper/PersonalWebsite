import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected programmingLanguages = [
    { name: "Java", value: 100 },
    { name: "C#", value: 50},
    { name: "Python", value: 20 },
    { name: "TypeScript", value: 90 },
    { name: "SQL", value: 70 },
    { name: "GO", value: 1 },
    { name: "C", value: 30 },
    { name: "C++", value: 25 }
  ];

  protected skills = [
    { name: "Business Writing", value: 70 },
    { name: "Project Management", value: 60},
    { name: "Problem-Solving", value: 80 },
    { name: "Conflict Resolution", value: 30 },
    { name: "Presentation & Public Speaking", value: 75 },
    { name: "Teamwork", value: 82 },
    { name: "Dutch", value: 100 },
    { name: "English", value: 65 }
  ];
  
  
  constructor(private router: Router){}

  ngAfterViewInit() {
    const lines = document.querySelectorAll('.line');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const line = entry.target as HTMLElement;
  
        if (entry.isIntersecting) {
          line.classList.add('line-grow');
        } else {
          line.classList.remove('line-grow');
        }
      });
    });
  
    lines.forEach(line => observer.observe(line));
  }
  

  navigate(link: String): void {
    this.router.navigate([link])
  }
}
