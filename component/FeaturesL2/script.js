/* Composant FeaturesL2 */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/FeaturesL2/template.html');
let templatepoints = await loadTemplate('./component/FeaturesL2/templatepoints.html');

let FeaturesL2 = {};

FeaturesL2.format = function (obj) {

    let html = template;

    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{title_text}}', obj.title_text);

    let listelements = "";
    for (let objelements of obj.elements) {
        listelements += FeaturesL2.formatElements(objelements);
    }

    html = html.replace(/{{point_list}}/g, listelements);
    
    return html;
};

FeaturesL2.formatElements = function (obj) {
    let html = templatepoints;
    html = html.replace(/{{icon}}/g, obj.icon); 
    html = html.replace(/{{text}}/g, obj.text); 
    
    return html;
};


FeaturesL2.render = async function (selector, jsonFilename) {

    let data = await loadJSON(jsonFilename);

    let where = document.querySelector(selector);

    let formattedHTML = FeaturesL2.format(data);

    where.innerHTML = formattedHTML;
};




export { FeaturesL2 };
