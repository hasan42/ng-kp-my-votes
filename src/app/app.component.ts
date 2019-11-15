import { Component, ChangeDetectorRef, OnInit,
         DoCheck,
         OnChanges,
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewChecked, 
        AfterViewInit } from '@angular/core';
import { VotesService } from './votes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,
         DoCheck,
         OnChanges,
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewChecked, 
        AfterViewInit {
  title = 'ng-kp-my-votes';
  count = 0;
  preloaderActive: boolean = true;

  // message:Subject<string> = new BehaviorSubject('loading :(');

  constructor( public vS: VotesService , private cdr: ChangeDetectorRef) {
    this.vS.loadList()
  }
  ngOnInit() {
    this.log(`ngOnInit`);
  }

  ngOnChanges() {
       
      this.log(`OnChanges`);
    }
    ngDoCheck() {
       // this.message.next('loading :(')
      this.log(`ngDoCheck`);
    }
    ngAfterViewInit() {
       
      this.log(`ngAfterViewInit`);
    }
    ngAfterViewChecked() {
      // this.message.next('all done loading :)')
       
      this.log(`ngAfterViewChecked`);
    }
    ngAfterContentInit() {
       
      this.log(`ngAfterContentInit`);
    }
    ngAfterContentChecked() {
       
      this.log(`ngAfterContentChecked`);
    }
 
    private log(msg: string) {
        console.log("app component " + this.count + ". " + msg);
        this.count++;
    }
}
