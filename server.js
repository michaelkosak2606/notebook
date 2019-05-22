const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 4000;

//Data Model
const Resource = require('./models/Resource');

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`)
)

//DB config
const db = require('./config/keys');

mongoose.connect(db.mongoUrl)
    .then(() => console.log("MongoDb Connected."))
    .catch(() => console.log("Cannot connect to Mongo."))

//Routes

///[GET] ALL Resources
app.get("/dashboard", (req, res) => {
    Resource.find((err, resources) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json(resources)
        }
    })
});

///[GET] ONE Resource BY ID
app.get("/dashboard/:id", (req, res) => {
    const id = req.params.id;
    Resource.findById(id, (err, resource) => {
        res.json(resource);
    });
});

///[POST] Create new Resource
app.post("/dashboard", (req, res) => {
    const resource = new Resource(req.body);
    resource.save()
        .then(resource => res.status(200).json(resource))
        //.then(() => res.redirect("/todos"))
        .catch(() => res.send("Adding resource failed"))
});

///[PUT] Update Resource from Db
app.put("/dashboard/:id", (req, res) => {
    const id = req.params.id;
    Resource.findById(id)
        .then(resource => {
            resource.description = req.body.description;
            resource.titel = req.body.titel;
            resource.tags = req.body.tags;
            resource.resource = req.body.resource;

            resource.save()
                .then(resource => res.json(resource));
        });
});

///[DELETE]
app.delete("/dashboard/:id", (req, res) => {
    const id = req.params.id;
    Resource.findById(id)
        .then(resource => resource.remove()
            .then(() => res.json({ success: true })))
        .catch(err => res.send("Error occured in DELETE request."))
});