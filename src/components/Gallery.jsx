import React, { useState } from 'react';
import '../../public/styles/gallery.css'; // Assuming you move the CSS into a separate file
import Image1 from '../assets/gallery/image1.png';
import Image2 from '../assets/gallery/image2.png';
import Image3 from '../assets/gallery/image3.png';

export default function Gallery() {
  const [expandedImgSrc, setExpandedImgSrc] = useState('');
  const [imgText, setImgText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [
    { src: Image2, alt: 'Snow' },
    { src: Image1, alt: 'Nature' },
    { src: Image2, alt: 'Lights' },
    { src: Image3, alt: 'Mountains' },
    { src: Image1, alt: 'Nature' },
    { src: Image2, alt: 'Lights' },
    { src: Image3, alt: 'Mountains' },
  ];

  const handleImageClick = (img) => {
    setExpandedImgSrc(img.src);
    console.log(img.alt)
    setImgText(img.alt);
    setIsExpanded(true);
  };

  const closeExpandedImg = () => {
    setIsExpanded(false);
  };

  return (
    <div className='gallery-box'>
      <div style={{ textAlign: 'center' }}>
        <h2>Tabbed Image Gallery</h2>
        <p>Click on the images below:</p>
      </div>

      <div className="row-gallery">
        {images.map((img, index) => (
          <div className="column" key={index}>
            <img
              src={img.src}
              alt={img.alt}
              style={{ width: '100%' }}
              onClick={() => handleImageClick(img)}
            />
          </div>
        ))}
      </div>

      {isExpanded && (
        <div className="container show">
          <span className="closebtn" onClick={closeExpandedImg}>
            &times;
          </span>
          <img id="expandedImg" src={expandedImgSrc} style={{ width: '100%' }} alt={imgText} />
          <div id="imgtext">{imgText}</div>
        </div>
      )}
    </div>
  );
}
