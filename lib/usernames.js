export async function getUsernames(token) {

    const res = await fetch('http://localhost/api/users', {
            mode: "no-cors",
            headers: {
                authorization: `bearer ${token}`
            }
        })
        .then(res => {
            const users = res.json();
            return users;
        })

    return res;
}
