export default getImage;
import axios from 'axios';
import { perPage } from '../main';
 axios.defaults.baseURL = 'https://pixabay.com/api/';

async function getImage(query, currentPage) {

    const params = {
    key: '44666739-d0cf1ddb18f9d30146fa54081',
    q: query,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    order: 'popular',
  }; 
    const result = await axios.get('', { params });
    return result.data;
}



// export default getImage;

// function getImage(image) {
//     const API_KEY = '44666739-d0cf1ddb18f9d30146fa54081';
//     const BASE_URL = 'https://pixabay.com/api/';
//     const searchParams = new URLSearchParams({
//     key: API_KEY,
//     q: image,
//     image_type: "photo",
//     orientation: "horizontal",
//     safesearch: "true",
//     });
//     console.log(searchParams.toString());
//     return fetch(`${BASE_URL}?${searchParams}`)
//      .then(resp => resp.json())
//         // .then((resp) => {
//         //     if (!resp.ok) {
//         //         throw new Error(resp.statusText);
//         //     }
//         //     return resp.json();
//         // })
//         // .cath(err => { console.log(err) });
// }



