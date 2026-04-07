use('School')
db.createCollection('Students')
db.Students.insertMany([
    { name: "Mohamed", age: 25, city: "Cairo", skills: ["Python", "MongoDB"] },
    { name: "Ahmed", age: 30, city: "Alex", skills: ["Java", "SQL"] },
    { name: "Mai", age: 22, city: "Cairo", skills: ["HTML", "CSS", "JS"] },
    { name: "Sara", age: 28, city: "Alex", skills: ["Python"] }])
 
db.Students.find({city: "Cairo"})
db.Students.find({age: {$gt : 25}})
db.Students.find({ skills: "Python" })
db.Students.find({ skills: {$size : 2} })
db.Students.updateMany({name: "Sara"},{$set : {age : 29}})
db.Students.updateOne({name :"Mai" },{$push :{ skills:"MongoDB"}} )
db.Students.deleteOne({name: "Ahmed"})

