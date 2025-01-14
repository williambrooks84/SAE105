/* Composant Call to Action */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/CallToActionV2/template.html');

let CallToActionV2 = {}; 

CallToActionV2.format = function(obj){
    let html = template;
    html = html.replace('{{text}}', obj.text);
    return html;
};

CallToActionV2.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += CallToActionV2.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {CallToActionV2};