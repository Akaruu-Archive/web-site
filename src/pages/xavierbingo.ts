import { Router, Request, Response } from 'express';
import fs from 'fs';

const headerHtml = fs.readFileSync('./static/html/header.html', 'utf8');
const footerHtml = fs.readFileSync('./static/html/footer.html', 'utf8');
const allCss = fs.readFileSync('./static/css/all.css', 'utf8');
let click = fs.readFileSync('./static/js/click.js', 'utf8');
let css = fs.readFileSync('./static/css/abdelbingo.css', 'utf8');

const router = Router();

router.get('/', async (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Akaruu Archive | Abdel Bingo</title>
      <style>${css}</style>
      <style>${allCss}</style>
      <script>${click}</script>
      <link rel="icon" href="/favicon.ico" type="image/x-icon">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:title" content="Akaruu Archive | Xavier Bingo">
      <meta property="og:description" content="Le bingo de Xavier sur audio love">
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
        <div class="title">XAVIER BINGO<img src="https://static-cdn.jtvnw.net/emoticons/v2/52/default/dark/1.0" alt="emoji"></div>
        <!-- <div class="desc"></div> -->
        <div class="content">
          <div class="item" onclick="select(this, 1);">micro penis</div>
          <div class="item" onclick="select(this, 2);">taille du zgeg</div>
          <div class="item" onclick="select(this, 3);">pas circonsie</div>
          <div class="item" onclick="select(this, 4);">mes 2 petit cerise</div>
          <div class="item" onclick="select(this, 5);">parle a ton amie de mon zgeg</div>
          <div class="item" onclick="select(this, 6);">mettre dans le pseudo la taille du zgeg</div>
          <div class="item" onclick="select(this, 7);">de retour apres une mechante coupure</div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
      <script>
        function select(element, vid) {
          const currentColor = window.getComputedStyle(element).backgroundColor;

          if (currentColor === "rgb(32, 32, 32)" || currentColor === "rgb(24, 22, 22)") {
            let sound = new Audio('https://github.com/xavierbingo/xavierbingo.github.io/raw/refs/heads/main/song/'+vid+'.mp3');
            sound.play();
            element.style.backgroundColor = "#71de3c";

            confetti({
              particleCount: 400,
              spread: 1000,
              origin: { y: 0.6 }
            });
          } else {
            element.style.backgroundColor = "#202020";
          };
        };
      </script>
      ${footerHtml}
    </body>
  </html>
  `);
});

export default router;