<p align="center">
  <img src="https://i.imgur.com/AuyAhuS.png" width="60%">
</p>

## Getting started.

### Put it on your package.json and run npm/yarn install
```json
    "dependencies": {
        ...
        "valhalla-snippets": "git+ssh://git@github.com:trinchero18/valhalla-snippets.git#master"
        ...
    }
```
### Make import and use it
```js
    //Import component 
    import { Button } from 'valhalla-snippets';
    
    //Import more components
    import { Button, Input, ... } from 'valhalla-snippets';
```