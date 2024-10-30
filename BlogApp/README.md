# How did I created this App?

1. For Backend, we used Appwrite to provide backend as service. We created _Env_ variable.

**What are Env variable?**

When we create an app, we want application to communicate with database or api. For keeping all the information safe, we create env file so that nothing gets revealed to public users.

- create a .env file in root of your project. Root is not src folder.
- Write in uppercase for create react app ( REACT_APP_APPWRITE_URL and assign values to it. REACT_APP_YOUR_VARIABLE is the naming rule. To access the variable use **process.env.REACT_APP_APPWRITE_YOUR_VARIABLE** ), for vite (VITE_YOUR_VARIABLE for name convection, and to access use import.meta.env.VITE_YOUR_VARIABLE). Using this name convention, create all your env variables.

- create a duplicate .env.sample file for your convinence and use, and empty the env variables.
- Add the .env to gitignore so that it should not get public, unintentionally.
- goto Appwrite and create new project. and get the project url, and project id and paste the values in your .env file.
- create a new database in appwrite and paste its database id in .env file. Also, create a new collection (table) in database and paste it's id in .env file. After creating the collection goto its setting and set its permission settings. i.e. who can change the collection data, etc
- after creation and setting of collection, create attributes ( columns name), to set a basic layout of our collection
- also create indexes for status.
- after collection, go to storage to create bucket. and paste its id in .env file. also, set it permissions.

To efficiently use these env variables. create a config folder in src, file named config.js and export an object with key value pairs of these variables
