const express = require('express')
const { v4: uuidv4 } = require("uuid")
var bodyParser = require("body-parser")
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.json())

// Déclaration des évènements
let data = [
 {
  id: uuidv4(),
  titre: "Premier évènement",
  description: "La p'tite description du premier évènement",
  dateHeureDebut: new Date("April 15, 2021 15:00:00").toUTCString(),
  dateHeureFin: new Date("April 16, 2021 15:00:00").toUTCString(),
  image: "https://www.cultureevenement.com/wp-content/uploads/2017/07/Photo-4.jpg",
},
{
  id: uuidv4(),
  titre: "Deuxième évènement",
  description: "La p'tite description du deuxième évènement",
  dateHeureDebut: new Date("April 17, 2021 15:00:00").toUTCString(),
  dateHeureFin: new Date("April 19, 2021 15:00:00").toUTCString(),
  image: "https://www.cultureevenement.com/wp-content/uploads/2017/07/Photo-4.jpg",
},
{
  id: uuidv4(),
  titre: "Troisième évènement",
  description: "La p'tite description du troisième évènement",
  dateHeureDebut: new Date("April 20, 2021 15:00:00").toUTCString(),
  dateHeureFin: new Date("April 23, 2021 15:00:00").toUTCString(),
  image: "https://www.cultureevenement.com/wp-content/uploads/2017/07/Photo-4.jpg",
},
];
  
app.get("/", (req, res) => {
  res.send("Hello World!");
})

// Une boucle qui va mettre le tableau data dans une requête JSON à chaque fois qu'on va
// appeler la page "events"
app.get("/events", (req, res) => {
  res.json(data);
})

// Méthode pour supprimer un évènement selon son id
app.delete("/events/:id", (req, res) => {
  const id = req.params.id;
  const eventsIndex = data.findIndex((e) => e.id == id);
  if (eventsIndex != -1) {
    data.splice(eventsIndex, 1);
    res.json(id);
  } else {
    return res.status(404).json({ message: "Event doesn't exist" });
  }
})

// Méthode pour la création dynamique d'évènements via un formulaire dans le front
app.post('/events', (req, res) => {
  var obj = {
    id: uuidv4(),
    titre: req.body.titre,
    description: req.body.description,
    dateHeureDebut: req.body.dateHeureDebut,
    dateHeureFin: req.body.dateHeureFin,
    image: req.body.image
  }
  data.push(obj);
  res.status(200).json( obj );
})

// Affichage de l'url + port du back dans la console
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

