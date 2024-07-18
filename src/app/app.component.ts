import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'secureworks-project';

  ngAfterViewInit(): void {
    const bodyWrapper = document.getElementById('body-wrapper');
    const nav = document.getElementById('navMenu');
    if (bodyWrapper && nav) {
      bodyWrapper.style.marginTop = nav?.clientHeight + 'px';
    }
  }
}
