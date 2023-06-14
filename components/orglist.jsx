export default function OrgList({ list }) {

    const listItems = list.map((org) =>
        <li>{org.name}</li>
    );

    return (
        <>
        <ul>{listItems}</ul>
        </>
    )
}