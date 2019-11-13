import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { VotesService } from '../votes.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-new-object',
  templateUrl: './add-new-object.component.html',
  styleUrls: ['./add-new-object.component.scss']
})
export class AddNewObjectComponent implements OnInit {

  faPlus = faPlus;

  form = {
    item: ''
  };

  validMsg: string = '';

  constructor(public vS: VotesService) { }

  ngOnInit() {
  }
  onSubmit(event) {
    try {
      let myobj = JSON.parse(this.form.item);

      if(Array.isArray(myobj)){
        myobj.forEach((item, idx) => {
          if(!item.id || item.id === ''){
            throw new Error("не заполнено id " + (idx+1) + " элемента");
          }

          if(!item.nameRus && !item.nameEng){
            throw new Error("не заполнено name " + (idx+1) + " элемента");
          }
        });
      }else{
        if(!myobj.id || myobj.id === ''){
          throw new Error("не заполнено id");
        }

        if(!myobj.nameRus && !myobj.nameEng){
          throw new Error("не заполнено name");
        }
      }
      this.vS.addNewItem(myobj)
      this.form.item = ''
      this.validMsg = 'saved!'
    }catch(error){
      this.validMsg = 'error: ' + error.message
    }
  }

}
