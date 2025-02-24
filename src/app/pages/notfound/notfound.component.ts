import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [Card, Button],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.css'
})
export default class NotfoundComponent {
  private readonly _router = inject(Router);

  goToHome(){
    this._router.navigateByUrl('');
  }
}
