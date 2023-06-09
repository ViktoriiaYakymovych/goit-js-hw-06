const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const listEl = document.querySelector('.gallery');
// listEl.style.display = 'flex';
// listEl.style.gap = '10px';

// const makeGaleryItemEl = ({ url, alt }) => {
//   const galleryListEl = `<li class="item"> <img class="img" src="${url}" alt="${alt}" width="260" height="200"></li>`;
//   listEl.insertAdjacentHTML("beforeend", galleryListEl);
// };

// images.map(makeGaleryItemEl);

// console.log(listEl);


const listEl = document.querySelector('.gallery');
listEl.style.display = 'flex';
listEl.style.gap = '10px';

const makeGaleryItemEl = ({ url, alt }) =>
  `<li class="item"><img class="img" src="${url}" alt="${alt}" width="260" height="200"></li>`;

const galleryListEl = images.map(makeGaleryItemEl).join('');
listEl.insertAdjacentHTML('beforeend', galleryListEl);