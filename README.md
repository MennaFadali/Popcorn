# Popcorn
This is a web app that is used to organise movie nights! You can either create a movie night at your place, or join one by contacting the host using the given phone number.

Our app has the following dependencies for running (docker already handles them):
    "express": "^4.16.4",
    "imdb-api": "^4.0.3",
    "mon": "0.0.8",
    "mongoose": "^5.4.22",
    "node": "^11.12.0"
    
Config File:
    We are using enviroment variable for the connection string to the database. There should be a .env file that has a body like the following:
    mongoURI = your_connection_string
  
Docker:
    We are using docker to isolate our app from the environment it is running on, and to install the dependencies that we define in the package.json for us and install node in the image it creates. To run the web app simply run "docker run" command.
    
Docker Compose:
    We used docker compose to define and configure our application’s services. 
