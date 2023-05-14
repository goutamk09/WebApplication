# People Management Web Application

This is a simple web application that allows users to manage a list of people data. Users can add new people with name and description, view all people in the list, and search for people by name.

## Technical Requirements

- Java 11 for the backend. Spring Boot is used to create a simple REST API.
- ReactJS for the frontend. The ReactJS application communicates with the backend API to add, view, and search people.
- In-memory database to store people data. H2 Database is used to create a simple and lightweight database.
- Clear, readable, and well-documented code.

## Running the Application
To run the application, follow the instructions below:

Clone the GitHub repository to your local machine.
Navigate to the root directory of the project.
Start the backend server by running the following command: ./mvnw spring-boot:run.
Navigate to the frontend directory by running cd frontend.
Install the dependencies by running npm install.
Start the frontend server by running npm start.
The application can be accessed at http://localhost:3000/.

## Installation

1. Clone this repository to your local machine using the command `git clone https://github.com/your-username/people-management-webapp.git`
2. Navigate to the project directory with `cd people-management-webapp`
3. Install the frontend dependencies with `npm install` command
4. Open a new terminal window and navigate to the project directory
5. Start the backend server by running the command `./mvnw spring-boot:run`
6. Start the frontend server by running the command `npm start`
7. Open your web browser and go to `http://localhost:3000/` to view the application

## Functionality

### Add New Person

1. Click on the "Add Person" button on the top right corner of the page.
2. Fill in the "Name" and "Description" fields.
3. Click on the "Save" button to add the person to the list.

### View All Person

1. All people in the list will be displayed on the home page. Each person card displays the person's name and description.

### Search for Person

1. Type the name of the person you want to search in the search box on the top right corner of the page.
2. The application will display all the people whose name matches the search query.

## Conclusion

This web application is a simple way to manage a list of person details. It allows users to add new details, view all details in the list, and search for details by name. It is built using Java and ReactJS, and uses an in-memory database to store the details.
