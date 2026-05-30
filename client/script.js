function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const postDiv = document.createElement("div");

  postDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
    <hr>
  `;

  document.getElementById("posts").appendChild(postDiv);
}
