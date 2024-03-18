# [OpenGento website](https://opengento.fr/)

[![Hugo Badge](https://img.shields.io/badge/Hugo-FF4088?logo=hugo&logoColor=fff&style=plastic)](https://gohugo.io/)
[![🏗️ Deploy site](https://github.com/opengento/site-opengento/actions/workflows/site-deploy.yml/badge.svg)](https://github.com/opengento/site-opengento/actions/workflows/site-deploy.yml)

## 🔧 Technologies

- Hugo framework [docs](https://gohugo.io/documentation/)
- GitHub Pages via this repository: [github.com/opengento/opengento.github.io](https://github.com/opengento/opengento.github.io/)

## 🧪 How to use?

- Edit Markdown files in `/content/` folder
- Edit theme configuration in `config.yaml` (part: header/navbar/sidebar/home/footer)

### In local

- Requirement: Docker
- Local: `hugo server -D`
- Docker build: `docker run --rm -it -v $(pwd):/src klakegg/hugo`

## 🚀 How to deploy?

1. Commit files from this repository (via https://github.dev/opengento/site-opengento or by cloning in local)
2. Check the [last build](https://github.com/opengento/site-opengento/actions/workflows/site-deploy.yml)

## Maintainers

See [Contributors list](https://github.com/opengento/site-opengento/graphs/contributors).
