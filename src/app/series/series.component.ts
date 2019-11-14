import { Component, OnInit } from '@angular/core';
import { VotesService } from '../votes.service';
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

  constructor(public vS: VotesService) { }

  ngOnInit() {
  }
  listVotes(){
    return this.vS.getFilterList(this.listItems);
  }

  changeOn(text){
    this.listItems = text
  }

}
