
class AdminService{

    delete(id){
        console.log('Success',id)

        fetch('/server/catalog.json')
        .then((response) => {
         return response.json();
        })
        .then((data) => {
            data.forEach(element => {
                if(element.id === id){
                    console.log(element)
                }
            });
        });

        
      
    }
        
    

    

}

let adminService = new AdminService();