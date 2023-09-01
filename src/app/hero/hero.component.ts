import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  fullName: string = '';
  title: string = '';
  summary: string = '';
  location: string = '';
  phone: string = '';
  email: string = '';
  frame = [[1,1,2,2],[1,1,2,2],[4,4,4,5]];
  rectSize = 400;
  useFrameFill = false;
  gap = 2;
  align = 'justify' as const;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fullName = this.dataService.getFullName();
    this.title = this.dataService.getTitle();
    this.summary = this.dataService.getSummary();
    this.location = this.dataService.getLocation();
    this.phone = this.dataService.getPhone();
    this.email = this.dataService.getEmail();
  }


}
