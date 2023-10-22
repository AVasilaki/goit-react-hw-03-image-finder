import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    keyWord: '',
    images: [],
    page: 1,
  };
  onLoadMore = () => {
    this.setState(prevState => ({
      page: (prevState.page += 1),
    }));
  };
  onChange = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    // console.log(form.elements.keyword.value);
    this.setState({ keyWord: form.elements.keyword.value });
  };

  async componentDidUpdate(a, b) {
    // console.log('a', a);
    // console.log('b', b.keyWord);
    // console.log(this.state);
    const keyWord = this.state.keyWord;
    const page = this.state.page;

    try {
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
      if (b.keyWord !== keyWord || b.page !== page) {
        this.setState(prevState => ({
          images: [...prevState.images, ...resp.data.hits],
        }));
      }

      // console.log(resp);
      return resp;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  render() {
    return (
      <div>
        <Searchbar onChange={this.onChange}></Searchbar>
        <ImageGallery galery={this.state.images}></ImageGallery>
        <Button
          galery={this.state.images.length}
          onChange={this.onLoadMore}
        ></Button>
      </div>
    );
  }
}
