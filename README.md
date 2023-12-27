# Getting Started with Chat Application

## About the project.
Contains 4 major components
### Chat Application.
Chatbot application build with the help of [chatnbx apis](https://documenter.getpostman.com/view/25264743/2s9YBxXao3#c521456c-03ab-4256-907b-6f480d6fab9e)

### Weather App.
Chatbot application to find out weather of any particular geographical location.

Sample Chat:

Message: Hey what's the weather in bangalore today?

![Screenshot 2023-12-27 194019](https://github.com/yashsakalley-1997/chat-application/assets/44356948/8c6f85ce-8464-4879-8014-4692331b3cfc)

### News Application.
Chatbot application to find latest news regarding any person,country or organisation.

Sample Chat: 

Message: Hey what's happening in cricket these days?

![Screenshot 2023-12-27 194439](https://github.com/yashsakalley-1997/chat-application/assets/44356948/3ab7e13d-172e-4ebc-8605-3a4eba277e10)

### Task Manager Application. 
Application to create, update and manage tasks.

Sample Chat:

Message: Lets schedule a coding task at 3 pm tomorrow.

![Screenshot 2023-12-27 194727](https://github.com/yashsakalley-1997/chat-application/assets/44356948/212a3834-c273-41e8-8a63-f57e8fbdba45)

![Screenshot 2023-12-27 195026](https://github.com/yashsakalley-1997/chat-application/assets/44356948/b62ff564-ad52-402b-b794-e692ce0879b1)

#### In order to show all the tasks in the Task Manager application type in "show all tasks".

#### Reminder functionality:


Example: Lets say user has created a task at 6:00 in the evening, now as soon as the clock strikes 6:00 PM, user will receive a reminder in the chat interface just like in the following image.
![Screenshot 2023-12-27 221222](https://github.com/yashsakalley-1997/chat-application/assets/44356948/39e4ab3d-f150-4f56-9bce-bdce8cbb383f)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## APIs Used.

### ChatNBX /completions API [Documentation](https://documenter.getpostman.com/view/25264743/2s9YBxXao3#c521456c-03ab-4256-907b-6f480d6fab9e)


### News API [Documentation](https://newsapi.org/docs)


### Tomorrow.io /weather/realtime [Documentation](https://docs.tomorrow.io/reference/realtime-weather)

#### Moved the ChatNBX completions and news API in a node server due CORS issues.

Deployed Link for node server: https://chat-app-fzr1.onrender.com/api 

End point for completions API: https://chat-app-fzr1.onrender.com/api

End point for News API: https://chat-app-fzr1.onrender.com/api/news

Github Link for the node.js application: https://github.com/yashsakalley-1997/chat-application-server

### Steps to setup the node server

1. Redirect to the root directory of the application and run npm install to install all the packages required.

2. In the root directory itself run node index.js to start the node server.

3. Use node version lts 16.16.0


## Available Scripts


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
