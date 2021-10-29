
const cartTable = document.querySelector('.cart-table')
const cartTableBody = document.querySelector('.cart-table tbody')


function showCart() {
    let TotalPreTax = 0     // Tong truoc thue
    Object.keys(localStorage).forEach((key) => {
        var item = itemList[key]
        var photo = item.photo
        var name = item.name
        var price = item.price
        var orderNumber = localStorage.getItem(key)

        // Tao cac o hien thi thong tin san pham
        // Tao o du lieu chua hinh san pham
        var imgBox = document.createElement("td")
        imgBox.innerHTML = "<img src='./data/" + photo + "' class='round-figure' width='100px'/>"
        imgBox.setAttribute("href", photo)
        imgBox.setAttribute("width", "100px")

        var nameBox = document.createElement("td")
        nameBox.textContent = name

        var priceBox = document.createElement("td")
        priceBox.textContent = price + "đ"

        var orderNumberBox = document.createElement("td")
        orderNumberBox.textContent = orderNumber
        
        var mulPrice = document.createElement("td")
        mulPrice.textContent = orderNumber * price + "đ"
        

        // Tao nut xoa
        var delBtn = document.createElement("a")
        delBtn.style.padding = "5px"
        delBtn.setAttribute("href", "#")
        delBtn.setAttribute("data-code", key)
        delBtn.innerHTML = '<i class="fa fa-trash icon-pink"></i>'
        delBtn.onclick = function () {
            removeCart(this.dataset.code)
        }

        var delBox = document.createElement("td")
        delBox.appendChild(delBtn)

        var newRow = document.createElement("tr")
        newRow.appendChild(imgBox)
        newRow.appendChild(nameBox)
        newRow.appendChild(orderNumberBox)
        newRow.appendChild(priceBox)
        newRow.appendChild(mulPrice)
        newRow.appendChild(delBox)

        cartTableBody.appendChild(newRow)

        TotalPreTax += (price * orderNumber)
    })

    const totalPretaxNode = document.querySelector(".total-pretax")
    
    totalPretaxNode.textContent = TotalPreTax

    const discountRate = document.querySelector(".discount-rate")
    discountRate.textContent = getDiscountRate()
    let discount = getDiscountRate() * TotalPreTax
    
    const tax = document.querySelector(".tax")
    let taxTemp = 0.1 * (TotalPreTax - discount)
    tax.textContent = taxTemp

    let total = document.querySelector(".total")
    let totalTemp = TotalPreTax + discount + taxTemp
    total.textContent = totalTemp

}


function removeCart(code) {
    if(typeof window.localStorage[code] !== "undefined") {
        // Xoa san pham khoi localStorage
        window.localStorage.removeItem(code);
        // Xoa noi dung cua phan than cua bang (<tbody>)
        cartTable.getElementsByTagName('tbody')[0].innerHTML=""
        // Hien thi lai noi dung chi tiet cua don hang
        showCart();
    } 
}

function getDiscountRate(){
    var d = new Date(); // Lay ngay hien tai cua may tinh
    var weekday=d.getDay(); // Lay ngay trong tuan
    var totalMins = d.getHours()*60+d.getMinutes(); // Doi thoi gian hien tai ra so phut tuong ung trong ngay
    if(weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
        return 0.1;
    return 0;
}



window.onload = showCart()
window.onstorage = () => {
    showCart();
}