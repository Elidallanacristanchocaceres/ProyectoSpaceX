
import { 
    load 
} from "./modulesComponents/variablesGlobales.js";
import { 
    paginationRockets
 } from "./modulesComponents/Cohetes/paginaRockets.js";


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
} )

let capsules = document.querySelector("#capsules")
capsules.addEventListener("click", async(e)=>{
    location.href="capsulaIndex/index.html"
    // await footerSelect(e, capsules)
    // let paginacion = document.querySelector("#paginacion");
    // paginacion.innerHTML = ""
    // paginacion.append(await paginationCapsules())
})



rocket.click()