const galleryItems = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const gallery = document.querySelector('.js-gallery');

const modalNode = document.querySelector('.lightbox');

const modalImg = document.querySelector('.lightbox__image');

const modalCloseBtn = document.querySelector('.lightbox__button');

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    modalNode.classList.remove('is-open');
    modalImg.src = '';
  }
  let itemIndex;
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
    itemIndex = galleryItems.findIndex(item => item.original === modalImg.src);
  if (e.key === 'ArrowLeft') {
    if (itemIndex === 0) {
      modalImg.src = galleryItems[galleryItems.length - 1].original;
      modalImg.alt = galleryItems[galleryItems.length - 1].description;
    } else {
      modalImg.src = galleryItems[itemIndex - 1].original;
      modalImg.alt = galleryItems[itemIndex - 1].description;
    }
  }
  if (e.key === 'ArrowRight') {
    if (itemIndex + 1 >= galleryItems.length) {
      modalImg.src = galleryItems[0].original;
      modalImg.alt = galleryItems[0].description;
    } else {
      modalImg.src = galleryItems[itemIndex + 1].original;
      modalImg.alt = galleryItems[itemIndex + 1].description;
    }
  }
});

modalCloseBtn.addEventListener('click', e => {
  modalNode.classList.remove('is-open');
  modalImg.src = '';
});

const markup = galleryItems
  .map(
    img => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${img.original}"
  >
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      
      alt="${img.description}"

    />
  </a>
</li>`,
  )
  .join(' ');
gallery.innerHTML = markup;

gallery.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName !== 'IMG') return false;
  modalNode.classList.add('is-open');
  modalImg.src = e.target.dataset.source;
  modalImg.alt = e.target.alt;
});
