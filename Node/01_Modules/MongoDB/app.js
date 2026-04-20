import mongodb from "mongodb";

async function connectDB() {
  //! STEP 1: CREATE A CONNECTION
  let client = await mongodb.MongoClient.connect("mongodb://localhost:27017");

  //! STEP 2: CREATE A DATABASE
  let database = client.db("nodeClass");

  //! STEP 3: CREATE A COLLECTION
  let collection = await database.createCollection("users");

  //! CREATE SINGLE USER -> insertOne()
  //   collection.insertOne({ name: "Rahul", age: 25 });
  //   console.log("user created");

  //! CREATE MULTIPLE USERS -> insertMany()
  //   collection.insertMany([
  //     { name: "Raj", age: 20 },
  //     { name: "Rohit", age: 21 },
  //   ]);
  //   console.log("Users created");

  //! GET SINGLE USER -> findOne({filter})
  //   let user = await collection.findOne({ name: "Raj" });
  //   console.log(user);

  //! GET MULTIPLE USERS -> find({})
  //   let users = await collection.find({}).toArray()
  //   console.log(users);

  //! UPDATE SINGLE USER -> updateOne({filter} , {updatedValue})
  //   let result = await collection.updateOne(
  //     { name: "Rahul" },
  //     { $set: { name: "Rahul Kumar" } },
  //   );
  //   console.log(result);

  //! DELETE USER -> deleteOne({filter}) and deleteMany({})
  //   let res = await collection.deleteOne({ name: "Raj" });
  //   console.log(res);

  let res = await collection.deleteMany({});
  console.log(res);
}

connectDB();
