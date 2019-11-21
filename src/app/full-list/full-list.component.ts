import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { VotesService } from '../votes.service';
import { PreloaderService } from '../preloader.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss']
})
export class FullListComponent implements OnInit{

  faHistory = faHistory;
  faListOl = faListOl;
  faTimes = faTimes;

  constructor(public vS: VotesService, public prS: PreloaderService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.prS.startLoading();
  }
  listVotes(){
    return this.vS.getFullList();
    
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
