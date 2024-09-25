'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion } from 'framer-motion';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled components
const MainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  animation: `${fadeIn} 1s ease-out`,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(4),
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

// Wave animation
const waveAnimation = keyframes`
  0% { transform: scaleY(1); }
  50% { transform: scaleY(0.5); }
  100% { transform: scaleY(1); }
`;

const WaveContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  height: '50px',
  width: '100%',
  marginBottom: '20px',
});

const AudioWave = () => {
  return (
    <WaveContainer>
      {[...Array(20)].map((_, index) => (
        <Box 
          key={index} 
          sx={{
            width: '4px',
            height: '100%',
            margin: '0 2px',
            backgroundColor: '#3498db',
            animation: `${waveAnimation} 1s ease-in-out infinite`,
            animationDelay: `${index * 0.05}s`,
          }}
        />
      ))}
    </WaveContainer>
  );
};

const PodcastPage = () => {
  const audioPlayerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioPlayer = audioPlayerRef.current;

    if (audioPlayer && audioPlayer.audio.current) {
      const audio = audioPlayer.audio.current;

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);

      audio.addEventListener('play', handlePlay);
      audio.addEventListener('pause', handlePause);
      audio.addEventListener('ended', handleEnded);

      return () => {
        audio.removeEventListener('play', handlePlay);
        audio.removeEventListener('pause', handlePause);
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <MainContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center" sx={{ color: '#3498db', marginBottom: 4, fontWeight: 'bold' }}>
          MLOps Podcast
        </Typography>
      </motion.div>

      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2980b9', textAlign: 'center', marginBottom: 2 }}>
          MLOps-Thesis-Ahmad_Salah-podcast.wav
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ textAlign: 'center', marginBottom: 2 }}>
          Created with 
          <a href="https://notebooklm.google/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '5px', color: '#3498db' }}>NotebookLM</a> 
        </Typography>

        {isPlaying && <AudioWave />}

        <AudioPlayer
          ref={audioPlayerRef}
          src="/MLOps-Thesis-Ahmad_Salah-podcast.wav"
          showJumpControls={false}
          showDownload={false}
          showFilledProgress={true}
          customProgressBarSection={["PROGRESS_BAR", "CURRENT_TIME", "DURATION"]}
          customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
          autoPlayAfterSrcChange={false}
          style={{
            boxShadow: 'none',
            background: 'transparent',
          }}
        />
      </StyledPaper>
    </MainContainer>
  );
};

export default PodcastPage;