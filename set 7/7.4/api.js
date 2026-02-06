import config from './config.js';

export async function getUsers() {
  const response = await fetch(`${config.API_URL}/users`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
}

export async function getPosts(userId) {
  const response = await fetch(`${config.API_URL}/posts?userId=${userId}`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
}
