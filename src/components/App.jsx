import  { useState, useEffect } from 'react';
import { AppContainer } from './App.styled';
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Modal from './Modal'
import Button from './Button';
import Loader from './Loader';






export function App()  {

  const [pictureName, setPictureName] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState( false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');

   
  useEffect(() => {
    if (pictureName === '') {
        return
    }
    setLoading(true);
    fetch(`https://pixabay.com/api/?q=${pictureName}&page=${page}&key=27052738-1c695e8f266ee15d7b1e30a8e&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json()).then(
        newPictures => {
             setPictures(prevState => [...prevState, ...newPictures.hits]) 
        }
          
      ).finally(
        setLoading(false)
        )
    }, [page, pictureName])
  

  const handleFormSubmit = pictureName => {
    setPictureName(pictureName);
    setLoading(true);
    setPictures([]);
    setPage(1);
  }

  const toggleModal = () => {
    setShowModal(prevState => !prevState)
  }
  
  const onShowModal = (largeImageURL, tags) => {
    toggleModal();
    setLargeImageURL(largeImageURL);
    setTags(tags);
}

  
  const handleButtonClick = () => {
    setPage(prevState => prevState + 1)
  }  
   
  
  return (
   
    <AppContainer>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Loader/>}
      { pictures.length > 0 && <><ImageGallery pictures={pictures} onShowModal={onShowModal} /> {loading && <Loader/>} <Button onClick={ handleButtonClick} /></>}
    {showModal && <Modal onClose ={toggleModal}><img src={largeImageURL} alt={tags} /></Modal>}
    </AppContainer>
    
  )
};
