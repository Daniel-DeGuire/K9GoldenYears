const { Router } = require("express");
const dog = require("../models/Dog");
const router = Router();

// Create record in MongoDB
router.post("/", (request, response) => {
  const newDog = new dog.model(request.body);
  newDog.save((err, dog) => {
    return err ? response.sendStatus(500).json(err) : response.json(dog);
  });
});

// Get all dog records
router.get("/", (request, response) => {
  dog.model.find({}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
// Get a dog by ID
router.get("/:id", (request, response) => {
  dog.model.findById(request.params.id, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
// Delete a dog by ID
router.delete("/:id", (request, response) => {
  dog.model.findByIdAndRemove(request.params.id, {}, (error, data) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(data);
  });
});
// Update a dog by ID
router.put("/:id", (request, response) => {
  const body = request.body;
  dog.model.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        crust: body.crust,
        cheese: body.cheese,
        sauce: body.sauce,
        toppings: body.toppings,
      },
    },
    (error, data) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(request.body);
    }
  );
});
module.exports = router;
