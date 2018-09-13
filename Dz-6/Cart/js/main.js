var cartNames=[];
var cartPrice=0;
var i;
document.querySelector(".gallery").addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
        cartNames.push(e.target.parentElement.childNodes[3].innerHTML);//получаем имя товара
        cartPrice+=parseInt(e.target.parentElement.childNodes[5].innerHTML);//цену товара
        i++;
    }
 
    document.querySelector(".cart .items").innerHTML="Выбранные товары: "+cartNames.join(", ");
    document.querySelector(".cart .totalPrice").innerHTML="На общую стоимость "+cartPrice+"$";
})
