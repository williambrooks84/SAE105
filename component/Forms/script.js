/* Composant Forms */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Forms/template.html');

let Forms = {}; 

Forms.format = function(obj){
    let html = template;
    html = html.replace('{{head}}', obj.head);
    html = html.replace('{{mail}}', obj.mail);
    html = html.replace('{{mdp}}', obj.mdp);
    html = html.replace('{{btn}}', obj.btn);
    html = html.replace('{{message}}', obj.message);
    return html;
};

Forms.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += Forms.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {Forms};