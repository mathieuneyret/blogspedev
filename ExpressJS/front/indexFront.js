function traiterSuccesFetch(reponse) {
    console.log(reponse);
    for(var i=0;i<reponse.length;i++){
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
    console.log("erreur");
}

document.getElementById("monBouton").addEventListener("click", function() {
    fetch("http://localhost:3000/events")
        .then(res => res.json())
        .then(traiterSuccesFetch, traiterErreurFetch);
});

