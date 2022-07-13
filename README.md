
<p align="center">
 <img width="400" height="200" src="https://i.ibb.co/HnWSsXJ/ilogo.png"/>
</p>

<div align="center">

 <a href="https://www.npmjs.com/package/shardjs">![GitHub package.json version](https://img.shields.io/github/package-json/v/AnthonyQY/shardjs)</a>
 <a href="https://www.npmjs.com/package/shardjs">![npm](https://img.shields.io/npm/v/shardjs)</a>
 <a href="https://www.npmjs.com/package/shardjs">![GitHub package.json version](https://img.shields.io/bundlephobia/min/shardjs)</a>
 
</div>

# About
A tiny NPM package for splitting and recombining data.

## Installation
```bash
npm i shardjs
```
## Usage
### Importing
```javascript
import { shardify, blobify } from 'shardjs'
```

There are two methods in this package to split and recombine data.

### Splitting
```javascript
function shardify(blob, chunk, sizeMode = "MODE_BITSIZE", contentType = "text/plain")
```

### Combining
```javascript
function blobify(shards, contentType = "text/plain")
```
## Examples
To split a data blob of plaintext into three equal parts.

If there is an additional data that cannot be divided equally, it will be added as a 4th item.
```javascript
import { shardify } from 'shardjs'

const file = new File(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'example.txt')

var shards = shardify(file, 3, "MODE_DIVIDE", "text/plain")
```
To split a data blob of plaintext into N parts, where each part is 5000 bits.
```javascript
import { shardify } from 'shardjs'

const file = new File(['0'.repeat(1000000)], 'example.txt')

var shards = shardify(file, 5000, "MODE_BITSIZE", "text/plain")
```
To recombine blobs of split plaintext data.
```javascript
import { blobify } from 'shardjs'

const file = new File(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 'example.txt')
var shards = shardify(file, 3, "MODE_DIVIDE", "text/plain")

var blob = blobify(shards, "text/plain")
```
## Attributions
<a href="https://www.flaticon.com/free-icons/space" title="space icons">Space icons created by Smashicons - Flaticon</a>
