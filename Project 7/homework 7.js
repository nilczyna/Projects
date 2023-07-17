const submitButton = document.querySelector("button");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const markup = `<li>${user.name}, e-mail: ${user.email}, street: ${user.address.street}, city: ${user.address.city}</li>`;

      document.querySelector("ol").insertAdjacentHTML("beforeend", markup);
    });
  });

const createUser = (body) => {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json;charset=utf-8" },
  });
};

submitButton.addEventListener("click", () => {
    console.log("submit button clicked");
    const name = document.querySelector("#name").value;
    const second_name = document.querySelector("#second_name").value;
    const email = document.querySelector("#email").value;
    const street = document.querySelector("#street").value;
    const city = document.querySelector("#city").value;


  console.log(name, second_name, email, street, city);
      const markup = `<li>${name},  ${second_name}, e-mail: ${email}, street: ${street}, city: ${city}</li>`;
      const newList = document.createElement("li");
  
  newList.innerText = name + ' ' + second_name + ' ' + 'e-mail:' + email + ' ' + 'street:' + street + ' '+ 'city:' + city;
    document.querySelector("ol").prepend(newList);
});


