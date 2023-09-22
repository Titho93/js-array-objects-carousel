const imageCont  = document.querySelector('.imageCont');
const btnNext = document.querySelector('.down');
const btnPrev = document.querySelector('.up');
let thumb = document.querySelector('.thumb');

btnPrev.classList.add('hide');

let counterImg = 0;

const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

images.forEach( (photo) => {
  console.log(photo)
  imageCont.innerHTML += `
  <div class="diapositive item hide">
  <img src="${photo.image}">
  <div class="text">
    <h5>${photo.title}</h5>
    <p>${photo.text}</p>
  </div>
  </div>`;
  thumb.innerHTML += `<img src="${photo.image}" class="object">`;
}) 

const imageCollect = document.getElementsByClassName('item');
const thumbCollect = document.getElementsByClassName('object');

imageCollect[counterImg].classList.remove('hide');
thumbCollect[counterImg].classList.add('active');


btnNext.addEventListener('click', function(){
  imageCollect[counterImg].classList.add('hide');
  thumbCollect[counterImg].classList.remove('active');
  counterImg++;
  imageCollect[counterImg].classList.remove('hide');
  thumbCollect[counterImg].classList.add('active');

  btnPrev.classList.remove('hide');

  if(counterImg === imageCollect.length - 1){
    btnNext.classList.add('hide');
  }

})

btnPrev.addEventListener('click', function(){
  imageCollect[counterImg].classList.add('hide');
  thumbCollect[counterImg].classList.remove('active');
  counterImg--;
  imageCollect[counterImg].classList.remove('hide');
  thumbCollect[counterImg].classList.add('active');

  btnNext.classList.remove('hide')

  if(counterImg === 0){
    btnPrev.classList.add('hide');
  }
})