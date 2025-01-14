/* Composant Contact */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Contact/template.html');
let templatebuttons = await loadTemplate('./component/Contact/templatebuttons.html');

let Contact = {}; 

Contact.format = function(obj){
    let html = template;
    html = html.replace('{{icon}}', obj.icon);
    html = html.replace('{{text}}', obj.text);
    html = html.replace('{{mail}}', obj.mail);
    
    let lisbtn = "";
    for (let objbtn of obj.btnlist) {
        lisbtn += Contact.formatBtn(objbtn);
    }

    html = html.replace(/{{button_list}}/g, lisbtn);

    return html;
};

Contact.formatBtn = function (obj) {
    let html = templatebuttons;
    html = html.replace(/{{btn}}/g, obj.btn);
    
    return html;
};

Contact.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += Contact.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {Contact};