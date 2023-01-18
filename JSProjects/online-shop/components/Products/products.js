class Products{
    constructor(){
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Додати до кошика';
        this.labelRemove = 'Видалити з кошика';
    }

    handleSetLocationStorage(element,id){
        const {pushProduct,products} = localStorageUtil.putProducts(id);

        if(pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        }else{
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length);
    }

    render(){
        let htmlCatalog = ``;

        const productsStore = localStorageUtil.getProducts();

        CATALOG.forEach((element) =>{
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(element.id) === -1){
                activeText = this.labelAdd
            }else{
                activeText = this.labelRemove;
                activeClass = ' ' + this.classNameActive
            }

            htmlCatalog += `
            <li class="products-element">
                <span class="products-element__title">${element.title}</span>
                <img src="${element.img}" class="products-element__img"/>
                <span class="products-element__price">₴ ${element.price.toLocaleString()}</span>
                <span class="products-element__materials">${element.materials}</span>
                <button class="products-element__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this,${element.id})">
                ${activeText}
                </button>
            </li>
            
            `;  
        });

        let html = `
        
        <ul class="products-container">${htmlCatalog}</ul>

        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
