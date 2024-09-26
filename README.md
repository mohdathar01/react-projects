#this is readme

# Redux Toolkit

-Install @reduxjs/toolkit and react-redux
-Build our store
-Connect our store to our app
-Slice(cartSlice)
-Dispatch action
-Selector

# Types of testing as a developer

-Unit Testing
-Integration Testing
-End to End Testing

# Liabraries for testing

-React Testing Library

# Setting up Testing in our app

-Install React Testing Library (" npm install -D @testing-library/react ")
-Installed jest (" npm install -D jest ")
-Installed babel dep. using with babel ("npm install --save-dev babel-jest @babel/core @babel/preset-env")
-Configure babel means create file at root level named (" babel.config.js ") and paste some lines of code from website ....
-configure parcel config file to disable default babel transpilation [create file named as .parcelrc] and paste code using this link( " https://parceljs.org/languages/javascript/#babel " then go to usage with other tools heading copy code and paste into .parcelrc file) [purpose of this to use our setup environment this (" babel.config.js ") in place of default ].
-jest configuration (" npx jest --init ")
-skip this line its only for study purpose( what is " jsdom(browser-like)" is a library which parses and interacts assembled HTML just like a browser or in one word (provide Browser like environment for testing its not browser but it has browser like features when we are not using browser))
-Install jsdom library if we are using jest version >28 ("npm install --save-dev jest-environment-jsdom")


# Testing Your code

-create a folder named ("   __tests__  ")inside any location in your project
-("         **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x)         ")
- inside your --tests__ folder any file match .ts or .js  like ex("  Filename.test.ts or Filename.test.js  "), ("Filename.spec.js or Filename.spec.ts") will be considerd as test  file.
- command to test once written test cases ("  npm run test   ")
-anywhere we found double underscore combined one another we called as  __ (dunders)
- dunders basically used for reserve purposes so nobody can make like this accidently.
Install ("   npm i -D @babel/preset-react  ") to make file which has extension .jsx will work in test cases means (for jsx extension file without it tets cases throw error)
- once installed we have to include  @babel/preset-react inside my babel confid file.
-Install npm i -D @testing-library/jest-dom