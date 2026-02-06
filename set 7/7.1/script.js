// Promise-based function to get user data
function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: userId, name: 'User ' + userId });
    }, 2000);
  });
}

// Promise-based function to get user posts
function getUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Post 1' },
        { id: 2, title: 'Post 2' },
      ]);
    }, 2000);
  });
}

// Async/Await usage
async function showUserAndPosts() {
  try {
    const user = await getUserData(1);
    console.log(user);

    const posts = await getUserPosts(user.id);
    console.log(posts);
  } catch (error) {
    console.error(error);
  }
}

// Call the function
showUserAndPosts();
