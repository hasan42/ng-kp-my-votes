import { Component, OnInit, Input } from '@angular/core';
import { VotesService } from '../votes.service';
import { faAngleUp, faAngleDown, faEye, faLowVision } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-series-episodes',
  templateUrl: './series-episodes.component.html',
  styleUrls: ['./series-episodes.component.scss']
})
export class SeriesEpisodesComponent implements OnInit {

  @Input() id: string;
  @Input() serial: any;

  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faEye = faEye;
  faLowVision = faLowVision;

  currentSeason: number = null;
  currentEpisode: number = null;

  selectSeason: number = null;
  selectEpisode: number = null;

  allSeason: number = null;
  allEpisode: number = null;

  showEditor: boolean = false;
  showDetail: boolean = false;

  constructor(public vS: VotesService) { }

  ngOnInit() {
    if(this.serial){
      if(this.serial.current){
        this.setCurrent();
      }else{
        this.currentSeason = 1;
        this.currentEpisode = 1;
      }
      this.allSeason = this.serial.episodes.length;
    }
  }

  getSeasonEpisode(curSeas:number): any[] {
    let findStr = "s"+curSeas+"e";
    let arr = this.serial.episodes;
    // console.log(arr)
    let countEp = 0;
    arr.map((el) => {
      if(el.indexOf(findStr) >= 0){
        countEp =Number(el.replace(findStr, ''))
      }
    });
    return Array(countEp);
  }

  setCurrent(){
    let cur = this.serial.current;
    let startE = cur.indexOf("e");
    this.currentSeason = cur.slice(1, startE);
    this.currentEpisode = cur.slice(startE + 1);
  }

  makeArray(n:number): any[]{
    // console.log(Array(n))
    return Array(n);
  }

  onChangeSeason(deviceValue:number) {
    this.currentSeason = deviceValue;
    this.setNewCurrent()
  }

  onChangeEpisode(deviceValue:number) {
    this.currentEpisode = deviceValue;
    this.setNewCurrent()
  }

  setNewCurrent(){
    let cur = "s" + this.currentSeason + "e" + this.currentEpisode;
    this.vS.selectCurrentEpisode(cur, this.id)
  }

  onClickShowDetail() {
    this.showDetail = !this.showDetail;
  }
  onClickShowEditor() {
    this.showEditor = !this.showEditor;
  }

  checkItFull(){
    let cur = this.serial.current;
    if(cur){
      let last = this.serial.episodes[this.serial.episodes.length - 1]
      if(cur === last){
        return 'full'
      }else{
        return cur
      }
    }else{
      return 'no select'
    }
    
  }

}
