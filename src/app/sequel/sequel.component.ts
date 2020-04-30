import { Component, OnInit } from '@angular/core';
import { VotesService } from '../votes.service';
import { PreloaderService } from '../preloader.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-sequel',
  templateUrl: './sequel.component.html',
  styleUrls: ['./sequel.component.scss']
})
export class SequelComponent implements OnInit {

  faHistory = faHistory;
  faListOl = faListOl;
  faTimes = faTimes;

  items: any;
  private subscription: Subscription;

  listItems = 'sequel';

  constructor(public vS: VotesService, public prS: PreloaderService) { }

  ngOnInit() {
    this.vS.setFilterList(this.listItems)
    this.subscription = this.vS.observableItems.subscribe(
      value => {
        this.items = value;
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

  itWatched(id){
  	return this.vS.getWatched(id)
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
