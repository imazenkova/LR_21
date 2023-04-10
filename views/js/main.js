function lockRemoveButton() {
  const removeButton = document.getElementById("remove-button");
  if (!removeButton) return;
  removeButton.setAttribute("disabled", "true");
}

function create() {
  const fio = document.getElementsByName("name")[0].value;
  const number = document.getElementsByName("number")[0].value;
  console.log(`fio.lenght: ` + fio.lenght);
  if(fio.lenght < 1 || number.length < 1){
    window.alert("Check fields value");
    return;
  }
  if (
    !/(?:\+375|80)\s?\(?(17|29|33|44|25)\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})/.test(
      number
    )
  ){
    window.alert("Phone number is not correct");
    return;
  }
 
      



  fetch("/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fio, number }),
  })
    .then((res) => res.json())
    .then(() => (window.location.href = "/"));
}

function update() {
  const id = document
    .getElementsByClassName("form-part edit")[0]
    .getAttribute("data-key");
  const fio = document.getElementsByName("fio")[0].value;
  const number = document.getElementsByName("number")[0].value;
  if(fio.lenght < 1 || number.length < 1){
    window.alert("Check fields value");
    return;
  }
  if (
    !/(?:\+375|80)\s?\(?(17|29|33|44|25)\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})/.test(
      number
    )
  ){
    window.alert("Phone number is not correct");
    return;
  }

  fetch("/update", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, fio, number }),
  })
    .then((res) => res.json())
    .then(() => (window.location.href = "/"));
}

function remove() {
  const fio = document.getElementsByName("fio")[0].value;
  const number = document.getElementsByName("number")[0].value;
  if(fio.lenght < 1 || number.length < 1){
    window.alert("Check fields value");
    return;
  }
  const id = document
    .getElementsByClassName("form-part edit")[0]
    .getAttribute("data-key");
  if (!id) return;

  fetch("/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, fio, number }),
  })
    .then((res) => res.json())
    .then(() => (window.location.href = "/"));
}
