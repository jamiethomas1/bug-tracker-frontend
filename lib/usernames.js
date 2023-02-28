export async function getUsernames() {
    const res = await fetch('http://localhost/api/users', {
        mode: "no-cors"
    });

    const users = await res.json();

    return users;
}