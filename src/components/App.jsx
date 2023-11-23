import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import axios from 'axios';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Audio } from 'react-loader-spinner';
import { fetchApi } from 'api/api';
export class App extends Component {
  state = {
    keyWord: '',
    images: [],
    page: 1,
    loader: false,
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    console.log(this.state.page);
  };

  onChange = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    this.setState({
      keyWord: form.elements.keyword.value,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(_, prew) {
    const keyWord = this.state.keyWord;
    const page = this.state.page;

    if (prew.keyWord !== keyWord || prew.page !== page) {
      this.setState({ loader: true });
      console.log(' componen did update');
      try {
        const resp = await fetchApi(this.state.page, keyWord);

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
