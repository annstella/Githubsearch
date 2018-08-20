import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Search} from '../search';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
    searchInfo = new Search('');
    @Output() getName = new EventEmitter<Search>();

    searchFor(data) {
        this.getName.emit(data.value.find);
        console.log(data.value.find);
        data.reset();
    }


  constructor() { }

  ngOnInit() {
  }

}
