## Resource for Webstore

### Name
Do Not Merge WIP for GitHub

### Short name
(empty)

### Detailed description

```
You can't merge *WIP* pull request!

Usage:
- Put [wip] or [WIP] or [Do Not Merge] on the title of the pull request
- It works!
```

### Icon
![do-not-mix](https://raw.githubusercontent.com/sanemat/do-not-merge-wip-for-github/a7cbb8270599a41394d488f4aaffc1f3e58925fe/app/images/icon2-128.png)
![do-not-mix](https://raw.githubusercontent.com/sanemat/do-not-merge-wip-for-github/a7cbb8270599a41394d488f4aaffc1f3e58925fe/app/images/icon2-16.png)

### Screenshots
![screenshot1](https://lh5.googleusercontent.com/e76vtjWYzwgwQcDr6FpLtpvgNLev6ZZkvRzk4GR3V6E9Cb5TQEWDHGat5DGWza5Cje04qWg155w=s400-h275-e365)

### Demo

[![Do Not Merge WIP Demo](http://img.youtube.com/vi/89jY5OuXgwU/0.jpg)](https://www.youtube.com/watch?v=89jY5OuXgwU)

### Promotional tile image
(empty)

## Version Up for Admin

### Check

- `$ npm run build`
- Load unpacked extension from dist/

### Prepare

- Bump version on app/manifest.json, and package.json __manually__
- `$ npm i`
- `$ npm run changelog`
- `$ npm run git:tag`
- `$ git push origin vx.y.z`

### Release

- Download zip from [Latest Release](https://github.com/sanemat/do-not-merge-wip-for-github/releases/latest)
- Access [developer dashboard](https://chrome.google.com/webstore/developer/dashboard)
- Click the item
- Click Pakcage (on Build), then Upload new Package
- Upload generated zip file
- Click Store listing, then Submit for review
- Done!
