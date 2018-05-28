'use strict'

const bookId = document.getElementById('id');
const bookTitle = document.getElementById('title');
const bookDescription = document.getElementById('description');
const bookExcerpt = document.getElementById('excerpt');
const pageCount = document.getElementById('pageCount');
const publishDate = document.getElementById('publishDate');

const url_string = window.location.href;
const url = new URL(url_string);
const param = url.searchParams.get("id");

fetch(`https://fakerestapi.azurewebsites.net/api/Books/${param}`)
  .then(res => res.json())
  .then(book => {
    bookId.innerHTML = `ID: ${book.ID}`;
    bookTitle.innerHTML = `Title: ${book.Title}`;
    bookDescription.innerHTML = `Description: ${book.Description}`;
    bookExcerpt.innerHTML = `Excerpt: ${book.Excerpt}`;
    pageCount.innerHTML = `Page count: ${book.PageCount}`;
    publishDate.innerHTML = `Published on: ${book.PublishDate}`;
  })