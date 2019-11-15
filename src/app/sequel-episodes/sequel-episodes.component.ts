import { Component, OnInit, Input } from '@angular/core';
import { VotesService } from '../votes.service';

@Component({
  selector: 'app-sequel-episodes',
  templateUrl: './sequel-episodes.component.html',
  styleUrls: ['./sequel-episodes.component.sass']
})
export class SequelEpisodesComponent implements OnInit {

  @Input() id: string;
  @Input() items: any;

  active: boolean = false;

  constructor(public vS: VotesService) { }

  ngOnInit() {
  }

  itWatched(id){
    return this.vS.getWatched(id)
  }

  onClickShowList(){
    this.active = !this.active;
  }

}
