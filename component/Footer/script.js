/* Composant Team */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Footer/template.html');
let templateabout = await loadTemplate('./component/Footer/templateabout.html');
let templatemessage = await loadTemplate('./component/Footer/templatemessage.html');
let templatebtn = await loadTemplate('./component/Footer/templatebtn.html');

let Footer = {};

Footer.format = function (obj) {
    let html = template;

    html = html.replace("{{title}}", obj.message.title);
    html = html.replace("{{text}}", obj.message.text);
    html = html.replace("{{contacts_btn}}", obj.contacts_btn);

    let lisabout = "";
    for (let objabout of obj.btn_text) {
        lisabout += Footer.formatAbout(objabout);
    }

    html = html.replace(/{{about_btn_list}}/g, lisabout);

    let lismessage = Footer.formatMessage(obj.message);

    html = html.replace(/{{message_list}}/g, lismessage);

    let lisbtn = "";
    for (let objbtn of obj.btnicons) {
        lisbtn += Footer.formatBtn(objbtn);
    }

    html = html.replace(/{{contact_btn_list}}/g, lisbtn);

    return html;
};


Footer.formatAbout = function (obj) {
    let html = templateabout;
    html = html.replace(/{{btn_text}}/g, obj.btn_text); 
    
    return html;
};

Footer.formatMessage = function (obj) {
    let html = templatemessage;
    html = html.replace(/{{title}}/g, obj.title); 
    html = html.replace(/{{text}}/g, obj.text); 
    
    return html;
};

Footer.formatBtn = function (obj) {
    let html = templatebtn;
    html = html.replace(/{{btn_img}}/g, obj.btn_img); 

    return html;
};


Footer.render = async function (selector, jsonFilename) {
    let data = await loadJSON(jsonFilename);

    let where = document.querySelector(selector);
    where.innerHTML = Footer.format(data);
};

export { Footer };
