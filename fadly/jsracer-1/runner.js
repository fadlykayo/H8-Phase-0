"use strict"

import JSRacer from "./js_racer"

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
let racer = new JSRacer(4, 15);
racer.reset_board();
for(let i= 0; i < 4; i++){
  racer.print_board();
  sleep(2000);
  racer.reset_board();
}
