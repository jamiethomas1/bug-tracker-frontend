import makeid from "./makeid";

export async function getProjects(token) {
    const res = await fetch('http://localhost/api/projects', {
        method: "GET",
        headers: {
            authorization: `bearer ${token}`
        }
    });
    return res.json();
}

export async function createProject(name, session, token) {
   
    let data = {
        name: name,
        ownerID: session.accessToken.sub,
        projID: makeid(16)
    }
    
    const res = await fetch('http://localhost/api/projects', {
        method: "POST",
        headers: {
            authorization: `bearer ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => console.log(res.json())).catch(e => console.error(e));
}