const cartBtn=document.getElementById('cart_add');
const cartDisplay =document.getElementById('cart_display');
// const cartDisplay =document.getElementById('cart_display');
const detailsBtn =document.getElementById('details');
const showDet =document.getElementById('show_detalis');
cartBtn.addEventListener('click',() => {
    if(cartDisplay.style.display === 'none'){
        cartDisplay.style.display = 'grid'
        cartBtn.innerHTML='Added'
    }
    else{
        cartDisplay.style.display ='none'
        cartBtn.innerHTML='Add to cart'
    }
})

detailsBtn.addEventListener('click',() => {
    if(showDet.style.display === 'none'){
        showDet.style.display = 'grid'
    }
    else{
        showDet.style.display ='none'
    }
})