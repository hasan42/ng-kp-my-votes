import { Component, OnInit } from '@angular/core';
import { VotesService } from '../votes.service';
import { PreloaderService } from '../preloader.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';

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

  constructor(public vS: VotesService, public prS: PreloaderService) { }

  ngOnInit() {
    this.prS.startLoading();
  }
  listVotes(){
    return this.vS.getFilterList(this.listItems);
  }

  changeOn(text){
    this.listItems = text
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
