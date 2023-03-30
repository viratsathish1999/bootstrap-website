$('.testimoni-carousel').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:50,
    responsive:{
		0:{
			items:1
		},
		600:{
			items:1
		},
        1000:{
            items:3
        }
    }
});
$('.gallery-carousel').owlCarousel({
    center: true,
	autoplay:true,
    items:1,
    loop:true,
    margin:20,
    responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
        1000:{
            items:5
        }
    }
});

var menuButton=document.querySelector('.menu-list-icons');
var closeButton=document.querySelector('.menu-icon-close');
var card=document.querySelector('.menu-card')

var link1=document.querySelector('.link1');
var link2=document.querySelector('.link2');
var link3=document.querySelector('.link3');
var link4=document.querySelector('.link4');
var link5=document.querySelector('.link5');
var link6=document.querySelector('.link6');
var link7=document.querySelector('.link7');

menuButton.addEventListener('click',()=>{
    card.style.display='flex'
})

function clear(){
    card.style.display='none'
}

closeButton.addEventListener('click',()=>clear());
link1.addEventListener('click',()=>clear());
link2.addEventListener('click',()=>clear());
link3.addEventListener('click',()=>clear());
link4.addEventListener('click',()=>clear());
link5.addEventListener('click',()=>clear());
link6.addEventListener('click',()=>clear());
link7.addEventListener('click',()=>clear());
