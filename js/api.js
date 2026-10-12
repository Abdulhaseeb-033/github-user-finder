
export async function fetchGitHubUser(username) {
    const url = `https://api.github.com/users/${encodeURIComponent(username)}`;

    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("GitHub user not found.");
        }

        if (response.status === 403) {
            throw new Error("GitHub API rate limit reached. Try again later.");
        }

        throw new Error("Unable to fetch GitHub user. Please try again.");
    }

    return response.json();
}

export async function fetchUserRepos(username) {
    const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("GitHub user not found.");
        }

        if (response.status === 403) {
            throw new Error("GitHub API rate limit exceeded. Try again later.");
        }

        throw new Error("Failed to fetch repositories.");
    }

    return await response.json();
}
