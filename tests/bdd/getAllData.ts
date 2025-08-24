import { getAllData } from '../../src/functions/mongoDb';

(async () => {
  console.log("Test d'ajout des données dans MongoDB...");

  try {
    const add = await getAllData("clips", "createAt", -1,2);

    console.log(add);
  } catch (error) {
    console.error("Erreur lors de l'ajout des données:", error);
  }
})();
