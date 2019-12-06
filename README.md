# Popcorn
This is a web app that is used to organise movie nights! You can either create a movie night at your place, or join one by contacting the host using the given phone number.

Our app has the following dependencies for running (docker already handles them):
    "jest": "^24.7.1" 
    "nodemon": "^1.18.11" 
    "react": "^16.8.6" 
    "react-dom": "^16.8.6" 
    "standard": "^12.0.1" 
    
Config File:
    We are using enviroment variable for the connection string to the database. There should be a .env file that has a body like the following:
    mongoURI = your_connection_string
  
Docker:
    We are using docker to isolate our app from the environment it is running on, and to install the dependencies that we define in the package.json for us and install node in the image it creates. To run the web app simply run "docker run" command.
    
Docker Compose:
    We used docker compose to define and configure our application’s services. 
