const _servindoOServer = async (id,metodo,endpoint)=>{

    console.log('Con server: ',id,metodo)
    console.log('id,metodo,endpoint ',id,metodo,endpoint)
    //let resposta = await fetch (`/${endpoint}/${id}`,{method:metodo})
    //let resposta = await fetch (`/borradodatos/2`,{method:'DELETE'})
    let resposta = await fetch (`/${endpoint}/${id}`)
    let datosConvertidos = await resposta.json();

    console.log('datos convertidos ', datosConvertidos)

}

export{
    _servindoOServer
}