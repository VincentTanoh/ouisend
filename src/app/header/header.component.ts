import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  // constructor(private fb:FormBuilder) { }
  constructor() { }

  ngOnInit() {
    // this.searchForm= this.fb.group({ //Creation d'une instance de formgroup
    //   depart:['2020-09-18'],                      //Creation d'une instance de formControl
    //   arrive: ['2020-09-18'],                     //Creation d'une instance de formControl
    //   poids:['25']                        //Creation d'une instance de formControl

    // });

    //Alternative
    this.searchForm= new FormGroup({
      depart: new FormControl(),
      arrive: new FormControl(),
      poids: new FormControl(),

    });
  }
  //Methode appelée lors du clic sur le boutton submit
  search(){
    console.log('Donnée du formulaire...',this.searchForm.value);
  }
}

