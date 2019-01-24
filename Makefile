.PHONY: all

all: test

load-env: docker-compose.yml
	docker-compose up -d

node_modules: package.json
	yarn install

test: load-env node_modules
	yarn test

build_images:
  docker-compose build && docker-compose push

deploy:
  docker-compose up
