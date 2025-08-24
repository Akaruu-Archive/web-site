import { addData } from '../../src/functions/mongoDb';

(async () => {
  console.log("Test d'ajout des données dans MongoDB...");

  try {
    const add = await addData("clips", {
      url: "https://media.discordapp.net/attachments/1393269747935612950/1393269748258701433/17D0B853-C32B-4C1E-92ED-BBBEC90F10D9.mov?ex=68728f11&is=68713d91&hm=af9164314d27db0dee80e22bd20fedd5d032b54897b70f8b69385fb6a7b2b520&format=webp&width=550&height=309",
      title: "il est fou",
      descriptionHeader: "il se met un truc dans le uc",
      cc: "oh oh mini",
      picture: "....",
    });

    console.log("Données ajoutées avec succès", add);
  } catch (error) {
    console.error("Erreur lors de l'ajout des données:", error);
  }
})();
