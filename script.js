
// let persons = [
//     { firstName: "Naimur", lastName: "Rahman" },
//     { firstName: "Sohag", lastName: "Miah" },
// ]


// let createPerson = (person) => {
//     let prom = new Promise(function (resolve, reject) {
//         persons.push(person);
//         let error = false;
//         if (!error) {
//             resolve();
//         } else {
//             reject("Error! Something went wrong!");
//         }
//     });
//     return prom;
// }


// let getPersons = () => {
//     setTimeout(function () {
//         let output = '';
//         persons.forEach(person => {
//             output += `<li>${person.firstName} ${person.lastName}</li>`
//         })
//         document.getElementById('output').innerHTML = output;
//     }, 500)
// }


// createPerson({ firstName: "Md.", lastName: "Rasel" })
//     .then(getPersons)
//     .catch(() => { console.log("Error! Wrong!"); });



let btn = document.getElementById("btn");

let fun = () => {
    fetch('https://api.icndb.com/jokes/random/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerHTML = data.value.joke;
        })
        .catch(err => console.log(err));
}


btn.addEventListener('click', fun);

