import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import MyPreset from './themes/mytheme';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideServiceWorker } from '@angular/service-worker';

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
        dayNamesShort: ['Dom','Lun','Mar','Mier','Juv','Vier','Sab'],
        dayNamesMin: ['D','L','M','M','J','V','S'],
        today: 'Hoy',
        clear: 'Limpiar',
        monthNames: ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
      }
    }), provideFirebaseApp(() => initializeApp({"projectId":"alcancia-rancho","appId":"1:104072247493:web:5446afad379a7db55498ac","storageBucket":"alcancia-rancho.firebasestorage.app","apiKey":"AIzaSyAlOltMaH3ElCCYdRWH1bHcHsUe6MD7f5c","authDomain":"alcancia-rancho.firebaseapp.com","messagingSenderId":"104072247493","measurementId":"G-JX9NG8HHCK"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          })
  ]
};
