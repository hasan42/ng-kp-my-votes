import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VotesService } from '../votes.service';
import { PreloaderService } from '../preloader.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription, BehaviorSubject } from 'rxjs';
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

  listItems = null;

  constructor(public vS: VotesService, public prS: PreloaderService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.vS.setFilterList(this.listItems)
    this.subscription = this.vS.observableItems.subscribe(
      value => {
        this.items = value;
      },
      error => console.log(error)
    );
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
