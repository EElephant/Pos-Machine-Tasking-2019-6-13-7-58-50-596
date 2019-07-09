function findItemByBarcodes (barcodes,items) {

    let index = 0;
    for(var i=0;i<items.length;i++){
        for(var j=0;j<barcodes.length;j++){
            if(barcodes[j] == items[i].id){
                index ++;
            }
        }
    }
    if(index == barcodes.length){
        return true
    }
    
    return false;
}

module.exports = findItemByBarcodes;