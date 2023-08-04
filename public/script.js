function loadDishes(){
    return new Promise( ( resolve, reject ) => {
        fetch('https://api-dishes.vercel.app')
            .then( resp => resp.json() )
            .then( resp => resolve( resp ) )
            .catch( err => reject( err ) )
    } )
}

const loadData = ()=>{
    const id = document.getElementById('idDish').value    
    const name = document.getElementById('nameDish').value    
    const calories = document.getElementById('calories').value
    const veg = document.getElementById("isVegetarian").value    
    const isVegetarian = ( veg == "0" ? True : False )
    const value = document.getElementById("value").value
    const comments = document.getElementById("comments").value
    
    const data = {"idDish":`${id}`, "name":`${name}`, "calories":`${calories}`, "isVegetarian":`${isVegetarian}`, "value":`${value}`,
                    "comments":`${comments}`}

    return JSON.stringify(data)
}

document.getElementById('btnSend').addEventListener('click',()=>{
    const URL = "https://api-dishes.vercel.app"

    fetch(URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: loadData()
    }).then( resp => resp.json())
        .then( resp => {
            if( resp.state ){
                alert('Plato añadido')
            }else{
                alert('No se puedo agregar')
            }          
        })
        .catch(err => {
            alert(`Error ${err}`)
        })
})