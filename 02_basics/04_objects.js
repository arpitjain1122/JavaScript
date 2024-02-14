// const tinderUser = new Object(); // Singleton object

const tinderUser = {} // object literal non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email : "sin@gmail.com",
  fullname : {
   userFullName : {
    firstname : "arpit",
    lastname : " jain "
   }
  }
}

//console.log(regularUser.fullname?.userFullName) // optional chaining

// Combining objects

const obj1 = { 1: "a" , 2: "b"}
const obj2 = { 3: "a" , 4: "b"}

// const obj3 = Object.assign({} , obj1 , obj2)

const obj3  = {...obj1 , ...obj2} // spread operator

//console.log(obj3)


const users = [{
  id: 1,
  email: "a@gmail.com"
},
{},
{}]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))

//-----------------------------------------------------------------------------------------
/**
 Object destructuring
 */

 const course = {
  coursename: "js hindi",
  price: "999",
  courseInstructor: "hitesh"
 }

 const {courseInstructor} = course // objects ki destructing ki jaa rahi hai yaha 
 const {courseInstructor : instructor} = course

 console.log(courseInstructor)
 console.log(instructor) // dono same hi hai

