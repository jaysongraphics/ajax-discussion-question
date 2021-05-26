// const fullname = document.getElementById("fullname");
// console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("CONTENT LOADED!");
// });


const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.querySelector('button').addEventListener('click', e => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(addPerson)
  })
  function addPerson(res) {
      let person = res.results[0]
      console.log(res)
      let tfl = `${person.name.title} ${person.name.first} ${person.name.last}`
      document.querySelector('#fullname').textContent = tfl
      let email = person.email
      document.querySelector('#email').textContent = email
      let street = `${person.location.street.number} ${person.location.street.name}`
      let city = person.location.city
      let state = person.location.state
      let postcode = person.location.postcode
      let dob = person.dob.date
      let phone = person.phone
      let cell = person.cell
      document.querySelector('#street').textContent = street
      document.querySelector('#city').textContent = city
      document.querySelector('#state').textContent = state
      document.querySelector('#phone').textContent = phone
      document.querySelector('#postcode').textContent = postcode
      document.querySelector('#cell').textContent = cell
      document.querySelector('#date_of_birth').textContent = dob.slice(0,10)
  } 
});