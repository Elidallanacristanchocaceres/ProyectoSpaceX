
///
import { 
    getAllCapsules, 
    getAllCapsulesId
} from "../../modules/capsules.js";

import { 
    informationCapsules,
    informationCapsulesLandLandings,
    informationCapsulesReuse_count,
    informationCapsulesLaunches
 } from "./informacionCapsules.js";

 

 import { 
    tableCapsulesColum1, 
    tableCapsulesColum2
} from "./tablasCapsules.js";

//import { 
  //  imageCapsules 
//} from "./cardCapsules.js";

import { clear } from "../variablesGlobales.js";

import { nameCapsules } from "../variablesGlobales.js";

const getCapsulesId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let Capsules = await getAllCapsulesId(e.target.id);
    await clear();
    
    await informationCapsules(Capsules.last_update)
    await nameCapsules(Capsules.name)
    await informationCapsulesLandLandings(Capsules.land_landings)
    await informationCapsulesReuse_count(Capsules.reuse_count)
    await informationCapsulesLaunches(Capsules.launches);

    //await informCapsulesEngineThrustSeaLevel(capsules.engines.thrust_sea_level);
    //await informCapsulesEngineThrustVacuum(capsules.engines.thrust_vacuum);
    //await imageCapsules(Capsules.flickr_images);

    await tableCapsulesColum1(Capsules)
    await tableCapsulesColum2(Capsules)

    //await progressRocketWeight(Rocket)
    //await progressPayloadWeights(Rocket)
    //await progressHeightRocket(Rocket)
    //await progressDiameterRocket(Rocket)
    //await progressSecondStageDiameterRocket(Rocket)
    //await progressSecondStageHeightRocket(Rocket)
}
export const paginationCapsules = async()=>{
    //ESTA VARIABLE ESTA BUSCANDO LOS DATOS QUE VIENEN DEL API 
    //CON getAllRockets()
    //ENTRA CON CTRL + CLICK A getAllRockets para mirar que se esta buscando
    let rockets = await getAllCapsules();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getCapsulesId)
        //LA FUNCION getRocketsId esta trayendo el id de cada Rocket y muestra la informacion de ese rocket
        //Puedes mirar que esta buscando dandolo CTRL + CLICK
        div.appendChild(a);
    });
    
    let [a1,a2,a3,a4] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    
    return div;
}