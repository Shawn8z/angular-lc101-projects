import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'joke-button',
  templateUrl: './joke-button.component.html',
  styleUrls: ['./joke-button.component.css']
})
export class JokeButtonComponent implements OnInit {
  active: boolean = true;
  location: string = "left";
  posShiftCount: number = 0;
  mockText: boolean = false;
  usuck: boolean = false;
  lolFace: boolean = false;
  derpFace: boolean = false;
  defeat: boolean = false;

  constructor() { }
  ngOnInit() { }


  shiftLocation(location: string) {
    let posArr = ["left", "center", "right"];
    let openPos = posArr.filter(item => item !== location);
    let randomSeed = Math.round(Math.random()) > 0.5 ? 1 : 0;
    if (this.posShiftCount <= 41) {
      this.location = openPos[randomSeed];
      this.counter();
    }
  }

  counter() {
    this.posShiftCount += 1;
    if (this.posShiftCount > 10) {
      this.mockText = true;
    }

    if (this.posShiftCount > 20 && this.posShiftCount <= 31) {
      this.mockText = false;
      this.usuck = true;
    } 
    
    if (this.posShiftCount > 31) {
      this.mockText = false;
      this.lolFace = true;
    }

    if (this.posShiftCount > 41) {
      this.usuck = false;
      this.lolFace = false;
      this.derpFace = true;
    }
  }
}
