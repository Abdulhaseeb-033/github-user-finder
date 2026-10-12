
const profileAvatar = document.querySelector("#profile-avatar");
const profileName = document.querySelector("#profile-name");
const profileUsername = document.querySelector("#profile-username");
const profileBio = document.querySelector("#profile-bio");
const profileLocation = document.querySelector("#profile-location");

const followersCount = document.querySelector("#followers-count");
const followingCount = document.querySelector("#following-count");
const reposCount = document.querySelector("#repos-count");

const profileLink = document.querySelector("#profile-link");
const profileSection = document.querySelector("#profile-section");



export function displayUser(userData) {
    profileAvatar.src = userData.avatar_url;
    profileName.textContent = userData.name || userData.login;

    profileUsername.textContent = `@${userData.login}`;
    profileUsername.href = userData.html_url;

    profileBio.textContent = userData.bio || "No bio available.";

    profileLocation.replaceChildren();

    if (userData.location) {
        const locationIcon = document.createElement("i");
        locationIcon.setAttribute("data-lucide", "map-pin");
        locationIcon.classList.add("icon");

        const locationText = document.createElement("span");
        locationText.textContent = userData.location;

        profileLocation.append(locationIcon, locationText);

        lucide.createIcons({
            root: profileLocation
        });
    } else {
        profileLocation.textContent = "Location not available.";
    }

    followersCount.textContent = userData.followers;
    followingCount.textContent = userData.following;
    reposCount.textContent = userData.public_repos;

    profileLink.href = userData.html_url;

    profileSection.hidden = false;
}


export function hideProfile() {
    profileSection.hidden = true;
}


export function displayReposError() {
    const reposList = document.querySelector("#repos-list");

    reposList.replaceChildren();

    const errorMessage = document.createElement("p");
    errorMessage.className = "repos-error";
    errorMessage.textContent =
        "Repositories couldn't be loaded. Please try searching again.";

    reposList.appendChild(errorMessage);
}


export function displayRepos(repos) {
    const reposList = document.querySelector("#repos-list");

    reposList.innerHTML = "";

    if (repos.length === 0) {
        reposList.textContent = "This user has no public repositories.";
        return;
    }

    repos.forEach(function (repo) {
        const repoCard = document.createElement("article");
        repoCard.className = "repo-card";

        const repoName = document.createElement("h4");
        repoName.className = "repo-name";

        const repoLink = document.createElement("a");
        repoLink.className = "repo-link";
        repoLink.href = repo.html_url;
        repoLink.target = "_blank";
        repoLink.rel = "noopener noreferrer";
        repoLink.textContent = repo.name;

        repoName.appendChild(repoLink);

        const repoDescription = document.createElement("p");
        repoDescription.className = "repo-description";
        repoDescription.textContent =
            repo.description || "No description available.";

        const repoMeta = document.createElement("div");
        repoMeta.className = "repo-meta";

        if (repo.language) {
            const language = document.createElement("span");
            language.className = "repo-meta-item";

            const languageDot = document.createElement("span");
            languageDot.className = "repo-language-dot";

            language.appendChild(languageDot);
            language.append(document.createTextNode(repo.language));

            repoMeta.appendChild(language);
        }

        const stars = document.createElement("span");
        stars.className = "repo-meta-item";
        stars.innerHTML = `
            <i data-lucide="star" class="icon"></i>
            ${repo.stargazers_count}
        `;
        repoMeta.appendChild(stars);

        const forks = document.createElement("span");
        forks.className = "repo-meta-item";
        forks.innerHTML = `
            <i data-lucide="git-fork" class="icon"></i>
            ${repo.forks_count}
        `;
        repoMeta.appendChild(forks);

        repoCard.append(repoName, repoDescription, repoMeta);
        reposList.appendChild(repoCard);
    });

    lucide.createIcons();
}