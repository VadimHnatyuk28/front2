class Error{
    render(){
        const html=`
        
        <div>
            <h3>
                Нет доступа!
            </h3>
            <p>
                Зайдіть пізніше
            </p>
        </div>

        `;

        ROOT_ERROR.innerHTML=html
    }
}

const errorPage = new Error();