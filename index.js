function shardify(blob, chunk, sizeMode = "MODE_BITSIZE", contentType = "text/plain") {
    let shardSize;
    let remainder;

    let shards = [];

    switch(sizeMode){
        case "MODE_BITSIZE":
            shardSize = chunk;
            for(let i = 0; i < blob.size; i += shardSize) {
                shards.push(file.slice(i, i + shardSize, contentType))
            }
            break;
        case "MODE_DIVIDE":
            shardSize = Math.floor(blob.size / chunk);
            remainder = blob.size % chunk;

            for(let i = 0; i < (blob.size - remainder); i += shardSize) {
                shards.push(file.slice(i, i + shardSize, contentType))
            }
            if(remainder > 0){
                shards.push(file.slice(blob.size - remainder, blob.size, contentType))
            }
            break;
    }
    
    return shards;
}

function blobify(shards, contentType = "text/plain") {
    return new Blob(shards, {type: contentType})
}

module.exports = { shardify, blobify }