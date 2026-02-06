const API_URL = 'https://jsonplaceholder.typicode.com';

// simple loading helpers
function showLoading() {
  console.log(' Loading...');
}

function hideLoading() {
  console.log(' Done');
}

// Fetch all users (names + emails)
async function fetchAllUsers() {
  showLoading();
  try {
    const res = await fetch(`${API_URL}/users`);
    if (!res.ok) throw new Error('Failed to fetch users');

    const users = await res.json();
    users.forEach((user) => {
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    });
  } catch (error) {
    console.error('Error fetching users:', error.message);
  } finally {
    hideLoading();
  }
}

//  Fetch posts for a specific user
async function fetchPostsByUser(userId) {
  showLoading();
  try {
    const res = await fetch(`${API_URL}/posts?userId=${userId}`);
    if (!res.ok) throw new Error('Failed to fetch posts');

    const posts = await res.json();
    console.log(`Posts for user ${userId}:`, posts);
  } catch (error) {
    console.error('Error fetching posts:', error.message);
  } finally {
    hideLoading();
  }
}

// Fetch user + posts + todos (Promise.all)
async function fetchUserDetails(userId) {
  showLoading();
  try {
    const [userRes, postsRes, todosRes] = await Promise.all([
      fetch(`${API_URL}/users/${userId}`),
      fetch(`${API_URL}/posts?userId=${userId}`),
      fetch(`${API_URL}/todos?userId=${userId}`),
    ]);

    if (!userRes.ok || !postsRes.ok || !todosRes.ok) {
      throw new Error('One of the requests failed');
    }

    const user = await userRes.json();
    const posts = await postsRes.json();
    const todos = await todosRes.json();

    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Todos:', todos);
  } catch (error) {
    console.error('Error fetching user details:', error.message);
  } finally {
    hideLoading();
  }
}

fetchAllUsers();
fetchPostsByUser(1);
fetchUserDetails(1);
