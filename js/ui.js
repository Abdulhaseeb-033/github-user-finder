
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

