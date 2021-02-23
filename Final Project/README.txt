How to run the application:

##Database set up
Open the mongodb shell or your preferred GUI manager 
Create a database in Mongo called “FinalProjectDB”
Create two empty collections called “users” and “policies”
Import the policies into the database through the provided .json file. 
From the mongo cmd shell use: mongo import -db FinalProjectDB -collection policies -file [path to .json file]

##Back-end set up
Open the server. Type npm install into the shell to download all the dependencies
Start the server by typing nodemod run and press enter

##Front-end set up
Open the client. Type npm install into the shell to download all the dependencies.
Start the application by typing npm run dev and press enter
Click the provided link in the terminal to use the application.
