var headlineContent = [
  {
    title: "Bánh flan sữa chua - sự kết hợp hoàn hảo",
    photo: "./data/images/trangchu/headline/headline1.jpg",
  },
  {
    title: "Sữa chua làm từ sữa dê - đậm đà hương vị khó quên",
    photo: "./data/images/trangchu/headline/headline2.jpg",
  },
  {
    title: "Thưởng thức sữa chua theo cách của bạn",
    photo: "./data/images/trangchu/headline/headline3.jpg",
  },
];


$(document).ready(function () {
   for(let i = 0; i < headlineContent.length; i++) {
       var item = headlineContent[i]
       var dc = $("<div>")
       $("<span><h3>" + item.title + "</h3></span>").appendTo(dc)
       $("<img src='" + item.photo + "'/>").appendTo(dc)
       $("#headline").append(dc)
   }

   $("#headline > div").hide()
   $("#headline > div:first").show()

   setInterval(function() {
       $("#headline > div:first")   // lay phan tu dau tien
       .hide()                  // an phan tu dau tien
       .next()                  // chuyen qua phan tu ke tiep
       .fadeIn(1000)            // hien thi phan tu hien tai
       .end()                   // quay ve phan tu dau
       .appendTo("#headline")   // them phan tu div dau vao cuoi danh sach
   }, 5000)
});