'use client';

import React, { useState, useEffect, forwardRef } from 'react';
import { Typography, Paper, Grid, Box, Card, CardContent, Modal } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion, HTMLMotionProps } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';

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
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
}));

// Motion wrapper without custom
type MotionPaperProps = HTMLMotionProps<"div"> & React.ComponentProps<typeof StyledPaper>;

const MotionPaper = forwardRef<HTMLDivElement, MotionPaperProps>((props, ref) => (
  <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <StyledPaper {...props} />
  </motion.div>
));
MotionPaper.displayName = 'MotionPaper';

// Motion wrapper for the StyledCard
type MotionCardProps = HTMLMotionProps<"div"> & React.ComponentProps<typeof StyledCard> & { index: number };

const MotionCard = forwardRef<HTMLDivElement, MotionCardProps>(({ index, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
  >
    <StyledCard {...props} />
  </motion.div>
));
MotionCard.displayName = 'MotionCard';

const principlesData = {
  "Reproducibility": "Reproducibility is at the core of MLOps...",
  "Versioning": "Versioning plays a crucial role in ML...",
  "Experiment Management": "Experiment management is a central process in MLOps...",
  "ML Pipelines": "MLOps emphasizes the importance of transforming...",
  "Automation and Orchestration": "MLOps increases the efficiency and reliability...",
  "Collaboration": "MLOps promotes collaboration and integration...",
  "CI/CD in MLOps": "In MLOps, CI/CD are essential components...",
  "Continuous Training": "Continuous Training is a fundamental aspect of MLOps...",
  "Continuous Monitoring": "Continuous Monitoring is an essential component of MLOps...",
} as const;

type PrincipleKey = keyof typeof principlesData;

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPrinciple, setSelectedPrinciple] = useState<PrincipleKey | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleOpenModal = (principle: PrincipleKey) => {
    setSelectedPrinciple(principle);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const principles: PrincipleKey[] = [
    "Reproducibility",
    "Versioning",
    "Experiment Management",
    "ML Pipelines",
    "Automation and Orchestration",
    "Collaboration",
    "CI/CD in MLOps",
    "Continuous Training",
    "Continuous Monitoring"
  ];

  return (
    <>
      <Head>
        <title>MLOps</title>
        <meta name="description" content="Learn about MLOps" />
      </Head>
      <MainContainer>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Image src="/sprinteins_logo_tra.png" alt="Sprinteins Logo" width={300} height={50} style={{ width: '100%', maxWidth: 300, display: 'block', margin: 'auto' }} />
          <Box sx={{ flexGrow: 1 }} />
          <Image src="/reutlingen_hochschule_logo.png" alt="Reutlingen Hochschule Logo" width={300} height={50} style={{ width: '100%', maxWidth: 300, display: 'block', margin: 'auto' }} />
        </Box>

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
            Welcome to MLOps
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <MotionPaper>
              <div> 
                <Typography variant="h5" gutterBottom sx={{ color: '#3498db' }}>
                  What is MLOps?
                </Typography>
                <Typography variant="body1" sx={{ color: '#34495e' }}>
                  MLOps (Machine Learning Operations) is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently. It combines machine learning, DevOps, and data engineering to streamline the machine learning lifecycle.
                </Typography>
              </div>
            </MotionPaper>
          </Grid>

          <Grid item xs={12}>
            <MotionPaper>
              <Typography variant="h5" gutterBottom sx={{ color: '#3498db' }}>
                MLOps Lifecycle
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                <Image src="/mlops_lifecycle.png" alt="MLOps Lifecycle" width={600} height={400} style={{ width: '100%', maxWidth: 600, display: 'block', margin: 'auto' }} />
              </Box>
            </MotionPaper>
          </Grid>

          <Grid item xs={12}>
            <MotionPaper>
              <Typography variant="h5" gutterBottom sx={{ color: '#3498db' }}>
                Historical Development
              </Typography>
              <Typography variant="body1" sx={{ color: '#34495e', mb: 2 }}>
                The evolution from traditional software development to MLOps has been driven by the unique challenges posed by machine learning systems.
              </Typography>
              <Grid container spacing={2}>
                {[
                  { title: "ML Challenges", content: "ML systems face unique challenges such as data dependencies, experiment tracking, and model decay." },
                  { title: "DevOps Limitations", content: "While DevOps improved software development, it didn't address ML-specific issues like data versioning and model monitoring." },
                  { title: "Birth of MLOps", content: "MLOps emerged as a solution, combining ML, DevOps, and data engineering practices to address these challenges." }
                ].map((item, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <StyledCard>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.content}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </MotionPaper>
          </Grid>

          {principles.map((principle, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <MotionCard index={index} onClick={() => handleOpenModal(principle)}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {principle}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {principlesData[principle].slice(0, 100)}...
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>

        <Modal open={openModal} onClose={handleCloseModal}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '10px', maxWidth: 500 }}>
            <Typography variant="h6" gutterBottom>
              {selectedPrinciple}
            </Typography>
            <Typography variant="body1">
              {selectedPrinciple ? principlesData[selectedPrinciple] : ''}
            </Typography>
          </Box>
        </Modal>
      </MainContainer>
    </>
  );
};

export default Home;