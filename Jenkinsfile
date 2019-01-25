node('master') {
    dir('quote-of-the-day_spec') {
        git url: 'https://github.com/nerds-odd-e/quote-of-the-day_spec.git'
    }
    dir('quote-of-the-day_backend') {
        git url: 'https://github.com/nerds-odd-e/quote-of-the-day_backend.git'
    }
    dir('quote-of-the-day_bff') {
        git url: 'https://github.com/nerds-odd-e/quote-of-the-day_bff.git'
    }
    dir('quote-of-the-day_react') {
        git url: 'https://github.com/nerds-odd-e/quote-of-the-day_react.git'
    }

    stage('Run NOT WIP tests') {
        sh 'cd quote-of-the-day_spec && make test-not-wip'
    }
    stage('Build') {
        sh 'cd quote-of-the-day_spec && make build'
    }
    stage('Deploy') {
        sh 'cd quote-of-the-day_spec && make deploy'
    }
    stage('Run ALL tests') {
        sh 'cd quote-of-the-day_spec && make test'
    }
}
