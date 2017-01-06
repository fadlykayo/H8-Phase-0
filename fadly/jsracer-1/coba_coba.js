"use strict"

//import Dice from "./dice.js"

class JSRacer {
  constructor(players, length) {
    this.players = this.playerName(players);
    this.length = length;
  }

  playerName(count){
    let alphabet = ['a','b','c','d','e','f','g','h','i','j'];
    let arr = []
    for(let i= 0; i < count; i++){
      let player = {name: alphabet[i], position: 0}
      arr.push(player)
    }
    return arr
  }

  print_board() {
    for (let j = 0; j < this.players.length; j++) {
      // let newRow = [];
      // for (let i = 0; i <= this.length; i++) {
      //   if (i < this.length) {
      //     newRow.push("| ");
      //   }
      //   else {
      //     newRow.push("|");
      //   }
      // }
      // this.board.push(newRow);
      // newRow[0] = this.playerName[j];
      console.log(this.print_line(this.players[j]));
      // this.advanced_player(this.players[j]);
    }

    // advanced_player();
    //return this.board;
  }

  print_line(player) {
    let arr = []
    for(let i= 0; i < this.length; i++){
      if(player.position == i){
        arr.push(player.name);
      }else{
        arr.push(" ");
      }
    }
    console.log(arr.join("|"));
  }

  advanced_player(player) {
    player.position += Dice.roll();
  }

  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

var player = new JSRacer (4,10)

console.log(player.playerName(4));
console.log(player.print_board());


//export default JSRacer
