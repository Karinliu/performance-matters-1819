## Performance matters
For performance matters I used the following things:
• First view
• Time to first byte

### First view
First it takes 2,18 seconds to fully load in the CSS. In order to make it faster, I minified the CSS file. The loading now takes 2.14 seconds.

<img width="600" alt="Screenshot 2019-03-19 14 46 35" src="https://user-images.githubusercontent.com/32538678/54787498-3308d680-4c2c-11e9-8c71-49f0ef85ae18.png"><img width="600" alt="Screenshot 2019-03-19 14 47 09" src="https://user-images.githubusercontent.com/32538678/54787499-3308d680-4c2c-11e9-865b-94489f5168ff.png">

To see if it makes a difference when images are loaded in as HTML or CSS, I tried that out. It came out that it doesn't make much difference on slow 3g. The difference is 0.01 seconds per image.

<img width="600" alt="Screenshot 2019-03-19 14 56 23" src="https://user-images.githubusercontent.com/32538678/54787780-2638b280-4c2d-11e9-8e82-47bb9245d66b.png"><img width="600" alt="Screenshot 2019-03-19 14 57 20" src="https://user-images.githubusercontent.com/32538678/54787781-2638b280-4c2d-11e9-9765-a05ac4447274.png">

### Time to first byte
In the first prototype it takes a long time to load the before you can interact with the website. To improve loading time for the user, I have modified my second prototype into a server side by using NodeJS.

In my first prototype the loading time was 34,87 seconds and in the Node JS prototype the loading time was 4,39 seconds. See the screenshots below

<img width="400" alt="Screenshot 2019-03-21 22 00 59" src="https://user-images.githubusercontent.com/32538678/54786832-30a57d00-4c2a-11e9-8020-e1edc2b8c59d.png"> <img width="400" alt="Screenshot 2019-03-21 21 59 10" src="https://user-images.githubusercontent.com/32538678/54786830-300ce680-4c2a-11e9-86e6-319c1c49250f.png">  

Also I have addede a `cache-control` with a max age so the browser cache the assest for as long as possible.


## Download and install
First you have to download or clone this document with the following command:

```
git clone https://github.com/Karinliu/performance-matters-1819.git

cd performance-matters-1819
```

After you have cloned this project, you have to `npm install` all the documents.


#### Run this project
To run this project you can use one of the following commands:

• `npm run dev` <br>
• `node app.js`


## Scripts
For my project I have used one npm script: [Nodemon](https://www.npmjs.com/package/nodemon).

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

To install Nodemon, I did the following steps:

1. `npm i nodemon`
2. Go to `package.json` and add a JSON config command line. For example what I have in my scripts: `dev": "nodemon app.js`
3. After you have added this line in your package.json you can run it with your terminal with the following command: `npm run dev`.





