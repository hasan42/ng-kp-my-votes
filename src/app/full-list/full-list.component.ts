import { Component, OnInit } from '@angular/core';
import { VotesService } from '../votes.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss']
})
export class FullListComponent implements OnInit {

  faHistory = faHistory;
  faListOl = faListOl;
  faTimes = faTimes;

  list : any;

  constructor(public vS: VotesService) { }

  ngOnInit() {
    // console.log()
  }
  listVotes(){
    return this.vS.getFullList();
  }
  delIt(id){
    this.vS.deleteItem(id);
  }

}
