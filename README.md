Auto-Complete Component

Setup and Installation

Prerequisites

Ensure you have the following installed on your system:

Node.js (latest LTS recommended)

npm or yarn

Installation Steps

Clone the repository:

git clone https://github.com/yourusername/autocomplete-component.git
cd autocomplete-component

Install dependencies:

npm install

or if using yarn:

yarn install

Run the development server:

npm run dev

or:

yarn dev

Open the application in your browser:

http://localhost:3000

Tools and Libraries Used

React (Functional components with Hooks)

TypeScript (For type safety and maintainability)

CSS (Minimal styling for a clean UI)

No third-party libraries were used, as per the task requirements.

Assumptions & Design Decisions

Performance Optimization: The component is built with efficiency in mind, ensuring smooth user experience.

No External State Management: Only React's built-in state management is used.

Asynchronous Data Handling: The filtering function simulates an asynchronous API call using setTimeout.

Mock Data: The component filters data from a predefined JSON array to mimic real-world usage.

Text Highlighting: The input query is highlighted within search results to improve visibility.

Edge Cases Handled: Ensures proper behavior for empty queries, rapid input changes, and non-matching searches.

Bonus Feature: The component can be easily adapted to fetch real API data.



