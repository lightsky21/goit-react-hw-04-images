import  { useState, useEffect } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Modal from './Modal'
import Button from './Button';
import Loader from './Loader';






export function App()  {
  // state = {
  //   pictureName: '',
  //   pictures: null,
  //   page: 1,
  //   loading: false,
  //   showModal: false,
  //   largeImageURL: '',
  //   tags: ''
  // }

  const [pictureName, setPictureName] = useState('');
  const [pictures, setPictures] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState( false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');


  // componentDidUpdate(prevProps, PrevState) {
  //   if ( PrevState.pictureName !== this.state.pictureName || PrevState.page !==  this.state.page) {
  //     this.setState({
  //       loading: true,
  //       })
  //     fetch(`https://pixabay.com/api/?q=${this.state.pictureName}&page=${this.state.page}&key=27052738-1c695e8f266ee15d7b1e30a8e&image_type=photo&orientation=horizontal&per_page=12`)
  //       .then(res => res.json()).then(
  //         newPictures => {
  //           if (this.state.pictures) {
  //             this.setState(({ pictures }) => { return { pictures: [...pictures, ...newPictures.hits] } })
  //           } else { this.setState({ pictures: newPictures.hits }) }
  //         }
          
  //     ).finally(
  //         () => this.setState({loading: false})
  //       )
  //   }
   
  useEffect(() => {
    if (pictureName === '') {
        return
    }
    setLoading(true);
    fetch(`https://pixabay.com/api/?q=${pictureName}&page=${page}&key=27052738-1c695e8f266ee15d7b1e30a8e&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json()).then(
        newPictures => {
          if (pictures) {
            // this.setState(({ pictures }) => { return { pictures: [...pictures, ...newPictures.hits] } })
            setPictures(prevState => [...prevState, ...newPictures.hits])
          } else {
            // this.setState({ pictures: newPictures.hits })
            setPictures(newPictures.hits)
          }
        }
          
      ).finally(
        // () => this.setState({loading: false})
        // () => setLoading(false)
        setLoading(false)
        )
    })
  // }

  const handleFormSubmit = pictureName => {
    // this.setState({ pictureName,
    //     loading: true,
    //     pictures: null,
    //   page: 1 });
    setPictureName(pictureName);
    setLoading(true);
    setPictures(null);
    setPage(1);
  }

  // toggleModal = () =>{
  //   this.setState(({showModal}) => ({showModal: !showModal}))
  // }

  const toggleModal = () => {
    setShowModal(prevState => !prevState)
  }
  // onShowModal = ({ largeImageURL,tags }) => {
  //   this.toggleModal();
  //   this.setState({ largeImageURL, tags });
  // }
  const onShowModal = (largeImageURL, tags) => {
    toggleModal();
    setLargeImageURL(largeImageURL);
    setTags(tags);
}

  // handleButtonClick = () => {
  //   this.setState(({ page }) => {
  //     return { page: page + 1 };
  //   });
  // }
  const handleButtonClick = () => {
    setPage(prevState => prevState + 1)
  }  
  //   const { loading, pictures, showModal, largeImageURL, tags } = this.state;
    

  return (
      
    <AppContainer>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Loader/>}
      {pictures && <><ImageGallery pictures={pictures} onShowModal={onShowModal} /> {loading && <Loader/>} <Button onClick={ handleButtonClick} /></>}
    {showModal && <Modal onClose ={toggleModal}><img src={largeImageURL} alt={tags} /></Modal>}
    </AppContainer>
    
  )
};
