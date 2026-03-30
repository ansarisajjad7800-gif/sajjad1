const form = document.getElementById("patientForm");
const patientList = document.getElementById("patientList");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const disease = document.getElementById("disease").value;

  if (name === "" || age === "" || disease === "") {
    alert("Please fill all fields");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `Name: ${name}, Age: ${age}, Disease: ${disease}`;

  patientList.appendChild(li);

  form.reset();
});