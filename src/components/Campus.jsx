import { Cancel } from '@mui/icons-material';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Campus = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Replace these image URLs with your own images
  const campusImages = [
    'https://images.collegedunia.com/public/college_data/images/campusimage/141983345422220124301934934.jpg',
    'https://i.ytimg.com/vi/WOY1fySdVZo/maxresdefault.jpg',
    'https://www.mgmccsit.ac.in/images/canteen.jpg',
    'https://photos.wikimapia.org/p/00/00/63/15/17_big.jpg',
    'https://docplayer.net/docs-images/98/134820269/images/4-2.jpg',
    'https://lh5.googleusercontent.com/p/AF1QipO2FlN3rKPMz7lTLhQTybQbLaIAOWlWTku1yylN=w397-h267-n-k-no',
  ];

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Campus Showcase</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {campusImages.map((imageUrl, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(imageUrl)}
            >
              <img
                src={imageUrl}
                alt={`Campus Image ${index + 1}`}
                className="w-full h-40 object-cover object-center"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white">Click to enlarge</p>
              </div>
            </div>
          ))}
        </div>

        {/* Move the Modal component outside the render method */}
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          contentLabel="Enlarged Image"
          className="modal flex flex-col items-center bg-dark bg-opacity-25 rounded-lg justify-center"
          overlayClassName="overlay"

        >
          <div className="text-end absolute top-[11rem] right-[0rem] lg:top-[10rem] lg:right-[30rem] w-75 text-5xl ">
            <Cancel onClick={closeModal} className="cursor-pointer text-info fs-1" />
          </div>
          <img src={selectedImage} alt="Enlarged Campus Image" className=" max-h-full lg:w-[1000px] lg:h-[600px] w-[400px] h-[300px] object-cover rounded-xl shadow " />
        </Modal>
      </div>
    </div>
  );
}

export default Campus;