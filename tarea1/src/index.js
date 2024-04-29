const gallery= document.querySelector(".gallery");
console.log(gallery);
function galeria() {
  for (let i = 0; i <= 5; i++) {
  const divImage = document.createElement('div');
  divImage.classList.add(`image${i}`);
  gallery.appendChild(divImage);
  }
}
galeria()