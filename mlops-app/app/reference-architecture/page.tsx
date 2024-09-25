'use client';

import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import for image optimization

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

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  fontWeight: 'bold',
  color: '#2c3e50',
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
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

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.7)',
  marginBottom: theme.spacing(2),
  borderRadius: '10px !important',
  '&:before': {
    display: 'none',
  },
}));

const StyledList = styled(List)(({ theme }) => ({
  padding: theme.spacing(2),
  '& .MuiListItem-root': {
    marginBottom: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '8px',
    padding: theme.spacing(2),
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  },
}));

const MLOpsReferenceArchitecture = () => {

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MainContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3" gutterBottom align="center" sx={{ color: '#3498db', marginBottom: 4, fontWeight: 'bold' }}>
          MLOps Reference Architecture
        </Typography>
      </motion.div>

      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom sx={{ color: '#2980b9' }}>
          Overview
        </Typography>
        <Typography paragraph>
          This MLOps Reference Architecture provides a structured framework for managing the entire machine learning (ML) project lifecycle. It encompasses key phases, from project initiation and data management to automated workflow pipelines, ensuring efficiency, reproducibility, and collaboration.
        </Typography>
        <Typography paragraph>
          The architecture integrates essential MLOps components such as Git repository, feature store, model registry, model serving, model monitoring, and workflow orchestration.
        </Typography>
        <Typography paragraph sx={{ fontStyle: 'italic', color: '#7f8c8d' }}>
          Note: The &quot;Central Data Repository&quot; is not explicitly detailed in this architecture. The specific approach to data management will depend on your organization&apos;s needs, technology stack, and existing infrastructure.
        </Typography>
      </StyledPaper>

      <Box sx={{ marginBottom: 4 }}>
        <SectionTitle variant="h5" gutterBottom>
          Architecture Diagram
        </SectionTitle>
        <StyledPaper elevation={3} sx={{ textAlign: 'center' }}>
          <Image
            src="/referenzarchitektur.jpg"
            alt="MLOps Lifecycle"
            width={800}
            height={400}
            style={{ display: 'block', margin: 'auto' }}
          />
        </StyledPaper>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <SectionTitle variant="h4" gutterBottom>
          Implementation Strategy
        </SectionTitle>

        {[
          {
            title: '1. Analysis and Planning',
            content: [
              'Requirements Workshop: A comprehensive workshop with representatives from all involved disciplines to define the problem statement and project objectives.',
              'Vision and KPI Definition: Establish a clear project vision and develop measurable Key Performance Indicators (KPIs) for success.',
              'ML Lifecycle Analysis: Thoroughly analyze each phase of the ML lifecycle, identifying challenges and areas requiring targeted support.',
              'Data Investigation: Conduct an intensive analysis of selected data examples to understand key features and potential challenges.',
              'Assignment of Roles and Responsibilities: Clearly define roles and responsibilities within the team to ensure efficient collaboration.',
              'Consideration of Legal Frameworks: Carefully consider security aspects, data protection regulations, and governance requirements for legal compliance.'
            ]
          },
          {
            title: '2. Requirements Analysis, Conception, and Technology Stack Selection',
            content: [
              'Requirements Analysis: Delve into the organizational needs for ML projects, covering both technical and business requirements.',
              'Conception: Develop a detailed conceptual design for the MLOps architecture, outlining the workflow structure and specifying governance and collaboration frameworks.',
              'Technology Stack Selection: Select tools and platforms that meet the project\'s current needs and remain adaptable for future requirements, considering factors like compatibility, community support, and integration capabilities.'
            ]
          },
          {
            title: '3. Implementation of Technical Components',
            content: (
              <Table sx={{ marginBottom: 4 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Activity</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Component</TableCell>
                    <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[
                    { activity: 'MO1', component: 'Setup of the Git Repository', description: 'Establishment of a centralized version control system for collaboration and code management.' },
                    { activity: 'MO2', component: 'Setup of a Data Repository', description: 'Establishment of robust data management practices for data integrity and security.' },
                    { activity: 'MO3', component: 'Configuration of the Feature Store', description: 'Implementation of a storage solution for ML features to promote reusability and consistency.' },
                    { activity: 'MO4', component: 'Setup of the Model Registry', description: 'Creation of a solution for managing and versioning ML models.' },
                    { activity: 'MO5', component: 'Integration of the Experiment Tracking System', description: 'Setup of a platform for tracking and analyzing model experiments.' },
                    { activity: 'MO6', component: 'Orchestration of the ML Pipeline', description: 'Integration of workflow orchestration to automate and optimize the ML pipeline.' },
                    { activity: 'DO1', component: 'Configuration of the CI/CD Component', description: 'Implementation of automated workflows for efficient and reliable model deployment.' },
                    { activity: 'MODO1', component: 'Establishment of the Model Serving Component', description: 'Provision of a system for hosting and serving ML models.' },
                    { activity: 'MODO2', component: 'Activation of Model Monitoring', description: 'Setup of monitoring tools for continuous assessment of model performance.' },
                  ].map((row, index) => (
                    <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}>
                      <TableCell>{row.activity}</TableCell>
                      <TableCell>{row.component}</TableCell>
                      <TableCell>{row.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )
          },
          {
            title: '4. Prototyping, Validation, and Iteration',
            content: [
              'Create an initial prototype to test and validate the functionality and effectiveness of the architecture.',
              'Based on the prototyping results, make necessary adjustments and improvements.',
              'Iterate continuously to incorporate feedback from users and stakeholders.'
            ]
          },
          {
            title: '5. Final Documentation and Training',
            content: [
              'Thoroughly document the final architecture and implementation strategy for clarity and ease of use.',
              'Train all affected teams on the new technologies, processes, and best practices to ensure knowledge transfer.'
            ]
          },
        ].map((phase, index) => (
          <StyledAccordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ color: '#34495e' }}>{phase.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Use a conditional to render either the list or the table */}
              {Array.isArray(phase.content) ? (
                <StyledList>
                  {phase.content.map((item, itemIndex) => (
                    <ListItem key={itemIndex}>
                      <ListItemText primary={<Typography>{`${itemIndex + 1}. ${item}`}</Typography>} />
                    </ListItem>
                  ))}
                </StyledList>
              ) : (
                phase.content // Render the table directly
              )}
            </AccordionDetails>
          </StyledAccordion>
        ))}
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <SectionTitle variant="h4" gutterBottom>
          Key Components
        </SectionTitle>
        <StyledPaper elevation={3}>
          <Table sx={{ marginBottom: 4 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Component</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { component: 'Git Repository', description: 'Version control for code and artifacts, ensuring transparency and collaborative development.' },
                { component: 'Feature Store', description: 'Centralized storage for features used in model training and prediction, enabling efficient feature reuse and consistency.' },
                { component: 'Model Registry', description: 'Tracks and manages trained models, providing version control, metadata, and streamlined deployment.' },
                { component: 'Model Serving', description: 'Deploys models for real-time predictions and batch inference, ensuring scalability and accessibility for various applications.' },
                { component: 'Model Monitoring', description: 'Tracks model performance and data quality, enabling proactive maintenance and ensuring model stability.' },
                { component: 'Workflow Orchestration', description: 'Automates the ML workflow pipeline, streamlining processes and promoting efficient execution of complex tasks.' },
              ].map((row, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}>
                  <TableCell>{row.component}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledPaper>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <SectionTitle variant="h4" gutterBottom>
          Actors in the MLOps Process
        </SectionTitle>
        <StyledPaper elevation={3}>
          <Table sx={{ marginBottom: 4 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Actor</TableCell>
                <TableCell sx={{ fontWeight: 'bold', color: '#2c3e50' }}>Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { actor: 'Business Stakeholder (BS)', description: 'Define business problems and KPIs, aligning ML projects with business goals.' },
                { actor: 'MLOps Engineers (MO)', description: 'Responsible for MLOps infrastructure, automation, and the end-to-end ML lifecycle.' },
                { actor: 'Data Engineers (DE)', description: 'Create and maintain data infrastructure for ML projects, ensuring data accessibility and quality.' },
                { actor: 'Data Scientists (DS)', description: 'Develop ML models, conduct experiments, and validate model performance.' },
                { actor: 'DevOps Engineers (DO)', description: 'Support MLOps and data engineering teams with infrastructure and CI/CD pipelines, ensuring smooth integration and deployment.' },
              ].map((row, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}>
                  <TableCell>{row.actor}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledPaper>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <SectionTitle variant="h4" gutterBottom>
          Conclusion
        </SectionTitle>
        <StyledPaper>
          <Typography paragraph>
            This MLOps reference architecture provides a robust framework for organizations to build successful, scalable, and efficient ML projects. By embracing a systematic and collaborative approach, it empowers teams to overcome common challenges, enhance reproducibility, and achieve sustainable business outcomes.
          </Typography>
        </StyledPaper>
      </Box>
    </MainContainer>
  );
};

export default MLOpsReferenceArchitecture;