pipeline {
    agent {
		label ''
	}
    stages {
        stage('Build') {
            steps {
                bat 'npm build'
				bat 'npm start'
            }
        }
    }
}