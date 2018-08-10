pipeline {
    agent {
		label ''
	}
    stages {
        stage('Build') {
            steps {
                bat 'npm i'
				bat 'npm run build'
				bat 'npm start'
            }
        }
    }
}