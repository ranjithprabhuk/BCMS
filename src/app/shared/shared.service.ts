import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private loaderSubject = new BehaviorSubject<LoaderState>({show: false});
    loaderState = this.loaderSubject.asObservable();

    private alertSubject = new BehaviorSubject<AlertState>({message: ''});
    alertState = this.alertSubject.asObservable();

    constructor() {}
    show() {
        this.loaderSubject.next({ show: true });
        setTimeout(() => this.loaderSubject.next({show: false}), 3000);
    }
    hide() {
        this.loaderSubject.next(<LoaderState>{ show: false });
    }

    alertMessage(message: string): void {
        this.alertSubject.next({message});
    }
}

export interface LoaderState {
    show: boolean;
}

export interface AlertState {
    message: string;
}
