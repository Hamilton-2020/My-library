function isTouching(tape, microscope){
    //DETECTING COLLISION
  if (tape.x - microscope.x < microscope.width/2 + tape.width/2
      && microscope.x - tape.x < microscope.width/2 + tape.width/2
      && tape.y - microscope.y < microscope.height/2 + tape.height/2
      && microscope.y - tape.y < microscope.height/2 + tape.height/2) {
   
        //yes, they are touching
       //True
       return true;

  }
  else {
    //No, they aren't touching
    //False
    return false;
    
  }
}

function bounceOff(book, bottle){
 
  if (book.x - bottle.x < bottle.width/2 + book.width/2
      && bottle.x - book.x < bottle.width/2 + book.width/2) {
    book.velocityX = book.velocityX*(-1);
    bottle.velocityX = bottle.velocityX*(-1); 
  }
  if (book.y - bottle.y < bottle.height/2 + book.height/2
  && bottle.y - book.y < bottle.height/2 + book.height/2){
    book.velocityY = book.velocityY*(-1);
    bottle.velocityY = bottle.velocityY*(-1); 

  }
}