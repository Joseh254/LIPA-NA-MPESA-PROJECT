Daraja API Integration Project

Overview

This project integrates Safaricom's Daraja API with a React frontend and an Express backend. It enables users to make mobile money transactions using M-Pesa STK Push and other functionalities provided by the Daraja API.

Features

React Frontend: A user-friendly interface for initiating M-Pesa transactions.

Express Backend: Handles API requests and integrates with Safaricom's Daraja API.

STK Push: Enables customers to make payments directly from their phones.

Token Generation: Implements OAuth authentication to obtain access tokens.

Transaction Status Checks: Retrieves the status of M-Pesa transactions.

Technologies Used

Frontend (React)

React.js

Axios for API requests

Zustand for state management (if applicable)

Backend (Express)

Node.js with Express.js

Axios for making requests to Safaricom's API

dotenv for environment variables

Prisma (if using a database for transaction history)

Setup Instructions

Prerequisites

Node.js installed

Safaricom Developer Account with API credentials

Backend Setup

Clone the repository:

git clone https://github.com/yourusername/daraja-project.git
cd daraja-project/server

Install dependencies:

npm install

Create a .env file and add your Daraja API credentials:

CONSUMER_KEY=your_consumer_key
CONSUMER_SECRET=your_consumer_secret
SHORTCODE=your_shortcode
PASSKEY=your_passkey
CALLBACK_URL=https://yourwebsite.co.ke/callback

Start the server:

npm run dev

Frontend Setup

Navigate to the frontend directory:

cd ../client

Install dependencies:

npm install

Start the frontend:

npm run dev

Usage

Open the frontend in your browser (default: http://localhost:5432
).

Enter your phone number and payment amount.

Click the "Pay" button to initiate an STK push request.

Approve the payment on your phone.

The backend will handle the transaction and update the UI accordingly.

API Endpoints

Token Generation

POST /api/token

Generates an access token for Daraja API requests.

STK Push Request

POST /api/stkpush

Initiates an STK push transaction.

Requires phoneNumber and amount in the request body.

Contributing

Feel free to fork this project and contribute improvements. Pull requests are welcome!

License

This project is licensed under the MIT License.

Contact

For questions or support, reach out via josephkarimambugua@gmail.com.

