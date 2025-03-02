import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import MyPreset from './themes/mytheme';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset
      },
      translation:{
        dayNames: ['Domigno','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'],
        dayNamesShort: ['Do','Lun','Mar','Mier','Juv','Vi','Sab'],
        dayNamesMin: ['D','L','M','m','J','V','S'],
        today: 'Hoy',
        clear: 'Limpiar',
        monthNames: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
      }
    }), provideFirebaseApp(() => initializeApp({"projectId":"alcancia-rancho","appId":"1:104072247493:web:5446afad379a7db55498ac","storageBucket":"alcancia-rancho.firebasestorage.app","apiKey":"AIzaSyAlOltMaH3ElCCYdRWH1bHcHsUe6MD7f5c","authDomain":"alcancia-rancho.firebaseapp.com","messagingSenderId":"104072247493","measurementId":"G-JX9NG8HHCK"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
