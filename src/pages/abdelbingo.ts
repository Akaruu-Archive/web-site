import { Router, Request, Response } from 'express';
import fs from 'fs';

const headerHtml = fs.readFileSync('./static/html/header.html', 'utf8');
const footerHtml = fs.readFileSync('./static/html/footer.html', 'utf8');
const allCss = fs.readFileSync('./static/css/all.css', 'utf8');
let btnMore = fs.readFileSync('./static/js/btnMore.js', 'utf8');
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
      <script>${btnMore + click}</script>
      <link rel="icon" href="/favicon.ico" type="image/x-icon">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta property="og:title" content="Akaruu Archive | Abdel Bingo">
      <meta property="og:description" content="Le bingo de Abdel sur audio love">
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
        <div class="title">ABDEL BINGO<img src="https://static-cdn.jtvnw.net/emoticons/v2/52/default/dark/1.0" alt="emoji"></div>
        <!-- <div class="desc">À partir de "t'es pas rentrée dans son jeu", c'est des nouveaux trucs</div> -->
        <div class="content">
          <div class="item" onclick="select(this, 20);">On dirait ta un micro</div>
          <div class="item" onclick="select(this, 2);">tout simplement</div>
          <div class="item" onclick="select(this, 11);">je révéle pas la conv</div>
          <div class="item" onclick="select(this, 9);">ma mémoire me fait pas defaut</div>
          <div class="item" onclick="select(this, 26);">paradoxa<br />lement</div>
          <div class="item" onclick="select(this, 1);">abdel chante</div>
          <div class="item" onclick="select(this, 4);">bledard de merde</div>
          <div class="item" onclick="select(this, 14);">maitresse sandra</div>
          <div class="item" onclick="select(this, 10);">t drole</div>
          <div class="item" onclick="select(this, 7);">prend soin de toi</div>
          <div class="item" onclick="select(this, 5);">ta une jolie voix</div>
          <div class="item" onclick="select(this, 8);">voila</div>
          <div class="item" onclick="select(this, 16);">je réduit la cigarette</div>
          <div class="item" onclick="select(this, 12);">33 ans je connais les réseaux</div>
          <div class="item" onclick="select(this, 15);">je BLACk list</div>
          <div class="item" onclick="select(this, 3);">c mignion comme tout</div>
          <div class="item" onclick="select(this, 6);">ta une bonne personalité</div>
          <div class="item" onclick="select(this, 13);">Ch'uis un bon lecheur</div>
          <div class="item" onclick="select(this, 17);">tu te pleins rarement</div>
          <div class="item" onclick="select(this, 19)">t pas naif</div>
          <div class="item" onclick="select(this, 18)">c des cassos</div>
          <div class="item" onclick="select(this, 21)">penser a toi en mangent tacos</div>
          <div class="item" onclick="select(this, 22)">t une grande mangeuse</div>
          <div class="item" onclick="select(this, 24)">t charmante</div>
          <div class="item" onclick="select(this, 23)">j'te fait des bisous</div>
          <div class="item" onclick="select(this, 25)">tu chante bien</div>
          <div class="item" onclick="select(this, 27)">j'ai confiance en toi</div>
          <div class="item" onclick="select(this, 28)">ca m'exiterais</div>
          <div class="item" onclick="select(this, 29)">y a des bons et des mauvais</div>
          <div class="item" onclick="select(this, 30)">je suis née a paris</div>
          <div class="item" onclick="select(this, 31)">j'crois tout ce que tu me dis</div>
          <div class="item" onclick="select(this, 32)">c original</div>
          <div class="item" onclick="select(this, 33)">t pas rentrée dans son jeu</div>
          <div class="item" onclick="select(this, 34)">a 1h02 y a plus de modo</div>
          <div class="item" onclick="select(this, 35)">MashAllah</div>
          <!-- <div class="item" onclick="select(this, 36)">MDR</div> -->
          <!-- <div class="item" onclick="select(this);">je reconnais les fakes fams</div> -->
          <!-- <div class="item" onclick="select(this);">ca fait 8ans je bois pas de coca</div> -->
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
      <script>
        function select(element, vid) {
          const currentColor = window.getComputedStyle(element).backgroundColor;

          if (currentColor === "rgb(32, 32, 32)" || currentColor === "rgb(24, 22, 22)") {
            let sound = new Audio('https://github.com/abdelbingo/abdelbingo.github.io/raw/refs/heads/main/song/'+vid+'.mp3');
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