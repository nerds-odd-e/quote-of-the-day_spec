pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/nerds-odd-e/quote-of-the-day_backend.git'
                git url: 'https://github.com/nerds-odd-e/quote-of-the-day_bff.git'
                git url: 'https://github.com/nerds-odd-e/quote-of-the-day_react.git'
            }
        }
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
