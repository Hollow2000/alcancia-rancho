import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Utils {
    randomNumberInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    arrayOf(size: number): Array<any>{
        return new Array(size)
    }

    delay(seconds: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }
}