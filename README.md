# <p style="text-align: center;">بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيم ِ</p>
<br/>

# CV Art 
### A website for crafting modern CVs
<hr/>

## 1- Change constants in helpers/constants.js and also picture, pdf and app icon in /public.

## 2- Configure the smtp for contact:
1. create an account with https://app.elasticemail.com/api/logs/email
2. go to https://smtpjs.com/ and generate your security token using the email
from https://app.elasticemail.com/ then write it in constants 
3. in the https://app.elasticemail.com/ go to Start/Verify Domain/Verify Email and verify your USER_EMAIL and SMTP_EMAIL

## 3- Deploying using GitHub pages push the branch like this:
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