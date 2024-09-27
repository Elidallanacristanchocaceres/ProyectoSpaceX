export const getAllCompany = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/company");
    let data = await res.json();
    return data;
}
export const getAllCompanyId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/company/${id}`)
    let data = await res.json();
    return data;
}
export const getCompanyReuse_count = async () => {
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}
export const getCompanyWater_landings = async () => {
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}
export const getCompanyLand_landings = async () => {
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}
export const getCompanyLast_updatet = async () => {
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}
export const getCompany = async () => {
    let config  = {
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}
export const getCompanyType = async () => {
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
    let res = await fetch("https://api.spacexdata.com/v4/company/query", config);
    // Extrae la masa del cohete más pesado de la respuesta JSON.
    let data = await res.json();
    // Retorna la masa del cohete más pesado.
    return data;
}
    

