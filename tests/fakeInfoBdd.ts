import { addData, deleteData, getAllData } from '../src/functions/mongoDb';

for(let i = 0; i<=50;i++) {
  addData("clips", {
    url: "https://media.discordapp.net/attachments/1393269747935612950/1393269748258701433/17D0B853-C32B-4C1E-92ED-BBBEC90F10D9.mov?ex=68748951&is=687337d1&hm=fedaabbff8d5d44ca68c93fadcdbf727c9ab53665e5e00c4ea08e8baae7f9adc&format=webp&width=550&height=309",
    title: "clip"+i,
    description: "il se met un truc dans le uc",
    cc: "oh oh mini",
    picture: "https://media.discordapp.net/attachments/1393269747935612950/1393348234675753143/unknown-5.png?ex=687429aa&is=6872d82a&hm=8690373021e5cdbf92752bb829df5beafbdb053879c0f02cae6eb5559a2a94d5&=&format=webp&quality=lossless&width=1268&height=713",
  })
};

for(let i = 0; i<=50;i++) {
  addData("images", {
    title: "image"+i,
    description: "il se met un truc dans le uc",
    cc: "oh oh mini",
    picture: "https://media.discordapp.net/attachments/1393269747935612950/1393348234675753143/unknown-5.png?ex=687429aa&is=6872d82a&hm=8690373021e5cdbf92752bb829df5beafbdb053879c0f02cae6eb5559a2a94d5&=&format=webp&quality=lossless&width=1268&height=713",
  })
};

for(let i = 0; i<=50;i++) {
  addData("vods", {
    url: "https://media.discordapp.net/attachments/1393269747935612950/1393269748258701433/17D0B853-C32B-4C1E-92ED-BBBEC90F10D9.mov?ex=68728f11&is=68713d91&hm=af9164314d27db0dee80e22bd20fedd5d032b54897b70f8b69385fb6a7b2b520&format=webp&width=550&height=309",
    title: "vod"+i,
    description: "il se met un truc dans le uc",
    cc: "oh oh mini",
    picture: "https://media.discordapp.net/attachments/1393269747935612950/1393348234675753143/unknown-5.png?ex=687429aa&is=6872d82a&hm=8690373021e5cdbf92752bb829df5beafbdb053879c0f02cae6eb5559a2a94d5&=&format=webp&quality=lossless&width=1268&height=713",
  })
};