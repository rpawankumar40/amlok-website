import angularLogo from '../assets/images/languages/angular.svg';
import automationLogo from '../assets/images/languages/automation.svg';
import awsLogo from '../assets/images/languages/aws.svg';
import azureLogo from '../assets/images/languages/azure.svg';
import cicdLogo from '../assets/images/languages/cicd.svg';
import dockerLogo from '../assets/images/languages/docker.svg';
import googleCloudLogo from '../assets/images/languages/gCloud.svg';
import genAiLogo from '../assets/images/languages/genAi.svg';
import javaLogo from '../assets/images/languages/java.svg';
import kafkaLogo from '../assets/images/languages/kafka.svg';
import kubernetesLogo from '../assets/images/languages/kubernetes.svg';
import machineLearningLogo from '../assets/images/languages/ml.svg';
import mongoLogo from '../assets/images/languages/mongo.svg';
import mysqlLogo from '../assets/images/languages/mysql.svg';
import nodeLogo from '../assets/images/languages/node.svg';
import postgresqlLogo from '../assets/images/languages/postgresql.svg';
import pythonLogo from '../assets/images/languages/python.svg';
import reactLogo from '../assets/images/languages/react.svg';
import springLogo from '../assets/images/languages/spring.svg';
import terraformLogo from '../assets/images/languages/terraform.svg';

import amazonClientLogo from '../assets/images/clients/amazon.svg';
import barclaysClientLogo from '../assets/images/clients/barclays.svg';
import bankOfAmericaLogo from '../assets/images/clients/boa.svg';
import blackRockLogo from '../assets/images/clients/blackRock.svg';
import ciscoClientLogo from '../assets/images/clients/cisco.svg';
import chaseLogo from '../assets/images/clients/chase.svg';
import citiLogo from '../assets/images/clients/citi.svg';
import goldmanSachsLogo from '../assets/images/clients/goldmanSachs.svg';
import morganStanleyLogo from '../assets/images/clients/morganStanley.svg';
import wellsFargoLogo from '../assets/images/clients/wellsFargo.svg';

export const technologyLogos = [
  { name: 'Java', category: 'Backend', src: javaLogo },
  { name: 'Spring Boot', category: 'Backend', src: springLogo },
  { name: 'Node.js', category: 'Backend', src: nodeLogo },
  { name: 'Python', category: 'Backend', src: pythonLogo },
  { name: 'React', category: 'Frontend', src: reactLogo },
  { name: 'Angular', category: 'Frontend', src: angularLogo },
  { name: 'AWS', category: 'Cloud', src: awsLogo },
  { name: 'Microsoft Azure', category: 'Cloud', src: azureLogo },
  { name: 'Google Cloud', category: 'Cloud', src: googleCloudLogo },
  { name: 'Docker', category: 'DevOps', src: dockerLogo },
  { name: 'Kubernetes', category: 'DevOps', src: kubernetesLogo },
  { name: 'Terraform', category: 'DevOps', src: terraformLogo },
  { name: 'CI/CD', category: 'DevOps', src: cicdLogo },
  { name: 'PostgreSQL', category: 'Data', src: postgresqlLogo },
  { name: 'MySQL', category: 'Data', src: mysqlLogo },
  { name: 'MongoDB', category: 'Data', src: mongoLogo },
  { name: 'Apache Kafka', category: 'Data', src: kafkaLogo },
  { name: 'Generative AI', category: 'AI', src: genAiLogo },
  { name: 'Machine Learning', category: 'AI', src: machineLearningLogo },
  { name: 'Intelligent Automation', category: 'AI', src: automationLogo },
];

const commons = 'https://upload.wikimedia.org/wikipedia/commons';

export const clientLogos = [
  { name: 'JPMorgan Chase', src: chaseLogo },
  { name: 'Fiserv', src: `${commons}/0/00/Fiserv_Logo.svg`, source: 'Wikimedia Commons, public domain' },
  { name: 'Bank of America', src: bankOfAmericaLogo },
  { name: 'Citi', src: citiLogo },
  { name: 'BlackRock', src: blackRockLogo },
  { name: 'Progressive Insurance', src: `${commons}/d/d8/Logo_of_the_Progressive_Corporation.svg`, source: 'Wikimedia Commons, public domain' },
  { name: 'Amazon', src: amazonClientLogo },
  { name: 'PNC', src: `${commons}/0/05/PNC_LOGO.jpg`, source: 'Wikimedia Commons, CC BY-SA 4.0, Khannasuraj' },
  { name: 'Wells Fargo', src: wellsFargoLogo },
  { name: 'Goldman Sachs', src: goldmanSachsLogo },
  { name: 'Morgan Stanley', src: morganStanleyLogo },
  { name: 'BNY Mellon', src: `${commons}/a/a2/BNY_Mellon.svg`, source: 'Wikimedia Commons, public domain' },
  { name: 'Barclays', src: barclaysClientLogo },
  { name: 'Cisco', src: ciscoClientLogo },
];