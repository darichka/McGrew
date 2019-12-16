$(document).ready(function(){
    $('.slider__container').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
  });


  ///////dropdown menu//////////

  let dropdownHeaders = document.getElementsByClassName("menu__dropdown-header");

  for(let i = 0; i < dropdownHeaders.length; i++){
    dropdownHeaders[i].addEventListener('mouseenter', showDropdown, false);
    dropdownHeaders[i].addEventListener('mouseleave', hideDropdown, false);
    dropdownHeaders[i].addEventListener('click', function(){
      if(this.closest('.menu_mobile'))
      {  
        let e = this.matches('.menu__dropdown-header') ? this : this.closest('.menu__dropdown-header') ;
        if(e.matches('.open-dp-menu'))
        {
          e.classList.remove('open-dp-menu');
          changeArrow(e.getElementsByClassName('icon-right-dir')[0]);
          hideMenu(e.lastElementChild);
        }
        else{
          let parent = e.closest('.menu_mobile');
          parent.lastElementChild.style.height = "auto";
          e.classList.add('open-dp-menu');
          changeArrow(e.getElementsByClassName('icon-down-dir')[0]);
          showMenu(e.lastElementChild);
        }
      }
      return;
    });
  }
  function showDropdown(){
    if(!this.closest('.menu_mobile')){
      this.children[1].classList.remove('hidden');
      changeArrow(this.getElementsByClassName('icon-down-dir')[0]);
    }
    
  }
  function hideDropdown(){
    if(!this.closest('.menu_mobile')){
      this.children[1].classList.add('hidden');
      changeArrow(this.getElementsByClassName('icon-right-dir')[0]);
    }
  }

  function changeArrow(currentArrow){
    currentArrow.style.display = 'none';
    if(currentArrow.nextElementSibling){
      currentArrow.nextElementSibling.style.display = 'inline';
    }
    else{
      currentArrow.previousElementSibling.style.display = 'inline';
    }
  }
  //////////////////mobile dropdown menu///////////////
let mobMenu = document.getElementById('mobile-menu');
let menu = mobMenu.nextElementSibling;

mobMenu.addEventListener('click', function(){
  if(!this.matches('.open-mobMn')){
    this.classList.add('open-mobMn');
    this.parentElement.classList.add('menu_mobile');
    showMenu(this.nextElementSibling);
  }
  else{
    this.classList.remove('open-mobMn');
    this.parentElement.classList.remove('menu_mobile');
    hideMenu(this.nextElementSibling);
  }
})

function hideMenu(elem){
  let height = 0;
  for(let i = 0; i< elem.children.length; i++){
    height += elem.children[i].offsetHeight;
  }
	let obj = {
		duration: 500,
        timing: function timing(timePassed) {
  			return timePassed;
		},
        draw: function draw(progress){
        	elem.style.height = height - progress*height + 'px';        	
        } 
	};
 animate(obj);
};

function showMenu(elem){
  let height = 0;
  for(let i = 0; i< elem.children.length; i++){
    height += elem.children[i].offsetHeight;
  }
	let obj = {
		duration: 500,
        timing: function timing(timePassed) {
  			return timePassed;
		},
        draw: function draw(progress){
        	elem.style.height = progress*height + 'px';
        } 
	};
 animate(obj);
};

function animate(options) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timePassed = (time - start)/options.duration;
    if (timePassed > 1) timePassed = 1;
    let progress = options.timing(timePassed);
    options.draw(progress);
     if (timePassed < 1) {
      requestAnimationFrame(animate);
    }

  });
};

//////////////link google//////////////

function linkGoogle(){
  location.href= 'https://www.google.com';
}