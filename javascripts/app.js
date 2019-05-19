var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["0,0"]
}

console.log(rover.direction);

function turnLeft(){
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;  
    case "E":
      rover.direction = "N";
      break;
    default: "N"
  }
  console.log("Rover is now facing;", rover.direction);
}

function turnRight(){
  switch(rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;  
    case "W":
      rover.direction = "N";
      break;
    default: "N"  
  }
  console.log("Rover is now facing;", rover.direction);
}

function moveForward(){
  switch(rover.direction) {
    case "N":
      if (rover.y<10) {
        rover.y += 1; 
        rover.travelLog.push(""+rover.x+","+""+rover.y);
      } else {
        console.log("You reached the limit of this direction");
      }
      break;
    case "S":
      if (rover.y > 0) {
        rover.y -= 1; 
        rover.travelLog.push(""+rover.x+","+""+rover.y);
      } else {
        console.log("You reached the limit of this direction");
      }
      break;  
    case "E":
      if (rover.x < 10) {
        rover.x += 1; 
        rover.travelLog.push(""+rover.x+","+""+rover.y);
      } else {
        console.log("You reached the limit of this direction");
      }
      break;
    case "W":
      if (rover.x > 0) {
        rover.x -= 1; 
        rover.travelLog.push(""+rover.x+","+""+rover.y);
      } else {
        console.log("You reached the limit of this direction");
      }
      break;
    default: "N"
  }
      // code block
  console.log(rover.travelLog)
}

  function userInput(commands) {
    for (var i = 0; i < (commands.length -1); i++) {
      switch(commands[i]) {
        case "r":
          turnRight();
          break;
        case "l":
          turnLeft();
          break;
        case "f":
          moveForward();
          break;
      }
    } 
  }
