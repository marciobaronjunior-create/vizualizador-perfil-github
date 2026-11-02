const profileResults = document.querySelector('.profile-results');

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  element.className = className;

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}

export function clearProfile() {
  profileResults.textContent = '';
}

export function showLoading() {
  clearProfile();
  profileResults.append(createElement('p', 'loading', 'Carregando...'));
}

export function renderProfile(userData) {
  clearProfile();

  const displayName = userData.name || userData.login;
  const profileCard = createElement('div', 'profile-card');
  const avatar = createElement('img', 'profile-avatar');
  avatar.src = userData.avatar_url;
  avatar.alt = `Avatar de ${displayName}`;

  const profileInfo = createElement('div', 'profile-info');
  profileInfo.append(
    createElement('h2', '', displayName),
    createElement('p', '', userData.bio || 'Não possui bio cadastrada 😢.')
  );
  profileCard.append(avatar, profileInfo);

  const profileCounter = createElement('div', 'profile-counter');
  const followers = createElement('div', 'followers');
  followers.append(
    createElement('h4', '', '👥 Seguidores'),
    createElement('span', '', userData.followers)
  );

  const following = createElement('div', 'following');
  following.append(
    createElement('h4', '', '👥 Seguindo'),
    createElement('span', '', userData.following)
  );

  profileCounter.append(followers, following);
  profileResults.append(profileCard, profileCounter);
}
