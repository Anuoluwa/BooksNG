const form = document.getElementById('create-form');
const url = 'https://fakerestapi.azurewebsites.net/api/Books';

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
    }).then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  });
}

create();
