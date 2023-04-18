import React, { useState } from 'react';
import './Article.css';

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
      <button onClick={handleButtonClick}>Select Article</button>
      {isOpen && (
        <div>
          <button onClick={() => props.handleModeChange('nostalgia')}>Article no 2</button>
          <button onClick={() => props.handleModeChange('alga')}>Article no 3</button>
        </div>
      )}
    </div>
  );
}


function Article() {
  const [viewMode, setViewMode] = useState('article');

  const handleModeChange = (mode) => {
    setViewMode(mode);
  };

  const handleBackButton = () => {
    setViewMode('article');
  };

  return (
    <div className="article-wrapper">
      <div className="article-content">
        {viewMode === 'article' ? (
          <>
            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>NFT Shill Art - EP #1</h1>
            
            <h3 style={{ marginBottom: '30px', fontWeight: 'normal' }}>
              Preface by Doge Destiny, Founder of NFT Item Land
            </h3>
            
            
            <div style={{ marginBottom: '10px' }}>
              <h3 style={{ fontWeight: 'normal' }}>1. Till Death Do Us</h3>

              <ParagraphWithLink
                text="An interesting 1/1 "
                link="https://twitter.com/Khadee_ize"
                linkText="@Khadee_ize on Twitter"
              />
            </div>
            
            
            <div style={{ marginBottom: '10px' }}>
              <h3 style={{ fontWeight: 'normal' }}>2. IN MY FEELINGS</h3>

              <ParagraphWithLink
                text="An interesting abstract "
                link="https://twitter.com/Dream_NFT1"
                linkText="@Dream_NFT1 on Twitter"
              />
            </div>

            <img src="" alt="Gifted PFP" style={{ width: '300px', height: '300px', borderRadius: '50%', border: '10px solid gold', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />

              <ParentButton handleModeChange={handleModeChange} /> 
          </>


        ) : viewMode === 'nostalgia' ? (
          <>
            <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Nostalgia</h1>
            
            <h3 style={{ marginBottom: '30px', fontWeight: 'normal' }}>
                Preface by Doge Destiny, Founder of NFT Item Land
            </h3>

          <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontWeight: 'normal' }}>1. Old Memories</h3>

          <ParagraphWithLink
            text="A beautiful 1/1 "
            link="https://twitter.com/NostalgicNFT"
            linkText="@NostalgicNFT on Twitter"
          />
        </div>
        
        
        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontWeight: 'normal' }}>2. Vintage Cars</h3>

          <ParagraphWithLink
            text="An amazing collection of "
            link="https://twitter.com/VintageCarNFT"
            linkText="@VintageCarNFT on Twitter"
          />
        </div>

        <img src="" alt="Nostalgia Art" style={{ width: '300px', height: '300px', borderRadius: '50%', border: '10px solid gold', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />
        <div className="article-buttons-wrapper">
          <button onClick={() => handleBackButton()}>Back to Article</button>
          <button onClick={() => handleModeChange('alga')}>Article no 3</button>
        </div>

        <ParentButton handleModeChange={handleModeChange} />
      </>


    ) : viewMode === 'alga' ? (
      <>
        <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Algae</h1>
        
        <h3 style={{ marginBottom: '30px', fontWeight: 'normal' }}>
          Preface by Doge Destiny, Founder of NFT Item Land
        </h3>
        
        
        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontWeight: 'normal' }}>1. Oceanic Algae</h3>

          <ParagraphWithLink
            text="A mesmerizing 1/1 "
            link="https://twitter.com/AlgaeArtNFT"
            linkText="@AlgaeArtNFT on Twitter"
          />
        </div>
        
        
        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontWeight: 'normal' }}>2. Forest Algae</h3>

          <ParagraphWithLink
            text="A stunning collection of "
            link="https://twitter.com/ForestAlgaeNFT"
            linkText="@ForestAlgaeNFT on Twitter"
          />
        </div>

        <img src="" alt="Algae Art" style={{ width: '300px', height: '300px', borderRadius: '50%', border: '10px solid gold', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />
        <div className="article-buttons-wrapper">
          <button onClick={() => handleBackButton()}>Back to Article</button>
          <button onClick={() => handleModeChange('nostalgia')}>Article no 2</button>
        </div>

        <ParentButton handleModeChange={handleModeChange} />

      </>
    ) : null}
  </div>
</div>
);
}

export default Article;
