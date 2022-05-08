 let ukupnoNovca=0;
 
function addToList(element){
    let mainEl=element.closest('.sort-item');
    let price=mainEl.querySelector('.price').innerText;
    let name=mainEl.querySelector('h3').innerText;
    let quantity=mainEl.querySelector('input').value;
    let cartItems=document.querySelector('.cart-items');

    if(parseInt(quantity)>0){

        price=price.substring(1);
        price=parseInt(price);
        let total=price*parseInt(quantity);

       
       
        //prikaz forme
        cartItems.innerHTML+=`<div class=cart-prikaz>
                                <h3>${name}</h3>
                                <p>${price}x${quantity}=
                                $${total}
                                            
            </div>
            `;
            

        ukupnoNovca+=total;
        document.querySelector('.total').innerText=`Total:$${ukupnoNovca}`;
        

       

    
        element.innerText='Dodato';
        element.setAttribute('disabled', 'true');
      

    
        
    }
    else{
        alert('Unesite vrednost za kolicinu');
    }
    
}
