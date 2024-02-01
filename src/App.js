import React from "react";
import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';
import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div style={{ width: "500px", height: "150px", margin: "0 auto" }}>
        <img
          style={{ width: "500px", height: "200px" }}
          src={logo}
          alt="borderlands logo."
        />
      </div>

      <SkillProvider>
        <SkillTreeGroup>
          {() => (
            <SkillTree treeId="basic-birch" title="First Skill Tree" data={[]} />
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}


export default App;
