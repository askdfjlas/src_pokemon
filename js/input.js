function keydown(evt) {
  switch(evt.keyCode) {
    case 37:
      ahri.inputs[0] = true;
      break;
    case 38:
      ahri.inputs[1] = true;
      break;
    case 39:
      ahri.inputs[2] = true;
      break;
    case 40:
      ahri.inputs[3] = true;
      break;

    // ~~~~~~~~~~~~~~~~~~~~~
    case 65:
      ahri.inputs[4] = true;
      break;
    case 68:
      ahri.inputs[5] = true;
      break;
    case 87:
      ahri.inputs[6] = true;
      break;
    case 83:
      ahri.inputs[7] = true;
      break;
  }
}

function keyup(evt) {
  switch(evt.keyCode) {
    case 37:
      ahri.inputs[0] = false;
      break;
    case 38:
      ahri.inputs[1] = false;
      break;
    case 39:
      ahri.inputs[2] = false;
      break;
    case 40:
      ahri.inputs[3] = false;
      break;

    // ~~~~~~~~~~~~~~~~~~~~~
    case 65:
      ahri.inputs[4] = false;
      break;
    case 68:
      ahri.inputs[5] = false;
      break;
    case 87:
      ahri.inputs[6] = false;
      break;
    case 83:
      ahri.inputs[7] = false;
      break;
  }
}

document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
