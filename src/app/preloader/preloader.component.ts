import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {
  @ViewChild('ctnPreloader') ctnPreloader!: ElementRef;

  ngOnInit(): void {
    this.loader();
  }

  loader(): void {
    window.onload = () => {
      const ctnPreloader = document.querySelector('.ctn-preloader');
      if (ctnPreloader) {
        ctnPreloader.classList.add('loaded');
        const preloader = document.getElementById('preloader');
        if (preloader) {
          setTimeout(() => {
            preloader.style.display = 'none';
          }, 1500);
        }
      }
    };
  }
}
