.PHONY: all

all: test

node_modules: package.json
	yarn install

test: node_modules
	yarn test

build:
	docker-compose build

deploy:
	docker-compose up -d
