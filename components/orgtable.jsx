export default function OrgTable({ list }) {

    const orgRows = list.map((org) => 
        <tr>
            <td>{org.name}</td>
            <td>{org.ownerID}</td>
        </tr>
    );

    return (
        <>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Owner</th>
                    <th scope="col"># of Projects</th>
                </tr>
            </thead>
            <tbody>
                {orgRows}
            </tbody>
        </table>
        </>
    )
}