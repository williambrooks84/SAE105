/* Composant Call to Action */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/CallToAction/template.html');

let CallToAction = {}; 

CallToAction.format = function(obj){
    let html = template;
    html = html.replace('{{label}}', obj.label);
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{btn}}', obj.btn);
    return html;
};

CallToAction.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += CallToAction.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {CallToAction};