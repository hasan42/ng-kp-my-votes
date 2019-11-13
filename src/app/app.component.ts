import { Component, OnInit } from '@angular/core';
import { VotesService } from './votes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-kp-my-votes';

  constructor( public vS: VotesService ) {
    this.vS.loadList()
  }
  ngOnInit() {
    // this.vS.loadList()
  }
}
