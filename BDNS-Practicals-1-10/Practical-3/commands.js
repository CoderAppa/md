// Practical 3 - Aggregate Functions
use Aggregate

db.col.insertMany([
 {Name:"Romal",Age:17,City:"Mumbai",Salary:12000},
 {Name:"Rohan",Age:22,City:"Thane",Salary:60000},
 {Name:"Sujal",Age:19,City:"Mumbai",Salary:3000},
 {Name:"Manav",Age:47,City:"Pune",Salary:55000},
 {Name:"Ria",Age:34,City:"Mumbai",Salary:83000}
])
db.col.find()

// 1. Group by function to get count
db.col.aggregate([{$group:{_id:"$City",cityCount:{$sum:1}}}])

// 2. Sum
db.col.aggregate([{$group:{_id:"$City",cityCount:{$sum:"$Salary"}}}])

// 3. Average
db.col.aggregate([{$group:{_id:"$City",cityCount:{$avg:"$Salary"}}}])

// 4. Minimum
db.col.aggregate([{$group:{_id:"$City",cityCount:{$min:"$Salary"}}}])

// 5. Maximum
db.col.aggregate([{$group:{_id:"$City",cityCount:{$max:"$Salary"}}}])

// 6. First
db.col.aggregate([{$group:{_id:"$City",cityCount:{$first:"$Salary"}}}])

// 7. Last
db.col.aggregate([{$group:{_id:"$City",cityCount:{$last:"$Salary"}}}])

// 8. Push
db.col.aggregate([{$group:{_id:"$City",cityCount:{$push:"$Salary"}}}])

// 9. addToSet
db.col.aggregate([{$group:{_id:"$City",cityCount:{$addToSet:"$Salary"}}}])
