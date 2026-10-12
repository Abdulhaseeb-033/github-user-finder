
import { fetchGitHubUser, fetchUserRepos } from "./api.js";
import {
    displayUser,
    hideProfile,
    displayRepos,
    displayReposError
} from "./ui.js";

const searchForm = document.querySelector("#search-form");
const usernameInput = document.querySelector("#username");
const statusMessage = document.querySelector("#status-message");

searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username === "") {
        statusMessage.classList.remove("loading");
        statusMessage.textContent = "Please enter a GitHub username.";
        return;
    }

    localStorage.setItem("lastSearchedUsername", username);

    hideProfile();

    const submitButton = searchForm.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.innerHTML =
        '<i data-lucide="loader-circle" class="icon"></i> Searching...';

    lucide.createIcons();

    statusMessage.classList.add("loading");
    statusMessage.textContent = "Searching GitHub...";

    try {
        const userData = await fetchGitHubUser(username);

        displayUser(userData);
        statusMessage.textContent = "";

        try {
            const repos = await fetchUserRepos(username);
            displayRepos(repos);
        } catch (repoError) {
            console.error("Repository error:", repoError);

            displayReposError();

            statusMessage.textContent =
                "Profile loaded, but repositories could not be fetched. Please try again.";
        }
    } catch (error) {
        statusMessage.textContent = error.message;
        hideProfile();

        console.error(error);
    } finally {
        statusMessage.classList.remove("loading");

        submitButton.disabled = false;
        submitButton.innerHTML =
            '<i data-lucide="search" class="icon"></i> Search GitHub';

        lucide.createIcons();
    }
});

const lastSearchedUsername = localStorage.getItem("lastSearchedUsername");

if (lastSearchedUsername) {
    usernameInput.value = lastSearchedUsername;
    searchForm.requestSubmit();
}