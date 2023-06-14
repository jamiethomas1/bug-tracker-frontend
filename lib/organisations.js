export async function getOrganisations(token) {
    const res = await fetch('http://localhost/api/organisations', {
        method: "GET",
        headers: {
            authorization: `bearer ${token}`
        }
    });
    return res.json();
}