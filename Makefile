.PHONY: all

all: test

node_modules: package.json
	yarn install

test: node_modules deploy-test run-test shutdown-test

run-test:
	yarn test

shutdown-test: run-test
	docker-compose down

build:
	docker-compose build

deploy-dev:
	docker-compose up -d

deploy-test:
	docker-compose -f docker-compose-test.yml up -d

deploy:
	docker-compose -f docker-compose-prod.yml up -d

pull-rebase-all:
	cd ../quote-of-the-day_backend && git pull --rebase
	cd ../quote-of-the-day_bff && git pull --rebase
	cd ../quote-of-the-day_react && git pull --rebase
	cd ../quote-of-the-day_spec && git pull --rebase
