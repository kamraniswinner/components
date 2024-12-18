pipeline {
    agent any

    environment {
        GITHUB_CREDENTIALS = 'github-token'         // GitHub Personal Access Token
        DOCKER_HUB_CREDENTIALS = 'docker-hub-credentials' // Docker Hub credentials
        DOCKER_IMAGE = 'kamran7777777/components'   // Docker image name
        DOCKER_TAG = 'latest'                       // Docker image tag
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Clone the GitHub repository
                git branch: 'main', credentialsId: "${GITHUB_CREDENTIALS}", url: 'https://github.com/kamraniswinner/components.git'
            }
        }

        stage('Build Project') {
            steps {
                // Build the project (replace with your build command)
                sh 'npm install && npm run build'
            }
        }


        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKER_HUB_CREDENTIALS}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh """
                    echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                    """
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Pipeline failed. Check the logs for details.'
        }
    }
}
