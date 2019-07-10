const findItemByBarcodes = (barcodes,items) => {
    let index = 0;
    for(let i=0;i<items.length;i++){
        for(let j=0;j<barcodes.length;j++){
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

const createReceiptByItem = (barcodes,items) =>{
    let isExist = findItemByBarcodes(barcodes,items)
    let receipt = {
        item: [],
        totalPrice:0
    }
    if(isExist == false){
        return null
    }else{
        for(let i=0;i<barcodes.length;i++){
            for(let j=0;j<items.length;j++){
                if(barcodes[i] == items[j].id){
                    receipt.item.push(items[j])
                    receipt.totalPrice == undefined? (items[j].price) : receipt.totalPrice += items[j].price
                }
            }
        }
        return receipt
    }
}

const printReceipt = (barcodes,items) =>{
    let receipt = createReceiptByItem(barcodes,items)
    let receiptString = 'Receipts\n'
    receiptString += '---------------------------------------------------\n'
    receipt.item.forEach(item =>{
        receiptString += item.name
        receiptString += '\t\t\t'
        receiptString += item.price
        receiptString += '\n' 
    })
    receiptString += '---------------------------------------------------\n'
    receiptString += `Price:${receipt.totalPrice}`
    return receiptString
}

module.exports = {findItemByBarcodes,
createReceiptByItem,
printReceipt}