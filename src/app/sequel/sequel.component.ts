import { Component, OnInit } from '@angular/core';
import { VotesService } from '../votes.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sequel',
  templateUrl: './sequel.component.html',
  styleUrls: ['./sequel.component.scss']
})
export class SequelComponent implements OnInit {

  faHistory = faHistory;
  faListOl = faListOl;
  faTimes = faTimes;

  listItems = 'sequel';

  constructor(public vS: VotesService) { }

  ngOnInit() {
  }
  listVotes(){
    return this.vS.getFilterList(this.listItems);
  }

  changeOn(text){
    this.listItems = text
  }

  itWatched(id){
  	return this.vS.getWatched(id)
  }

}
