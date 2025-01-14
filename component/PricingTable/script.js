/* Composant PricingTable */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/PricingTable/template.html');

let PricingTable = {}; 

PricingTable.format = function(obj){
    let html = template;
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{subtitle}}', obj.subtitle);
    html = html.replace('{{label}}', obj.label);
    html = html.replace('{{nbclients}}', obj.nbclients);
    html = html.replace('{{text}}', obj.text);
    html = html.replace('{{btn}}', obj.btn);
    return html;
};

PricingTable.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += PricingTable.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {PricingTable};