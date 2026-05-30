function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const postDiv = document.createElement("div");

  postDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>

    <input class="commentInput" placeholder="Write a comment">
    <button onclick="addComment(this)">Comment</button>

    <div class="comments"></div>
    <hr>
  `;

  document.getElementById("posts").appendChild(postDiv);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}

function addComment(button) {
  const post = button.parentElement;

  const commentInput = post.querySelector(".commentInput");
  const commentsDiv = post.querySelector(".comments");

  const comment = document.createElement("p");
  comment.textContent = commentInput.value;

  commentsDiv.appendChild(comment);

  commentInput.value = "";
}
