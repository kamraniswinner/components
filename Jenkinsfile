pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "kamran7777777/components"
        //SONARQUBE_TOKEN = credentials('sonarqube-token') // Update with your SonarQube token
        //SONAR_HOST_URL = 'http://localhost:9000' // Replace with your SonarQube host URL
        //SCANNER_CLI_VERSION = '4.8.0.2856' // Change version as needed
        //JAVA_HOME = '/usr/lib/jvm/java-1.17.0-openjdk-amd64' // Update this path to your Java 17 installation
        //SNYK_TOKEN = credentials('21db75b6-b23c-4b44-9e8e-02685993df22') // Update with your Snyk token
        //DEPENDENCY_CHECK_HOME = "${env.WORKSPACE}/Downloads/dependency-check"
        //SONAR_NODEJS_EXECUTABLE = '/usr/bin/node' // Path to Node.js executable
    }

    stages {
        stage('Check Node.js Version') {
            steps {
                sh 'sudo apt-get install -y nodejs'
                sh 'node -v' // checking node version
                sh 'npm -v' 
            }
        }

        stage('Checkout') {
            steps {
                git 'https://github.com/kamraniswinner/components.git'
            }
        }

        stage('Check Project Directory') {
            steps {
                script {
                    def packageJson = "${env.WORKSPACE}/package.json"
                    if (fileExists(packageJson)) {
                        echo "package.json found at ${packageJson}."
                    } else {
                        error "package.json not found at ${packageJson}."
                    }
                }
            }
        }

        stage('Update Dependencies'){
            steps {
                script {
                    sh '''
                        echo "Checking for outdated dependencies..."
                        npm outdated || echo "Error occurred during npm outdated"
                        echo "Updating dependencies..."
                        npm update --silent || echo "Error occurred during npm update"
                        echo "Reinstalling updated dependencies..."
                        npm install || echo "Error occurred installing npm update"
                    '''
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    sh 'pwd' // Print current directory
                    sh 'ls -la' // List all files and permissions
                    sh 'npm config list' // Print npm configuration
                    sh 'npm install --silent'
                    sh 'npm run build'
                }
            }
        }

        
        stage('Build Docker Image') {
            steps {
                script {
                   sh "docker build -t ${DOCKER_IMAGE}:latest ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    try {
                        withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                            sh '''
                                echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                                docker push ${DOCKER_IMAGE}:latest
                            '''
                        }
                        echo 'Successfully pushed Docker image to Docker Hub'
                    } catch (Exception e) {
                        echo "Failed to push Docker image to Docker Hub: ${e.message}"
                        currentBuild.result = 'FAILURE'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Build, Docker image creation, and push successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
