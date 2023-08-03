# Session Recorder

This project is a session recorder application that collects session data, including the user's IP address, a randomly generated session ID, URL parameters, and the timestamp of the session. The collected data is stored in **Airtable** and can be accessed through an **API endpoint**.

## Design and Assumptions

The application is designed as a **Node.js** and **Express.js** server that serves a server-side script to be added to any webpage. The server-side script collects the required session data and sends it to the server via an API endpoint. The server populates the data into Airtable using the Airtable API and middleware.

Assumptions:

- The Airtable account and base are already set up with the necessary tables and fields.
- The Airtable API key and base ID are provided as environment variables.
- The server-side core script is Airtable API functions and middleware.

## Installation and Setup

### 1. Clone the repository:

```
git clone https://github.com/0xsmart-dev/session-recorder.git
```

### 2. Navigate to the project directory:

```
cd session-recorder
```

### 3. Install the dependencies:

```
npm install
```

### 4. Set up Airtable:

Create an Airtable account if you don't have one already.
Create a new base and set up the necessary tables and fields.
Obtain your Airtable API key and base ID.
Configure the environment variables:

Create a .env file in the root directory.

Add the following variables to the .env file:

```
AIRTABLE_API_KEY=your-airtable-api-key
AIRTABLE_BASE_ID=your-airtable-base-id
```

### 5. Start the server:

```
npm start
```


Make sure to replace http://localhost:4000 with the appropriate URL if you deploy the application to a different server.

## API Endpoint
The server provides an API endpoint to access the collected session data. The endpoint is:

```
GET http://localhost:4000/api/records
```

This endpoint returns a JSON response containing the session data stored in Airtable.

## Error Handling
The application includes proper error handling to display appropriate error messages in case any errors occur. Error messages are logged to the console and can be customized in the code if needed.

## License
This project is licensed under the MIT License.

