import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import createMarcupGallery from './js/render-functions';
import getImage from './js/pixabay-api';


const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

let query;
export let currentPage = 1;
export let maxPage;
export const perPage = 15;

function showLoader() {
 loader.classList.remove('hidden');
}
function hideLoader() {
  loader.classList.add('hidden');
}
export function showLoadBtn() {
  loadBtn.classList.remove('hidden');
}
export function hideLoadBtn() {
  loadBtn.classList.add('hidden');
}


const lightbox = new SimpleLightbox('.gallery a',
    {
        captionsData: 'alt',
        captionDelay: 250,
    });

function showMessageError() {
    iziToast.error({
    
        message: "Sorry, there are no images matching your search query. Please try again!",
        maxWidth: '432px',
        position: 'topRight',
        messageSize: 16,
        backgroundColor: '#ef4040',
        titleColor: '#FFFFFF',
        messageColor: '#FFFFFF',
        theme: 'dark',
    }); 
}

function showError(message) {
  iziToast.error({
    title: 'Error',
    message,
  });
}


form.addEventListener('submit', async event => {
    event.preventDefault();
    const query = event.target.elements.search.value.trim();
    
    if (query) {
         currentPage = 1;
        showLoader()
        form.reset();
        gallery.innerHTML = '';
        lightbox.refresh();
      
        try {
            const data = await getImage(query, currentPage);
            maxPage = Math.ceil(data.totalHits / perPage);
            
            if (data.hits.length) {
                gallery.innerHTML = createMarcupGallery(data.hits);
                lightbox.refresh();
            } else {
                showMessageError()
            }
        }
        catch (error) {
            console.log(error);
        }
        hideLoader();
        // form.reset();
        updateBtnStatus();
    }
     lightbox.refresh();
})



loadBtn.addEventListener('click', async () => {
  currentPage++;
  hideLoadBtn();
    showLoader();
  try {
    const data = await getImage(query, currentPage);
      const markup = createMarcupGallery(data.hits);
      gallery.insertAdjacentHTML('beforeend', markup);
     skipOldElement();
  } catch {
    console.log('error');
  }
  hideLoader();
  updateBtnStatus();;
});


function skipOldElement() {
  const liElem = gallery.children[0];
  const height = liElem.getBoundingClientRect().height;

  scrollBy({
    top: height * 3,
    behavior: 'smooth',
  });
}


function updateBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadBtn();

    if (maxPage) {
      iziToast.info({
        title: 'The End!',
        message: 'End of collection!',
      });
    }
  } else {
    showLoadBtn();
  }
}








