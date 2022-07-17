/**
 * REMARQUE: malheureusement je n'ai pas pu réaliser l'exercice 3
 * comme demandé. j'ai juste traité le fetch avec l'url de France
 * sans réaliser de filtre ni un input pour réaliser des recherches des noms des universiées
 * quand c'est plus de 50 univ.
 */

// je récupère le selecteur  contenant la liste des pays pour le fetch

const selecteur = document.getElementById("pays");

// je stock l'url concernant la France dans la cosntante url
const url = "http://universities.hipolabs.com/search?country=France";

//  je fais un fetch sur l'url de France et je realise la promesse pour récuperer la data
fetch(url)
  .then((response) => {
    console.log(`response.status`, response.status);
    return response.json();
  })
  .then((data) => {
    console.log(`donnée récupérée : `, data);
    renderUniversities(data);
  })
  .catch((error) => {
    console.log(`Erreur catchée dans fetch :`, error);
  });

/**
 * je récupère la fonction qui
 * Crée un élément du DOM et le retourne comme suit:
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
// la fonction renderUniversities pour traité la data recupérées de fetch.
//je crée une section via crateDOMElement
//pour chaque data récupée, je la mets dans un article avec un titre  .

function renderUniversities(data) {
  const section = createDOMElement("section", "", document.body, [
    {
      name: "style",
      value: "display:flex; justify-content: space-evenly; flex-wrap: wrap;",
    },
  ]);

  data.forEach((universitie) => {
    const article = createDOMElement("article", "", section, [
      {
        name: "style",
        value:
          "border: 1px dotted blue; padding: 20px; margin: 30px 0; flex-basis: 28%;",
      },
    ]);
    const title = createDOMElement("h2", universitie.name, article);
  });
}
