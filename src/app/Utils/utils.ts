import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Utils {
    generateId(): string {
        const timestamp = new Date().getTime().toString(36);  // Convierte el timestamp a base 36 (alfanumérico)
        const random = Math.floor(Math.random() * 1000000).toString(36);  // Genera un número aleatorio y lo convierte a base 36
        return `${timestamp}${random}`;
    }

    randomNumberInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    arrayOf(size: number): Array<any> {
        return new Array(size)
    }

    delay(seconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }

    addElipsis(text: string, length: number): string {
        if (text.length <= length) {
            return text;  // Si el texto es más corto o igual a la longitud, se devuelve tal cual.
        }
        // Recorta el texto a la longitud especificada y agrega "..."
        return text.substring(0, length - 3) + '...';
    }
}