export async function getUsernames() {
    try {
        const res = await fetch('http://localhost/api/users', {
            mode: "no-cors"
        });
    } catch (e) {
        console.log(e);
        return false;
    }

    try {
        const users = await res.json();
    } catch (e) {
        console.log(e);
        return false;
    }

    return users;
}
