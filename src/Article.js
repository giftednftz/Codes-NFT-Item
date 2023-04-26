import React, { useState } from 'react';
import './Article.css';
import { FiShare } from 'react-icons/fi';
import { FcAddImage } from 'react-icons/fc';
import { FcVideoFile } from 'react-icons/fc';


function ParagraphWithLink(props) {
  return (
    <div style={{ marginBottom: '30px' }}>
      <p>{props.text}</p>
      <a href={props.link} target="_blank" rel="noreferrer">{props.linkText} </a>
    </div>
  );
}

function ParentButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button class="dir-control" onClick={handleButtonClick}>Select Article</button>
      {isOpen && (
        <div>
          <button class="dir-control" onClick={() => props.handleModeChange('article')}>Article no 1</button>
          <button class="dir-control" onClick={() => props.handleModeChange('nostalgia')}>Article no 2</button>
          <button class="dir-control" onClick={() => props.handleModeChange('alga')}>Article no 3</button>
        </div>
      )}
    </div>
  );
}

function AddImage(props) {
  return (
    <label className="add-image" htmlFor="picture-input">
      <input
        type="file"
        id="picture-input"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={props.handleImageSelect}
      />
      < FcAddImage />
    </label>
  );
}

function AddVideo(props) {
  return (
    <label className="add-video" htmlFor="video-input">
      <input
        type="file"
        id="video-input"
        accept="video/*"
        style={{ display: 'none' }}
        onChange={props.handleFileSelect} 
      />
      <FcVideoFile />
    </label>
  );
}



function SocialMediaDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const socialMediaLinks = [    {      url: "https://www.facebook.com/sharer/sharer.php?u=https://example.com",      iconUrl: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-facebook_-512.png',      altText: 'Facebook icon'    },    {      url: "https://twitter.com/intent/tweet?url=https://example.com&text=Check%20out%20this%20article",      iconUrl: 'https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png',      altText: 'Twitter icon'    },    {      url: "https://www.instagram.com/?url=https://example.com",      iconUrl: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',      altText: 'Instagram icon'    }  ];

  return (
    <div>
      <div className="dropdown-button" onClick={handleButtonClick}>
        <FiShare />
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {socialMediaLinks.map((link, index) => (
            <li key={index}>
            <a href={link.url}>
              <img src={link.iconUrl} alt={link.altText} />
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
);
}


function Article(props) {
  const [viewMode, setViewMode] = useState('article');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);


  const handleModeChange = (mode) => {
    setViewMode(mode);
  };

  // const handleBackButton = () => {
  //   setViewMode('article');
  // };

  const handleImageSelect = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };
  
  
  const handleVideoSelect = (e) => {
    if (e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };
  
  
  return (
    <div className="article-wrapper">
      <div className="article-content">
      
      <div> <SocialMediaDropdown /> </div>

        {viewMode === 'article' ? (
          <>
         
            <h1  style={{ textAlign: 'center' }}>NFT Shill Art - EP #1</h1>
          
            <h3 style={{  fontWeight: 'normal' }}>
              Preface by Doge Destiny, Founder of NFT Item Land
            </h3>
            
            
            <div >
              <h3 style={{ fontWeight: 'normal' }}>1. Till Death Do Us</h3>

               
                <ParagraphWithLink
                text="An interesting 1/1 "
                link="https://twitter.com/Khadee_ize"
                linkText="@Khadee_ize on Twitter"
              />
            </div>

            <div >
              <h3 style={{ fontWeight: 'normal' }}>2. IN MY FEELINGS</h3>

              <ParagraphWithLink
                text="An interesting abstract "
                link="https://twitter.com/Dream_NFT1"
                linkText="@Dream_NFT1 on Twitter"
              />
            </div>
            
           
            
    <div>      
      {imageFile && <img src={URL.createObjectURL(imageFile)} style={{ width: '300%', maxWidth: '300px' }} alt="Daisy a bridal bridge between man and reality" />}

      {videoFile && <video src={URL.createObjectURL(videoFile)} style={{ width: '300%', maxWidth: '300' }} controls />}
    </div>

    <div style={{ display: 'flex' }}>
      <AddImage handleImageSelect={handleImageSelect} />
      <AddVideo handleFileSelect={handleVideoSelect} />
    </div>

              <ParentButton handleModeChange={handleModeChange} /> 
            
              <img
              src="https://i.seadn.io/gae/tV8LTB8DQDVtqOgK43y8nHWRGaTntocybPZYrSL9DJRKzR92FAwWzydWa-yWCVJJA8PdaodV2FcoFys6DshsHHHcAzpwVApDx8joXg?auto=format&w=1000"
              alt="Gifted PFP"
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '10px solid gold',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            />

          </>


        ) : viewMode === 'nostalgia' ? (
          <>
            <h1 style={{ textAlign: 'center' }}>Nostalgia</h1>
            
            <h3 style={{ fontWeight: 'normal' }}>
                Preface by Doge Destiny, Founder of NFT Item Land
            </h3>

          <div >
          <h3 style={{ fontWeight: 'normal' }}>1. Old Memories</h3>

          <ParagraphWithLink
            text="A beautiful 1/1 "
            link="https://twitter.com/NostalgicNFT"
            linkText="@NostalgicNFT on Twitter"
          />
        </div>
        
        
        <div >
          <h3 style={{ fontWeight: 'normal' }}>2. Vintage Cars</h3>

          <ParagraphWithLink
            text="An amazing collection of "
            link="https://twitter.com/VintageCarNFT"
            linkText="@VintageCarNFT on Twitter"
          />
        </div>
        
        <div className="app"> <AddImage /> <AddVideo /> </div>
          
        <ParentButton handleModeChange={handleModeChange} />

        <img src="" alt="Nostalgia Art" style={{ width: '300px', height: '300px', borderRadius: '50%', border: '10px solid gold', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />
      </>


    ) : viewMode === 'alga' ? (
      <>
        <h1 style={{ textAlign: 'center' }}>Algae</h1>
        
        <h3 style={{ fontWeight: 'normal' }}>
          Preface by Doge Destiny, Founder of NFT Item Land
        </h3>
        
        
        <div >
          <h3 style={{ fontWeight: 'normal' }}>1. Oceanic Algae</h3>

          <ParagraphWithLink
            text="A mesmerizing 1/1 "
            link="https://twitter.com/AlgaeArtNFT"
            linkText="@AlgaeArtNFT on Twitter"
          />
        </div>
        
        
        <div >
          <h3 style={{ fontWeight: 'normal' }}>2. Forest Algae</h3>

          <ParagraphWithLink
            text="A stunning collection of "
            link="https://twitter.com/ForestAlgaeNFT"
            linkText="@ForestAlgaeNFT on Twitter"
          />
        </div>

        <div className="app"> <AddImage /> <AddVideo /> </div>
        
        <ParentButton handleModeChange={handleModeChange} />

        <img src="" alt="Algae Art" style={{ width: '300px', height: '300px', borderRadius: '50%', border: '10px solid gold', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />

      </>
    ) : null}
  </div>
</div>
);
}

export default Article;
