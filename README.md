# SASS Development with Gulp

This repository provides a structured approach to SASS development using Gulp for task automation. It includes features for compiling SASS to CSS, minifying CSS, and watching for changes in real-time.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Compile SASS to CSS**: Converts `.scss` files to `.css`.
- **Minify CSS**: Minifies the compiled CSS for better performance.
- **Watch Task**: Watches for changes in SASS files and automatically recompiles them.
- **Source Maps**: Generates source maps for easier debugging.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [Gulp CLI](https://gulpjs.com/) (v2 or higher)

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/sass-gulp-setup.git
    cd sass-gulp-setup
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

## Usage

### Gulp Tasks

- **Compile SASS**:
    ```sh
    gulp sass
    ```

- **Minify CSS**:
    ```sh
    gulp minify
    ```

- **Watch for changes**:
    ```sh
    gulp watch
    ```

- **Default task** (compile SASS, minify CSS, and watch for changes):
    ```sh
    gulp
    ```

### Scripts

- **Build** (compile and minify):
    ```sh
    npm run build
    ```


