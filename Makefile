.DEFAULT_GOAL := help

.PHONY: help
help: ## Dislay this help
	@grep -hE '(^[\.a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-40s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

##########################
#### Commit ####
##########################
commit_and_push: ## Commit all files (placeholder commit message), push, build public HTMl and push to deploy
	git add .
	git commit -am 'Commit auto'
	./deploy.sh
