import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotesService {

  linkJson = '/assets/films-list.json'

  constructor(private http: HttpClient) { }

  list : any = []

  getFullList(){
    return this.list
  }

  getFilterList(filter){
    let filmArr;

    if(filter === 'sequel')
      filmArr = this.list.filter(item => item.sequel && item.sequel !== false);
    if(filter === 'series')
      filmArr = this.list.filter(item => item.serial);

    return filmArr
  }

  getWatched(id){
    return this.list.find(x => x.id === id);
  }

  loadList() {
    fetch(this.linkJson).then(
        (response) => {
          return response.json()
        }
      ).then(
        (json) => {
          this.list = json;
        }
      );
  }

  saveJson() {
    let data = new FormData();
    data.append('json', JSON.stringify(this.list));

    this.http.post('json.php', data,{responseType: 'text'}).subscribe((value : any) =>{
      this.loadList()
    },
    error => {
      console.log(error)
    });
  }

  addNewItem(item){
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
    let filmArray = this.list;
    let el = filmArray.findIndex(item => item.id === id);
    filmArray.splice(el, 1);
    this.list = filmArray;
    this.saveJson();
  }

  findDuplicate(){
    let filmArray = this.list;
    let unique = filmArray.filter((set => item => !set.has(item.id) && set.add(item.id))(new Set));

    this.list = unique;
    this.saveJson();
  }

  selectCurrentEpisode(current, id){
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
