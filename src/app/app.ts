import { afterEveryRender, Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  router = inject(Router)
  protected readonly title = signal('ng-ssr-1');
  protected readonly afterEveryRender = afterEveryRender;

  navigateToPage1() {
    this.router.navigateByUrl('/page1').then()
  }
}
