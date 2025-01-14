/* Composant Contact */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/ContactL2/template.html');

let ContactL2 = {}; 

ContactL2.format = function(obj){
    let html = template;
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{text}}', obj.text);
    html = html.replace('{{name}}', obj.name);
    html = html.replace('{{mail}}', obj.mail);
    html = html.replace('{{message}}', obj.message);
    html = html.replace('{{btn}}', obj.btn);

    return html;
};

ContactL2.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += ContactL2.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {ContactL2};