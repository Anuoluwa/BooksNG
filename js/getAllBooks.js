const contents = document.getElementById('content');

const url = "https://fakerestapi.azurewebsites.net/api/Books";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let output = ` <div class="list-group">`;
    data.forEach((book) => {
      output += `
        <a href="view.html?id=${book.ID}" class="list-group-item list-group-item-action flex-column align-items-start ">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Title: ${book.Title}</h5>
                    <small>Total pages: ${book.PageCount}</small>
                </div>
                <p class="mb-1">${book.Description}</p>
                <small>Date Published: ${book.PublishDate}</small>
            </a>
        `;
      contents.innerHTML = output
    });
  });
