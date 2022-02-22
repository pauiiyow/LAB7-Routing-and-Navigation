import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  prods = [
    {prodName: 'Huntington in Cadet', prodDesc: 'With its proportioned angles and rugged appeal, Huntington is a trooper made for everyday wear'},
    {prodName: 'Jett in Skin', prodDesc: 'Consider Jett a classic for its precise round shape. Unflustered and easy'},
    {prodName: 'Lukas in Moss', prodDesc: 'The reinvented pilot frame. The Lukas is designed without a nose bridge and features ultra light metal rims and a top bar. It’s your favorite classic but better.'},
    {prodName: 'Dallas in Beech', prodDesc: 'Scaled-up ovals with thick-rimmed detailing, Dallas is a roomy frame that flatters most faces.'},
    {prodName: 'Anti Radiation Taylor in Charcoal', prodDesc: 'Certified by Intertek, leading total quality assurance provider, Equipped with UV 420 for sun and screen protection'},
    {prodName: 'Anti Radiation Nigel', prodDesc: 'Certified by Intertek, leading total quality assurance provider, Equipped with UV 420 for sun and screen protection'},
    {prodName: 'Anti Radiation Jett in Plum', prodDesc: 'Certified by Intertek, leading total quality assurance provider, Equipped with UV 420 for sun and screen protection'},
    {prodName: 'Anti Radiation Rocko in Charcoal', prodDesc: 'Certified by Intertek, leading total quality assurance provider, Equipped with UV 420 for sun and screen protection'},
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
