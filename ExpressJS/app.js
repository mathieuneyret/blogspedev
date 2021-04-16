const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

var data = []

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

app.get('/events', (req, res) => {
  res.json(data);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

