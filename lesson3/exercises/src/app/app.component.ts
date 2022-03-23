import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  // put all the ship status into an array
  launchStatusArray: string[] = [
    "Space shuttle ready for takeoff!", 
    "Shuttle in flight.",
    "The shuttle has landed.",
    "Mission aborted."
  ]

  //put all background color into an array
  bgColorArray: string[] = [
    'green',
    "blue",
    "red",
    "orange"
  ]

  color: string = this.bgColorArray[0];
  height: number = 0;
  width: number = 0;
  takeOffEnabled: boolean = true;
  
  rightOn: boolean = true;
  leftOn: boolean = true;
  upOn: boolean = true;
  downOn: boolean = true;

  //change message to use the status string array
  message: string = this.launchStatusArray[0];
  
  readyForLaunch: boolean = false;


  confirmUser(rocketImage) {
    if ( confirm("Confirm that the shuttle is ready for takeoff.") ) {
      this.message = this.launchStatusArray[1];
      this.color = this.bgColorArray[1];
      let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
      rocketImage.style.bottom = movement; 
      this.height += 10000;
    }
  }

  landing(rocketImage) {
    alert("The shuttle is landing. Landing gear engaged.");
    this.message = this.launchStatusArray[2];
    this.color = this.bgColorArray[0];
    let movement = 0 + "px";
    rocketImage.style.bottom = movement; 
    rocketImage.style.left = movement;
    this.height = 0;
  }

  abortMission() {
    if ( confirm("Do you really want to abort the mission?") ) {
      this.message = this.launchStatusArray[3];
      this.color = this.bgColorArray[2];
      this.height = 0;
    }
  }

  moveRocket(rocketImage, direction) {
    if (direction === "right") {
      if (this.width <= 370000) {
        let movement = parseInt(rocketImage.style.left) + 10 + "px";
        rocketImage.style.left = movement; 
        this.width += 10000;
      }
      
    } else if (direction === "left") {
      if (this.width >= -10000) {
        let movement = parseInt(rocketImage.style.left) - 10 + "px";
        rocketImage.style.left = movement;
        this.width -= 10000;
      }

    } else if (direction === "up") {
      if (this.height <= 320000) {
        let movement = parseInt(rocketImage.style.bottom) + 10 + "px";
        rocketImage.style.bottom = movement;
        this.height += 10000;
      } 
      
    } else {
      if (this.height >= 0) {
        let movement = parseInt(rocketImage.style.bottom) - 10 + "px";
        rocketImage.style.bottom = movement; 
        this.height -= 10000;
      }
    }
  }

  borderCheck() {
    if (this.height >= 320000 || 
        this.height < 0 ||
        this.width >= 370000 ||
        this.width < 0
        ) {
      this.color = this.bgColorArray[3];
    } else {
      this.color = this.bgColorArray[1];
    }

    if (this.height >= 320000){
      this.upOn = false;
    } else {
      this.upOn = true;
    }

    if (this.height < 0) {
      this.downOn = false;
    } else {
      this.downOn = true;
    }
    
    if (this.width >= 370000) {
      this.rightOn = false;
    } else {
      this.rightOn = true;
    }
    
    if (this.width <= -10000) {
      this.leftOn = false; 
    } else {
      this.leftOn = true;
    }

  }
}

