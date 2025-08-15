# API-INTEGRATION

COMPANY: CODTECH IT SOLUTIONS

NAME: M.JANANI SHREE

INTERN ID:CTO4DZ1778

DOMAIN: FULL STACK WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTHOSH

# Task Description

## Overview
The objective of this task is to develop a **responsive webpage** that fetches and displays real-time data from a **public API** using **HTML, CSS, and JavaScript**. The application should allow user interaction, send a request to the chosen API, retrieve the relevant data, and display it dynamically on the webpage without requiring a page refresh.

For demonstration purposes, the **OpenWeatherMap API** is used to retrieve weather information such as temperature, weather conditions, humidity, and wind speed for a city entered by the user. However, the same principles can be applied to other public APIs such as news, sports scores, or cryptocurrency data.

## Objectives
- **API Integration:** Learn how to connect a web application to an external data source.
- **Asynchronous Programming:** Use `fetch()` and `async/await` to handle asynchronous API requests.
- **DOM Manipulation:** Dynamically insert retrieved data into the webpage without a reload.
- **Responsive Design:** Ensure the application works across desktops, tablets, and mobile devices.
- **Code Organization:** Maintain separation of concerns by using separate HTML, CSS, and JavaScript files.

## Task Requirements
1. **HTML5**
   - Create the page structure with an input field for user queries (e.g., city name).
   - Add a button to trigger the API call.
   - Include placeholders to display the retrieved data.

2. **CSS3**
   - Style the application for a clean and professional look.
   - Use responsive design techniques to adapt to different screen sizes.
   - Ensure readability and accessibility.

3. **JavaScript (ES6)**
   - Handle button click events.
   - Send API requests using the Fetch API.
   - Parse JSON responses and extract relevant data.
   - Update HTML elements with the new data dynamically.
   - Handle errors gracefully (e.g., invalid city names).

4. **Public API**
   - Use a freely accessible API such as OpenWeatherMap.
   - Obtain and configure an API key if required.
   - Follow the API documentation for correct endpoint usage.

## Deliverables
- A fully functional responsive webpage that retrieves and displays live data from a public API.
- Code split into:
  - `index.html` – Structure of the webpage.
  - `style.css` – Styling and responsiveness.
  - `script.js` – API requests and data rendering logic.
- Documentation explaining setup, usage, and functionality.
- Error handling for failed API calls or incorrect input.

## Expected Workflow
1. The user enters a query (e.g., city name) in the input box.
2. Clicking the **"Get Data"** button triggers a JavaScript function.
3. The function sends a request to the API endpoint with the query and API key.
4. The API returns a JSON response containing the requested data.
5. JavaScript processes this data and updates the webpage in real time.
6. If the request fails, an error message is displayed.

## Outcome
Completing this task will result in a functional web application that can retrieve and display up-to-date information from a public API. It demonstrates:
- Practical knowledge of API integration.
- Asynchronous programming skills.
- Responsive web design techniques.
- The ability to structure and maintain clean, modular code.

This task forms a foundation for creating more complex applications that depend on live, external data sources.
