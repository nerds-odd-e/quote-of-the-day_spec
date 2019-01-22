pipeline {
    agent any
    stages {
        stage('Run tests') {
            steps {
                sh 'make'
            }
        }
        stage('Deploy') {
            steps {
                sh 'make deploy'
            }
        }
    }
}