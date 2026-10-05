// Practical 1 - MongoDB Basics: 1
// A. Create and drop database
use Romal
show dbs
db.createCollection("Practical1")
db.dropDatabase()

// B. Create, display and drop collection
use Romal
db.createCollection("Practical1")
show collections
db.Practical1.drop()

// C. Insert, query, update and delete a document
db.Doc.insert({Name:"Romal", Age:10})
db.Doc.find()
db.Doc.update({Name:"Romal"}, {$set:{Age:20}})
db.Doc.find()
db.Doc.remove({Name:"Romal"})
db.Doc.find()

// D1. Employee - insert and display
db.col.insertMany([
  {Name:"Smitu", Salary:100000, Dept:"IT", City:"Mumbai"},
  {Name:"Romal", Salary:15000, Dept:"IT", City:"Thane"},
  {Name:"Sujal", Salary:9000, Dept:"Tester", City:"Bandra"},
  {Name:"Manav", Salary:30000, Dept:"Finance", City:"Kurla"},
  {Name:"Swathi", Salary:4000, Dept:"Developer", City:"Pune"}
])
db.col.find()

// D2. Mumbai
db.col.find({City:"Mumbai"})

// D3. Kurla and salary > 19000
db.col.find({City:"Kurla", Salary:{$gt:19000}})

// D4. Salary >= 10000 and < 20000
db.col.find({Salary:{$gte:10000,$lt:20000}})

// D5. Thane or Mumbai and salary > 10000
db.col.find({City:{$in:["Thane","Mumbai"]}, Salary:{$gt:10000}})

// D6. Salary != 10000 and department Developer or Tester
db.col.find({Dept:{$in:["Developer","Tester"]}, Salary:{$ne:10000}})
