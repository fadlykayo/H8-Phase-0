"use strict"

import Dice from "./dice.js"

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
      this.print_line(this.players[j]);
      this.advanced_player(this.players[j]);
      console.log(this.players[j].position);
      if (this.players[j].position >= this.length-3) {
        this.reset_board();
        console.log("Hurray");
      }
    }

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
    for (let j = 0; j < this.players.length; j++) {
      this.print_line(this.players[j]);
    }
  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
//
// var daa = new JSRacer();
