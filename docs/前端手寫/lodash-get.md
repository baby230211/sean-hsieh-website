---
sidebar_position: 1
---

# lodash 手寫

## lodash.get

lodash 的 get 是一個很常被用到的函式。
根據input 的object 以及path 路徑去獲取值。
如果拿到的value是undefined則會以defaultValue 取代
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
_.get(object, 'a[0].b.c');
// => 3
 
_.get(object, ['a', '0', 'b', 'c']);
// => 3
 
_.get(object, 'a.b.c', 'default');
// => 'default'
```

lodash可以接收各種類型的路徑，主要是有castPath這個helper function。castPath 會把 `a[0].b.c`、`a[0]["b"]["c"]` 轉換成 `['a', '0', 'b', 'c']`
實際.get()在做的事情是
```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, ['a', '0', 'b', 'c']) // 3

```

## implementation
```js
function castPath(value){
  if(Array.isArray(value)){
    return value
  }
  return string.split(/[\.\[\]]/).filter(Boolean)
}

function lodashGet(obj, path, defaultValue) {
  let parts = castPath(path)

  let count = 0
  const length = parts.length
  while(count < parts.length && obj !== null && obj !== undefined){
    obj = obj[path[count]]
    count++
  }
  return (count && count === length) ? obj : defaultValue
}
```