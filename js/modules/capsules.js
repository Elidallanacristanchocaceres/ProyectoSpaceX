export const getAllCapsules = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/capsules");
    let data = await res.json();
    return data;
}
export const getAllCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
    let data = await res.json();
    return data;
}
export const getCapsulesReuse_count = async () => {
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "reuse_count":1,
                },                
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}

export const getCapsulesWater_landings = async () => {
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "water_landings":1,
                },                
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}
export const getCapsulesLand_landings = async () => {
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "land_landings":1,
                },                
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}
export const getCapsulesLast_updatet = async () => {
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "last_update":1,
                },                
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}
export const getCapsulesSerial = async () => {
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "reuse_count":1,
                },                
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}

export const getCapsulesType = async () => {
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "type":1,
                },                
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}