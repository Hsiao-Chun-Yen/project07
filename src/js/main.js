// 進入起始畫面
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
     document.querySelector('main').style.display = "block";
     document.querySelector('header').style.display = "none";
     AOS.refresh();
  }, 2000);
})

// 經歷互動

// AOS