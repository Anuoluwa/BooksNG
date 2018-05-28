const form = document.getElementById('create-form');
const url = 'https://fakerestapi.azurewebsites.net/api/Books';
const successful = document.getElementById('success');

const getFormData = () => {
  const formData = new FormData(form);
  return formData;
}

const create = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = getFormData();
    let formObject = {};
    for (const [key, value] of formData.entries()) {
      formObject[key] = value;
    }
    formObject["ID"] = 205;
    formObject["PublishDate"] = new Date();
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {'Content-Type': 'application/json'},
    }).then((response) => {
      console.log(response);
      successful.innerHTML = "Book created successfully";
      form.reset();
    })
    .catch((err) => {
      console.log(err);
    });
  });
}

create();
