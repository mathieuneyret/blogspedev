function afficherEvenement(evenement) {
    document.getElementById("blockEvenement").innerHTML += `
        <div>
            <h2 class="titleEvenement">${evenement.titre}</h1>
            <span class="description">
                <p>${evenement.description}</p>
            </span>
        <div class="blockDate">
            <div class="dateDebut">
                <p><span> Date de début : </span> ${evenement.dateHeureDebut}</p>
            </div>
            <div class="dateFin">
            <p><span> Date de fin : </span> ${evenement.dateHeureFin} </p>
            </div>
        </div>
            <div class="urlImage">
                <p>
                    <img src="${evenement.urlImage}">
                </p>
            </div>
        </div>
    `;
};


function creerEvenement(titre, debut, fin, desc, image) {
    return {
        titre: titre,
        dateHeureDebut:  debut,
        dateHeureFin: fin,
        description : desc,
        urlImage : image
    }
}

let listeEvenements = [];

let descriptionEvenement = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rhoncus et lectus bibendum blandit. Aliquam in euismod ipsum. Pellentesque vitae interdum est. Nulla facilisi. Vivamus mattis imperdiet tempus. Quisque luctus, augue scelerisque tincidunt vestibulum, dui est condimentum nisl, vitae tristique ligula leo sed ex. Aenean rutrum purus mi, sed lobortis nibh scelerisque ac. Sed pellentesque, leo in ullamcorper tincidunt, arcu dui posuere neque, eu viverra elit justo a mauris. Integer a ipsum sit amet dolor rutrum suscipit. Vestibulum mauris ex, aliquam nec efficitur sit amet, varius nec mauris. Suspendisse mattis pretium nisl vitae congue. Suspendisse sed dolor rutrum, suscipit tellus at, suscipit ipsum. Vivamus vel nisl nisi. Quisque ultricies nisl quis leo mattis, eget convallis ligula finibus.";

let imageURL = "https://www.cultureevenement.com/wp-content/uploads/2017/07/Photo-4.jpg";

listeEvenements.push(creerEvenement("First évènement", new Date(2018, 8, 22, 15, 0, 0), new Date(), descriptionEvenement, imageURL));
listeEvenements.push(creerEvenement("Second évènement", new Date(), new Date(), descriptionEvenement, imageURL));
listeEvenements.push(creerEvenement("Third évènement", new Date(), new Date(), descriptionEvenement, imageURL));


for (let evenement of listeEvenements) {
    afficherEvenement(evenement);
}

console.log(listeEvenements);