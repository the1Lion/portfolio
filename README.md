# CV Art 
### A website for crafting modern CVs
<hr/>

## 1- Configure the smtp for contact:
1. you need to create an account with https://app.elasticemail.com/api/logs/email
2. go to https://smtpjs.com/ and generate your security token using the email
from app.elasticemail.com and then write it in constants 

## 2- Change constants in helpers/constants.js.

## 3- Change your picture and cv in /public.


## 4- Deploying using GitHub pages push the branch like this:
1. on remote repository delete the "gh-pages" branch if existed.
2. npm run build
3. git add dist -f
4. git commit -m [your commit message here]
5. git subtree push --prefix dist origin gh-pages
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