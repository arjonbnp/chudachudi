# Political Crime Database

This is a web application that allows users to report and view political crimes. The system provides a database to store crime records with information like Case ID, Crime Type, Location, Date, and Description. The data is stored in a MongoDB database and can be accessed via an API.

## Features
- **Add new crime records**: Users can add new political crime records.
- **View crime records**: Users can view the list of all political crime records.
- **Search functionality**: Users can search crime records by crime type, location, or description.
- **Dark theme design**: The user interface has a dark theme for better readability.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Hosting**: Can be hosted on platforms like Heroku or Vercel

## Installation Instructions

### Prerequisites
Make sure you have the following software installed on your local machine:
- **Node.js** (v14.x or higher) - [Install Node.js](https://nodejs.org/)
- **MongoDB** (for local development) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud database.

### Steps to Run the Project Locally

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/political-crime-database.git
    cd political-crime-database
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB:
    - If you're using MongoDB locally, make sure your MongoDB server is running. 
    - Alternatively, you can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud database and update the connection string in `server.js`.

4. Start the server:
    ```bash
    node server.js
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

### API Endpoints
- **POST** `/add-crime`: Add a new crime record to the database.
    - **Request Body**:
      ```json
      {
        "caseID": "123",
        "crimeType": "Bribery",
        "location": "Dhaka",
        "date": "2025-04-01",
        "description": "Bribery case involving local officials."
      }
      ```
- **GET** `/get-crimes`: Retrieve all crime records stored in the database.

### Frontend
- The frontend provides a user interface to add, view, and search political crime records.
- The search box allows users to filter records by crime type, location, or description.

## Deployment

If you want to deploy this project on a platform like **Heroku**, follow these steps:

1. Create a Heroku account and install the Heroku CLI.
2. Run the following commands to deploy the app:
    ```bash
    heroku create
    git push heroku main
    heroku open
    ```

Alternatively, you can deploy the app on **Vercel** by connecting the GitHub repository to Vercel.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
