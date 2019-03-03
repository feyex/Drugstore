import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      drug_name: ['', Validators.required ],
      quantity: ['', Validators.required ],
      price: ['', Validators.required ]
    });
  }

  addBusiness(drug_name, quantity, price) {
    this.bs.addBusiness(drug_name, quantity, price);
  }

  ngOnInit() {
  }

}