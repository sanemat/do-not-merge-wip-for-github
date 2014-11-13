# Do Not Merge WIP for GitHub

[![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

Do not merge *WIP* pull request!

Disables "Merge pull request" button while ANY of the following is true:

* Title contains "[wip]" (case insensitive)
* Any tasks remain incomplete
* Any commit messages remain prefixed with "squash!" or "fixup!"

[Do Not Merge WIP for GitHub](https://chrome.google.com/webstore/detail/do-not-merge-wip-for-gith/nimelepbpejjlbmoobocpfnjhihnpked)

## Demo

![wip-you-cant-merge](https://f.cloud.github.com/assets/75448/2178447/c9dbe4ce-9667-11e3-9ac6-53c49cad72c7.gif)

## Usage

* Put `[wip]` or `[WIP]` or `[Do Not Merge]` on the title of the pull request
* It works!

## Changelog

[conventions](https://github.com/ajoslin/conventional-changelog/blob/e451eeeb1c790bc3a2dbdef6f566c47c1439fdcb/CONVENTIONS.md)

[travis-url]: https://travis-ci.org/sanemat/do-not-merge-wip-for-github
[travis-image]: https://travis-ci.org/sanemat/do-not-merge-wip-for-github.svg?branch=master
[daviddm-url]: https://david-dm.org/sanemat/do-not-merge-wip-for-github.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/sanemat/do-not-merge-wip-for-github
