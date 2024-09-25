'use client';

import React, { useState } from 'react';
import { 
  Typography, 
  Grid, 
  Box, 
  Card, 
  CardContent, 
  Modal, 
  Tabs, 
  Tab, 
  Button,
  Paper
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion, MotionProps } from 'framer-motion';

// Keyframes for animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// Styled components
const MainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
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

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
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

// Create a motion component version of StyledCard
const MotionCard = motion<React.ComponentProps<typeof StyledCard>>(StyledCard);

const toolsData = {
  "Specialized Open-Source MLOps Tools": {
    description: "These tools focus on specific functions within the ML lifecycle. While they don't offer the breadth of functionality that end-to-end platforms do, they are often more powerful in their specialized areas.",
    advantages: [
      "Flexibility and modularity",
      "Open-source cost efficiency",
      "Customization and transparency",
      "Active developer community support"
    ],
    disadvantages: [
      "Limited MLOps coverage",
      "Integration complexity",
      "Potential stability issues",
      "Higher maintenance and scalability challenges"
    ]
  },
  "Open-Source End-to-End MLOps Platforms": {
    description: "These platforms offer a comprehensive solution for managing the entire ML lifecycle, consolidating numerous MLOps functions under one roof.",
    advantages: [
      "Comprehensive MLOps coverage",
      "Open-source cost efficiency",
      "Flexibility and modularity",
      "Potential for on-premises hosting"
    ],
    disadvantages: [
      "Potential reliability and stability issues",
      "Steeper learning curve",
      "Higher initial configuration complexity",
      "Dependency on a single platform"
    ]
  },
  "Commercial End-to-End MLOps Platforms": {
    description: "These platforms offer a comprehensive, cloud-based solution covering all aspects of the MLOps lifecycle, simplifying the process of developing, deploying, and scaling ML models.",
    advantages: [
      "Comprehensive MLOps coverage",
      "High reliability and stability",
      "Professional support and SLAs",
      "Lower maintenance overhead and easier scalability"
    ],
    disadvantages: [
      "Higher costs compared to open-source solutions",
      "Potential vendor lock-in",
      "Limited flexibility for customization",
      "Potential data security concerns with cloud-based solutions"
    ]
  }
};

const Tools: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTool, setSelectedTool] = useState('');
  const [currentTab, setCurrentTab] = useState(0);

  const handleOpenModal = (tool: string) => {
    setSelectedTool(tool);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

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
          MLOps Tools
        </Typography>
      </motion.div>

      <StyledPaper elevation={3} sx={{ textAlign: 'center', marginBottom: 4 }}>
        <img src="/mlops_tools.png" alt="MLOps Tools" style={{ width: '100%', maxWidth: 600, display: 'block', margin: 'auto' }} />
      </StyledPaper>

      <Grid container spacing={3}>
        {Object.entries(toolsData).map(([category, data], index) => (
          <Grid item xs={12} md={4} key={index}>
            <MotionCard
              elevation={2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom sx={{ color: '#2c3e50' }}>
                  {category}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {data.description}
                </Typography>
                <Button 
                  variant="outlined" 
                  onClick={() => handleOpenModal(category)}
                  sx={{
                    color: '#3498db',
                    borderColor: '#3498db',
                    '&:hover': {
                      backgroundColor: 'rgba(52, 152, 219, 0.1)',
                      borderColor: '#3498db',
                    },
                  }}
                >
                  Learn More
                </Button>
              </CardContent>
            </MotionCard>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 600,
          maxHeight: '80vh',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          overflow: 'auto',
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom sx={{ color: '#2c3e50' }}>
            {selectedTool}
          </Typography>
          <Tabs 
            value={currentTab} 
            onChange={handleChangeTab} 
            sx={{ 
              mb: 2,
              '& .MuiTab-root': { color: '#7f8c8d' },
              '& .Mui-selected': { color: '#3498db' },
            }}
          >
            <Tab label="Advantages" />
            <Tab label="Disadvantages" />
          </Tabs>
          {currentTab === 0 && (
            <ul style={{ color: '#34495e' }}>
              {toolsData[selectedTool as keyof typeof toolsData]?.advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          )}
          {currentTab === 1 && (
            <ul style={{ color: '#34495e' }}>
              {toolsData[selectedTool as keyof typeof toolsData]?.disadvantages.map((disadvantage, index) => (
                <li key={index}>{disadvantage}</li>
              ))}
            </ul>
          )}
        </Box>
      </Modal>
    </MainContainer>
  );
};

export default Tools;