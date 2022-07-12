function about(){
    return "Shardify File Splitting Package"
}

function shardify(blob, chunk, sizeMode = "MODE_BITSIZE") {
    let shardSize;
    let remainder;

    let shards = [];

    switch(sizeMode){
        case "MODE_BITSIZE":
            shardSize = chunk;
            for(let i = 0; i < blob.size; i += shardSize) {
                shards.push(file.slice(i, i + size + 1))
            }
            break;
        case "MODE_DIVIDE":
            shardSize = Math.floor(blob.size, chunk);
            remainder = blob.size % chunk;

            for(let i = 0; i < (blob.size - remainder); i += shardSize) {
                shards.push(file.slice(i, i + size + 1))
            }

            shards.push(file.slice(blob.size - remainder, blob.size + 1))

            break;
    }
    
    return shards;
}

module.exports = { about, shardify }