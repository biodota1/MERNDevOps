pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Build Docker image
                    def app = docker.build("express-be:${env.BUILD_ID}")
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    // Test Docker image
                    docker.image("express-be:${env.BUILD_ID}").inside {
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy Docker image (replace with your deployment strategy)
                    docker.image("express-be:${env.BUILD_ID}").run('-p 3000:3000')
                }
            }
        }
    }
}
