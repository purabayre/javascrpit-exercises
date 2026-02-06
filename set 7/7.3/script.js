const API_URL = 'https://jsonplaceholder.typicode.com/users';
const userIds = [1, 2, 3, 4, 5];

// Helper fetch function
async function fetchUser(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user ${id}`);
  }
  return response.json();
}

//  Sequential fetching (one after another)
async function fetchSequential() {
  console.log('--- Sequential Fetch Start ---');

  try {
    const users = [];

    for (const id of userIds) {
      console.time(`User ${id}`);
      const user = await fetchUser(id);
      console.timeEnd(`User ${id}`);
      users.push(user);
    }
    // console.log(user);
    console.log('Sequential users:', users);
  } catch (error) {
    console.error('Sequential error:', error.message);
  }
  console.timeEnd(userIds);
  console.log('--- Sequential Fetch End ---\n');
}

// Parallel fetching (all at once)
async function fetchParallel() {
  console.log('--- Parallel Fetch Start ---');
  console.time('Parallel Time');

  try {
    const promises = userIds.map((id) => fetchUser(id));
    const users = await Promise.all(promises); // runs together
    console.log('Parallel users:', users);
  } catch (error) {
    console.error('Parallel error:', error.message);
  }

  console.timeEnd('Parallel Time');
  console.log('--- Parallel Fetch End ---\n');
}

// Run both
(async function run() {
  await fetchSequential();
  await fetchParallel();
})();
