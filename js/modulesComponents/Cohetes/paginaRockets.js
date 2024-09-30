import { 
    getAllRockets, 
    getAllRocketsId
} from "../../modules/rockets.js";
import { 
    nameRockets 
} from "../variablesGlobales.js";
import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket
} from "./informacionRockets.js";
import { 
    tableRocketColum1, 
    tableRocketColum2
} from "./tablasRockets.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum
} from "./informacionRockets.js";
import { 
    imageRockets 
} from "../card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
} from "./informacionRockets.js";

import { 
    load ,
    clear } from "../variablesGlobales.js";
const getRocketsId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    let Rocket = await getAllRocketsId(e.target.id);
    await clear();
    
    await informationRockets(Rocket.country, Rocket.description)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
export const paginationRockets = async()=>{
    //ESTA VARIABLE ESTA BUSCANDO LOS DATOS QUE VIENEN DEL API 
    //CON getAllRockets()
    //ENTRA CON CTRL + CLICK A getAllRockets para mirar que se esta buscando
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
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