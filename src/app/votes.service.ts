import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  linkJson = '/assets/films-list.json'
  list : any = []
  observableList

  constructor(private http: HttpClient) {
    this.observableList = new BehaviorSubject<any[]>(this.list);
  }


  getFullList(){
        console.log('getFullList()')
    // console.log( this.list );
    return this.list
  }

  getFilterList(filter){
    let filmArr;

    if(filter === 'sequel')
      filmArr = this.list.filter(item => item.sequel && item.sequel !== false);
    if(filter === 'sequel-full'){
      filmArr = this.list.filter(item => item.sequel && item.sequel !== false);
      filmArr = filmArr.filter(item => item.sequel.items.every( (v)=>this.getWatched(v.id) ))
    }
    if(filter === 'sequel-not-full'){
      filmArr = this.list.filter(item => item.sequel && item.sequel !== false);
      filmArr = filmArr.filter(item => item.sequel.items.some( (v)=>!this.getWatched(v.id) ))
    }
    if(filter === 'series')
      filmArr = this.list.filter(item => item.serial);
    if(filter === 'series-full'){
      filmArr = this.list.filter(item => item.serial);
      filmArr = filmArr.filter(item => item.serial.current === item.serial.episodes[item.serial.episodes.length - 1])
    }
    if(filter === 'series-not-full'){
      filmArr = this.list.filter(item => item.serial);
      filmArr = filmArr.filter(item => !item.serial.current || item.serial.current !== item.serial.episodes[item.serial.episodes.length - 1])
    }

    return filmArr
  }

  getWatched(id){
    return this.list.find(x => x.id === id);
  }

  loadList() {
    this.http.get(this.linkJson).subscribe((value:any)=>{
        console.log('loadList()')
      this.list = value;
      this.observableList.next(this.list);
      // this.findDuplicate()
    })
    // fetch(this.linkJson).then(
    //     (response) => {
    //       return response.json()
    //     }
    //   ).then(
    //     (json) => {
    //       this.list = json;
    //     }
    //   // ).finally(
    //   //   ()=>{
    //   //     this.findDuplicate()
    //   //   }
    //   );
  }

  saveJson() {
    let data = new FormData();
    data.append('json', JSON.stringify(this.list));

    this.http.post('json.php', data,{responseType: 'text'}).subscribe((value : any) =>{
      // console.log(value)
      this.loadList()
    },
    error => {
      console.log(error)
    });
  }

  addNewItem(item){
    // console.log('addNewItem');
    let filmArray = this.list;

    if(Array.isArray(item)){
      filmArray = item.concat(this.list);
    }else{
      filmArray.unshift(item);
    }

    this.list = filmArray;
    this.saveJson();
  }

  deleteItem(id){
    // console.log('deleteItem');
    let filmArray = this.list;
    let el = filmArray.findIndex(item => item.id === id);
    filmArray.splice(el, 1);
    this.list = filmArray;
    this.saveJson();
  }

  findDuplicate(){
    // console.log('findDuplicate');
    let filmArray = this.list;
    let unique = filmArray.filter((set => item => !set.has(item.id) && set.add(item.id))(new Set));
    // console.log(filmArray.length, unique.length);
    if(filmArray.length === unique.length)
      return false;

    this.list = unique;
    this.saveJson();
  }

  selectCurrentEpisode(current, id){
    // console.log('selectCurrentEpisode');
    let filmArray = this.list;
    filmArray.map((item)=>{
      if(item.id === id){
        item.serial.current = current;
      }
    });
    this.list = filmArray;
    this.saveJson();
  }

}
