# AI-Powered Database Query App - Frontend

## Overview

Welcome to the frontend repository of the AI-powered database query application. This frontend provides an interactive user interface for submitting queries and viewing results. It is built using React and styled with custom CSS, offering a user-friendly experience.

## Key Functionalities

- **Query Form**: A form to accept user queries and send them to the backend.
- **Result Display**: Displays query results in a tabular format.
- **Error Handling**: Handles errors gracefully.
- **Mobile Responsiveness**: Improving the layout and design to ensure optimal usability on mobile devices.

## API Endpoints

### `/query` [POST]

- **Description**: Handles user queries and returns the results.
- **Request Body**:

  ```json
  {
    "query": "Find me companies attending Oil & Gas related events"
  }
  ```

- **Response**:

  ```json
  [
    {
      "company_name": "Company A",
      "event_name": "Oil & Gas Expo 2023",
      ...
    },
    ...
  ]
  ```

## Installation

### Prerequisites

- Node.js (version 12 or higher)
- npm (Node package manager)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Mansvini/ai-db-query-frontend.git
   cd ai-db-query-frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the project root and add the following environment variables:**
      ```ini
      REACT_APP_BACKEND_URL=http://localhost:<your_backend_port> 
      ```

4. **Run the Application**

   ```bash
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── QueryForm.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── ...
├── package.json
├── README.md
└── ...
```

### Key Components

- **App.js**
  - Main component that renders the application.
  - Imports and uses the `QueryForm` component.

- **QueryForm.js**
  - Handles user input, sends queries to the backend, and displays results.
  - Manages state for user input, results, loading, and errors.

## Styling

### `index.css`

- **Global Styles**: Sets the base font and background color for the application.

### `App.css`

- **Component Styles**: Styles for the main app container, header, form elements, buttons, and table.

## Key Challenges

- **User Interface**: Ensuring a user-friendly and responsive interface that provides a seamless experience.
- **State Management**: Effectively managing various states such as loading, error, and no results, to enhance user interaction.
- **Edge Case Handling**: Handling edge cases such as no data found and displaying appropriate messages to the user.
- **Loader Implementation**: Showing a loading spinner while the query is being processed and disabling the submit button to prevent multiple submissions.

## Potential Improvements

- **Enhanced Features**: Adding advanced features like query history, autocomplete suggestions, and saved queries for better user experience.
- **User Feedback**: Providing more detailed feedback and suggestions based on user queries to guide users in refining their searches.
- **Performance Optimization**: Implementing performance optimizations such as lazy loading for large datasets and using memoization techniques to minimize unnecessary re-renders.
- **Error Handling**: Provide meaningful feedback to the users on errors.
- **Chat-like Interface**: Developing a chat-like interface for more interactive and intuitive user experience.
- **Input Types**: Allowing users to input other types of data besides queries, such as dates or filters.
- **Data Visualization**: Displaying plots, charts, and other visualizations where applicable to enhance data presentation.
- **Result Copy**: Enabling users to easily copy query results in their preferred format, such as JSON or csv, for further use.
- **Regenerate Results**: Providing an option to regenerate results without re-entering the query.
- **Voice Input**: Incorporating voice input functionality to allow users to speak their queries.
