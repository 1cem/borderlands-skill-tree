import React from "react";
import { SkillProvider, SkillTreeGroup, SkillTree } from 'beautiful-skill-tree';
import logo from "./logo.png";
import "./App.css";

// Skill tree data
const data = [{
  id: 'first-skill',
  title: 'The root node',
  tooltip: {
    description: "The parent node, all of the descendants will be locked until it's selected",
  },
  children: [
    {
      id: 'second-skill',
      title: 'Second Skill',
      tooltip: {
        description: 'This is the second skill.',
      },
      children: [
        {
          id: 'third-skill',
          title: 'Third Skill',
          tooltip: {
            description: 'This is the third skill.',
          },
          children: []
        }
      ]
    }
  ]
}];

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
            <SkillTree treeId="basic-birch" title="First Skill Tree" data={data} />
          )}
        </SkillTreeGroup>
      </SkillProvider>
    </div>
  );
}

export default App;
