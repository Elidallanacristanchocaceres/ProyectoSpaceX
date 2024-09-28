import { 
    getAllCompany, 
    getAllCompanyId,
} from "../../modules/company.js";

import{
    informationCompany,
    informationCompanyLandLandings,
    informationCompanyReuse_count,
    informationWebCompany,
 } from "./InformacionCompany.js";


import {
    tableCompanyColum1,
    tableCompanyColum2
}from "./tablasCompany.js";

//import { 
  //  imageCapsules 
//} from "./cardCapsules.js";

import { clear } from "../variablesGlobales.js";

import { nameCompany } from "../variablesGlobales.js";

const getCompanyId = async(e)=>{
    e.preventDefault();
    // console.log(e.target);
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');

    let Company = await getAllCompanyId(e.target.id);
    await clear();
    
    await informationCompany(Company.last_update)
    await nameCompany(Company.name)
    await informationCompanyLandLandings(Company.land_landings)
    await informationCompanyReuse_count(Company.reuse_count)
    await informationWebCompany(Company.web_company);

    //await informCompanyEngineThrustSeaLevel(Company.engines.thrust_sea_level);
    //await informCompanyEngineThrustVacuum(capsules.engines.thrust_vacuum);
    //await imageCompany(Capsules.flickr_images);
    await tableCompanyColum1(Company)
    await tableCompanyColum2(Company)

    //await progressRocketWeight(Rocket)
    //await progressPayloadWeights(Rocket)
    //await progressHeightRocket(Rocket)
    //await progressDiameterRocket(Rocket)
    //await progressSecondStageDiameterRocket(Rocket)
    //await progressSecondStageHeightRocket(Rocket)
}
export const paginationCompany = async()=>{
    //ESTA VARIABLE ESTA BUSCANDO LOS DATOS QUE VIENEN DEL API 
    //CON getAllRockets()
    //ENTRA CON CTRL + CLICK A getAllRockets para mirar que se esta buscando
    let rockets = await getAllCompany();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion");
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getCompanyId)
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


