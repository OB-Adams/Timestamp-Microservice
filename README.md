# Timestamp Microservice

A simple Microservice(API) built with Node.js and Express that provides information about dates and times. The Timestamp Microservice can handle both numeric timestamps and date strings, offering responses in both Unix time (milliseconds) and UTC format. It also returns the current time when no date is provided.

## Features

- Timestamp Handling: Convert numeric timestamps (in milliseconds or seconds) to Unix time and UTC format.
- Date String Handling: Parse and convert date strings to Unix time and UTC format.
- Current Time: Provide the current time in Unix and UTC format when no date is specified.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [Examples](#examples)
5. [Error Handling](#error-handling)
6. [Contributing](#contributing)
7. [License](#license)

## Installation

### Prerequisites

- Node.js: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Clone the Repository

git clone https://github.com/OB-Adams/Timestamp-microservice.git
cd date-api

### Install Dependencies

npm install

### Environment Variables

Create a .env file in the root directory and set any necessary environment variables. For this project, you may not need to add any variables, but you can configure the port if needed:
PORT=3000

## Usage

### Start the Server

Run the server using Node.js:
npm start

The server will start on the port defined in the .env file or default to port 3000.

## API Endpoints

### GET /api/:date?

- Description: Returns the Unix timestamp and UTC date for a given date parameter. If no date is provided, it returns the current time.
- Parameters:
  - date (optional): A numeric timestamp (in milliseconds or seconds) or a date string (e.g., "2024-08-10", `"August 10, 2024"`).
- Responses:
  - 200 OK: Returns a JSON object with unix and utc fields.
  - 400 Bad Request: Returns a JSON object with an error field if the date is invalid.

### Example Requests and Responses

### Request with a Numeric Timestamp

Request:
GET /api/1691664000000

Response:
{
"unix": 1691664000000,
"utc": "Sat, 10 Aug 2024 00:00:00 GMT"
}

### Request with a Date String

Request:
GET /api/2024-08-10

Response:
{
"unix": 1712918400000,
"utc": "Sat, 10 Aug 2024 00:00:00 GMT"
}

### Request without Date Parameter (Current Time)

Request:
GET /api/

Response:
{
"unix": 1691664000000, // Current timestamp in milliseconds
"utc": "Sat, 10 Aug 2024 00:00:00 GMT" // Current UTC date
}

### Request with Invalid Date

Request:
GET /api/invalid-date

Response:
{
"error": "Invalid Date"
}

## Error Handling

- Invalid Date: Returns { "error": "Invalid Date" } when the date parameter cannot be parsed into a valid date.

## Deployment

The microservice is hosted on Vercel. You can access the live server using the following link:

https://timestamp-microservice-rho.vercel.app/

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the Repository: Create a personal copy of the repository.
2. Create a Branch: Create a new branch for your changes.
3. Make Changes: Implement your changes and commit them.
4. Submit a Pull Request: Submit a pull request with a description of your changes.

## License

This project is licensed under the MIT License.
