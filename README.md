### Appsody Blue Compute Application 

To get this going, clone this repository and do the following steps. 

Get sonarkube running locally. admin/admin

  `docker-compose -f docker-compose.sonar.yml up -d` 

Get your project running



  `npm install ; npm install -D sonarqube-scanner jest-sonar-reporter supertest ; npm install --save express jest`
  `npm start`
  

  `npm run test`
  
  `npm run sonar`
  
Ensure the url is something along the lines `http://sonarqube-sonarqube-tools.devops-gse-state-209696-0143c5dd31acd8e030a1d6e0ab1380e3-0000.us-east.containers.appdomain.cloud"`
