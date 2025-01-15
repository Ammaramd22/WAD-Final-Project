/*function addToCart()
    {
        //get product details
        var productName= document.querySelector(".col-2 h1").innerText;
        var productPrice=document.querySelector(".col-2 h4").innerText;
        var productImgSrc=document.querySelector("#ProductImg").getAttribute("src");
        var quantity=document.querySelector(".col-2 input[type='number']").value;

        //create table
        var cartRow=document.createElement("tr");
        var cartItems=document.querySelector(".cart-page table");

        var cartRowContents=`
            <td>
                <div class='cart-info'>
                    <img src"${productImgSrc}">
                    <div>
                        <p>${productName}</p>
                        <small>Price:${productPrice}</small>
                        <br>
                        <a href="#" class="remove-item">Remove</a>
                    </div>
                </div>
            </td>
            <td><input type="number" value"${quantity}"></td>
            <td>${productPrice}</td>
        `;
        cartRow.innerHTML=cartRowContents;
        cartItems.appendChild(cartRow);

        //update total
        updateCartTotal();

    }

    //call function
    document,querySelector(".btn").addEventListener("click",addToCart);

    function updateCartTotal(){
        var cartItemContainer=document.querySelector(".cart-page .cart-page table");
        var cartRows=cartItemContainer.querySelectorAll("tr");

        var total=0;
        for (var i=0;i<cartRows.length;i++)
        {
            var cartRow=cartRows[i];
            var priceElement=cartItemContainer.querySelector("td:nth-child(3)");
            var price= parseFloat(priceElement.innerText.replace("Rs.",""));
            total+=price;
        }
        document.querySelector(".cart-total-price").innerText="Rs."+total;
    }


*/
