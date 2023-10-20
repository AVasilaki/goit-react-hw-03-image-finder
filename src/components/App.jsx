import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGaleryItem } from './ImageGalleryItem/ImageGalleryItem';
import axios from 'axios';

export class App extends Component {
  state = {
    keyWord: '',
  };
  onChange = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    // console.log(form.elements.keyword.value);
    this.setState({ keyWord: form.elements.keyword.value });
  };

  async componentDidUpdate() {
    const keyWord = this.state.keyWord;
    console.log(keyWord);
    try {
      const resp = await axios.get(`https://pixabay.com/api/`, {
        params: {
          key: '39170187-3cdd77eb9e5c506c0caadebc8',
          q: keyWord,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
          per_page: 12,
          page: 1,
        },
      });
      console.log(resp);
      return resp;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  render() {
    return (
      <div>
        <ImageGaleryItem></ImageGaleryItem>
        <Searchbar onChange={this.onChange}></Searchbar>
      </div>
    );
  }
}
