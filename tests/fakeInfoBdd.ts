import { addData, deleteData, getAllData } from '../src/functions/mongoDb';

for(let i = 0; i<=50;i++) {
  addData("clips", {
    url: "https://archive.org/download/20250421-onerous-abstruse-mom-you-why-y-sb-2c-azw-mcnrz-oki-source/20250421_OnerousAbstruseMomYouWHY-ySb2cAzwMCNrzOKI_source.ia.mp4",
    title: "clip"+i,
    description: "il se met un truc dans le uc",
    cc: "oh oh mini",
    picture: "https://archive.org/download/20250421-onerous-abstruse-mom-you-why-y-sb-2c-azw-mcnrz-oki-source/__ia_thumb.jpg",
  })
};

for(let i = 0; i<=50;i++) {
  addData("images", {
    title: "image"+i,
    description: "il se met un truc dans le uc",
    picture: "https://archive.org/download/20250421-onerous-abstruse-mom-you-why-y-sb-2c-azw-mcnrz-oki-source/__ia_thumb.jpg",
  })
};

for(let i = 0; i<=50;i++) {
  addData("vods", {
    url: "https://archive.org/download/20250421-onerous-abstruse-mom-you-why-y-sb-2c-azw-mcnrz-oki-source/20250421_OnerousAbstruseMomYouWHY-ySb2cAzwMCNrzOKI_source.ia.mp4",
    title: "vod"+i,
    description: "il se met un truc dans le uc",
    cc: "oh oh mini",
    picture: "https://archive.org/download/20250421-onerous-abstruse-mom-you-why-y-sb-2c-azw-mcnrz-oki-source/__ia_thumb.jpg",
  })
};