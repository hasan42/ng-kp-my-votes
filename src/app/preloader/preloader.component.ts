import { Component, AfterViewInit, OnDestroy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { PreloaderService } from '../preloader.service';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.sass']
})
export class PreloaderComponent implements AfterViewInit, OnDestroy {

  constructor( private prS: PreloaderService,
              private elmRef: ElementRef,
              private cdr: ChangeDetectorRef ) { }

  loading: boolean = false;
  loadingSubscription: Subscription;

  ngAfterViewInit() {
    this.loadingSubscription = this.prS.loadingStatus.subscribe((value) => {
      console.log(value);
      this.loading = value;
      // this.elmRef.nativeElement.style.display = value ? 'block' : 'none';
      // this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

  getLoading(){
    return this.prS.loading
  }
}
