## Live

See here the live version:
https://karin-oba.herokuapp.com/

## Performance matters
For performance matters I used the following things: <br>
• First view <br>
• Time to first byte <br>

### First view
First it takes 2,18 seconds to fully load in the CSS. In order to make it faster, I minified the CSS file by using gulp (see [here](https://github.com/Karinliu/performance-matters-1819/blob/master/gulp/css.js). The loading now takes 2.14 seconds.

<img width="400" alt="Screenshot 2019-03-19 14 46 35" src="https://user-images.githubusercontent.com/32538678/54787498-3308d680-4c2c-11e9-8c71-49f0ef85ae18.png"><img width="400" alt="Screenshot 2019-03-19 14 47 09" src="https://user-images.githubusercontent.com/32538678/54787499-3308d680-4c2c-11e9-865b-94489f5168ff.png">


#### Images testing
To see if it makes a difference when images are loaded in as HTML or CSS, I tried that out. It came out that it doesn't make much difference on slow 3g. The difference is 0.01 seconds per image.

<img width="400" alt="Screenshot 2019-03-19 14 56 23" src="https://user-images.githubusercontent.com/32538678/54787780-2638b280-4c2d-11e9-8e82-47bb9245d66b.png"><img width="400" alt="Screenshot 2019-03-19 14 57 20" src="https://user-images.githubusercontent.com/32538678/54787781-2638b280-4c2d-11e9-9765-a05ac4447274.png">

### Time to first byte
In the first prototype it takes a long time to load the before you can interact with the website. To improve loading time for the user, I have modified my second prototype into a server side by using NodeJS.

In my first prototype the loading time was 34,87 seconds and in the Node JS prototype the loading time was 4,39 seconds. See the screenshots below

<img width="400" alt="Screenshot 2019-03-21 22 00 59" src="https://user-images.githubusercontent.com/32538678/54786832-30a57d00-4c2a-11e9-8020-e1edc2b8c59d.png"><img width="400" alt="Screenshot 2019-03-21 21 59 10" src="https://user-images.githubusercontent.com/32538678/54786830-300ce680-4c2a-11e9-86e6-319c1c49250f.png">

#### Lazy loading
Another way to make it work even faster is to add lazy loading in my page. By adding this function it only takes 1.34 seconds to load the page with the chosen genre.

<img width="1280" alt="Screenshot 2019-03-26 14 08 18" src="https://user-images.githubusercontent.com/32538678/55194001-c308cc00-51a8-11e9-8e46-971fc2dd706f.png">

### Minify Javascript
Because lazy loading is written with javascript, it takeswebpage takes 1.34 seconds to fully load. In order to make it faster, I tried to minify the JavaScript file. By doing that the website suddenly appeared to takes longer to load.. Because it takes longer to download the content.  


### Cache-control
Also I have addede a `cache-control` with a max age so the browser can cache client requests and server responses.

By doing that the loading time with disable cache took 8.2 seconds to load. Without disable cache it took 2.05 seconds to load.

<img width="400" alt="Screenshot 2019-03-28 22 51 00" src="https://user-images.githubusercontent.com/32538678/55195319-77582180-51ac-11e9-8fe1-3e58c294746d.png"><img width="400" alt="Screenshot 2019-03-28 22 50 36" src="https://user-images.githubusercontent.com/32538678/55195325-7a531200-51ac-11e9-979c-30e8a4213562.png">

### Service workers
The last thing that is added in the application is a service worker. The service worker create stores of responses request.

This makes it possible to visit pages offline that were previously visited and stored in the cache storage.

<img width="1280" alt="Screenshot 2019-03-28 23 03 57" src="https://user-images.githubusercontent.com/32538678/55195773-dec2a100-51ad-11e9-811f-ff74bcd1f4a1.png">

The [Service worker](https://github.com/Karinliu/performance-matters-1819/blob/master/src/js/service-workers.js) from my application are using the following caching strategies:

• Precaching -> for offline ejs files, images, css and javascript. <br>
• Runtime caching -> Network first. <br>

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
• `node app.js`<br>


## Scripts
For my project I have used one npm script: [Nodemon](https://www.npmjs.com/package/nodemon).

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

To install Nodemon, I did the following steps:

1. `npm i nodemon`
2. Go to `package.json` and add a JSON config command line. For example what I have in my scripts: `dev": "nodemon app.js`
3. After you have added this line in your package.json you can run it with your terminal with the following command: `npm run dev`.





