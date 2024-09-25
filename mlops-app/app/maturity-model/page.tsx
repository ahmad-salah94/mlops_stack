'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Typography, Grid, Box, Card, CardContent, Modal, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, MotionProps } from 'framer-motion';

// Styled components
const MainContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
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
  },
}));

// Create a custom motion component
const MotionCard = motion(React.forwardRef<HTMLDivElement, React.ComponentProps<typeof StyledCard> & MotionProps>((props, ref) => (
  <StyledCard ref={ref} {...props} />
)));
MotionCard.displayName = 'MotionCard';

const maturityModels = {
  "Google MLOps Maturity Model": {
    stages: [
      {
        name: "Stage 0: Manual Process",
        description: "Reflects a traditional approach in data science, heavily relying on manual, script-driven, and interactive processes. All steps from data analysis to model validation are performed manually."
      },
      {
        name: "Stage 1: ML Pipeline Automation",
        description: "Focus on automating the ML pipeline. This marks a fundamental transformation from manual to a systematic approach. Continuous Training (CT) is implemented, creating the foundation for rapid and iterative development cycles."
      },
      {
        name: "Stage 2: CI/CD Pipeline Automation",
        description: "Encompasses full automation of CI/CD processes. This stage marks the transition to a highly developed MLOps approach, where the entire ML pipeline from development through testing to production is automated."
      }
    ]
  },
  "Microsoft MLOps Maturity Model": {
    stages: [
      {
        name: "Stage 0: No MLOps",
        description: "No specialized data science teams. ML projects are rare and not integrated into the general business strategy. Data processing occurs in isolated silos, and there's a lack of integration of required data for ML."
      },
      {
        name: "Stage 1: DevOps but no MLOps",
        description: "Companies use automated DevOps pipelines to support software development. However, the ML model is still manually managed within applications."
      },
      {
        name: "Stage 2: Automated Training",
        description: "Establishment of centralized model management and automated training pipelines improves consistency and reuse of models. There's beginning coordination between data science and engineering teams."
      },
      {
        name: "Stage 3: Automated Model Deployment",
        description: "Model tests are automated and deployment to the production environment is enabled. This achieves closer integration between the ML model lifecycle and production processes."
      },
      {
        name: "Stage 4: Full MLOps Automated Operations",
        description: "All operations around ML models are fully automated. This includes initial and repeated training, deployment, and monitoring. Advanced monitoring mechanisms continuously check model performance."
      }
    ]
  }
};

const MaturityModel: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedStage, setSelectedStage] = useState<{ name: string; description: string } | null>(null);

  const handleOpenModal = (model: string, stage: { name: string; description: string }) => {
    setSelectedStage(stage);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
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
          MLOps Maturity Models
        </Typography>
      </motion.div>

      <StyledPaper elevation={3} sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Image src="/mlops_mat_model.png" alt="MLOps Maturity Models" width={600} height={400} layout="responsive" />
      </StyledPaper>

      <Grid container spacing={4}>
        {Object.entries(maturityModels).map(([model, { stages }], index) => (
          <Grid item xs={12} md={6} key={index}>
            <Typography variant="h5" gutterBottom sx={{ color: '#3498db', fontWeight: 'bold' }}>
              {model}
            </Typography>
            {stages.map((stage, stageIndex) => (
              <MotionCard
                key={stageIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stageIndex * 0.1 }}
                onClick={() => handleOpenModal(model, stage)}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#2c3e50' }}>{stage.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stage.description.substring(0, 100)}...
                  </Typography>
                </CardContent>
              </MotionCard>
            ))}
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
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom sx={{ color: '#3498db' }}>
            {selectedStage?.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: '#34495e' }}>
            {selectedStage?.description}
          </Typography>
        </Box>
      </Modal>
    </MainContainer>
  );
};

export default MaturityModel;