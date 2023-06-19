import { useState } from "react"
import { createProject } from "../lib/projects";

export default function ProjModal({ title, session, token }) {
  
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
      await createProject(name, session, token);
    }

    return (
        <>
        <div className="modal fade" id="createProj" tabIndex="-1" aria-labelledby="modalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="modalLabel">Create Project</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form id="proj" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <input type="text" name="name" className="form-control" id="name" placeholder="Create project" onChange={(e) => setName(e.target.value)} />
                    </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" form="proj" className="btn btn-primary" data-bs-dismiss="modal" onSubmit={handleSubmit}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}