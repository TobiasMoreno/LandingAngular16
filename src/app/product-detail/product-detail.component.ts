import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  producto: string = '';
  color: string = '';

  constructor(private _route: ActivatedRoute) {}
  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.producto = params['productId'];
      this.color = params['category'];
    });
  }
}
