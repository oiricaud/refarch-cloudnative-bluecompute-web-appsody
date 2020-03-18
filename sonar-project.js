const sonarqubeScanner =  require('sonarqube-scanner');
sonarqubeScanner(
    {
        serverUrl:  'http://sonarqube-sonarqube-tools.devops-gse-state-458654-0143c5dd31acd8e030a1d6e0ab1380e3-0001.us-east.containers.appdomain.cloud/',
        options : {
            'sonar.sources':  './',
            'sonar.tests':  './',
            'sonar.inclusions'  :  '**', // Entry point of your code
            'sonar.test.inclusions':  'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
            'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
        }
    }, () => {});

