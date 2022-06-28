import { Component, OnInit } from '@angular/core';
import { DOGS } from '../dogs';
import { DOGSService } from '../dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DOGSComponent implements OnInit {

  dogs?: DOGS;

  constructor(private dogsService: DOGSService) { }

  ngOnInit(): void {
  }

  getDogs(): void {
    this.dogsService.getDogs().subscribe((DOGS) => {
      this.dogs = DOGS;
    })
  }

}
