import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService, LoaderState } from '../../shared.service';

@Component({
    selector: 'angular-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
    show = false;
    private subscription: Subscription;
    constructor(
        private loaderService: SharedService
    ) { }
    ngOnInit() {
        this.subscription = this.loaderService.loaderState
            .subscribe((state: LoaderState) => {
                this.show = state.show;
            });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}