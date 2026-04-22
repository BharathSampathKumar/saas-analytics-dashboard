import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await api.get("/projects?workspaceId=YOUR_ID");
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {projects.map((p) => (
        <div key={p._id} onClick={() => localStorage.setItem("projectId", p._id)}>
          {p.name}
        </div>
      ))}
    </div>
  );
}