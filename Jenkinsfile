pipeline {
    agent any
    stages {
        stage('Docker build react') {
            steps {
                echo "docker build . -t quote-of-the-day_react"
            }
        }
        stage('Docker build bff') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}