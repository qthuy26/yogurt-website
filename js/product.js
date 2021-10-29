// Danh sach cac san pham
var itemList = {
    "sp001": {
        "name": "Sữa Chua Vị Kiwi",
        "price": 21000,
        "photo": "../data/images/sanpham/kiwi.jpg"
    },
    "sp002": {
        "name": "Sữa Chua Vị Xoài",
        "price": 22000,
        "photo": "../data/images/sanpham/mango.jpg"
    },
    "sp003": {
        "name": "Sữa Chua Vị Dưa Lưới",
        "price": 23000,
        "photo": "../data/images/sanpham/cantaloupe.jpg"
    },
    "sp004": {
        "name": "Sữa Chua Vị Mâm Xôi",
        "price": 24000,
        "photo": "../data/images/sanpham/blackberry.jpg"
    },
    "sp005": {
        "name": "Sữa Chua Vị Dâu Tây",
        "price": 25000,
        "photo": "../data/images/sanpham/strawberry.jpg"
    },
    "sp006": {
        "name": "Sữa Chua Vị Việt Quất",
        "price": 26000,
        "photo": "../data/images/sanpham/blueberry.jpg"
    },
    "sp007": {
        "name": "Sữa Chua Vị Bưởi",
        "price": 27000,
        "photo": "../data/images/sanpham/grapes.jpg"
    },
    "sp008": {
        "name": "Sữa Chua Vị Táo Xanh",
        "price": 28000,
        "photo": "../data/images/sanpham/green-apple.jpg"
    },
    "sp009": {
        "name": "Sữa Chua Vị Dứa",
        "price": 29000,
        "photo": "../data/images/sanpham/pineapple.jpg"
    },
}

// Ham xu ly dat hang
function addCart(code) {
    var number = parseInt(document.getElementById(code).value)
    var current = parseInt(window.localStorage.getItem(code))
    // Kiem tra su ton tai cua ma san pham trong localStorage
    if(typeof localStorage[code] == "undefined") {
        window.localStorage.setItem(code, number)
    }
    
    if(current + number > 100) {
        window.localStorage.setItem(code, 100)
    }
    else if(current + number < 100) {
        window.localStorage.setItem(code,current+number)
    }
}