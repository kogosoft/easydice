import { Component, Input, OnInit } from '@angular/core';
import { Utils } from '../Utils';

@Component({
  selector: 'app-dice-animator',
  templateUrl: './dice-animator.component.html',
  styleUrls: ['./dice-animator.component.css']
})
export class DiceAnimatorComponent implements OnInit {
  @Input() color: number;
  private interval = 200;
  private diff = 64;
  backgroundPosX = '0px';
  backgroundPosY = '0px';

  ngOnInit() {
    this.backgroundPosY = this.color + 'px';
  }

  async Animate(occurances: number, end: number) {
    const showNums = this.GetRandomNumbers(occurances);

    let i = 0;
    const interval = setInterval(() => {
      this.backgroundPosX = (this.diff * showNums[i]).toString() + 'px';
      console.log(this.backgroundPosX);
      i++;
      if (i === showNums.length && interval) {
        this.backgroundPosX = (384 - this.diff * (end - 1)).toString() + 'px';
        console.log(end.toString() + ' ' + this.backgroundPosY);
        clearInterval(interval);
      }
    }, this.interval);
  }

  private GetRandomNumbers(occurances: number): Array<number> {
    var retVal: Array<number> = [];
    for (let i = 0; i < occurances; i++) {
      retVal.push(Utils.GetRandomNumber(6));
    }
    return retVal;
  }
}
