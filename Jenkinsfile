pipeline {
    agent {
        node {
            dir('quote-of-the-day_backend') {
                git url: 'https://github.com/nerds-odd-e/quote-of-the-day_backend.git'
            }
            dir('quote-of-the-day_bff') {
                git url: 'https://github.com/nerds-odd-e/quote-of-the-day_bff.git'
            }
            dir('quote-of-the-day_react') {
                git url: 'https://github.com/nerds-odd-e/quote-of-the-day_react.git'
            }
        }
    }

    stages {
        stage('Run tests') {
            steps {
                sh 'make'
            }
        }
        stage('Build') {
            steps {
                sh 'make build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'make deploy'
            }
        }
    }
}
