# DCS Coding Challenge - Front End APplication

## Installation

To get the project up and running, and view components in the browser, complete the following steps:

1. Download and install Node: <https://nodejs.org/>
2. Clone this repo: `git@github.com:DaliborSkocibusic/DCS-Coding-Challenge-Front-End.git`
3. Install project dependancies: `npm install`
4. Start the development environment: `npm run dev`
5. Open your browser and visit <http://localhost:3306>. Always check the value after build to confirm port number.

## Development

When developing components, you may want assets automatically compiled and the browser to refresh automatically. To do this, run the following task:

-   `npm i -g npm@latest`
-   `npm install -D typescript`
-   `npm create vite@latest DCS-Coding-Challenge-React --template react-ts`
-   `cd DCS-Coding-Challenge-React`
-   `npm install @mui/material @emotion/react @emotion/styled`
-   `npm install`
-   `npm run dev`

## Wakatime - This project

<a href="https://wakatime.com/badge/user/cee95ec9-130e-4f66-8097-0123d00e7dfd/project/e8e685f0-0dd8-436f-8b62-34c90b87562e"><img src="https://wakatime.com/badge/user/cee95ec9-130e-4f66-8097-0123d00e7dfd/project/e8e685f0-0dd8-436f-8b62-34c90b87562e.svg" alt="wakatime"></a>
Wrong link. more like 7.5 hours. will update later. 


## Repo structure - To Be Done

```
/
├─ src/
│  ├─ assets/        # Assets
│  │  ├─ icons/      # Favicon and home screen icons
│  │  ├─ images/     # Raster images (used in component examples)
│  │  ├─ scripts/    # JavaScript files
│  │  ├─ styles/     # CSS files
│  │  └─ vectors/    # SVG images, icons and logos
│  │
│  ├─ components/    # Components
│  │  ├─ _partials/  # …that render component previews
│  │  ├─ common/     # …that may appear anywhere
│  │  ├─ global/     # …that appear on every page
│  │  ├─ layouts/    # …that govern macro layout
│  │  ├─ scopes/     # …that style undecorated markup
│  │  ├─ templates/  # …that combine components to render page types
│  │  └─ utilities/  # …that have a single purpose/role
│  │
│  ├─ docs/          # Documentation
│  │  ├─ _partials/  # Partials for rendering documentation
│  │  └─ …           # Documentation files
│  │
│  └─ tokens/        # Design tokens
│
├─ tmp/              # Files required for dynamic builds (ignored by Git)
├─ www/              # Public build (ignored by Git)
│
├─ .editorconfig     # Code style definitions
├─ .gitignore        # List of files and folders not tracked by Git
├─ .eslintrc         # Linting preferences for JavasScript
├─ fractal.configjs  # Configuration for Fractal
├─ gulpfile.js       # Configuration for Gulp tasks
├─ LICENSE           # License information for this project
├─ package.json      # Project manifest
└─ README.md         # This file
```
