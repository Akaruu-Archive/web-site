import { Router, Request, Response } from 'express';
import fs from 'fs';
import { search } from '../functions/mongoDb';

const headerHtml = fs.readFileSync('./static/html/header.html', 'utf8');
const footerHtml = fs.readFileSync('./static/html/footer.html', 'utf8');
const allCss = fs.readFileSync('./static/css/all.css', 'utf8');

const router = Router();

router.get('/', async (req, res) => {
  let click = fs.readFileSync('./static/js/click.js', 'utf8');

  let q = req.query.q;

  if (q) {
    var datas = "";
    let css = fs.readFileSync('./static/css/search.css', 'utf8');
    let getdatas = await search(q.toString());

    for (let i = 0; i <= getdatas.length-1; i++) {
      var ii;
      if(getdatas[i]._collection == "vods") {
        ii=2;
      } else if(getdatas[i]._collection == "clips") {
        ii=1
      } else {
        ii=3;
      };
      datas +=
        `
        <div class="item" onclick="Aclick(${ii}, '${getdatas[i]._id}')">
          <img src="${getdatas[i].picture}"/>
          <div class="title">${getdatas[i].title}</div>
          <div class="desc">${getdatas[i].description}</div>
        </div>
      `
    };

    res.send(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Akaruu Archive | Recherche</title>
        <style>${css}</style>
        <style>${allCss}</style>
        <script>${click}</script>
        <link rel="icon" href="/favicon.ico" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:title" content="Akaruu Archive | Recherche">
        <meta property="og:description" content="les meilleurs vods">
        <meta property="og:image" content="">
        <meta property="og:url" content="">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Akaruu Archive">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:image" content="">
      </head>
      <body>
        ${headerHtml}
        <div class="app">
          <div class="list"">${datas}</div>
        </div>
        ${footerHtml}
      </body>
    </html>
    `);
  } else {
    res.redirect('/');
  };
});

export default router;