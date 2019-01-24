import { Component, OnInit } from '@angular/core';
import { HttpServiceProvider } from 'src/app/providers/http.service';
import { Container } from 'src/app/shared/models';

@Component({
  selector: 'app-book-a-shipment',
  templateUrl: './book-a-shipment.component.html',
  styleUrls: ['./book-a-shipment.component.scss']
})
export class BookAShipmentComponent implements OnInit {

  public list: Container[];
  constructor(
    private http: HttpServiceProvider
  ) {
    this.list = [];

  }

  ngOnInit() {
    this.getData();

  }


  getData() {
    this.http.getData().subscribe((response:any) => {
      this.list = response;
      console.log(response);
    });
  }


}
