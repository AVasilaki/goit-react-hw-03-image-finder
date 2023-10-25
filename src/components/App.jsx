import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Audio } from 'react-loader-spinner';

export class App extends Component {
  state = {
    keyWord: '',
    images: [],
    page: 1,
    loader: false,
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: (prevState.page += 1),
    }));
    console.log(this.state.page);
  };

  onChange = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    this.setState({ keyWord: form.elements.keyword.value });
  };

  async componentDidUpdate(_, b) {
    const keyWord = this.state.keyWord;
    const page = this.state.page;

    if (b.keyWord !== keyWord || b.page !== page) {
      this.setState({ loader: true });

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
        this.setState(prevState => ({
          images: [...prevState.images, ...resp.data.hits],
        }));
        console.log(resp);
        console.log(page);
        return resp;
      } catch (error) {
        console.error(error);
        return error;
      } finally {
        this.setState({ loader: false });
      }
    }
  }
  render() {
    return (
      <div>
        <Searchbar onChange={this.onChange}></Searchbar>
        <ImageGallery galery={this.state.images}></ImageGallery>
        <Audio visible={this.state.loader} />
        <Button
          galery={this.state.images.length}
          onLoadMore={this.onLoadMore}
        ></Button>
      </div>
    );
  }
}
