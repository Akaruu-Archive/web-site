"use strict";
let items = 20;
function btnMore(paramNum) {
    const listEl = document.getElementById("list");
    if (!listEl) {
        console.error("L'élément avec l'ID 'list' est introuvable.");
        return;
    }
    if (isNaN(paramNum) || paramNum < 1 || paramNum > 3) {
        console.error("Paramètre invalide : doit être un nombre entre 1 et 3.");
        return;
    }
    let type = '';
    switch (paramNum) {
        case 1:
            type = "clips";
            break;
        case 2:
            type = "vods";
            break;
        case 3:
            type = "images";
            break;
    }
    fetch("./api/getAlldata", {
        method: 'GET',
        headers: {
            'type': type,
            'sortby': "createAt",
            'sortorder': "-1",
            'limit': `${items + 20}`
        },
    })
        .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json();
    })
        .then(data => {
        let html = listEl.innerHTML;
        for (let i = 20; i <= items + 19; i++) {
            if (!data[i]) {
                console.warn(`Donnée manquante à l'index ${i}`);
                continue;
            }
            html += `
          <div class="item" onclick="Aclick(1, '${data[i]._id}')">
            <img src="${data[i].picture}" alt="${data[i].title}"/>
            <div class="title">${data[i].title}</div>
            <div class="desc">${data[i].description}</div>
          </div>
        `;
        }
        listEl.innerHTML = html;
        items += 20;
    })
        .catch(error => {
        console.error("Erreur lors du chargement des données :", error);
    });
}
;
//# sourceMappingURL=btnMore.js.map