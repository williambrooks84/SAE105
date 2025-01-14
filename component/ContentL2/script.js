/* Composant Content */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/ContentL2/template.html');

let ContentL2 = {}; 

ContentL2.format = function(obj){
    let html = template;
    html = html.replace('{{icon}}', obj.icon);
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{description}}', obj.description);
    return html;
};

ContentL2.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += ContentL2.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {ContentL2};