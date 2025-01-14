/* Composant Features */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Features/template.html');
let templategrid = await loadTemplate('./component/Features/templategrid.html');

let Features = {};

Features.format = function (obj) {
    let html = template;

    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{text}}', obj.text);

    let lisgrid = "";
    for (let objgrid of obj.gridinfo) {
        lisgrid += Features.formatFeatures(objgrid);
    }

    html = html.replace(/{{grid_list}}/g, lisgrid); 

    return html;
};

Features.formatFeatures = function (obj) {
    let html = templategrid;
    html = html.replace(/{{name}}/g, obj.name);
    html = html.replace(/{{description}}/g, obj.description);
    
    return html;
};

Features.render = async function (selector, jsonFilename) {
    let data = await loadJSON(jsonFilename);

    let where = document.querySelector(selector);
    where.innerHTML = Features.format(data);
};

export { Features };
