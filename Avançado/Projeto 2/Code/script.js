fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const postList = document.getElementById("postList");
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postList.appendChild(postElement);
    });
  });

  document.getElementById("searchButton").onclick = () => {
    const query = document.getElementById("search").value.toLowerCase();
    const posts = document.querySelectorAll("#postList div");
    posts.forEach((post) => {
      const title = post.querySelector("h3").innerText.toLowerCase();
      post.style.display = title.includes(query) ? "block" : "none";
    });
  };

  document.getElementById("newPostForm").onsubmit = (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, userId: 1 }),
    })
      .then((response) => response.json())
      .then((newPost) => {
        const postList = document.getElementById("postList");
        const postElement = document.createElement("div");
        postElement.innerHTML = `<h3>${newPost.title}</h3><p>${newPost.body}</p>`;
        postList.appendChild(postElement);
      });
  };