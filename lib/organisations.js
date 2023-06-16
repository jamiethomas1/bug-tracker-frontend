import makeid from "./makeid";

export async function getOrganisations(token) {
    const res = await fetch('http://localhost/api/organisations', {
        method: "GET",
        headers: {
            authorization: `bearer ${token}`
        }
    });
    return res.json();
}

export async function createOrganisation(name, session, token) {
   
    let data = {
        name: name,
        ownerID: session.accessToken.sub,
        orgID: makeid(16)
    }
    
    const res = await fetch('http://localhost/api/organisations', {
        method: "POST",
        headers: {
            authorization: `bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => console.log(res.json())).catch(e => console.error(e));
}