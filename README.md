# Leadsync Assessment

## Description

This is a full-stack web application that implements some pages of Leadsync AI as an assessment of their hiring process. The application is built using **React** for the frontend, **Node.js/Express** for the backend, and **MongoDB** for the database.

## Tech Stack

### Frontend

* **React**: Frontend library for building the user interface.
* **Axios**: For making HTTP requests to the backend.
* **Tailwind CSS**: CSS framework for styling.
* **Shadcn**: Component library for customizable and reusable UI components.
* **Lucide**: Icon library consistent icons.

### Backend

* **Node.js/Express**: Backend framework for handling API requests and server-side logic.
* **MongoDB**: NoSQL database to store user data.

## Installation

### Prerequisites

* **Node.js** (v14+)
* **MongoDB** (local or cloud-based like MongoDB Atlas)

### Steps to Run the Project

1. **Clone the Repository**:

       git clone https://github.com/tahmidhamim/oauth2.0-login.git
       cd oauth2.0-login

2. **Install Backend Dependencies**:

       cd server
       npm install

3. **Install Frontend Dependencies**:

       cd ../client
       npm install

4. **Environment Variables**: Create a `.env` file in the `server` folder and configure the following variables:

       MONGO_URI=your_mongo_database_uri

5. **Running the Backend**:

       cd ../server
       npm start

6. **Running the Frontend**:

       cd ../client
       npm run dev

The frontend will be served on `http://localhost:5173` and the backend on `http://localhost:5000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact [<tahmidhamim@gmail.com>].