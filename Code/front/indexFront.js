// Code js front qui sert à prendre les informations de la réponse JSON + les afficher

function afficherEvenement(reponse) {
    document.getElementById("blockEvenement").innerHTML += `
        <div id="contentElement_${reponse.id}">
            <h2 class="titleEvenement">${reponse.titre}</h2>
            <span class="description">
                <p>${reponse.description}</p>
            </span>
            <div class="blockDate">
                <div class="dateDebut">
                    <p><span> Date de début : </span> ${reponse.dateHeureDebut}</p>
                </div>
                <div class="dateFin">
                    <p><span> Date de fin : </span> ${reponse.dateHeureFin} </p>
                </div>
            </div>
            <div class="urlImage">
                <p>
                    <img src="${reponse.image}">
                </p>
            </div>
            <p>
            <button type="button" onclick="buttonSupp('${reponse.id}')"> Supprimer évènement </button>
            </p>
        </div>
        `;
}


let tabEvenements = [];


// Fonction qui va s'éxécuter au moment où on va être sur http://localhost:3000/events
function getEventsAll() {
    fetch("http://localhost:3000/events")
    .then(res => res.json())
    .then(traiterSuccessFetch, traiterErreurFetch);
}


function traiterSuccessFetch(reponse) {
    // Fonction qui va s'exécuter si la requête Fetch + JSON se sont déroulés avec succès
    tabEvenements.push(...reponse);
    for (let reponse of tabEvenements) {
        afficherEvenement(reponse);
    }
}


function traiterSuccessPostFetch(reponse) {
    // Fonction qui va s'exécuter si la méthode POST s'est déroulé avec succès
    tabEvenements.push(reponse);
    afficherEvenement(reponse);
}

// fonction qui va permettre la création d'évènement avec la méthode POST selon les informations
// saisies dans le formulaire
function createEvent(titre, description, dateHeureDebut, dateHeureFin, image) {
    var obj = recupForm();
    fetch("http://localhost:3000/events", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify({
            titre: obj.titre,
            description: obj.description,
            dateHeureDebut: obj.dateHeureDebut,
            dateHeureFin: obj.dateHeureFin,
            image: obj.image
        })
    })
    .then(res => res.json())
    .then(traiterSuccessPostFetch, traiterErreurFetch);
}


// Fonction qui va récupérer les champs du formulaire et les stocker dans des variables
function recupForm() {
    var titre = document.getElementById("Titre").value;
    var description = document.getElementById("Description").value;
    var dateHeureDebut = document.getElementById("DateDebut").value;
    var dateHeureFin = document.getElementById("DateFin").value;
    var image = document.getElementById("Image").value;

    return{
        titre: titre, 
        description: description, 
        dateHeureDebut: dateHeureDebut,
        dateHeureFin: dateHeureFin, 
        image: image
    };
}


// Fonction pour appeler la méthode DELETE pour l'id de l'évènement
function buttonSupp(id) {
    fetch(`http://localhost:3000/events/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
    .then(traiterDeleteFetch, traiterErreurDeleteFetch);
}


// Fonction qui va vérifier si l'id de l'évènement existe bien + le supprimer si il existe
function traiterDeleteFetch(supprimer) {
    let indexEvenement = tabEvenements.findIndex((i) => i.id === supprimer);
    if (indexEvenement != -1) {
        tabEvenements.splice(supprimer, 1);
        document.getElementById(`contentElement_${supprimer}`).remove();
    }
}


function traiterErreurFetch() {
    // Fonction qui va s'éxecuter si il y a une erreur dans la requête Fetch et/ou JSON
    console.log("erreur");
}


function traiterErreurDeleteFetch() {
    // Fonction qui va s'éxecuter si il y a une erreur dans la méthode DELETE
    console.log("erreur");
}


// Appelle la fonction "createEvent" au clique "Submit" du formulaire
document.getElementById("formEvent").addEventListener("submit", function(event){
    event.preventDefault();
    createEvent();
});


getEventsAll();