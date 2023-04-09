// 스크롤 내리면 배경색상 추가
const header = document.querySelector('header');
const swiperWrapper =document.querySelector('.swiper-wrapper');
const swHeight = swiperWrapper.getBoundingClientRect().height;
// console.log(swHeight)

window.addEventListener("scroll", () => {
if (window.scrollY > swHeight){
    header.setAttribute("style", "background: black; transition: .5s;");
}else {
    header.setAttribute("style", "background: transparent;");
 }
});

//탑버튼
const topBtn = document.querySelector('.top-btn');

window.addEventListener('scroll' , function(){
    const scrY = window.scrollY;
    console.log(scrY)
    if(scrY > 1500){
        topBtn.style.display='block';
    }else{
        topBtn.style.display='none';
    }
});
topBtn.addEventListener('click', function(){
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  });
