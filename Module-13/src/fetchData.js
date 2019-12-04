import axios from 'axios';
const pixKey = `14483587-180e2cab6a3540976c3c7e498`;
export default function getData(searchValue, pageNumber) {
  return axios(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchValue}&page=${pageNumber}&per_page=12&key=${pixKey}`,
  ).then(({ data }) => data.hits);
}

// export function fetchData from
