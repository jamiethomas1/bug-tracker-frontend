export default function OrgList({ list }) {

    const listItems = list.map((org) =>
        <li key={org.orgID}>{org.name}</li>
    );

    return (
        <>
        <ul>{listItems}</ul>
        </>
    )
}