const express = require("express");
const bodyParser = require("body-parser");
const programmer = require("./database/tables/programmer");
const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get("/syncDatabase", async (request, response) => {
  const database = require("./database/db");
  try {
    await database.sync();

    response.send("Database successfully sync");
  } catch (error) {
    response.send(error);
  }
});

app.post("/createProgrammer", async (request, response) => {
  try {
    const parameters = request.body;
    const properties = ["name", "javascript", "java", "python"];
    const check = properties.every((property) => {
      return property in parameters;
    });

    if (!check) {
      const propertiesStrings = properties.join(",");
      response.send(`All parameters needed to create a programmer must be sent ${propertiesStrings}`);
      return;
    }

    const newProgrammer = await programmer.create({
      name: parameters.name,
      javascript: parameters.javascript,
      java: parameters.java,
      python: parameters.python,
    });

    response.send(newProgrammer);
  } catch (error) {
    response.send(error);
  }
});

app.get("/retrieverProgrammer", async (request, response) => {
  try {
    const parameters = request.body;

    if ("id" in params) {
      const record = await programmer.findByPk(parameters.id);

      if (record) {
        response.send(record)
      } else {
        response.send("No programmer found using received ID.")
      }

      return;
    }

    const records = await programmer.findAll();

    response.send(records);
  } catch (error) {
    response.send(error);
  }
});

app.delete("/deleteProgrammer", async (request, response) => {
  try {
    const parameters = request.body;
    const record = validatedID(parameters);

    await record.destroy();

    response.send(`${record.id} ${record.name} - Deleted successfully`);
  } catch (error) {
    response.send(error);
  }
});

app.put("/updateProgrammer", async (request, response) => {
  const parameters = request.body;

  if (!("id" in parameters)) {
    response.send("Missing id in request body");
    return;
  }

  const record = await programmer.findByPk(params.id);

  const properties = ["name", "javascript", "java", "python"];

  const check = properties.every((property) => {
    return property in parameters;
  });

  if (!check) {
    const propertiesStrings = properties.join(",");
    response.send(`All parameters needed to create a programmer must be sent ${propertiesStrings}`);
    return;
  }

  record.name = params.name || record.name;
  record.javascript = params.javascript || record.javascript;
  record.java = params.java || record.java;
  record.python = params.python || record.python;

  await record.save();

  response.send(`${record.id} ${record.name} - Updated successfully`);
})

app.listen(port, () => console.log(`Now Listening on port ${port}`));

const validatedID = async () => {
  if (!("id" in parameters)) {
    response.send("Missing id in request body");
    return;
  }

  const record = await programmer.findByPk(params.id);

  if (!record) {
    response.send("Programmer ID not found");
    return;
  }
}