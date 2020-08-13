# About
A way to simplify using nhentai-api.

## index.js 
a sample on how to use the book.js

## book.js
the meat of the git, the logic you use to get a dojin object

## SAMPLE RESPONSE

```
doujin {
  title: 'REDACTED',
  id: 73096,
  tags: [ 'REDACTED' ],
  translated: true,
  artist: [ 'sumiya' ],
  character: [ 'kurisu makise', 'rintarou okabe' ],
  parody: [ 'steinsgate' ],
  language: 'english',
  title_link: 'REDACTED,
  page_count: 27
} 
```

## Branches

### main_branch
in this branch if a dojin does not exist you get a null response take care and handle this.

### nhentai-js_style
here you can use the the method exists to check if the doujin exists. Attention this seems to end in 2 request in case the doujin exists
