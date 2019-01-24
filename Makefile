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

pull-rebase-all:
	cd ../quote-of-the-day_backend && git pull --rebase
	cd ../quote-of-the-day_bff && git pull --rebase
	cd ../quote-of-the-day_react && git pull --rebase
	cd ../quote-of-the-day_spec && git pull --rebase

