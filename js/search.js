// Tim kiem du lieu
const searchInput = document.querySelector('.header-search-input')
const searchIcon = document.querySelector('.search-icon')
const searchForm = document.querySelector('.header-search')

searchInput.addEventListener('keypress', (e) => {
    if(e.code == 'Enter') {
        e.preventDefault()
        sendData(searchInput.value)
        return false
    }
})


searchIcon.addEventListener('click', () => {
    sendData(searchInput.value)
})


// Ham gui du lieu
function sendData(data) {
    if(data.length != 0) {
        searchForm.submit();
    }
}


// Xu ly bam vao gio hang
const cartIcon = document.querySelector('.cart-icon')

cartIcon.addEventListener('click', () => {
    window.location.href = "donhang.html";
})