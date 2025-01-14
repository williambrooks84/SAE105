/* Composant Hero */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Hero/template.html');

let Hero = {}; 

Hero.format = function(obj){
    let html = template;
    html = html.replace('{{label}}', obj.label);
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{text}}', obj.text);
    html = html.replace('{{btn}}', obj.btn);
    html = html.replace('{{img}}', obj.img);
    return html;
};

Hero.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += Hero.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {Hero};