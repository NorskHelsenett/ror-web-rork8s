# Rork8s

Landing page for ROR, created with angular.

# Develop locally

## Prerequisites

- Node LTS
- Angular CLI (`npm i -g @angular/cli`)

To build containers you must have docker or podman

## Start

- git clone to your local machine
- open this repo in your favorite IDE
- get dependencies
- to run with watch mode
  `npm i` or `bun i`
- `npm start` or ```bun run start````

## Build and run with containers

- build dev with `docker build -f Dockerfile.dev -t rork8s-dev .`
- run dev with `docker run -p 8080:8080 rork8s-dev`
- open your favorite browser on http://localhost:8080

or

- build the production version of rork8s with: `npm run build:prod`
- build container with `docker build -t rork8s-prod -f Dockerfile .`
- run container with `docker run -p 8081:8080 rork8s-prod`
- open your favorite browser to http://localhost:8081
