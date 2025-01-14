/* Composant TestimonialL2 */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/TestimonialL2/template.html');
let templateprofile = await loadTemplate('./component/TestimonialL2/templateprofile.html');

let TestimonialL2 = {};

TestimonialL2.format = function (obj) {
    let html = template;

    html = html.replace('{{title}}', obj.title);

    let lisprofile = "";
    for (let objprofile of obj.profileinfo) {
        lisprofile += TestimonialL2.formatProfile(objprofile);
    }

    html = html.replace(/{{profile_list}}/g, lisprofile); 

    return html;
};

TestimonialL2.formatProfile = function (obj) {
    let html = templateprofile;
    html = html.replace(/{{icon}}/g, obj.icon); 
    html = html.replace(/{{text}}/g, obj.text);
    html = html.replace(/{{name}}/g, obj.name);
    
    return html;
};

TestimonialL2.render = async function (selector, jsonFilename) {
    let data = await loadJSON(jsonFilename);

    let where = document.querySelector(selector);
    where.innerHTML = TestimonialL2.format(data);
};

export { TestimonialL2 };
