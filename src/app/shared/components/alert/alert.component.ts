import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService, AlertState } from '../../shared.service';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
    public show: boolean = true;
    public message: string = '';
    private subscription: Subscription;
    constructor(
        private alertService: SharedService
    ) { }
    ngOnInit() {
        this.subscription = this.alertService.alertState
            .subscribe((state: AlertState) => {
                if (state.message) {
                    this.message = state.message;
                    this.show = true;
                    setTimeout(() => this.show = false, 3000);
                }
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}