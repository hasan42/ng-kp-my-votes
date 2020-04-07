import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VotesService } from '../votes.service';
import { PreloaderService } from '../preloader.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription ,BehaviorSubject,   } from 'rxjs';
import { take, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss']
})
export class FullListComponent implements OnInit{

  faHistory = faHistory;
  faListOl = faListOl;
  faTimes = faTimes;

  items: any;

  private subscription: Subscription;

  constructor(public vS: VotesService, public prS: PreloaderService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    // this.prS.startLoading();
    // this.subscription = this.vS.getFullList()
    this.subscription = this.vS.observableList
      // .finally(() => {
      //   console.log('finalize');
      //   this.prS.stopLoading()
      // })
      // .pipe(
      //   finalize(() => {
      //     // Do some work after complete...
      //     console.log('Finalize method executed before "Data available" (or error thrown)');
      //   })
      // )
      .subscribe(
        value => {
          this.prS.startLoading();
          console.log('subscription')
          this.items= value;
        },
        error => console.log(error),
        () => {
          console.log('finish');
          this.prS.stopLoading()
        }
      ).add(() => {
        console.log('add finish');
           //Called when operation is complete (both success and error)
      });
    // this.items = this.vS.getFullList();

    // console.log( this.items );
  }
  listVotes(){
    return this.vS.getFullList();
    
  }
  delIt(id){
    this.vS.deleteItem(id);
  }

  showPreloader(){
    console.log('showPreloader');
    this.prS.startLoading();
  }
  hidePreloader(){
    console.log('hidePreloader');
    this.prS.stopLoading();
  }

  firstload(){
    console.log('first');
    this.prS.startLoading();
  }
  lastload(){
    console.log('last');
    this.prS.stopLoading();
  }
}
