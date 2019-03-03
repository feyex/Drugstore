import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri =  'http://localhost:4000/business';
 

  constructor(private http: HttpClient, private router: Router ) { }

  addBusiness(drug_name, quantity, price) {
    const obj = {
      drug_name: drug_name,
      quantity: quantity,
      price: price
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Data added successfully'));
        this.router.navigate(['/business']);
        window.location.reload(true)
  }

  //to read data
  getBusinesses() {
    return this
           .http
           .get(`${this.uri}`);
  }

  //to edit fetched data
  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

  //to update data
  updateBusiness(drug_name, quantity, price, id) {

    const obj = {
        drug_name: drug_name,
        quantity: quantity,
        price: price
      };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
      window.location.reload(true) //forceful reload of page
  }

  deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }

  //to read data
  searchBusinesses() {
    return this
           .http
           .get(`${this.uri}/search`);
  }

}

