import { Component, OnInit } from '@angular/core';
import { VotesService } from '../votes.service';
import { PreloaderService } from '../preloader.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  faHistory = faHistory;
  faListOl = faListOl;
  faTimes = faTimes;

  listItems = 'series';
  last: any;
  
  items: any;
  private subscription: Subscription;

  constructor(public vS: VotesService, public prS: PreloaderService) { }

  ngOnInit() {
    this.vS.setFilterList(this.listItems);
    console.log('123',this.listItems,this.vS.setFilterList(this.listItems));
    this.subscription = this.vS.observableItems.subscribe(
      value => {
        this.items = value;
    console.log(this.items);
      },
      error => console.log(error)
    );
    this.prS.startLoading();
  }
  // listVotes(){
  //   return this.vS.getFilterList(this.listItems);
  // }

  changeOn(text){
    this.listItems = text
    this.vS.setFilterList(this.listItems)
  }
  delIt(id){
    this.vS.deleteItem(id);
  }

  showPreloader(){
    this.prS.startLoading();
  }
  hidePreloader(){
    this.prS.stopLoading();
  }

}
