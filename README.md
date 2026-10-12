# GitHub User Finder

A responsive web application that lets you search GitHub users, explore their profiles, and discover their public repositories.

## Features

- Search GitHub users by username
- View profile avatars, bios, and locations
- Explore followers, following, and public repository counts
- Display up to 6 recently updated public repositories
- View repository descriptions, programming languages, stars, and forks
- Open GitHub profiles and repositories in new tabs
- Remember the last searched username using localStorage
- Automatically restore the last searched profile after refreshing
- Loading indicators and error handling
- Responsive layout for desktop and mobile screens

## Built With

- HTML5
- CSS3
- JavaScript (ES Modules)
- GitHub REST API
- Lucide Icons

## Getting Started

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Run `index.html` using the VS Code Live Server extension.
4. Enter a GitHub username and click **Search GitHub**.

Running the project through a local development server is recommended for ES module support.

## Project Structure

```text
GitHub-User-Finder/
├── index.html
├── style.css
├── README.md
└── js/
    ├── main.js
    ├── api.js
    └── ui.js
```

## API

This project uses the public GitHub REST API to retrieve user profiles and public repositories.

No GitHub personal access token is required for basic public profile searches. Unauthenticated API rate limits may apply.

## Future Improvements

- Add repository pagination or a load-more button
- Add sorting and filtering options
- Improve accessibility and empty states

## License

No license has been specified yet.