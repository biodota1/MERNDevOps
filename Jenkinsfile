pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
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
