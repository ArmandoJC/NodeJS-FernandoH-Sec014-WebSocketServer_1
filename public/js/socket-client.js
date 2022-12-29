// Referencias del html

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');


const socket = io(); // Esto expone la librería ./socket.io/socket.io.js    


socket.on('connect', () => {
  console.log('Conectado cliente');

  lblOffline.style.display = 'none';
  lblOnline.style.display  = '';
  
});


socket.on('disconnect', () => {
  console.log('Desconectado del servidor!!!!');
  lblOnline.style.display  = 'none';
  lblOffline.style.display = '';
  
});