### How create project

1. Create project: yarn create vite
2. Install dependencies: yarn

### Run project

yarn dev

## Git branching using Gitflow

### Create develop branch

git flow init

### Create/close feature branch

git flow feature start crate-main-page
git flow feature finish

### Create/close bugfix branch

git flow bugfix start styling
git flow bugfix finish

### Stash

- git stash: if have changes but we dont want to commit them to the current branch
- git stash pop: we recover the files

### Prefix src/

We need to install the package:
@types/node
