import { deleteData } from '../../src/functions/mongoDb';  // Assure-toi que ce chemin est correct

(async () => {
  const idToDelete = '68715f2e5682307486be449a';  // Remplace par l'ID que tu souhaites supprimer

  console.log(`Test de suppression du document avec l'ID: ${idToDelete}`);

  try {
    // Appelle la fonction deleteData pour supprimer le document
    const result = await deleteData("clips", idToDelete);
    
    // Si le résultat est valide, affiche un message de succès
    if (result.deletedCount === 1) {
      console.log(`Document avec l'ID ${idToDelete} supprimé avec succès.`);
    } else {
      console.log(`Aucun document trouvé avec l'ID ${idToDelete}.`);
    }
  } catch (error) {
    console.error("Erreur lors de la suppression des données:", error);
  }
})();
