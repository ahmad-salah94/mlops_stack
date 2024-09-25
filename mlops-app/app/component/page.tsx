'use client';

import React, { useState } from 'react';
import { Typography, Grid, Box, Card, CardContent, Modal, Avatar } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion, MotionProps } from 'framer-motion';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ScienceIcon from '@mui/icons-material/Science';
import ExtensionIcon from '@mui/icons-material/Extension';
import CodeIcon from '@mui/icons-material/Code';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CategoryIcon from '@mui/icons-material/Category';
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

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-5px)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
}));

// Create a new component that combines StyledCard and motion
const MotionCard = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof StyledCard> & MotionProps>((props, ref) => (
  <StyledCard ref={ref} {...props} />
));

MotionCard.displayName = 'MotionCard';

const componentsData = {
  "Data Versioning": {
    icon: <StorageIcon />,
    description: "Data versioning is a crucial technical component in MLOps, dealing with the systematic management of different versions of datasets. Similar to version control systems in software development (e.g., Git), data versioning allows for structured tracking, logging, and management of data changes. This enables exact reproducibility of ML experiments and maintains data integrity over time. By implementing data versioning tools like DVC (Data Version Control), teams can revert to previous data states, track changes, and ensure all team members work with consistent and accurate datasets."
  },
  "Central Data Repositories": {
    icon: <DataObjectIcon />,
    description: "Central data repositories play a crucial role in MLOps as they serve as primary repositories or starting points from which data for ML projects is sourced. They encompass a variety of sources, including internal databases, cloud storage platforms, APIs, and external datasets. A well-organized and reliable data source is crucial for the quality and efficiency of ML models, as the accuracy and relevance of the data used directly impacts the performance of the final model. Therefore, it is of utmost importance that the data sources are not only diverse and comprehensive but also accessible, secure, and compliant with data protection guidelines."
  },
  "Data Analysis": {
    icon: <AnalyticsIcon />,
    description: "In the MLOps landscape, data analysis is a fundamental step that significantly influences the quality and efficiency of machine learning. This phase involves careful examination, cleansing, and transformation of raw data to create a reliable basis for model training. In addition to data preparation, the analysis phase allows for the filtering of patterns and anomalies, which in turn supports informed model construction and feature selection. Tools like Jupyter Notebooks provide an interactive environment where data scientists can visualize, analyze, and gain initial insights to ensure that the datasets used correctly represent the problem to be solved."
  },
  "Experiment Management": {
    icon: <ScienceIcon />,
    description: "Experimenting with various ML algorithms and data is a central aspect of the development process for ML models. MLOps facilitates this process by introducing a dedicated experiment management component that enables systematic planning, execution, and monitoring of experiments. This is crucial for evaluating the effectiveness of different model approaches, hyperparameters, and datasets. By providing a central repository, e.g., through tools like MLFlow, experiments and results are stored in a versioned manner, ensuring reproducibility and transparency. Experiment management plays a crucial role in documenting all experiments and systematically identifying the best approaches."
  },
  "Feature Store": {
    icon: <ExtensionIcon />,
    description: "Feature engineering is a critical step in the ML process, where raw data is transformed into usable input vectors that can be directly fed into ML algorithms. The use of feature stores within the MLOps architecture revolutionizes this process by serving as a central repository that enables the storage, management, and systematic provision of feature datasets. This promotes consistent use of features across different ML models and teams, thereby improving model quality and performance. Feature stores not only facilitate the reuse and sharing of features but also support logging and version control, which are crucial for the traceability and reproducibility of ML experiments."
  },
  "Code Repository": {
    icon: <CodeIcon />,
    description: "In the world of MLOps, code repositories serve not only as central collection points for source code used for the development and training of ML models, but also for the storage and versioning of ML pipeline code. These repositories contribute significantly to the automation of the ML workflow by enabling the storage, versioning, and reuse of code required for pipeline management. They ensure that ML pipeline code is tested, validated, and prepared for production along with the model code. Furthermore, code repositories provide a structured development environment where different branches can be used to test different models, algorithms, or functions."
  },
  "Model Registry": {
    icon: <AccountTreeIcon />,
    description: "The Model Registry serves as a central repository for managing the developed ML models. It enables seamless tracking of a model's development process and provides the ability to easily access previous model versions. This facilitates the integration of models into CI/CD pipelines for automated testing and deployment. Additionally, it supports the structured cataloging of models and their metadata to simplify model search and monitoring."
  },
  "ML Pipeline Orchestration": {
    icon: <CategoryIcon />,
    description: "Within the MLOps structure, the orchestration of ML pipelines represents a critical technical component. It is responsible for the execution, automation, and coordination of the developed ML pipelines. The overarching coordination encompasses all phases of the ML workflow, starting from data collection and preprocessing through feature extraction to model training. The core component of this orchestration are the DAGs (Directed Acyclic Graphs). These are crucial for precisely defining the execution order of individual tasks in the ML pipelines while simultaneously clarifying their mutual dependencies."
  },
  "Model Serving": {
    icon: <CloudQueueIcon />,
    description: "Model serving is a critical phase in the ML pipeline where trained ML models are integrated into a production environment to provide predictions or analyses based on new, real-world data inputs. This phase can be realized through various mechanisms such as API endpoints, microservices, or batch processing processes, depending on the use case and requirements. Efficient model serving ensures fast and reliable model responses, which is crucial for user experience and the practical applicability of the ML solution. Furthermore, model serving is not limited to just providing predictions, but also includes managing the model lifecycle, including updates and A/B testing of different model versions to enable continuous improvements and adjustments."
  },
  "Model Monitoring": {
    icon: <MonitorHeartIcon />,
    description: "Model monitoring, an essential component of MLOps practice, is crucial for maintaining the accuracy, performance, and reliability of ML models in the production environment over the long term. It involves far more than just monitoring performance indicators; it includes a comprehensive assessment of the model state through continuous tracking of metrics such as accuracy, precision, recall, and F1-score. It also includes the detection of data deviations (data drift) and model deteriorations (model drift), which indicate that models are no longer functioning as expected with current data. Effective model monitoring identifies issues such as sudden deterioration in model performance (model drift) or changes in underlying data (data drift) and enables quick adjustments or retraining to keep models current and relevant."
  }
};

const Components: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState('');

  const handleOpenModal = (component: string) => {
    setSelectedComponent(component);
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
          MLOps Components
        </Typography>
      </motion.div>

      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Image
          src="/mlops stack.png"
          alt="MLOps Components"
          width={600}
          height={300}
          style={{ display: 'block', margin: 'auto' }}
        />
      </Box>

      <Grid container spacing={3}>
        {Object.entries(componentsData).map(([component, { icon, description }], index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MotionCard
              elevation={2}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleOpenModal(component)}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx={{ bgcolor: '#3498db', mb: 2, width: 56, height: 56 }}>
                  {icon}
                </Avatar>
                <Typography variant="h6" component="div" align="center" sx={{ color: '#2c3e50' }}>
                  {component}
                </Typography>
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
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom sx={{ color: '#3498db' }}>
            {selectedComponent}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color: '#34495e' }}>
            {componentsData[selectedComponent as keyof typeof componentsData]?.description}
          </Typography>
        </Box>
      </Modal>
    </MainContainer>
  );
};

Components.displayName = 'Components';

export default Components;