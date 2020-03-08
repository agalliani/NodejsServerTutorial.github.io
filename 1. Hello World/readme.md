This simple project write "Hello World" on console.

# Step 1
In your folder create a `package.json` new file.
Open it and write this code:
  
    {
        "name": "test-project",
         "version":"0.1.0",
         "main": "main.js",
         "scripts": {
         "start": "node main.js"
            }
    }
The voices `name` and `version` are explained by themselves. 

`main` The main field is a module ID that is the primary entry point to your program. That is, if your package is named foo, and a user installs it, and then does require("foo"), then your main module's exports object will be returned.

This should be a module ID relative to the root of your package folder.

For most modules, it makes the most sense to have a main script and often not much else.

`scripts` is tipically a map of name/value pairs which allows to assign a specific command to a combination of actions. For example running multiple .js files or similar. To use one of those "magic words" you just have to type `npm` followed by your magic word.

In this case just type `npm start` in order to run the program, that otherwise should be run using or `node main.js`.
