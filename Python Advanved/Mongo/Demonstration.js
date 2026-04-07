// Database : Database
// Table : Collection
// Row : Document
// Insert Update Delete
// Select Query (where)

// create database mydata  (create and use) // use mydata;
use ('mydata')

// mydata.createCollection('Employees')
db.createCollection('Employees')


db.Employees.insertOne({id:1, name:'John'})

db.Employees.insertOne({id:2, name:'Hasnaa', address: 'Alex'})

db.Employees.insertOne({id:3, name:'Mina', phone: '01111'})

// select * from employees
db.Employees.find()

db.Employees.insertMany([
    {id:4, name:'Khaled', phone: '01236'},
    {id:5, name:'Hana', address: 'Alex'},
    {id:5, name:'Hana', address: 'Alex'}
])

db.Employees.find()

db.Employees.insertOne({id:6, name:'Ali', Skills: ['Python', 'MongoDB']})

db.Employees.insertOne({id:7, name:'Mohamed', date: new Date()}) // getdate()

db.Employees.find()

db.Employees.insertOne({id:6, name:'Mona', Skills: ['C++', 'Python', 'MongoDB']})
db.Employees.insertOne({id:6, name:'Sayed', Skills: ['CC#', 'Python', 'MongoDB']})


///// Display Data///////////

db.Employees.find()    /// selct * from employees where id = 5

db.Employees.find({address:'Alex'})  

db.Employees.find({name:'Hana'})  

db.Employees.find({Name:'Hana'})    /// XXXXXXXXXXX

db.employees.find({Name:'Hana'})    /// XXXXXXXXXXX

db.Employees.find({name:'Hana'}) 

db.Employees.find()

db.Employees.find({name:'Hana'})

// select * from employees where name = 'Hana' and address = 'Alex'
db.Employees.find({name:'Hana', address: 'Cairo'})

db.Employees.find()

// select name from employees
db.Employees.find({},{name:1})

db.Employees.find({},{name:1 , _id:0})

db.Employees.find({},{name:1 , address:1 , _id:0})


// All documents which has feild address
db.Employees.find()

db.Employees.find({address: {$exists: true}})

db.Employees.find({Skills: {$size: 3}})


db.Employees.insertMany([
{name:'Ali', age : 31},
{name:'Khaled', age : 26},
{name:'Mina', age : 20},
{name:'Alberto', age : 22},
])

db.Employees.find({age: {$gt: 30}})

db.Employees.find({age: {$lt: 30}})


db.Employees.find(
    {
        $and: [
            {age: {$lt: 30}},
            {name: 'Mina'} 
        ]
    }
    )

db.Employees.find(
    {
        $or: [
            {age: {$lt: 30}},
            {name: 'Mina'} 
        ]
    }
    )    

//////////////// Update, Delete  //////////// 
//  update employee set name: 'Mona' where name = 'Hana'
db.Employees.find({name:'Hana'})
db.Employees.updateOne ({name:'Hana'},{$set: {address:'Tanta'}})

db.Employees.updateMany ({name:'Hana'},{$set: {address:'Luxor'}})


db.Employees.deleteOne({name:'Hana'})

db.Employees.deleteMany({name:'Hana'})



deleteOne