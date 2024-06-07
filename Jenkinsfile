pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    docker.build("express-be:${env.BUILD_ID}")
                    docker.withRegistry('http://your-docker-registry-url/', 'docker-credentials-id') {
                        docker.image("express-be:${env.BUILD_ID}").push()
                    }
                }
            }
        }
    }
}