build:
	node --version
	yarn run build
dev:
	yarn run dev
install:
	yarn install --frozen-locakfile
tag:
	bash ./scripts/tag.sh
push:
	git push origin --tags
.PHONY: build
