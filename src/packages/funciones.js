import react from 'react';

export function hola(texto) {
  console.log('Hola ' + texto);
}

export function nmcliStatus(status) {
  var nmcStatus = [];

  console.log('status 0: ' + status[0]);
  console.log('status 1: ' + status[1]);
  console.log('status 2: ' + status[2]);
  console.log('status 3: ' + status[3]);

  for (var i = 0; i <= status.length - 1; i++) {
    const myArray = status[i].split(':');
    nmcStatus.push({
      device: myArray[0],
      type: myArray[1],
      state: myArray[2],
      connection: myArray[3],
    });

    console.log('Device: ' + nmcStatus[i].device);
    console.log('Type: ' + nmcStatus[i].type);
    console.log('Status: ' + nmcStatus[i].state);
    console.log('Connection: ' + nmcStatus[i].connection);
  }
  return nmcStatus;
}
