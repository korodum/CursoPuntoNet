//import {route, gallery, files} from './files.js';
const gallery = document.getElementById('gallery');+
async function galeria {
  try {
    await route = fetch('/route');

  }
}
files.forEach((file) => {
  const img = document.createElement('img');
  img.src = `${route}/${file}`;
  gallery.appendChild(img);
})