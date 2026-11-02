import { fetchGitHubUser, GitHubApiError } from './github-api.js';
import {
  clearProfile,
  renderProfile,
  showLoading,
} from './profile-view.js';

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');

btnSearch.addEventListener('click', async () => {
  const userName = inputSearch.value.trim();

  if (!userName) {
    alert('Por favor, digite um nome de usuário do GitHub.');
    clearProfile();
    return;
  }

  showLoading();

  try {
    const userData = await fetchGitHubUser(userName);
    renderProfile(userData);
  } catch (error) {
    console.error('Erro ao buscar o perfil do usuário:', error);
    clearProfile();

    if (error instanceof GitHubApiError && error.status === 404) {
      alert('Usuário não encontrado. Por favor, verifique o nome de usuário e tente novamente.');
      return;
    }

    alert('Ocorreu um erro ao buscar o perfil do usuário. Por favor, tente novamente mais tarde.');
  }
});
