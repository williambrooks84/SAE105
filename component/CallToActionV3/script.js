/* Composant CallToActionV3 */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/CallToActionV3/template.html');
let templatebtn = await loadTemplate('./component/CallToActionV3/templatebtn.html');

let CallToActionV3 = {}; 

CallToActionV3.format = function(obj){
    let html = template;
    html = html.replace('{{title}}', obj.title);
    
    let lisbtn = "";
    for (let objbtn of obj.btnlist) {
        lisbtn += CallToActionV3.formatBtn(objbtn);
    }

    html = html.replace(/{{btn_list}}/g, lisbtn);

    return html;
};

CallToActionV3.formatBtn = function (obj) {
    let html = templatebtn;
    html = html.replace(/{{btn}}/g, obj.btn);
    
    return html;
};

CallToActionV3.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = CallToActionV3.format(data);

    let where = document.querySelector(selector);
    
    where.innerHTML = where.innerHTML + html;
    
};

export {CallToActionV3};