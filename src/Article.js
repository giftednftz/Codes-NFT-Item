import React from 'react';

function ParagraphWithLink(props) {
  return (
    <div style={{ marginBottom: '30px' }}>
      <p>{props.text}</p>
      <a href={props.link} target="_blank" rel="noreferrer">{props.linkText} </a>
    </div>
  );
}

function Article() {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'gold',
      padding: '50px'
    }}>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '600px'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>NFT Shill Art - EP #1</h1>
        
        <h3 style={{ marginBottom: '30px', fontWeight: 'normal' }}>
          Preface by Doge Destiny, Founder of NFT Item Land: Shill art is a new term for describing an upcoming phenomenon in the modern art space. Since the inception of NFTs in our shared reality, art has evolved in ways impossible to conceive even just a couple of years prior. The abstract pathways unearthed by this new token technology has driven the market to produce a more drastic, stylistic, and emotionally charged version of what we know as art. Without further delay, here's Gifted, art connoisseur, and his take on what Shill Art is.
        </h3>
        
        
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontWeight: 'normal' }}>1. Till Death Do Us</h3>

        <ParagraphWithLink
          text="Part An interesting 1/1 art piece by amazing artist, Khadee Ize. All her arts depicts strong feelings and I really like her choice of colors and art concept. @Khadee_ize on Twitter. Great artist from Nigeria."
          link="https://twitter.com/Khadee_ize"
          linkText="@Khadee_ize on Twitter"
        />
        </div>
        
        
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ fontWeight: 'normal' }}>2. IN MY FEELINGS</h3>

        <ParagraphWithLink
          text="An interesting abstract piece by Dreambrand, minted on manifold with high resolution 8k. Colorful and outstanding among other abstract artists. You'll definitely want to check out all he has going on with the abstracts and Dream patterns on OS. Twitter handle @Dream_NFT1. Another great Nigerian artist."
          link="https://twitter.com/Dream_NFT1"
          linkText="@Dream_NFT1 on Twitter"
        />
        </div>

        <img src="https://i.seadn.io/gae/tV8LTB8DQDVtqOgK43y8nHWRGaTntocybPZYrSL9DJRKzR92FAwWzydWa-yWCVJJA8PdaodV2FcoFys6DshsHHHcAzpwVApDx8joXg?auto=format&w=1000" alt="Gifted PFP" style={{ width: '300px', height: '300px', borderRadius: '50%', border: '10px solid gold', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />
      </div>
    </div>
  );
}

export default Article;
