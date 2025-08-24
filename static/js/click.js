"use strict";
function Aclick(param, id) {
    const paramNum = Number(param);
    console.log("Redirection vers :", paramNum, id);
    if (isNaN(paramNum) || paramNum < 1 || paramNum > 3) {
        console.error("Paramètre invalide : doit être un nombre entre 1 et 3.");
        return;
    }
    if (!id || typeof id !== 'string') {
        console.error("ID invalide : il doit être une chaîne de caractères non vide.");
        return;
    }
    let url = '';
    switch (paramNum) {
        case 1:
            url = "/clips?watch=";
            break;
        case 2:
            url = "/vods?watch=";
            break;
        case 3:
            url = "/images?watch=";
            break;
    }
    const finalUrl = `${url}${encodeURIComponent(id)}`;
    console.log("➡️ Redirection vers :", finalUrl);
    window.location.href = finalUrl;
}
;
//# sourceMappingURL=click.js.map