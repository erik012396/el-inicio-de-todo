const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se indica que es una clase con .
const $b = document.querySelector('.blog'); //Se indica que es una clase con .
const $l = document.querySelector('.location'); //Se agrega la clase en el html


function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //Se agrega $ a n 
}

async function displayUser(username) { //se agrega async 
  $n.textContent = 'cargando...';
  try { //Se agrega try-catch
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  console.log(data);
  $n.textContent = data.name || 'No disponible'; //Se ponen como variables no como strings
  $b.textContent = data.blog || 'No disponible';
  $l.textContent = data.location || 'No disponible';
  } catch (error) { //
  handleError(error);
  }
}

displayUser('stolinski');