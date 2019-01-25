.PHONY: all

all: test

node_modules: package.json
	yarn install

test: node_modules deploy-test run-test shutdown-test

test-not-wip: node_modules deploy-test run-test-not-wip shutdown-test

run-test:
	yarn test

run-test-not-wip:
	yarn test --tags "not @wip"

shutdown-dev:
	docker-compose -f docker-compose/dev/docker-compose.yml down

shutdown-test:
	docker-compose -f docker-compose/test/docker-compose.yml down

shutdown-prod:
	docker-compose -f docker-compose/prod/docker-compose.yml down

build-dev:
	docker-compose -f docker-compose/dev/docker-compose.yml build

build-test:
	docker-compose -f docker-compose/test/docker-compose.yml build

build:
	docker-compose -f docker-compose/prod/docker-compose.yml build

deploy-dev: build-dev
	docker-compose -f docker-compose/dev/docker-compose.yml up

deploy-test: build-test
	docker-compose -f docker-compose/test/docker-compose.yml up -d

deploy: build
	docker-compose -f docker-compose/prod/docker-compose.yml up -d

pull-rebase-all:
	cd ../quote-of-the-day_backend && git pull --rebase
	cd ../quote-of-the-day_bff && git pull --rebase
	cd ../quote-of-the-day_react && git pull --rebase
	cd ../quote-of-the-day_spec && git pull --rebase
