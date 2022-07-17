/**
 * je récupère la fonction CreateDOMElement qui
 * Crée un élément du DOM et le retourne
 * @param {String} markupname
 * @param {String} text
 * @param {DomElement} parent
 * @param {Array} attributes
 * @return {DomElement}
 */
function createDOMElement(markupname, text, parent, attributes = []) {
  const dom_element = document.createElement(markupname);
  dom_element.textContent = text;
  parent.appendChild(dom_element);

  if (attributes.length) {
    attributes.forEach((attribute) => {
      if (attribute.name && attribute.value) {
        dom_element.setAttribute(attribute.name, attribute.value);
      }
    });
  }
  return dom_element;
}
//je crée deux  élements de DOM de type header et main:

const header = createDOMElement("header", "", document.body);
const main = createDOMElement("main", "", document.body);

//je crée les trois bouttons avec leurs intitulé
const buttonCompetences = createDOMElement("button", "Compétences", header, [
  { name: "id", value: "btn-skills" },
]);
const buttonExperience = createDOMElement("button", "Expérience", header, [
  { name: "id", value: "btn-experience" },
]);
const buttonFormation = createDOMElement("button", "Formation", header, [
  { name: "id", value: "btn-training" },
]);

// je stocke le contenu texte de plus de 10 lignes à afficher dans une constante:

const contenu =
  "L'histoire de la France commence avec les premières occupations humaines du territoire correspondant au pays actuel. Aux groupes présents depuis le Paléolithique et le Néolithique, sont venues s'ajouter, à l'Âge du bronze et à l'Âge du fer, des vagues successives de Celtes, puis au iiie siècle de peuples germains (Francs, Wisigoths, Alamans, Burgondes) et au ixe siècle de scandinaves appelés Normands.Le nom de la France est issu d'un peuple germanique, les Francs. Clovis (466-511), roi des Francs saliens, scelle par son baptême à Reims l'alliance de la royauté franque avec l'Église catholique. Il unit les tribus franques salienne et ripuaire et conquiert un ensemble de territoires en Gaule et en Germanie qui sont agrandis par ses descendants mérovingiens, puis par la deuxième dynastie franque des Carolingiens fondée en 751. Charlemagne en particulier conquiert la Basse-Saxe dans le Nord de l'Allemagne, le royaume lombard en Italie et constitue une marche à l'est qui deviendra l'Autriche. L'Empire carolingien est finalement partagé en 843 entre ses petits-fils par le traité de Verdun qui sépare la Francie occidentale de la Francie L'histoire de la France commence avec les premières occupations humaines du territoire correspondant au pays actuel. Aux groupes présents depuis le Paléolithique et le Néolithique, sont venues s'ajouter, à l'Âge du bronze et à l'Âge du fer, des vagues successives de Celtes, puis au iiie siècle de peuples germains (Francs, Wisigoths, Alamans, Burgondes) et au ixe siècle de scandinaves appelés Normands.Le nom de la France est issu d'un peuple germanique, les Francs. Clovis (466-511), roi des Francs saliens, scelle par son baptême à Reims l'alliance de la royauté franque avec l'Église catholique. Il unit les tribus franques salienne et ripuaire et conquiert un ensemble de territoires en Gaule et en Germanie qui sont agrandis par ses descendants mérovingiens, puis par la deuxième dynastie franque des correspondant au pays actuel. Aux groupes présents depuis le Paléolithique et le Néolithique, sont venues s'ajouter, à l'Âge du bronze et à l'Âge du fer, des vagues successives de Celtes, puis au iiie siècle de peuples germains (Francs, Wisigoths, Alamans, Burgondes) et au ixe siècle de scandinaves appelés Normands.Le nom de la France est issu d'un peuple germanique, les Francs. Clovis (466-511), roi des Francs saliens, scelle par son baptême à Reims l'alliance de la royauté franque avec l'Église catholique. Il unit les tribus franques salienne et ripuaire et conquiert un ensemble de territoires en Gaule et en Germanie qui sont agrandis par ses descendants mérovingiens, puis par la deuxième dynastie franque des ";

