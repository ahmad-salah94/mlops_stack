"use client"

import { ArcherContainer, ArcherElement } from "react-archer"
import { Stack } from "./stack"

import { 
    data_analysis, 
    experimentation,
    feature_store,
    code_repository,
    ml_pipeline,
    model_registry,
    model_serving,
    experimentTracking_metadataStore,
    model_monitoring
} from "@/lib/data"

export const StackContainer = () => {
    return (
        <div>
            <ArcherContainer strokeColor="black">

                {/* First Row */}
                <div className="flex flex-row justify-between items-center pt-12 mx-auto w-[900px]">
                    <ArcherElement 
                        id="Stack1" 
                        relations={[
                            {
                                targetId: "Stack2",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack3",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="Data Analysis" 
                                data={data_analysis}
                                stackDescription="Data Analysis is the process of inspecting, cleansing, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making. This involves using statistical, computational, and analytical techniques to identify patterns, trends, and relationships within data. Data analysis is critical across various domains, including business, science, engineering, and social sciences, enabling stakeholders to make data-driven decisions. The process can range from simple descriptive statistics to complex machine learning or data mining techniques. Effective data analysis helps organizations understand their environment, evaluate performance, and predict future trends, thereby facilitating strategic planning and operational efficiency."
                            />
                        </div>
                    </ArcherElement>

                    <ArcherElement 
                        id="Stack2"
                        relations={[
                            {
                                targetId: "Stack4",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="Experimentation" 
                                data={experimentation}
                                stackDescription="Experimentation involves designing experiments, collecting data, analyzing results, and drawing conclusions to advance knowledge or solve specific problems. In business and product development, experimentation can refer to A/B testing or multivariate testing, where different versions of a product are presented to users to determine which one performs better based on defined metrics. Effective experimentation allows for data-driven decision-making, innovation, and continuous improvement in various fields, from scientific research to marketing strategies."
                            />
                        </div>
                    </ArcherElement>

                    <div />

                    <div />
                    
                </div>

                {/* Second Row */}
                <div className="flex flex-row justify-between items-center pt-20 mx-auto w-[900px]">
                    <ArcherElement 
                        id="Stack3" 
                        relations={[
                            {
                                targetId: "Stack1",
                                targetAnchor: "bottom",
                                sourceAnchor: "top",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack5",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack7",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackStorage" 
                                stackHeading="Feature Store"
                                data={feature_store}
                                stackDescription="A Feature Store is a centralized repository designed to store, manage, and serve features for machine learning models. It acts as a bridge between data engineering and machine learning teams, ensuring that features used for training models are consistent with those used in production environments. This system enables the reuse of features across different models, improves collaboration, and accelerates the development of machine learning projects. By maintaining a catalog of feature definitions and metadata, the feature store ensures data consistency, versioning, and governance. Additionally, it supports real-time and batch data processing, facilitating efficient feature engineering and serving for a variety of machine learning applications." 
                            />
                        </div>
                    </ArcherElement>

                    <ArcherElement 
                        id="Stack4" 
                        relations={[
                            {
                                targetId: "Stack5",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackStorage" 
                                stackHeading="Code Repository" 
                                data={code_repository}
                                stackDescription="A Code Repository is a central location where developers store, manage, and track their source code. It is an essential tool for version control, allowing multiple developers to work on the same project without conflicts. Code repositories support the tracking of changes, collaboration, and the maintenance of different versions of code, making it easier to revert to previous states if needed. They facilitate continuous integration and delivery by enabling automated builds and tests. Commonly used in software development and engineering practices, code repositories play a crucial role in project management, code review, and deployment processes."
                            />
                        </div>
                    </ArcherElement>

                    <div />

                    <div />
                    
                </div>

                {/* Third Row */}
                <div className="flex flex-row justify-between items-center pt-32 mx-auto w-[900px]">
                    <div />
                    
                    <ArcherElement 
                        id="Stack5"
                        relations={[
                            {
                                targetId: "Stack6",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            },
                            {
                                targetId: "Stack8",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="ML pipeline" 
                                data={ml_pipeline}
                                stackDescription="An ML pipeline is a sequence of steps designed to automate the process of data preparation, model training, evaluation, and deployment in machine learning projects. Each step in the pipeline corresponds to a particular phase of the machine learning lifecycle, including data collection, preprocessing, feature extraction, model fitting, and prediction serving. Pipelines ensure that the workflow is reproducible, scalable, and maintainable. They enable data scientists and engineers to streamline model development and deployment, reduce manual errors, and facilitate continuous integration and delivery of machine learning models. Additionally, ML pipelines support version control and collaboration, allowing teams to efficiently manage and update models as data and requirements change."
                            />
                        </div>
                    </ArcherElement>

                    <ArcherElement 
                        id="Stack6" 
                        relations={[
                            {
                                targetId: "Stack7",
                                targetAnchor: "left",
                                sourceAnchor: "right",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackStorage" 
                                stackHeading="Model Registry" 
                                data={model_registry}
                                stackDescription="A Model Registry is a centralized repository where machine learning models are stored, versioned, and managed throughout their lifecycle. It serves as a single source of truth for an organization's machine learning assets, allowing data scientists and engineers to collaboratively manage, track, and audit models. The registry typically supports version control, model metadata documentation, and stage transitions (e.g., from development to staging to production). This enables consistent deployment, monitoring, and governance of models, ensuring that only approved and vetted models are deployed in production environments."
                            />
                        </div>
                    </ArcherElement>

                    <ArcherElement 
                        id="Stack7" 
                        relations={[
                            {
                                targetId: "Stack9",
                                targetAnchor: "top",
                                sourceAnchor: "bottom",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="Model Serving" 
                                data={model_serving}
                                stackDescription="Model Serving refers to the process of deploying and making a machine learning model available for use in a production environment. This involves hosting the model in a way that it can receive input data, perform predictions or analyses, and return the results. Model serving can be implemented in various ways, including through RESTful APIs, batch processing, or streaming data pipelines. The choice of serving method depends on the requirements for latency, throughput, and scalability. Effective model serving ensures that models are accessible, reliable, and efficient, enabling real-time decision making and automation in applications."
                            />
                        </div>
                    </ArcherElement>
                    
                </div>

                {/* Fourth Row */}
                <div className="flex flex-row justify-between items-center pt-20 mx-auto w-[900px]">
                    
                    
                    <ArcherElement id="Stack8" >
                        <div>
                            <Stack 
                                stackType="stackStorage" 
                                stackHeading="experiment Tracking" 
                                data={experimentTracking_metadataStore}
                                stackDescription="Experiment tracking, often coupled with a metadata store, is a crucial component of the machine learning lifecycle. It involves recording and organizing data about each experiment run, including parameters, metrics, and outcomes. This systematic logging enables data scientists and ML engineers to compare different models, understand changes over time, and reproduce results. A metadata store, on the other hand, is a repository where this experiment-related data is kept. It contains details about the experiments, models, datasets, and their versions. Together, experiment tracking and metadata storage provide a structured framework for managing machine learning workflows, facilitating analysis and collaboration, and ensuring that ML projects are transparent, reproducible, and scalable."
                            />
                        </div>
                    </ArcherElement>

                    <div />

                    <ArcherElement 
                        id="Stack9"
                        relations={[
                            {
                                targetId: "Stack5",
                                targetAnchor: "bottom",
                                sourceAnchor: "left",
                                style: { 
                                    strokeColor: "black",
                                    strokeWidth: 2,
                                },
                            }
                        ]}
                    >
                        <div>
                            <Stack 
                                stackType="stackBox" 
                                stackHeading="Model Monitoring" 
                                data={model_monitoring}
                                stackDescription="Model monitoring refers to the continuous oversight of machine learning models in production to ensure they perform as expected over time. This involves tracking various metrics such as model accuracy, prediction drift, and response times, as well as monitoring the quality of input data to detect anomalies or shifts in data distribution. Effective model monitoring helps identify performance degradation, data drift, or operational issues, enabling timely interventions such as model retraining, updating, or rollback. This process is critical for maintaining the reliability and effectiveness of machine learning models in real-world applications, ensuring they continue to deliver value and make accurate predictions as conditions change."
                            />
                        </div>
                    </ArcherElement>
                    
                </div>

            </ArcherContainer>
        </div>
    )
}