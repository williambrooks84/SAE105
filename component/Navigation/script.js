/* Composant Navigation */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Navigation/template.html');
let templatetext = await loadTemplate('./component/Navigation/templatetext.html');
let templateimg = await loadTemplate('./component/Navigation/templateimg.html');

let Navigation = {};

Navigation.format = function (obj) {
    let html = template;

    let listext = "";
    for (let objtext of obj.btn_text) {
        listext += Navigation.formatText(objtext);
    }

    html = html.replace(/{{btn_text_list}}/g, listext);

    let lisimg = "";
    for (let objimg of obj.btnicons) {
        lisimg += Navigation.formatImg(objimg);
    }

    html = html.replace(/{{btn_img_list}}/g, lisimg);

    return html;
};

Navigation.formatText = function (obj) {
    let html = templatetext;
    html = html.replace(/{{btn_href}}/g, obj.href); 
    html = html.replace(/{{btn_text}}/g, obj.btn_text); 
    
    return html;
};


Navigation.formatImg = function (obj) {
    let html = templateimg;
    html = html.replace(/{{btn_img}}/g, obj.btn_img); 

    return html;
};

Navigation.render = async function (selector, jsonFilename) {
    let data = await loadJSON(jsonFilename);

    let where = document.querySelector(selector);
    where.innerHTML = Navigation.format(data);
};

export { Navigation };
