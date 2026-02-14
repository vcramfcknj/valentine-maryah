import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showLetter, setShowLetter] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);

  // Album data - replace image URLs with your actual photos
  const albumCards = [
    {
      id: 1,
      image: "/images/photo1.jpg",
      caption: "...",
      date: "Chapter 1"
    },
    {
      id: 2,
      image: "/images/photo2.jpg",
      caption: "...",
      date: "Chapter 2"
    },
    {
      id: 3,
      image: "/images/photo3.jpg",
      caption: "...",
      date: "Chapter 3"
    },
    {
      id: 4,
      image: "/images/photo4.jpg",
      caption: "...",
      date: "Chapter 4"
    },
    {
      id: 5,
      image: "/images/photo5.jpg",
      caption: "Every moment with you",
      date: "Chapter 5"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % albumCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [albumCards.length]);

  const handleLetterClick = () => {
    setShowLetter(true);
    setTimeout(() => setLetterOpen(true), 100);
  };

  const closeLetter = () => {
    setLetterOpen(false);
    setTimeout(() => setShowLetter(false), 300);
  };

  return (
    <div className="App">
      {/* Floating tulips */}
      <div className="tulips-container">
        <div className="tulip tulip-1">🌷</div>
        <div className="tulip tulip-2">🌷</div>
        <div className="tulip tulip-3">🌷</div>
        <div className="tulip tulip-4">🌷</div>
        <div className="tulip tulip-5">🌷</div>
      </div>

      {/* Main content */}
      <div className="content-wrapper">
        <header className="header">
          <h1 className="title">For Maryah</h1>
          <p className="subtitle">A collection of moments & words</p>
        </header>

        {/* Album section */}
        <div className="album-section">
          <div className="album-cards">
            {albumCards.map((card, index) => (
              <div
                key={card.id}
                className={`album-card ${index === currentCard ? 'active' : ''} ${
                  index === (currentCard - 1 + albumCards.length) % albumCards.length ? 'prev' : ''
                } ${index === (currentCard + 1) % albumCards.length ? 'next' : ''}`}
                onClick={() => setCurrentCard(index)}
              >
                <div className="card-inner">
                  <img src={card.image} alt={card.caption} />
                  <div className="card-info">
                    <span className="card-date">{card.date}</span>
                    <p className="card-caption">{card.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="album-dots">
            {albumCards.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentCard ? 'active' : ''}`}
                onClick={() => setCurrentCard(index)}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Letter button */}
        <button className="letter-button" onClick={handleLetterClick}>
          <span className="envelope-icon">✉</span>
          <span>Open My Letter</span>
        </button>
      </div>

      {/* Letter modal */}
      {showLetter && (
        <div className={`letter-overlay ${letterOpen ? 'open' : ''}`} onClick={closeLetter}>
          <div className={`letter-container ${letterOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="close-letter" onClick={closeLetter}>×</button>
            <div className="letter-paper">
              <div className="letter-content">
                <div className="letter-date">February 14, 2026</div>
                
                <div className="letter-salutation">mi Maryah,</div>
                
                <p className="letter-text">
                  They say that words can never truly capture the depth of what the heart feels, 
                  and perhaps they're right. But I'll try anyway, because you deserve to know 
                  just how extraordinary you are to me.
                </p>
                
                <p className="letter-text">
                  Every moment with you feels like coming home. Your laugh is the soundtrack to 
                  my happiest memories, your smile the first thing I think of when I wake, and 
                  your presence the greatest gift I've ever known.
                </p>
                
                <p className="letter-text">
                  You've taught me that love isn't just a feeling—it's a thousand small moments 
                  of choosing each other, of building something beautiful together, of being 
                  brave enough to let someone truly see you.
                </p>
                
                <p className="letter-text">
                  Thank you for being my partner, my best friend, Thank you for loving me with such patience and 
                  grace, for believing in us even when things get difficult.
                </p>
                
                <p className="letter-text">
                  This Valentine's Day, and every day after, I choose you. I choose us. 
                  I choose this beautiful life we're building together.
                </p>
                
                <div className="letter-signature">
                  <p className="letter-text">Forever yours,</p>
                  <div className="signature">Your Love</div>
                </div>
                
                <div className="letter-ps">
                  P.S. — The tulips are for you. They bloom in spring, just like my love 
                  for you continues to grow with each passing season. 🌷
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;