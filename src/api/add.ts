import { Router, Request, Response } from 'express';
import { addData } from '../functions/mongoDb';
import * as dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.get('/', async (req, res) => {
  let keyFromHeader = req.headers['key'];
  var urlFromHeader = req.headers['url'];
  let typeFromHeader = req.headers['type'];
  let titleFromHeader = req.headers['title'];
  let descriptionHeader = req.headers['description'];
  let CCFromHeader = req.headers['cc'];
  let pictureFromHeader = req.headers['picture'];

  if (!keyFromHeader || keyFromHeader !== process.env.TOKEN_KEY) {
    return res.status(400).json({
      error: true,
      error_code: 1,
      error_message: "Le header 'key' est manquant ou invalide."
    });
  };

  if (!pictureFromHeader) {
    return res.status(400).json({
      error: true,
      error_code: 2,
      error_message: "Le header 'picture' est requis."
    });
  };

  if (!typeFromHeader || (typeFromHeader !== "clips" && typeFromHeader !== "vods" && typeFromHeader !== "images")) {
    return res.status(400).json({
      error: true,
      error_code: 3,
      error_message: "Le header 'type' est requis et doit être l'une des valeurs suivantes : 'clips', 'vods', 'images'."
    });
  };

  if (!titleFromHeader) {
    return res.status(400).json({
      error: true,
      error_code: 4,
      error_message: "Le header 'title' est requis."
    });
  }

  if (!descriptionHeader) {
    return res.status(400).json({
      error: true,
      error_code: 5,
      error_message: "Le header 'description' est requis."
    });
  }

  try {
    const data = {
      url: urlFromHeader ?? "",
      picture: pictureFromHeader,
      title: titleFromHeader,
      description: descriptionHeader,
      cc: CCFromHeader ?? "",
    };

    await addData(typeFromHeader, data);
  } catch (error) {
    return res.status(500).json({
      error: true,
      error_code: 7,
      error_message: "Une erreur est survenue lors de l'ajout des données dans la base de données."
    });
  }

  return res.json({
    url: urlFromHeader,
    picture: pictureFromHeader,
    type: typeFromHeader,
    title: titleFromHeader,
    description: descriptionHeader,
    cc: CCFromHeader,
  });
});

export default router;