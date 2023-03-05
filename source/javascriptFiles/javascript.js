function search_animal() { 

  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('characters'); 

  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="list-item";                  
      } 
  } 
} 


// swiper
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    speed: 2800,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });