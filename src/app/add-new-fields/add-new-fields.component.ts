import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { VotesService } from '../votes.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-new-fields',
  templateUrl: './add-new-fields.component.html',
  styleUrls: ['./add-new-fields.component.scss']
})
export class AddNewFieldsComponent implements OnInit {

  faPlus = faPlus;

  form = {
    id: null,
    link: '',
    nameRus: '',
    nameEng: '',
    vote: null,
  };

  validMsg: string = '';

  myForm : FormGroup;

  constructor(public vS: VotesService) {
  }

  ngOnInit() {
  }

  onSubmit(event) {
    try {
      if(!this.form.id || this.form.id === ''){
        throw new Error("не заполнено id");
      }

      if(!this.form.nameRus && !this.form.nameEng){
        throw new Error("не заполнено name");
      }

      this.vS.addNewItem(this.form)
      this.form = {
        id: null,
        link: '',
        nameRus: '',
        nameEng: '',
        vote: null,
      };
      this.validMsg = 'saved!'
    }catch(error){
      this.validMsg = 'error: ' + error.message
    }
  }

}
