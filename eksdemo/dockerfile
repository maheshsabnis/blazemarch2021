# pull the node.js docker image
FROM node:14.16.0
# create a app directory in the image to mount the application
WORKDIR /usr/src/app
# copy the package.json in the image so that the app depedennceis will be installed in the image
COPY package*.json ./
# run the npm install command and only only production ready depedencies
RUN npm install --only=production
# copy all the application code in the image
COPY . .
# expose the PORT from the container in which the app will be execuetd
EXPOSE 9070
# run the command to execute the app from the container
CMD [ "npm", "start"]