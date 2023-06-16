import { useState } from "react"
import { createOrganisation } from "../lib/organisations";

export default function OrgModal({ title, session, token }) {
  
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
      await createOrganisation(name, session, token);
    }

    return (
        <>
        <div className="modal fade" id="createOrg" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="modalLabel">Create Organisation</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="org" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="name" className="form-control" id="name" placeholder="Create organisation" onChange={(e) => setName(e.target.value)} />
                    </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="org" className="btn btn-primary" data-bs-dismiss="modal" onSubmit={handleSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}