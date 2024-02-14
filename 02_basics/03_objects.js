// Singleton 
// Object.create

// literals se delare krenge toh singleton nahi banega

// object literals

const JsUser = {
  name : "Hitesh",
  "full name " : "arpit jain",
  age : 27,
  location: "jaipur",
  email: "arpitjain.jain6@gmail.com",
  isLoggedIn : false,
  lastLoginDays: ["monday" , "tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello js user")
}

JsUser.greetingTwo = function(){
  console.log(`Hello JS USER" , ${this.email}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())