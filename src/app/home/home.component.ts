import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
title:any='home Page'
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  RouteFunction(type:any){
    this.route.navigateByUrl(`${type}`);

  }

}
