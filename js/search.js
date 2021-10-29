// Tim kiem du lieu
const searchInput = document.querySelector('.header-search-input')
const searchIcon = document.querySelector('.search-icon')
const searchForm = document.querySelector('.header-search')

searchInput.addEventListener('keypress', (e) => {
    if(e.code == 'Enter') {
        sendData(searchInput.value)
    }
})


searchIcon.addEventListener('click', (e) => {
    sendData(searchInput.value)
})


// Ham gui du lieu
function sendData(data) {
    if(data.length != 0) {
        searchForm.setAttribute('action', './timkiem.html')
    }
    else {
        searchForm.setAttribute('action', 'javascript:void(0)')
    }
}


// Xu ly bam vao gio hang
const cartIcon = document.querySelector('.cart-icon')

cartIcon.addEventListener('click', () => {
    window.location.href = "donhang.html";
})