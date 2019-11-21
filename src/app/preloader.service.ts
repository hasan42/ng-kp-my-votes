// https://nezhar.com/blog/create-a-loading-screen-for-angular-apps/

import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {

  _loading: boolean = false;
  loadingStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  get loading():boolean {
    return this._loading;
  }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading(){
    this.loading = true;
  }
  stopLoading(){
    this.loading = false;
  }

}
