/* Composant Showcase */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Showcase/template.html');
let templateelement = await loadTemplate('./component/Showcase/templateelement.html');

let Showcase = {};

Showcase.format = function (obj) {

    let html = template;

    let listelements = "";
    for (let objelements of obj.elements) {
        listelements += Showcase.formatElements(objelements);
    }

    html = html.replace(/{{element_list}}/g, listelements);
    
    return html;
};

Showcase.formatElements = function (obj) {
    let html = templateelement;
    html = html.replace(/{{title}}/g, obj.title); 
    html = html.replace(/{{text}}/g, obj.text); 
    html = html.replace(/{{btn}}/g, obj.btn); 
    html = html.replace(/{{img}}/g, obj.img); 
    
    return html;
};


Showcase.render = async function (selector, jsonFilename) {

    let data = await loadJSON(jsonFilename);

    let where = document.querySelector(selector);

    let formattedHTML = Showcase.format(data);

    where.innerHTML = formattedHTML;
};




export { Showcase };
