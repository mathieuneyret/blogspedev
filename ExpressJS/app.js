const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// Création d'un array qui va stocker les élèments de la requête JSON
var data = []

// Déclaration des évènements
data.push({
  titre: "Premier évènement",
  description: "La p'tite description du premier évènement",
  dateHeureDebut: "15 avril 2021",
  dateHeureFin: "16 avril 2021",
});
data.push({
  titre: "Deuxième évènement",
  description: "La p'tite description du deuxième évènement",
  dateHeureDebut: "17 avril 2021",
  dateHeureFin: "19 avril 2021",
});
data.push({
  titre: "Troisième évènement",
  description: "La p'tite description du troisième évènement",
  dateHeureDebut: "20 avril 2021",
  dateHeureFin: "23 avril 2021",
});

// Une boucle qui va mettre le tableau data dans une requête JSON à chaque fois qu'on va
// appeler la page "events"
app.get('/events', (req, res) => {
  res.json(data);
})

// Affichage de l'url + port du back dans la console
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

