const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultDiv = document.getElementById('result');
const recentDiv = document.getElementById('recent');

searchBtn.addEventListener('click', () => {
  const username = searchInput.value.trim();
  if (!username) return;
  searchUser(username);
});

async function searchUser(username) {
  showSkeleton();

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);

    if (!res.ok) {
      saveRecent(username, false);
      showError('User not found');
      return;
    }

    const user = await res.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`,
    );
    const repos = await repoRes.json();

    renderUser(user, repos);
    saveRecent(username, true);
  } catch (err) {
    saveRecent(username, false);
    showError('Something went wrong');
  }
}

function showSkeleton() {
  resultDiv.innerHTML = `<div class="skeleton"></div>`;
}

function showError(msg) {
  resultDiv.innerHTML = `<p>${msg}</p>`;
}

function renderUser(user, repos) {
  resultDiv.innerHTML = `
    <img src="${user.avatar_url}" width="100" />
    <h2>${user.name || user.login}</h2>
    <p>${user.bio || ''}</p>
    <p>${user.location || ''}</p>

    <p>
      Repos: ${user.public_repos} |
      Followers: ${user.followers} |
      Following: ${user.following}
    </p>

    <h3>Latest Repositories</h3>
    <ul>
      ${repos.map((r) => `<li>${r.name}  ${r.stargazers_count}</li>`).join('')}
    </ul>
  `;
}

function saveRecent(searchText, isFound) {
  let recent = JSON.parse(localStorage.getItem('recent')) || [];

  recent = recent.filter((item) => item.query !== searchText);

  recent.unshift({
    query: searchText,
    found: isFound,
  });

  recent = recent.slice(0, 5);

  localStorage.setItem('recent', JSON.stringify(recent));
  renderRecent();
}

function renderRecent() {
  const recent = JSON.parse(localStorage.getItem('recent')) || [];

  recentDiv.innerHTML = `
    <h3>Recent Searches</h3>
    ${recent
      .map(
        (u) => `
        <button 
          class="${u.found ? '' : 'not-found'}"
          onclick="searchUser('${u.query}')"
        >
          ${u.query}${u.found ? '' : ' '}
        </button>
      `,
      )
      .join('')}
  `;
}

renderRecent();
