import { Router, Request, Response } from 'express';
import { getAllData } from '../functions/mongoDb';

const router = Router();

router.get('/', async (req, res) => {
  let typeFromHeader = req.headers['type'];
  let sortByFromHeader = req.headers['sortby'];
  let sortOrderFromHeader = req.headers['sortorder'];
  let limitFromHeader = req.headers['limit'];

  if (Array.isArray(typeFromHeader)) {
    typeFromHeader = typeFromHeader[0];
  }

  if (!typeFromHeader || (typeFromHeader !== 'clips' && typeFromHeader !== 'vods' && typeFromHeader !== 'images')) {
    return res.status(400).json({
      error: true,
      error_code: 3,
      error_message: "Le header 'type' est requis et doit être l'une des valeurs suivantes : 'clips', 'vods', 'images'."
    });
  };

  if (!sortByFromHeader) {
    return res.status(400).json({
      error: true,
      error_code: 6,
      error_message: "Le header 'sortby' est requis."
    });
  };

  if (Array.isArray(sortOrderFromHeader)) {
    sortOrderFromHeader = sortOrderFromHeader[0];
  };

  if (!sortOrderFromHeader || (sortOrderFromHeader !== '1' && sortOrderFromHeader !== '-1')) {
    return res.status(400).json({
      error: true,
      error_code: 7,
      error_message: "Le header 'sortorder' est requis et doit être 1 (croissant) ou -1 (décroissant)."
    });
  };

  const sortOrder = parseInt(sortOrderFromHeader as string, 10);

  if (Array.isArray(limitFromHeader)) {
    limitFromHeader = limitFromHeader[0];
  };

  const limit = limitFromHeader ? parseInt(limitFromHeader as string, 10) : 10;

  if (isNaN(limit) || limit <= 0) {
    return res.status(400).json({
      error: true,
      error_code: 8,
      error_message: "Le header 'limit' est requis et doit être un nombre entier positif."
    });
  }

  try {
    const data = await getAllData(
      typeFromHeader as string, 
      sortByFromHeader as string, 
      sortOrder as 1 | -1,
      limit
    );
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: true,
      error_code: 5,
      error_message: "Erreur lors de la récupération des données."
    });
  };
});

export default router;