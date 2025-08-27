import { Router, Request, Response } from 'express';
import fs from 'fs';
import { getAllData, getData } from '../functions/mongoDb';

const headerHtml = fs.readFileSync('./static/html/header.html', 'utf8');
const footerHtml = fs.readFileSync('./static/html/footer.html', 'utf8');
const allCss = fs.readFileSync('./static/css/all.css', 'utf8');

const router = Router();

router.get('/', async (req, res) => {
  let btnMore = fs.readFileSync('./static/js/btnMore.js', 'utf8');
  let click = fs.readFileSync('./static/js/click.js', 'utf8');

  let watch = req.query.watch;

  if (!watch) {
    var datas = "";
    let css = fs.readFileSync('./static/css/clips.css', 'utf8');
    let getdatas = await getAllData("clips", "createAt", -1, 21);

    if(getdatas.toString() === "[]") return res.redirect('/');

    for (let i = 0; i <= 20; i++) {
      datas +=
        `
        <div class="item" onclick="Aclick(1, '${getdatas[i]._id}')">
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
        <title>Akaruu Archive | Clips</title>
        <style>${css}</style>
        <style>${allCss}</style>
        <script>${btnMore + click}</script>
        <link rel="icon" href="/favicon.ico" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:title" content="Akaruu Archive | Clips">
        <meta property="og:description" content="les meilleurs clips">
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
          <div class="title">Les clips les plus récents :</div>
          <div class="list" id="list">${datas}</div>
          <div class="prebtnvid">
            <div class="btnvid" onclick="btnMore(1);">Plus de clips</div>
          </div>
        </div>
        ${footerHtml}
      </body>
    </html>
    `);
  } else {
    let css = fs.readFileSync('./static/css/clip.css', 'utf8');
    let data = await getData("clips", watch)

    res.send(`
      <!DOCTYPE html>
      <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Akaruu Archive | ${data.title}</title>
        <style>${css}</style>
        <style>${allCss}</style>
        <link rel="icon" href="/favicon.ico" type="image/x-icon">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta property="og:title" content="Akaruu Archive | ${data.title}">
        <meta property="og:description" content="${data.description}">
        <meta property="og:image" content="${data.picture}">
        <meta property="og:url" content="/clips?watch=${watch}">
        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Akaruu Archive">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:image" content="${data.picture}">
      </head>
      <body>
        ${headerHtml}
        <div class="app">
          <div class="left">
            <video controls>
              <source src="${data.url}">
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
            <div class="btns">
              <div class="share"></div>
              <div class="dwn"></div>
            </div>
          </div>
          <div class="right">
            <div class="title">Titre du clip : ${data.title}</div>
            <div class="des">Desciptions : ${data.description}</div>
            <div class="trans">transcription : ${data.cc}</div>
          </div>
        </div>
        ${footerHtml}
      </body>
    </html>
    `);
  };
});

export default router;