pipeline {
    agent any
    stages {
        stage('Run tests') {
            steps {
                sh 'make'
            }
        }
        stage('Build') {
            steps {
                sh 'make build_images'
            }
        }
        stage('Deploy') {
            steps {
                sh 'make deploy'
            }
        }
    }
}
