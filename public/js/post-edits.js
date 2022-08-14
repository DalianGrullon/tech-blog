const formPost = document.getElementById('update-post');
const deleteButton = document.getElementById('delete-button');
const postId = document.getElementsByClassName('toChange')[0].id;

async function updatePost(event) {
  event.preventDefault();

  const title = document.getElementById('updatePostTitle').value.trim();
  const content = document.getElementById('updatePostContent').value.trim();

  if (title && content) {
    const request = await fetch('/api/posts/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        content: content,
        id: postId
      })
    });

    if (request.ok) {
      window.location.href = '/dashboard';
      return;
    }

    return;
  }
};

async function deletePost(event) {
  event.preventDefault();

  const request = await fetch('/api/posts/delete', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: postId
    })
  });

  if (request.ok) {
    window.location.href = '/dashboard';
    return;
  }

  return;
};

formPost.addEventListener('submit', updatePost);
deleteButton.addEventListener('click', deletePost);