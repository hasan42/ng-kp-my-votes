import { Component, OnInit } from '@angular/core';
import { VotesService } from './votes.service';
import { Router } from '@angular/router';
import { PreloaderService } from './preloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-kp-my-votes';
  count = 0;

  constructor( public vS: VotesService, private router: Router, public prS: PreloaderService) {
  }
  ngOnInit() {
  	this.prS.startLoading();
  }
}
