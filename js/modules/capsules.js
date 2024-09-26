export const getAllCapsules = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/capsules");
    let data = await res.json();
    return data;
}
export const getAllCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    let data = await res.json();
    return data;
}
export const getCapsulesMassTotal = async () => {
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
    let { docs: [{ mass } = {}] } = await res.json();
    // Retorna la masa del cohete más pesado.
    return mass;
}

