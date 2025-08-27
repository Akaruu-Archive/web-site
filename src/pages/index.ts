import { Router, Request, Response } from 'express';
import fs from 'fs';
import { getAllData } from '../functions/mongoDb';

const headerHtml = fs.readFileSync('./static/html/header.html', 'utf8');
const footerHtml = fs.readFileSync('./static/html/footer.html', 'utf8');
const allCss = fs.readFileSync('./static/css/all.css', 'utf8');

const router = Router();

router.get('/', async (req, res) => {
  let css = fs.readFileSync('./static/css/index.css', 'utf8');
  let click = fs.readFileSync('./static/js/click.js', 'utf8');

  let emojiList: string[] = [
    "https://cdn.discordapp.com/emojis/685300956249980959.webp?size=96",
    "https://cdn.discordapp.com/emojis/919621041792380999.webp?size=96",
    "https://cdn.discordapp.com/emojis/685498539844829224.webp?size=96",
    "https://cdn.discordapp.com/emojis/919621044971663360.webp?size=96",
    "https://cdn.discordapp.com/emojis/919621040362106962.webp?size=96",
    "https://cdn.discordapp.com/emojis/919621055310610503.webp?size=96",
    "https://cdn.discordapp.com/emojis/1339355559090196562.webp?size=96",
    "https://cdn.discordapp.com/emojis/590974491442675742.webp?size=96",
    "https://cdn.discordapp.com/emojis/919621054861803530.webp?size=96",
    "https://cdn.discordapp.com/emojis/919621053075042364.webp?size=96",
    "https://cdn.discordapp.com/emojis/1339368327088308354.webp?size=96",
    "https://cdn.discordapp.com/emojis/864278095937536010.webp?size=96",
    "https://cdn.discordapp.com/emojis/919621049719615529.webp?size=96",
    "https://cdn.discordapp.com/emojis/921130183895957625.webp?size=96",
    "https://cdn.discordapp.com/emojis/919621057160306788.webp?size=96",
    "https://cdn.discordapp.com/emojis/1339355562927980575.webp?size=96",
    "https://cdn.discordapp.com/emojis/685498540566249487.webp?size=96",
    "https://cdn.discordapp.com/emojis/1281537001685778484.webp?size=96",
    "https://cdn.discordapp.com/emojis/653959994567295017.webp?size=96",
    "https://cdn.discordapp.com/emojis/1352431703771316264.webp?size=96",
    "https://cdn.discordapp.com/emojis/1339368334059372587.webp?size=96",
    "https://cdn.discordapp.com/emojis/1339368334059372587.webp?size=96",
    "https://cdn.discordapp.com/emojis/1340774922158346423.webp?size=96",
    "https://cdn.discordapp.com/emojis/1277345193158377552.webp?size=96",
  ];

  let i = Math.floor(Math.random() * emojiList.length);

  // var vods = "";
  // const vodsList = await getAllData("vods", "createAt", -1, 6);
  // for (let i = 0; i <= vodsList.length-1; i++) {
  //   vods += `
  //   <div class="item" onclick="Aclick(2, '${vodsList[i]._id}');">
  //     <img src="${vodsList[i].picture}"/>
  //     <div class="title">${vodsList[i].title}</div>
  //     <div class="desc">${vodsList[i].description}</div>
  //   </div>
  // `;
  // }
  let vods="";

  var clips = "";
  const clipsList = await getAllData("clips", "createAt", -1, 6);
  for (let i = 0; i <= clipsList.length-1; i++) {
    clips += `
    <div class="item" onclick="Aclick(1, '${clipsList[i]._id}');">
      <img src="${clipsList[i].picture}"/>
      <div class="title">${clipsList[i].title}</div>
      <div class="desc">${clipsList[i].description}</div>
    </div>
  `;
  }

  var images = "";
  const imagesList = await getAllData("images", "createAt", -1, 6);
  for (let i = 0; i <= imagesList.length-1; i++) {
    images += `
    <div class="item" onclick="Aclick(3, '${imagesList[i]._id}');">
      <img src="${imagesList[i].picture}"/>
      <div class="title">${imagesList[i].title}</div>
      <div class="desc">${imagesList[i].description}</div>
    </div>
  `;
  }
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Akaruu Archive</title>
      <style>${css}</style>
      <style>${allCss}</style>
      <script>${click}</script>
      <link rel="icon" href="/favicon.ico" type="image/x-icon">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:title" content="Akaruu Archive">
      <meta property="og:description" content="ici, tu vas trouver tous les meilleurs clips d’Akaruu, les VODs et bien plus.">
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
        <div class="top">
          <div class="title">Bienvenue sur Akaruu Archive <img src="${emojiList[i]}"/></div>
          <div class="desc">ci, tu vas trouver tous les meilleurs clips d’Akaruu et bien plus.</div>
          <div class="btnlist">

          </div>
        </div>
        <div class="mid">
          <!-- <div class="preitem">
            <div class="title">VODS:</div>
            <div class="list">${vods}</div>
          </div> -->
          <div class="preitem">
            <div class="title">ClIPS:</div>
              <div class="list">${clips}</div>
          </div>
          <div class="preitem">
            <div class="title">IMAGES:</div>
              <div class="list">${images}</div>
          </div>
        </div>
      </div>
      ${footerHtml}
    </body>
    </html>
  `);
});

export default router;