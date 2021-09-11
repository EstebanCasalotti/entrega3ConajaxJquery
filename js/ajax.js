const url = "https://jsonplaceholder.typicode.com/posts"
$.get(url, (repuesta, estado) => {
    if(estado === "success") {
        console.log(repuesta);
        repuesta.forEach(e => {
            $("body").append(`
            <option value="titulo">${e.id}</option>
            


            
            
            
            
            
            
            
            
            `)
            
        });
    }
})
