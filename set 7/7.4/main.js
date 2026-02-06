import config from './config.js';
import { formatCurrency, formatDate, generateId } from './utils.js';
import { getUsers, getPosts } from './api.js';

async function main() {
  console.log(`🚀 App Started: ${config.APP_NAME}`);

  try {
    const users = await getUsers();
    console.log('Users:', users);

    const posts = await getPosts(1);
    console.log('Posts for user 1:', posts);

    console.log('Formatted currency:', formatCurrency(5000));
    console.log('Formatted date:', formatDate(Date.now()));
    console.log('Generated ID:', generateId());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
