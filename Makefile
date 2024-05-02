all: spellcheck render-site push-site

spellcheck:
	codespell *.md

render-site:
	quarto render .

push-site:
	-git add -u
	-git add -f docs/*
	-git commit -m"updating docs"
	git push origin main

encrypt-config:
	gpg --symmetric --cipher-algo AES256 config.toml
encrypt-pybconfig:
	cp /home/poldrack/.pybliometrics/config.ini .
	gpg --symmetric --cipher-algo AES256 config.ini
	rm config.ini 
