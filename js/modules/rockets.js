export const getAllRockets = async () => {
    // Este es un simple llamado a la API donde se obtienen los cohetes (rockets).
    // Se guarda la respuesta de la API en la variable 'res'.
    // Luego, se convierte la respuesta a formato JSON y se almacena en 'data'.
    // Finalmente, se retorna 'data' que contiene la información de los cohetes.
    let res = await fetch("https://api.spacexdata.com/v4/rockets");
    let data = await res.json();
    return data;
}

export const getAllRocketsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    let data = await res.json();
    return data;
}
export const getRocketMassTotal = async () => {
    // Configuración para la solicitud POST a la API de SpaceX.
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "mass": 1
                },
                "sort": {
                    "mass.kg": "desc" // Ordena los cohetes por masa en kilogramos, de mayor a menor.
                },
                "limit": 1 // Limita el resultado a solo el cohete más pesado.
            }
        })
    };
    // Realiza la solicitud a la API y espera la respuesta.
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let { docs: [{ mass } = {}] } = await res.json();
    // Retorna la masa del cohete más pesado.
    return mass;
}

export const getRocketPayloadWeightsTotal = async () => {
    // Configuración para la solicitud POST a la API de SpaceX.
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1, // Selecciona el nombre del cohete.
                    "payload_weights": 1 // Selecciona los pesos de carga.
                },
                "sort": {
                    "payload_weights.kg": "desc" // Ordena los cohetes por peso de carga en 
                                                //  kilogramos, de mayor a menor.
                }
            }
        })
    };
    // Realiza la solicitud a la API y espera la respuesta.
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // Extrae los documentos de la respuesta JSON.
    let { docs } = await res.json();
    // Inicializa un array para almacenar los pesos de carga.
    let data = [];
    // Recorre los documentos y acumula los pesos de carga en el array 'data'.
    docs.forEach(val => data.push(...val.payload_weights));
    // Ordena el array 'data' por peso de carga en orden descendente.
    data.sort((a, b) => b.kg - a.kg);
    // Extrae el peso de carga máximo del primer elemento del array ordenado.
    let [maxPayloadWeightsRocket] = data;
    // Retorna el peso de carga máximo.
    return maxPayloadWeightsRocket;
}

export const getRocketHeightTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "height": 1
                },
                "sort": {
                    "height.meters": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{height} = maxHeightRocket]} = await res.json();
    return height;
}
export const getRocketDiameterTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "diameter": 1
                },
                "sort": {
                    "diameter.meters": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{diameter} = maxdiameterRocket]} = await res.json();
    return diameter;
}
export const getRocketSecondStageCompositeFairingDiameterTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage.payloads.composite_fairing.diameter": 1
                },
                "sort": {
                    "second_stage.payloads.composite_fairing.diameter": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[maxDiameterCompositeFairingRocket ]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {diameter}}}} = maxDiameterCompositeFairingRocket
    return diameter;
}
export const getRocketSecondStageCompositeFairingHeightTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage.payloads.composite_fairing.height": 1
                },
                "sort": {
                    "second_stage.payloads.composite_fairing.height": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[maxHeightCompositeFairingRocket ]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {height}}}} = maxHeightCompositeFairingRocket
    // console.log(height);
    return height;
}
export const getAllRocketEngineTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_sea_level": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{engines} = maxEnginesRocket]} = await res.json();
    return engines.thrust_sea_level;
}
export const getAllRocketEngineThrustVacuumTotal  = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({  
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_vacuum": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let {docs:[{engines} = maxEnginesRocket]} = await res.json();
    return engines.thrust_vacuum;
}