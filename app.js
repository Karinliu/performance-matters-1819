const express = require('express');
const bodyParser = require('body-parser');
// const fetch = require('node-fetch');
// const shrinkRay = require('shrink-ray');
const fs = require('fs')
const app = express()
    .set('view engine', 'ejs')
    .set('views', 'view')
    // .use(shrinkRay)
    .use(setHeader)
    .use(express.static('./src/css'))
    .use(express.static('./src/images'))
    .use(express.static('./src/js'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: true}))
    .get('/', index)
    .get('/offline', offline)
    .get('/:id', detail)
    // .post('/', index)
 
const process.env.PORT || port = 3000

function setHeader(req, res, next){
    res.setHeader('Cache-Control', 'max-age=' + 365 * 24 * 60 * 60 + ', public'); 
    next();
}

// function shrinkRay(){
//         cache: () => false,
//         cacheSize: false,
//         filter: () => true,
//         brotli: {
//             quality: 11 // Between 1 - 11
//         },
//         zlib: {
//             level: 6 // Between 1 - 9
//         }
//     };

function index(req, res) {
    // fetch('https://raw.githubusercontent.com/Karinliu/performance-matters-1819/master/src/results.json')
    //     .then(res => res.json())
        fs.readFile('./src/results.json', function(error, data) {
        if (error) throw error;
        const jsonData = JSON.parse(data.toString());
        const filteredData = jsonData.data.filter(genreBooks)
        const genres = filteredData.map(book => book.genre)
        const unique = genres.filter(onlyUnique)
        const sliceDataGenres = unique.slice(0, 6);


        const result = []


        Object.keys(req.query).forEach(genre=>{
            console.log(genre)
            filteredData.forEach(book=>{
                console.log(book.genre)
                if (genre === book.genre){
                    result.push(book)
                }  
            })
        })

        res.render('pages/index.ejs', {
            genre: sliceDataGenres,
            genresBooks: result
        });
    });
}

function genreBooks(book) {
    return book.genre !== null;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function offline(req, res) {
        res.render('pages/offline.ejs');
}

function detail(req, res) {
    fs.readFile('./src/results.json', function(error, data) {
        const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
        const id = fullUrl.substring(fullUrl.lastIndexOf('/') + 1)

        const jsonData = JSON.parse(data.toString());
        const filteredData = jsonData.data.filter(genreBooks)
        const detailResult = []

        filteredData.forEach(book=>{
                if (id === book.isbn){
                    detailResult.push(book)
                }  
            })
        console.log(detailResult)

        res.render('pages/detail.ejs',{
            detailBook: detailResult
        });
    });
}

app.listen(3000, () => console.log(`Example app listening on port ${port}!`))