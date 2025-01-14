/* Composant ShowcaseL2 */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/ShowcaseL2/template.html');
let templategrid = await loadTemplate('./component/ShowcaseL2/templategrid.html');

let ShowcaseL2 = {};

ShowcaseL2.format = function (obj) {
    let html = template;

    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{text}}', obj.text);

    let lisgrid = "";
    for (let objgrid of obj.gridinfo) {
        lisgrid += ShowcaseL2.formatGrid(objgrid);
    }

    html = html.replace(/{{grid_list}}/g, lisgrid); 

    return html;
};

ShowcaseL2.formatGrid = function (obj) {
    let html = templategrid;

    html = html.replace(/{{grid_name}}/g, obj.grid_name); 
    html = html.replace(/{{grid_text}}/g, obj.grid_text);
    html = html.replace(/{{grid_img}}/g, obj.grid_img);
    
    return html;
};

ShowcaseL2.render = async function (selector, jsonFilename) {
    let data = await loadJSON(jsonFilename);

    let where = document.querySelector(selector);
    where.innerHTML = ShowcaseL2.format(data);
};

export { ShowcaseL2 };
