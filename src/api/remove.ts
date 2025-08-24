import { Router, Request, Response } from 'express';
import { deleteData } from '../functions/mongoDb';

const router = Router();

router.get('/', async (req, res) => {
  let keyFromHeader = req.headers['key'];
  let typeFromHeader = req.headers['type'];
  let idFromHeader = req.headers['id'] as string;

  if (Array.isArray(keyFromHeader)) {
    keyFromHeader = keyFromHeader[0];
  };

  if (!keyFromHeader || keyFromHeader !== process.env.TOKEN_KEY) {
    return res.status(400).json({
      error: true,
      error_code: 1,
      error_message: "Le header 'key' est manquant ou invalide."
    });
  };

  if (Array.isArray(typeFromHeader)) {
    typeFromHeader = typeFromHeader[0];
  };

  if (!typeFromHeader || (typeFromHeader !== "clips" && typeFromHeader !== "vods" && typeFromHeader !== "images")) {
    return res.status(400).json({
      error: true,
      error_code: 3,
      error_message: "Le header 'type' est requis et doit être l'une des valeurs suivantes : 'clips', 'vods', 'images'."
    });
  }

  if (!idFromHeader) {
    return res.status(400).json({
      error: true,
      error_code: 4,
      error_message: "Le header 'id' est requis."
    });
  };

  try {
    const result = await deleteData(typeFromHeader, idFromHeader);
    return res.status(200).json({
      message: "Données supprimées avec succès.",
      result: result
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      error_code: 5,
      error_message: "Erreur lors de la suppression des données."
    });
  };
});

export default router;