/* Composant Content */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Content/template.html');

let Content = {}; 

Content.format = function(obj){
    let html = template;
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{description}}', obj.description);
    return html;
};

Content.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += Content.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {Content};