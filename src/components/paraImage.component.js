import React from 'react';
import '../componentcss/ParaImage.css'; // Import the CSS file for styling
import Button from './button.component';
import TextDropdown from './textDropdown.component';
const ParaImage = ({ heading, text, imageUrl,alt,buttonText,reverse=false, dropdownData, section = false}) => {
  return (
    <div className={`para-image-container ${reverse ? 'reverse' : ''}`}>
      <div className="para-text">
        <p className='paraImage_heading'>{heading}</p>
        {text && <p className='paraImage_text'>{text}</p>}
        {
          dropdownData &&
          dropdownData.map(data=>{
            return (<TextDropdown
              title={data.title}
              text={data.text}
            />)
          })  
        }
        {buttonText && <Button text = {buttonText}/>}
      </div>
      <div className="image">
        <img className={`${section? 'section_image':''}`}src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

export default ParaImage;