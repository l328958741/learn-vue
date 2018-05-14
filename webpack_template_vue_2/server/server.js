const express = require('express');
const fs = require('fs');
const path = require('path');

const datas = JSON.parse(fs.readFileSync('./.exported'));

let server = express();
server.listen(8090);
console.log('running  at 8090');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    next();
});

server.get('/list', (req, res) => {
    let page = parseInt(req.query['page'] || 0);
    console.log(req.query);
    console.log('================');
    console.log(req.query['page']);
    let page_size = 8;

    console.log(typeof datas);

    let arr1 = datas.slice(page*page_size, (page+1)*page_size);
    console.log(arr1);

    let arr = arr1.map(item => {
        return {
            id:         item.article['detailArticle|post'].id,
            tag:        item.tag,
            title:      item.title,
            src:        item.src,
            summary:    item.summary,
            time:       Math.floor(new Date(item.time).getTime()/1000),
            catalogs:   item.catalogs,
            author:     {
              title:      item.author_title,
              href:       item.author_href,
            }
          };
    });

    res.send(arr);
});

server.get('/img', (req, res)=>{
    let src = req.query.src;

    res.sendFile(path.resolve('img', src));
});

server.get('/detail', (req, res) => {
    let id = req.query.id;
    let data = null;

    datas.forEach(item => {
        if(item.article['detailArticle|post'].id == id){
            data = item;
        }
    });

    res.send(data);
})
