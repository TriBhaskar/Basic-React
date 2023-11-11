import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    //selectedButton => 'components','jsx','props','state'
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic);
  }
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onSelect={() => handleClick("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          children="jsx"
          onSelect={() => handleClick("jsx")}
        ></TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onSelect={() => handleClick("props")}
        >
          props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onSelect={() => handleClick("state")}
        >
          state
        </TabButton>
      </menu>
      {!selectedTopic ? (
        <p>Please select a topic.</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      )}
    </section>
  );
}
