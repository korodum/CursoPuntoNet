let images ;
const route = '../style/media';
const gallery = document.getElementById('gallery');
/*async function galeria (){
  try {
    const res = await fetch('http://localhost:3000');
    await res.json();
    return console.log(res)
  }
}*/

async function galeria (){

    const res = await fetch('http://localhost:3000/');
    images = await res.json();
    return console.log(images)

}

console.log(images);
console.log('hola');