// au click sur le buttonCompetences, je vérifie si un paragraphe de type Competence n'existe pas
//si oui , je cree un titre et un paragraphe de type compétence.
//sinon je laisse le titre et paragraphe existant pour Competences visibles.
// je cache en suite le titre et paragraphe pour Formation et Experience s'ils existent déjà.

buttonCompetences.onclick = function () {
  if (document.getElementById("idParagrapheCompetence") == null) {
    createDOMElement("h1", "Compétences", main, [
      { name: "id", value: "idTitreCompetence" },
    ]);
    createDOMElement("p", `paragraphe pour competences: ${contenu}`, main, [
      { name: "id", value: "idParagrapheCompetence" },
    ]);
  } else {
    document.getElementById("idParagrapheCompetence").hidden = false;
    document.getElementById("idTitreCompetence").hidden = false;
  }
  //je cache le titre et le paragraphe pour  Formation s'ils existent !

  if (document.getElementById("idParagrapheFormation") != null) {
    document.getElementById("idTitreFormation").hidden = true;
    document.getElementById("idParagrapheFormation").hidden = true;
  }
  //je cache le titre et le paragraphe pour  Experience  s'ils existent !
  if (document.getElementById("idParagrapheExperience") != null) {
    document.getElementById("idTitreExperience").hidden = true;
    document.getElementById("idParagrapheExperience").hidden = true;
  }
};

// au click sur le buttonExperience, je vérifie si un paragraphe de type Experience n'existe pas
//si oui , je cree un titre et un paragraphe pour Experience.
//sinon je laisse le titre et paragraphe existant visibles.
//je cache en suite le titre et le paragraphe pour Formation et competence  s'ils existent déjà avec hidden =true.
buttonExperience.onclick = function () {
  if (document.getElementById("idParagrapheExperience") == null) {
    createDOMElement("h1", "Expérience", main, [
      { name: "id", value: "idTitreExperience" },
    ]);
    createDOMElement("p", `paragraphe pour Experience: ${contenu}`, main, [
      { name: "id", value: "idParagrapheExperience" },
    ]);
  } else {
    document.getElementById("idTitreExperience").hidden = false;
    document.getElementById("idParagrapheExperience").hidden = false;
  }
  //je cache le titre et le paragraphe pour  Formation s'ils existent !

  if (document.getElementById("idParagrapheFormation") != null) {
    document.getElementById("idTitreFormation").hidden = true;
    document.getElementById("idParagrapheFormation").hidden = true;
  }
  //je cache le titre et le paragraphe pour  Competence s'ils existent !
  if (document.getElementById("idParagrapheCompetence") != null) {
    document.getElementById("idTitreCompetence").hidden = true;
    document.getElementById("idParagrapheCompetence").hidden = true;
  }
};

//idem pour buttonFormation: même logique que les deux bouttons précedents

buttonFormation.onclick = function () {
  if (document.getElementById("idParagrapheFormation") == null) {
    createDOMElement("h1", "Formation", main, [
      { name: "id", value: "idTitreFormation" },
    ]);

    createDOMElement("p", `paragraphe pour Formation: ${contenu}`, main, [
      { name: "id", value: "idParagrapheFormation" },
    ]);
  } else {
    document.getElementById("idTitreFormation").hidden = false;
    document.getElementById("idParagrapheFormation").hidden = false;
  }
  //je cache le titre et le paragraphe pour  Experience s'ils existent !

  if (document.getElementById("idParagrapheExperience") != null) {
    document.getElementById("idTitreExperience").hidden = true;
    document.getElementById("idParagrapheExperience").hidden = true;
  }
  //je cache le titre et le paragraphe pour  Competence s'ils existent !

  if (document.getElementById("idParagrapheCompetence") != null) {
    document.getElementById("idTitreCompetence").hidden = true;
    document.getElementById("idParagrapheCompetence").hidden = true;
  }
};
