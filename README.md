# Simulated Matchmaking Tool

This submission polls DPGA projects and tries to match them with technical resources. Matched projects can be seen via an endpoint eg `http://localhost:1337/projects/getTechnicalResources/1` 

# Setup
## Step 0
This project runs on NodeJS and would require a minimum version of Node 12

## Step 1
 - Run `yarn install` and `yarn build` to install node modules and build the admin interface
 - Run `strapi start` to launch the web app and visit `localhost:1337` to create your admin account
 
## Step 2
 - Create the 2 sample google form exactly like:

    1) DPG Submission form
    https://docs.google.com/forms/d/e/1FAIpQLSfiBDUSWD9LbRwZl5d8GPnpnM-PXdS_cnshb1UJ9aAurnIoXQ/viewform

    2) DPG Technical Resource Submission Form
    https://docs.google.com/forms/d/e/1FAIpQLSfXkk6uu0sTupFffXeo7gNJGIYTQQ1Xza7Jv_4ZFyGXErWyHg/viewform

 - Create their corresponding Google sheets to hold thier responses.
 - Creat Google apps scripts for each one by clicking on Tools > Script Editor
 - Paste the `Code.gs` file in the *googleFormsScript* folder for each corresponding form and accept their permissions
 

## Testing
To test from localhost using `ngrok`[https://ngrok.com/download], use the command:
ngrok http 1337
