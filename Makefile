.PHONY: all

all: test

node_modules: package.json
	yarn install

test: node_modules deploy-test
	yarn test

build:
	docker-compose build

deploy-test:
	docker-compose up -d

deploy:
	docker-compose -f docker-compose-prod.yml up -d
