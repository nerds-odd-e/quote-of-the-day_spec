.PHONY: all

all: test

load-env: docker-compose.yml
	docker-compose up -d --build

node_modules: package.json
	yarn install 

test: load-env node_modules
	yarn test
