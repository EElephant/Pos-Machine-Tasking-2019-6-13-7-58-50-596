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

function createReceiptByItem(barcodes,items){
    let isExist = findItemByBarcodes(barcodes,items)
    let receipt = {
        item: [],
        totalPrice:0
    }
    if(isExist == false){
        return null
    }else{
        for(var i=0;i<barcodes.length;i++){
            for(var j=0;j<items.length;j++){
                if(barcodes[i] == items[j].id){
                    receipt.item.push(items[j])
                    receipt.totalPrice == undefined? (items[j].price) : receipt.totalPrice += items[j].price
                }
            }
        }
        return receipt
    }
}

module.exports = findItemByBarcodes;
module.exports = createReceiptByItem;