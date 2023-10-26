import axios from 'axios';

export const fetchApi = async (page, keyWord) => {
  const resp = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: '39170187-3cdd77eb9e5c506c0caadebc8',
      q: keyWord,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 12,
      page: page,
    },
  });
  return resp;
};
