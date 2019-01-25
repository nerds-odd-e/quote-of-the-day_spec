.PHONY: all

all: test

node_modules: package.json
	yarn install

test: node_modules deploy-test run-test shutdown-test

run-test:
	yarn test

shutdown-test:
	docker-compose -f docker-compose/test/docker-compose.yml down

build-dev:
	docker-compose -f docker-compose/dev/docker-compose.yml build

build-test:
	docker-compose -f docker-compose/test/docker-compose.yml build

build-prod:
	docker-compose -f docker-compose/prod/docker-compose.yml build

deploy-dev: build-dev
	docker-compose -f docker-compose/dev/docker-compose.yml up

deploy-test: build-test
	docker-compose -f docker-compose/test/docker-compose.yml up -d

deploy: build-prod
	docker-compose -f docker-compose/prod/docker-compose.yml up -d

pull-rebase-all:
	cd ../quote-of-the-day_backend && git pull --rebase
	cd ../quote-of-the-day_bff && git pull --rebase
	cd ../quote-of-the-day_react && git pull --rebase
	cd ../quote-of-the-day_spec && git pull --rebase
