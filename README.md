# Session Recorder

This project is a session recorder application that collects session data, including the user's IP address, a randomly generated session ID, URL parameters, and the timestamp of the session. The collected data is stored in Airtable and can be accessed through an API endpoint.

## Design and Assumptions

The application is designed as a Node.js and Express.js server that serves a client-side script to be added to any webpage. The client-side script collects the required session data and sends it to the server via an API endpoint. The server then populates the data into Airtable using the Airtable API.

Assumptions:

- The Airtable account and base are already set up with the necessary tables and fields.
- The Airtable API key and base ID are provided as environment variables.
- The client-side script is added to the webpage using a `<script>` tag.

## Installation and Setup

1. Clone the repository:

git clone https://github.com/your-username/session-recorder.git
Copy
Navigate to the project directory:
cd session-recorder
Copy
Install the dependencies:
npm install
Copy
Set up Airtable:

Create an Airtable account if you don't have one already.
Create a new base and set up the necessary tables and fields.
Obtain your Airtable API key and base ID.
Configure the environment variables:

Create a .env file in the root directory.

Add the following variables to the .env file:

AIRTABLE_API_KEY=your-airtable-api-key
AIRTABLE_BASE_ID=your-airtable-base-id
Copy
Start the server:

npm start
Copy
Add the client-side script to your webpage:

Include the following script tag in the <head> section of your webpage:

<script src="http://localhost:3000/script.js"></script>

Copy
Make sure to replace http://localhost:3000 with the appropriate URL if you deploy the application to a different server.

API Endpoint
The server provides an API endpoint to access the collected session data. The endpoint is:

GET /sessions
This endpoint returns a JSON response containing the session data stored in Airtable.

Error Handling
The application includes proper error handling to display appropriate error messages in case any errors occur. Error messages are logged to the console and can be customized in the code if needed.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.

Contact
If you have any questions or need further assistance, feel free to contact the project maintainer at your-email@example.com.
