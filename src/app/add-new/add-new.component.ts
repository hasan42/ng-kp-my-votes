import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnInit {

  showTab: string = 'form';

  constructor() { }

  ngOnInit() {
  }

  onClickTab(tab){
    this.showTab = tab;
  }

}
