export default function ProjTable({ list }) {

    const projRows = list.map((proj) => 
        <tr key={proj.projID}>
            <td>{proj.name}</td>
            <td>{proj.ownerID}</td>
        </tr>
    );

    return (
        <>
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Owner</th>
                    <th scope="col"># of Tickets</th>
                </tr>
            </thead>
            <tbody>
                {projRows}
            </tbody>
        </table>
        </>
    )
}