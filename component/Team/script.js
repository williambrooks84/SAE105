/* Composant Team */

import { loadTemplate, loadJSON } from '../../js/loader.js';

let template = await loadTemplate('./component/Team/template.html');
let templateprofile = await loadTemplate('./component/Team/templateprofile.html');
let templateprofilebuttons = await loadTemplate('./component/Team/templateprofilebuttons.html');

let Team = {};

Team.format = function (obj) {
    let html = template;

    html = html.replace("{{title}}", obj.title);
    html = html.replace("{{description}}", obj.description);
    html = html.replace("{{btn}}", obj.btn);

    let lisprofile = "";
    for (let objprofile of obj.profileinfo) {
        lisprofile += Team.formatTeam(objprofile);
    }

    html = html.replace(/{{profile_list}}/g, lisprofile); 

    let lisicon = "";
    for (let objicon of obj.btnicons) {
        lisicon += Team.formatIcon(objicon);
    }

    html = html.replace(/{{button_list}}/g, lisicon); 

    return html;
};

Team.formatTeam = function (obj) {
    let html = templateprofile;
    html = html.replace(/{{profile_icon}}/g, obj.icon); 
    html = html.replace(/{{name}}/g, obj.name);
    html = html.replace(/{{label}}/g, obj.label);
    
    return html;
};

Team.formatIcon = function (obj) {
    let html = templateprofilebuttons;
    html = html.replace(/{{btn_icon}}/g, obj.btnicon); 

    return html;
};

Team.render = async function (selector, jsonFilename) {
    let data = await loadJSON(jsonFilename);

    let where = document.querySelector(selector);
    where.innerHTML = Team.format(data);
};

export { Team };
