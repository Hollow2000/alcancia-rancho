import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private readonly mobileResolution = 705;
  private isMobileSubject = new BehaviorSubject<boolean>(this.checkIfMobile());
  isMobile$ = this.isMobileSubject.asObservable(); // Exponemos el observable

  constructor() {
    window.addEventListener('resize', () => this.updateIsMobile());
  }

  private checkIfMobile(): boolean {
    return window.innerWidth <= this.mobileResolution; // Ajusta este valor según lo que consideres un dispositivo móvil
  }

  private updateIsMobile(): void {
    const isMobile = this.checkIfMobile();
    if (this.isMobileSubject.value !== isMobile) {
      this.isMobileSubject.next(isMobile); // Emitir el nuevo valor
    }
  }
}
