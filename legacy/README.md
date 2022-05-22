# New website to OpenGento community

_by Opengento_

## Technologies
- Hugo framework [docs](https://gohugo.io/documentation/)
- Netlify hosting []()

## How to use ?
- Edit Markdown files in `/content/` folder
- Edit theme configuration in `config.yaml` (header/navbar/sidebar/home/footer)

Local : `hugo server -D`
Docker build : `docker run --rm -it -v $(pwd):/src klakegg/hugo`

## How to deploy?

1. Commit files from this repository
2. Run

```
./deploy.sh
```

Requirement: Docker

## Maintainers

See [Contributors list](https://github.com/opengento/site-opengento/graphs/contributors).