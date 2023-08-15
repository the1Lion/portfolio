# Mo Portfolio

## To push the branch into github for deploying
1. On remote repository delete the "gh-pages" branch.
2. npm run build
3. git add dist -f
4. git commit -m [your commit message here]
5. git subtree push --prefix dist origin gh-pages
6. 
### Run
```shell
npm run build
```
```shell
git add dist -f
```
```shell
git commit -m "create new gh-pages branch"
```
```shell
git subtree push --prefix dist origin gh-pages
```