# Gemini Code Assist Demo

This repo contains the expected end result of a series of prompts to Gemini Code Asssist to help build a simple NodeJS web server and deploy it to Cloud Run.

## Prompts and instructions for creating the codebase

1. **Create a server**

   "*Help me write a web server based on NodeJS using the Express framework with one GET endpoint returning ‘Hello, World’*"

   Create an `app.js` according to the instructions.

2. **Add another endpoint**

   "*Add a POST endpoint that adds two user-provided numbers and returns the result*"

   Use the "diff" functionality (button with the two opposing arrows) to merge the new code into the existing codebase

3. **Prepare for testing**

   "*Extract the functionality of the "/add" endpoint into a separate function*"

   Use the "diff" button again.

4. **Prepare for testing**

   "*How do I move the "addNumbers" function to a separate file called "util.js" and use it in "app.js"?*"

   Create a `util.js` according to the instructions. Also update `app.js` accordingly for importing

5. **Writing tests**

   "*Write a unit test for the addNumbers function*"

   Create a `test.js` according to the instructions.

6. **Create package.json**

   "*Generate a package.json for this project including a start script*"

   Create a `package.json` according to the instructions.

7. **Run tests**

   Run

   ```bash
   npm test
   ```

   to verify that the code for `addNumbers()` is actually working as expected

## Prompts and instructions for deploying to Cloud Run

1. **Creating a Dockerfile**

   "*Generate a Dockerfile for this project based on the latest NodeJS LTS version using port 8080*"

   Create a `Dockerfile` according to the instructions.

2. **Build using Cloud Build**

   "*How do i deploy this Dockerfile to Cloud Run allowing unauthenticated access?*"

   Create a `cloudbuild.yaml` according to the instructions.
   
   Remember to:
      - Replace all placeholders with their respective values
      - Create the Artifact Registry repo before moving on to the next step

3. **Deploying to Cloud Run**

   The explanations to the previous prompt should have also given instructions on how to use the `gcloud run deploy [...]` command
