import React, { Component } from 'react';
import { AppContainer, } from './App.styled';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Modal from './Modal'
import Button from './Button';
import Loader from './Loader';






export class App extends Component  {
  state = {
    pictureName: '',
    pictures: null,
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: '',
    tags: ''
  }

  componentDidUpdate(prevProps, PrevState) {
    if ( PrevState.pictureName !== this.state.pictureName || PrevState.page !==  this.state.page) {
      this.setState({
        loading: true,
        })
      fetch(`https://pixabay.com/api/?q=${this.state.pictureName}&page=${this.state.page}&key=27052738-1c695e8f266ee15d7b1e30a8e&image_type=photo&orientation=horizontal&per_page=12`)
        .then(res => res.json()).then(
          newPictures => {
            if (this.state.pictures) {
              this.setState(({ pictures }) => { return { pictures: [...pictures, ...newPictures.hits] } })
            } else { this.setState({ pictures: newPictures.hits }) }
          }
          
      ).finally(
          () => this.setState({loading: false})
        )
    }
    // if (this.state.page !== PrevState.page && this.state.page !== 1) {
    //   this.setState({
    //     loading: true,
    //   })
    //   fetch(`https://pixabay.com/api/?q=${this.state.pictureName}&page=${this.state.page}&key=27052738-1c695e8f266ee15d7b1e30a8e&image_type=photo&orientation=horizontal&per_page=12`)
    //     .then(res => res.json()).then(
    //       pictures => this.setState({ pictures: pictures.hits })
          
    //   ).finally(
    //       () => this.setState({loading: false})
    //     )
    // }
    
  }

  handleFormSubmit = pictureName => {
    this.setState({ pictureName,
        loading: true,
        pictures: null,
      page: 1 });
  }

  toggleModal = () =>{
    this.setState(({showModal}) => ({showModal: !showModal}))
  }
  onShowModal = ({ largeImageURL,tags }) => {
    this.toggleModal();
    this.setState({ largeImageURL, tags });
  }
  handleButtonClick = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
  }
  
  render() {
    const { loading, pictures, showModal, largeImageURL, tags } = this.state;
    

    return <AppContainer>
      <Searchbar onSubmit={this.handleFormSubmit} />
      {loading && <Loader/>}
      {pictures && <><ImageGallery pictures={pictures} onShowModal={this.onShowModal} /> {loading && <Loader/>} <Button onClick={ this.handleButtonClick} /></>}
    {showModal && <Modal onClose ={this.toggleModal}><img src={largeImageURL} alt={tags} /></Modal>}
    </AppContainer>;
    
  }
};
