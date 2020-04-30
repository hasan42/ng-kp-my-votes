import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { PreloaderService } from './preloader.service';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  isDev: boolean = true;

  fullListItems: any = []
  items: any = [];
  observableItems = new BehaviorSubject<any[]>(this.items);
  items$ = this.observableItems.asObservable();

  linkJson = 'films-list.json'
  linkPhp = 'json.php'

  constructor(private http: HttpClient) {
    if(this.isDev){
      this.linkJson = 'assets/films-list.json'
    }
    this.loadList();
  }


  // getFullList(): Observable<any[]>{
  //   let arr = of(this.list);
  //       console.log('getFullList()')
  //   console.log( arr );
  //   return arr
  // }

  setFilterList(filter){
    console.log('setFilterList',filter);
    let filmArr;

    switch (filter) {
      case "sequel":
        filmArr = this.fullListItems.filter(item => item.sequel && item.sequel !== false);
        break;
      case "sequel-full":
        filmArr = this.fullListItems.filter(item => item.sequel && item.sequel !== false);
        filmArr = filmArr.filter(item => item.sequel.items.every( (v)=>this.getWatched(v.id) ))
        break;
      case "sequel-not-full":
        filmArr = this.fullListItems.filter(item => item.sequel && item.sequel !== false);
        filmArr = filmArr.filter(item => item.sequel.items.some( (v)=>!this.getWatched(v.id) ))
        break;
      case "series":
        filmArr = this.fullListItems.filter(item => item.serial);
        break;
      case "series-full":
        filmArr = this.fullListItems.filter(item => item.serial);
        filmArr = filmArr.filter(item => item.serial.current === item.serial.episodes[item.serial.episodes.length - 1])
        break;
      case "series-not-full":
        filmArr = this.fullListItems.filter(item => item.serial);
        filmArr = filmArr.filter(item => !item.serial.current || item.serial.current !== item.serial.episodes[item.serial.episodes.length - 1])
        break;
      default:
        filmArr = this.fullListItems
        break;
    }

    this.items = filmArr;
    console.log(this.items);
    this.observableItems.next(this.items);
  }

  getWatched(id){
    return this.items.find(x => x.id === id);
  }

  loadList() {
    this.http.get(this.linkJson).subscribe((value:any)=>{
        console.log('loadList()')
      this.fullListItems = value;
      this.items = value;
      this.observableItems.next(this.items);
      // this.findDuplicate()
    })
  }

  saveJson() {
    if(this.isDev){
      return;
    }
    let data = new FormData();
    data.append('json', JSON.stringify(this.items));

    this.http.post(this.linkPhp, data,{responseType: 'text'}).subscribe((value : any) =>{
      // console.log(value)
      this.loadList()
    },
    error => {
      console.log(error)
    });
  }

  addNewItem(item){
    // console.log('addNewItem');
    let filmArray = this.fullListItems;

    if(Array.isArray(item)){
      filmArray = item.concat(this.items);
    }else{
      filmArray.unshift(item);
    }

    this.fullListItems = filmArray;
    this.saveJson();
  }

  deleteItem(id){
    // console.log('deleteItem');
    let filmArray = this.fullListItems;
    let el = filmArray.findIndex(item => item.id === id);
    filmArray.splice(el, 1);
    this.fullListItems = filmArray;
    this.saveJson();
  }

  findDuplicate(){
    // console.log('findDuplicate');
    let filmArray = this.fullListItems;
    let unique = filmArray.filter((set => item => !set.has(item.id) && set.add(item.id))(new Set));
    // console.log(filmArray.length, unique.length);
    if(filmArray.length === unique.length)
      return false;

    this.fullListItems = unique;
    this.saveJson();
  }

  selectCurrentEpisode(current, id){
    // console.log('selectCurrentEpisode');
    let filmArray = this.fullListItems;
    filmArray.map((item)=>{
      if(item.id === id){
        item.serial.current = current;
      }
    });
    this.fullListItems = filmArray;
    this.saveJson();
  }

}
