
import { fetchGitHubUser } from "./api.js";
import { displayUser, hideProfile } from "./ui.js";

const searchForm = document.querySelector("#search-form");
const usernameInput = document.querySelector("#username");
const statusMessage = document.querySelector("#status-message");


searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();

    if (username === "") {
        statusMessage.textContent = "Please enter a GitHub username.";
        return;
    }

    statusMessage.textContent = "Searching GitHub...";

    hideProfile();

    const submitButton = searchForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Searching...";

    try {
        const userData = await fetchGitHubUser(username);

        displayUser(userData);

        statusMessage.textContent = "";
    } catch (error) {
        statusMessage.textContent = error.message;
        console.error(error);
    }

    finally {
        submitButton.disabled = false;
        submitButton.innerHTML = '<i data-lucide="search" class="icon"></i> Search GitHub';
        lucide.createIcons();
    }
});

