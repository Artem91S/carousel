let images = Array.from(document.querySelectorAll('.images'));
console.log(images);

let mainPhoto = document.querySelector('.main-photo');

function showPhoto(e){
    let image =e.target;
    mainPhoto.src =image.src;
}
images.forEach( function (elem) {
    elem.addEventListener('click',showPhoto )
})

