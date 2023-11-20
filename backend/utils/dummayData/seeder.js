
import fs from "fs";
import "colors";
import dotenv from "dotenv";
dotenv.config();  
import Doctor from "../../models/doctorModel.js";

import dbConnection from "../../config/mongodb.js";
dotenv.config({ path: "../../.env" });

// connect to DB
dbConnection();

// Read data
const doctors = JSON.parse(fs.readFileSync("./doctors.json"));

// Insert data into DB
const insertData = async () => {
  try {
    await Doctor.create(doctors);

    console.log("Data Inserted".green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete data from DB
const destroyData = async () => {
  try {
    await Doctor.deleteMany();
    console.log("Data Destroyed".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// node seeder.js -d
if (process.argv[2] === "-i") {
  insertData();
} else if (process.argv[2] === "-d") {
  destroyData();
}
