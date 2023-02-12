class Shopping{

    handleClear(){
        ROOT_SHOPPING.innerHTML = '';
    }

    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0 ;

        CATALOG.forEach((element) =>{
            if(productsStore.indexOf(element.id) !== -1){
                htmlCatalog += `
                    <tr id='${element.id}'>
                        <td >
                        <img src="${element.img}" class="shopping-element__img"/>
                        </td>
                        
                        <td class="shopping-element__title">
                            ${element.title}
                        </td>

                        <td class="shopping-element__price">
                            ${element.price.toLocaleString()}
                        </td>

                        <td class="shopping-element__price">
                            <button onclick='shopingPage.deleteItem(${element.id},${element.price})'>Delete</button>
                        </td>
                        
                    </tr>
                `;
                sumCatalog+=element.price
            }
        })

        const html = `
            <div class="shopping-container">
            <div class="shopping__close" onclick="shopingPage.handleClear()">
            </div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__title">
                            Сумма:
                        </td>

                        <td class="shopping-element__price" id="final-price">
                            ${sumCatalog}
                        </td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
    
    deleteItem(element,price){
        let el = document.getElementById(element)
        el.remove();
        let pr = document.getElementById('final-price')
        pr.textContent = +pr.textContent-price;
    }
}



const shopingPage = new Shopping;

