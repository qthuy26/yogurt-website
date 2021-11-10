
const cartTable = document.querySelector('.cart-table')
const cartTableBody = document.querySelector('.cart-table tbody')


function showCart() {
    let TotalPreTax = 0     // Tong truoc thue
    Object.keys(localStorage).forEach((key) => {
        if(localStorage.getItem("plyr") !== null) {
            localStorage.removeItem("plyr")
        }
        let item = itemList[key]
        let photo = item.photo
        let name = item.name
        let price = item.price
        let orderNumber = localStorage.getItem(key)

        // Tao cac o hien thi thong tin san pham
        // Tao o du lieu chua hinh san pham
        let imgBox = document.createElement("td")
        imgBox.innerHTML = "<img src='./data/" + photo + "' class='round-figure' width='100px'/>"
        imgBox.setAttribute("href", photo)
        imgBox.setAttribute("width", "100px")

        let nameCell = document.createElement("td")
        nameCell.textContent = name

        let priceCell = document.createElement("td")
        priceCell.innerHTML = `${price}<span style="font-size: 24px">&#8363;<span>`

        let orderNumberCell = document.createElement("td")
        orderNumberCell.textContent = orderNumber
        
        let mulPrice = document.createElement("td")
        mulPrice.innerHTML = `${orderNumber*price}<span style="font-size: 24px">&#8363;<span>`
        

        // Tao nut xoa
        let delBtn = document.createElement("a")
        delBtn.style.padding = "5px"
        delBtn.style.backgroundColor = "#cddc39"
        delBtn.style.color = "#f90d6d"
        delBtn.setAttribute("href", "#")
        delBtn.setAttribute("data-code", key)
        delBtn.innerHTML = '<i class="fa fa-trash"></i>'
        delBtn.onclick = function () {
            removeCart(this.dataset.code)
        }

        let delCell = document.createElement("td")
        delCell.appendChild(delBtn)

        let newRow = document.createElement("tr")
        newRow.appendChild(imgBox)
        newRow.appendChild(nameCell)
        newRow.appendChild(orderNumberCell)
        newRow.appendChild(priceCell)
        newRow.appendChild(mulPrice)
        newRow.appendChild(delCell)

        cartTableBody.appendChild(newRow)

        TotalPreTax += (price * orderNumber)
    })

    const totalPretaxNode = document.querySelector(".total-pretax")
    
    totalPretaxNode.textContent = TotalPreTax

    const discountRate = document.querySelector(".discount-rate")
    let discount = getDiscountRate() * TotalPreTax
    discountRate.textContent = discount
    
    const tax = document.querySelector(".tax")
    let taxTemp = 0.1 * (TotalPreTax - discount)
    tax.textContent = taxTemp

    let total = document.querySelector(".total")
    let totalTemp = TotalPreTax - discount + taxTemp
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
    let d = new Date(); // Lay ngay hien tai cua may tinh
    let weekday=d.getDay(); // Lay ngay trong tuan
    let totalMins = d.getHours()*60+d.getMinutes(); // Doi thoi gian hien tai ra so phut tuong ung trong ngay
    if(weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020)))
        return 0.1;
    return 0;
}



window.onload = showCart()
window.onstorage = () => {
    showCart();
}