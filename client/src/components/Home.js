import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Picture from "../Images & Song/Picture.png";
import song from "../Images & Song/The Little Dippers - Forever (1960).mp3";
import kissey from "../Images & Song/kissey.gif";
import excited from "../Images & Song/excited.gif";

const Home = () => {
  const responses = [
    "No",
    "Are you Sure about that?",
    "Hit the books no?",
    "Really Sure?",
    "Think again!",
    "You breaking my Heart :(",
    "No to Fortniters?",
    "SAY YES PLEASE",
  ];

  const [responseIndex, setResponseIndex] = useState(0);
  const [showLoveMessage, setShowLoveMessage] = useState(false);
  const [audioPlayed, setAudioPlayed] = useState(false);

  useEffect(() => {
    if (audioPlayed) {
      const audio = new Audio(song);
      audio.play();
    }
  }, [audioPlayed]);

  const handleNoClick = () => {
    if (responseIndex < responses.length - 1 && !audioPlayed) {
      setAudioPlayed(true);
    }
  
    if (responseIndex < responses.length - 1) {
      setResponseIndex(responseIndex + 1);
    }
  };

  const handleYesClick = () => {
    setShowLoveMessage(true);
    setAudioPlayed(true);
  };

  return (
    <HomeContainer>
      <ContentContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <QuestionContainer>
        <ExcitedGif src={excited} alt="Excited Gif" />
          <QuestionText>
            {showLoveMessage
              ? "Oki Yay Love you MamaBear ❤️"
              : "Karoumeh: Hey Julie bibi ! Will you be My Valentine's date?"}
          </QuestionText>
          {showLoveMessage ? (
            <LoveMessage>
              <KisseyGif src={kissey} alt="Kissey Gif" />
              <motion.img
                src={Picture}
                alt="Love Message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: "150px", marginTop: "10px" }}
              />
            </LoveMessage>
          ) : (
            <ButtonContainer>
              <GreenButton
                onClick={handleYesClick}
                whileHover={{ scale: 1.1 }}
                style={{
                  fontSize: responseIndex === 0 ? "inherit" : `${1 + responseIndex}em`,
                }}
              >
                Yes
              </GreenButton>
              <RedButton
                onClick={handleNoClick}
                whileHover={{ scale: 1.1 }}
              >
                {responses[responseIndex]}
              </RedButton>
            </ButtonContainer>
          )}
        </QuestionContainer>
      </ContentContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ContentContainer = styled(motion.div)`
  text-align: center;
`;

const QuestionContainer = styled.div`
  margin-top: 20px;
`;

const QuestionText = styled.p`
  margin-bottom: 10px;
  font-family: 'Caveat', cursive; /* Use a romantic font like Caveat */
  font-size: 1.5em; /* Adjust the font size as needed */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  font-size: 1.2em;
`;

const ExcitedGif = styled.img`
  width: 150px;
  margin-top: 20px;
`;

const LoveMessage = styled.div`
  margin-top: 20px;
  position: relative;
`;

const KisseyGif = styled.img`
  position: absolute;
  top: -210px; // Adjust the positioning as needed
  left: 50%;
  transform: translateX(-50%);
  width: 150px; // Adjust the size as needed
`;

const GreenButton = styled(motion.button)`
  background-color: #8aff8a; 
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 8px;
`;

const RedButton = styled(motion.button)`
  background-color: #ff8a8a; 
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 8px;
`;

export default Home;
