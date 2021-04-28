const { expect, should } = require("chai");
var chai = require("chai");
var assert = chai.assert; 
const supertest = require("supertest");
const api = supertest("http://localhost:3000");

describe("Mon Test Events", function () {

    let events;


    // Test Get
    describe("Get", function () {
        it("Get --> Succès", function(done) {
            api.get("/events").end((err, res) => {
                events = res.body;
                assert.equal(res.status, 200);
                done();
            });
        });
    });


    // Test Delete
    describe("Delete", function() {
        it("Delete --> Succès", function(done) {
            api.delete("/events/" + events[0].id).then((res) => {
                assert.equal(res.status, 200);
                done();
            });
        });
    });


    // Test Post
    describe("Post", function() {
        it("Post --> Succès", function(done) {
            api.post("/events").then((res) => {
                assert.equal(res.status, 200);
                done();
            });
        });


        it("Création d'un évènement en post --> Succès", function (done) {
            let data = {
              titre: "Titre du test",
              description: "Description du test",
              dateHeureDebut: "Date Debut du test",
              dateHeureFin: "Date Fin du test",
              image: "https://www.cultureevenement.com/wp-content/uploads/2017/07/Photo-4.jpg",
            };
            api
              .post("/events")
              .send(data)
              .set("Content-Type", "application/json")
              .end(function (err, res) {
                const body = res.body;
                expect(body).to.have.property("titre", data.titre);
                expect(body).to.have.property("description", data.description);
                expect(body).to.have.property("dateHeureDebut", data.dateHeureDebut);
                expect(body).to.have.property("dateHeureFin", data.dateHeureFin);
                expect(body).to.have.property("image", data.image);
                done();
              });
        });


    });

    
});

  