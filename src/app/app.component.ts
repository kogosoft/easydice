import { Component, ViewChild, OnInit } from '@angular/core';
import { DiceAnimatorComponent } from '../app/dice-animator/dice-animator.component';
import { Utils, Color } from '../app/Utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('dice') dice: DiceAnimatorComponent;
  color: number;

  ngOnInit() {
    this.color = Color.green;
  }

  Roll() {
    this.dice.Animate(12, Utils.GetRandomNumber(6));
  }
}
