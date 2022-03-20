import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ["Cook the rice",'Buy groceries','Empty dishwasher'];
   finishedChores = [ "Sweep the floor" , 'Complete LaunchCode prep work'];

   targetImage = 'https://images.bizibl.com/sites/default/files/target-350.gif';

   constructor() { }

   ngOnInit() {
   }

}
