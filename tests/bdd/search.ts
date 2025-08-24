import { search } from '../../src/functions/mongoDb';

(async () => {

  try {
    const add = await search("oh oh mini");

    console.log(add);
  } catch (error) {
    console.error("Erreur lors de l'ajout des données:", error);
  }
})();
