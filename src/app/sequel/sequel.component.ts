import { Component, OnInit,
         DoCheck,
         OnChanges,
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewChecked, 
        AfterViewInit } from '@angular/core';
import { VotesService } from '../votes.service';
import { faHistory, faListOl, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sequel',
  templateUrl: './sequel.component.html',
  styleUrls: ['./sequel.component.scss']
})
export class SequelComponent implements OnInit,
         DoCheck,
         OnChanges,
        AfterContentInit, 
        AfterContentChecked, 
        AfterViewChecked, 
        AfterViewInit {

  faHistory = faHistory;
  faListOl = faListOl;
  faTimes = faTimes;

  listItems = 'sequel';

  count = 0;

  constructor(public vS: VotesService) { }

  ngOnInit() {
    this.log(`ngOnInit`);
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
  delIt(id){
    this.vS.deleteItem(id);
  }

  ngOnChanges() {
       
      this.log(`OnChanges`);
    }
    ngDoCheck() {
       
      this.log(`ngDoCheck`);
    }
    ngAfterViewInit() {
       
      this.log(`ngAfterViewInit`);
    }
    ngAfterViewChecked() {
       
      this.log(`ngAfterViewChecked`);
    }
    ngAfterContentInit() {
       
      this.log(`ngAfterContentInit`);
    }
    ngAfterContentChecked() {
       
      this.log(`ngAfterContentChecked`);
    }
 
    private log(msg: string) {
        console.log("sequel " + this.count + ". " + msg);
        this.count++;
    }

}
