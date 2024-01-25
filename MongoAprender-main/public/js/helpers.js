function eventosEGB(refLista){

    for(let refBorrar of refLista){
        refBorrar.addEventListener('click',(e) => {
        console.log('e.target: ',e.target);
        e.stopImmediatePropagation()
        })
    }
}

export{
    eventosEGB
}
