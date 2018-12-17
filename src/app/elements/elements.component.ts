import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {

  public elements = [];
  constructor() { }

  ngOnInit() {
    this.elements = [
      {'atomicNumber': 1, 'symbol': 'H', 'name': 'Hydrogen', 'atomicMass': '1.00794(4)'},
      {'atomicNumber': 2, 'symbol': 'He', 'name': 'Helium', 'atomicMass': '4.002602(2)'},
      {'atomicNumber': 3, 'symbol': 'Li', 'name': 'Lithium', 'atomicMass': '6.941(2)'},
      {'atomicNumber': 4, 'symbol': 'Be', 'name': 'Beryllium', 'atomicMass': '9.012182(3)'},
      {'atomicNumber': 5, 'symbol': 'B', 'name': 'Boron', 'atomicMass': '10.811(7)'},
      {'atomicNumber': 6, 'symbol': 'C', 'name': 'Carbon', 'atomicMass': '12.0107(8)'},
      {'atomicNumber': 7, 'symbol': 'N', 'name': 'Nitrogen', 'atomicMass': '14.0067(2)'},
      {'atomicNumber': 8, 'symbol': 'O', 'name': 'Oxygen', 'atomicMass': '15.9994(3)'},
      {'atomicNumber': 9, 'symbol': 'F', 'name': 'Fluorine', 'atomicMass': '18.9984032(5)'},
      {'atomicNumber': 10, 'symbol': 'Ne', 'name': 'Neon', 'atomicMass': '20.1797(6)'}
    ];
  }

}
