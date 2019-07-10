const aaa = require('../main');



let items = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
]

let barcodes = ['0001','0002']
it ('should return true when call find item by barcodes given barcodes', () => {
    expect(aaa.findItemByBarcodes(barcodes,items)).toBe(true);
});


let barcodes2 = ['10001','0002']
it ('should return false when call find item by barcodes given barcodes2', () => {
    expect(aaa.findItemByBarcodes(barcodes2,items)).toBe(false);
});


let barcodes3 = ['0001','0002']
let receipt = {
    item:[{id:'0001',name:"Coca Cola",price:3},{id:'0002',name:"Diet Coke",price:4}],
    totalPrice:7
}
let receiptString = 'Receipts\n---------------------------------------------------\nCoca Cola\t\t\t3\nDiet Coke\t\t\t4\n---------------------------------------------------\nPrice:7'
it ('should return receipt when call create receipt by item given barcodes3', () => {
    expect(aaa.createReceiptByItem(barcodes3,items)).toStrictEqual(receipt);
});
it ('should return receiptString when call create receipt by item given barcodes3', () => {
    expect(aaa.printReceipt(barcodes3,items)).toStrictEqual(receiptString);
});


let barcodes4 = ['0001','10002']
it ('should return null when call create receipt by item given barcodes4', () => {
    expect(aaa.createReceiptByItem(barcodes4,items)).toStrictEqual(null);
});