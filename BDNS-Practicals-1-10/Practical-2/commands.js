// Practical 2 - MongoDB Basics: 2
use Data

// 3. Insert documents
db.col.insertMany([
 {Name:"Romal",Age:20,Country:"India",Gender:"Female"},
 {Name:"Raj",Age:12,Country:"Russia",Gender:"Male"},
 {Name:"Sujal",Age:25,Country:"USA",Gender:"Male"},
 {Name:"Sara",Age:65,Country:"India",Gender:"Female"},
 {Name:"Koyal",Age:30,Country:"USA",Gender:"Female"}
])
db.col.find()

// 4. Update country to UK for all female users
db.col.updateMany({Gender:"Female"}, {$set:{Country:"UK"}})

// 5. Add new field company to all documents
db.col.updateMany({}, {$set:{Company:"Wipro"}})

// 6. Delete all documents where Gender = Male
db.col.remove({Gender:"Male"})

// 1. Count female users who stay in either India or USA
db.col.find({$or:[{Country:"India"},{Country:"USA"}],Gender:"Female"}).count()

// 2. Display first name and age of all female employees
db.col.find({Gender:"Female"},{Name:1,Age:1})
