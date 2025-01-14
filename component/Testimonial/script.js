import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Testimonial/template.html');

let Testimonial = {}; 

Testimonial.format = function(obj){
    let html = template;
    html = html.replace('{{title}}', obj.title);
    html = html.replace('{{img}}', obj.img);
    html = html.replace('{{text}}', obj.text);
    html = html.replace('{{name}}', obj.name);
    html = html.replace('{{brand}}', obj.brand);
    return html;
};

Testimonial.render = async function(selector, jsonFilename){
    let data = await loadJSON(jsonFilename);

    let html = '';
    for(let obj of data){
        html += Testimonial.format(obj);  
    }
    
    let where = document.querySelector(selector);
    where.innerHTML = where.innerHTML + html;
};

export {Testimonial};