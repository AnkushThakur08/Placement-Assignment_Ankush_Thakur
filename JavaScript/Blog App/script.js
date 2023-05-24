const fetchData = async () => {
  await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((result) => {
      // console.log(result)
      const blogsContainer = document.querySelector('.blogs');
      result.map((item) => {
        console.log(item);
        const blogDiv = document.createElement('div');
        blogDiv.className = 'blog';
        blogDiv.innerHTML = `
                    <h3 data-id="${item.id}">${item.title}</h3>
                    <p>${item.body}</p>
                    <button class="delete-btn" onclick="deleteBlog(${item.id})">Delete</button>
                `;
        blogsContainer.appendChild(blogDiv);
      });
    })
    .catch((error) => {
      console.error('Error fetching blogs:', error);
    });
};

const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
};

const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
};

const deleteBlog = async (blogId) => {
  showLoader();
  await fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        const blogDiv = document.querySelector(`h3[data-id="${blogId}"]`).parentNode;
        blogDiv.remove();
      } else {
        throw new Error('Failed to delete blog');
      }
    })
    .catch((error) => {
      console.error('Error deleting blog:', error);
    })
    .finally(() => {
      hideLoader();
    });
};

const addBlog = (event) => {
  event.preventDefault();
  showLoader();
  const titleInput = document.querySelector('.title');
  const contentInput = document.querySelector('.content');

  const newBlog = {
    title: titleInput.value,
    body: contentInput.value,
  };

  console.log(newBlog);

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBlog),
  })
    .then((response) => response.json())
    .then((blog) => {
      const blogsContainer = document.querySelector('.blogs');
      const blogDiv = document.createElement('div');
      blogDiv.className = 'blog';
      blogDiv.innerHTML = `
                  <h3 data-id="${blog.id}">${blog.title}</h3>
                  <p>${blog.body}</p>
                  <button class="delete-btn" onclick="deleteBlog(${blog.id})">Delete</button>
              `;
      blogsContainer.appendChild(blogDiv);

      titleInput.value = '';
      contentInput.value = '';
    })
    .catch((error) => {
      console.error('Error adding blog:', error);
    })
    .finally(() => {
      hideLoader();
    });
};

function init() {
  fetchData();

  const newBlogForm = document.getElementById('new-blog-form');
  newBlogForm.addEventListener('submit', addBlog);
}

init();
