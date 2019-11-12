import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  values: string[] = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  xTurn: boolean = true;
  temp: string = 'X';
  winner: string = '';
  status: string = 'Next is: ' + this.temp;
  
  constructor() { }

  ngOnInit() {
    
  }

  onPlay(id: number) {

    if(this.winner !== '') return;
    //return if the square is not empty
    if(this.values[id] !== ' ') return;

    this.values[id] = this.xTurn ? 'X' : 'O';
    this.xTurn = !this.xTurn;
    
    this.caclulateWinner();
    this.calculateStatus();
  }


  caclulateWinner() {
    const states: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i = 0; i < 8; i++) {
      let a = states[i][0];
      let b = states[i][1];
      let c = states[i][2];
      
      if(this.values[a] !== " " && this.values[a] === this.values[b] && this.values[a] === this.values[c]) {
        this.winner = this.values[a];
      }
    }//end of for
  }//end of function


  calculateStatus() {
    if(this.winner !== '') {
      this.status = this.winner + ' is the winner!';
      return;
    }

    this.temp = this.xTurn ? 'X' : 'O';
    this.status = 'Next is: ' + this.temp;
  }

  onReset() {
    this.values = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  this.xTurn = true;
  this.temp = 'X';
  this.winner = '';
  this.status = 'Next is: ' + this.temp;
  }

}
