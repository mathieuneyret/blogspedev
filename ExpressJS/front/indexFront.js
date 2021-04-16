// Code js front qui sert à prendre les informations de la réponse JSON + les afficher

function traiterSuccesFetch(reponse) {
    // Fonction qui va s'exécuter si la requête Fetch + JSON se sont déroulés avec succès
    console.log(reponse);
    for(var i=0;i<reponse.length;i++){
        // Boucle qui va chercher tout les éléments du Array de la requête JSON et les afficher
        // dans des div (titre, description, date du début, date de la fin)
        document.getElementById("blockEvenement").innerHTML += `
        <div>
            <h2 class="titleEvenement">${reponse[i].titre}</h2>
            <span class="description">
                <p>${reponse[i].description}</p>
            </span>
            <div class="blockDate">
                <div class="dateDebut">
                    <p><span> Date de début : </span> ${reponse[i].dateHeureDebut}</p>
                </div>
                <div class="dateFin">
                    <p><span> Date de fin : </span> ${reponse[i].dateHeureFin} </p>
                </div>
            </div>
        </div>
        `;
    }
}
  
function traiterErreurFetch(erreur) {
    // Fonction qui va s'éxecuter si il y a une erreur dans la requête Fetch et/ou JSON
    console.log("erreur");
}

document.getElementById("monBouton").addEventListener("click", function() {
    // Quand on clique sur le bouton, on va appeler la page "events" du back grâce à un Fetch
    fetch("http://localhost:3000/events")
        .then(res => res.json()) // Appeler la requête JSON du back
        .then(traiterSuccesFetch, traiterErreurFetch); // Appel des fonctions ci-dessus
});

