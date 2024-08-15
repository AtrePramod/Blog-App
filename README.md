# Blog Application

This is a full-stack Blog Application developed using the MERN stack (MongoDB, Express, React, and Node.js). The application allows users to create, read, update, and delete blog posts, and includes features like user authentication.

## Features

- **User Authentication**:
  - Secure registration and login functionality .
  - Passwords are hashed for security using bcrypt.

- **Blog Management**:
  - **Create, Update, Delete Posts**: Users can manage their own blog posts.
  - **Image Upload**: Users can upload images to be included in their blog posts.

- **Comments**:
  - Users can add comments to blog posts.
  - Comments can be edited or deleted by the comment author.

- **Responsive UI**:
  - The application is designed with a responsive layout, providing a seamless experience on both desktop and mobile devices.

- **Pagination and Search**:
  - Posts are paginated for better performance.
  - Users can search for posts by title, content, or category.

- **Admin Dashboard**:
  - Admins have access to a dashboard for managing all posts, users, and categories.

## Technologies Used

- **MongoDB**: The database used for storing user data, blog posts, and comments.
- **Express.js**: The web application framework for building the server-side logic.
- **React.js**: The front-end library for building the user interface.
- **Node.js**: The JavaScript runtime environment for executing server-side code.
- **Redux**: For state management in the React application.
- **Mongoose**: For MongoDB object modeling.
- **bcrypt**: For password hashing.

## Installation and Setup

### Prerequisites

- **Node.js**: Ensure that Node.js is installed on your machine.
- **MongoDB**: Set up MongoDB on your local machine or use a cloud service like MongoDB Atlas.

### Steps to Set Up the Project

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/AtrePramod/Blog-App.git
    ```
  
2. **Install Backend Dependencies**:
    ```bash
        npm install
    ```

3. **Install Frontend Dependencies**:
    ```bash
    cd ../client
    npm install
    ```
   
4. **Run the Backend**:
    ```bash
        npm start
    ```

5. **Run the Frontend**:
    ```bash
    cd ../client
    npm start
    ```

6. **Access the Application**:
    - Open your browser and go to `http://localhost:3000`.


## Contact

For any questions or issues, please contact [pramodatre05@gmail.com](mailto:pramodatre05@gmail.com).
