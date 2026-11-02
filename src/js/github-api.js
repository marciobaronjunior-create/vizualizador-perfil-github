const BASE_URL = 'https://api.github.com';

export class GitHubApiError extends Error {
  constructor(status) {
    super(`A API do GitHub retornou o status ${status}.`);
    this.name = 'GitHubApiError';
    this.status = status;
  }
}

export async function fetchGitHubUser(userName) {
  const response = await fetch(
    `${BASE_URL}/users/${encodeURIComponent(userName)}`
  );

  if (!response.ok) {
    throw new GitHubApiError(response.status);
  }

  return response.json();
}
