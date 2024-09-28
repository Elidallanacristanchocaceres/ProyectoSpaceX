
import { 
    load 
} from "./modulesComponents/variablesGlobales.js";
import {
    paginationRockets
}from "./modulesComponents/cohete/pagination.js";

import { 
    paginationCompany
 } from "./modulesComponents/Company/paginationCompany.js";

let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#rocket")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
    //CUANDO LE DAMOS CLICK AL BOTON DE ROCKETS ROJO QUE ESTA EN EL FOOTER
    //PUEDES ENTRAR CON CTRL + CLICK A PAGINATION ROCKET PARA MIRAR LO QUE SE ESTA MOSTRANDO EN LA 
    //PAGINACION

} )

let Company = document.querySelector("#company")
Company.addEventListener("click", async(e)=>{
    await footerSelect(e, Company)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCompany())
})



rocket.click();