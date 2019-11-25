import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VotesService } from '../votes.service';
import { PreloaderService } from '../preloader.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription ,BehaviorSubject } from 'rxjs';

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
    this.subscription = this.vS.observableList
      .subscribe(item => {
    this.prS.startLoading();
        console.log('subscription')
        this.items= item;
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
