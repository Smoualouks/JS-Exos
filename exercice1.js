// je récupère le selecteur p de mon document HTML.

const p = document.querySelector("p");

// je cache le paragraphe p avant le chargement de la page.
p.hidden = true;

//j'affecte à window.onload une fonction qui permet d'afficher
//le paragraphe caché via une fenêtre window.prompt .

window.onload = function () {
  const msg = "Voulez-vous voir le contenu de cette page (o/n) ?";

  //je recupère le retour de window.prompt et je vérifie s'il est egale à "o" ou "O".
  let reponse = window.prompt(msg);

  if (reponse == "o" || reponse == "O") p.hidden = false;
  // j'affiche une alerte invitant l'utilisateur à quitter la page s'il tape autre
  //chose que "o" ou "O" ou de l'actualiser pour retenter.
  else {
    //
    alert(
      "Ooups quittez la page ou actualisez pour retenter de voir le paragraphe caché. "
    );
  }
};
