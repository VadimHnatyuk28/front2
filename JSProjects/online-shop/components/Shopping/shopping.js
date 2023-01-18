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
                    <tr>
                        <td class="shopping-element__title">
                            ${element.title}
                        </td>

                        <td class="shopping-element__price">
                            ${element.price.toLocaleString()}
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

                        <td class="shopping-element__price">
                            ${sumCatalog.toLocaleString()}
                        </td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shopingPage = new Shopping;

