import Coreconcept from "./Coreconcept";
import { CORE_CONCEPTS } from "../data";

export default function Coreconcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts!</h2>
      {/* <ul>
            <Coreconcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <Coreconcepts {...CORE_CONCEPTS[1]} />
            <Coreconcepts {...CORE_CONCEPTS[2]} />
            <Coreconcepts {...CORE_CONCEPTS[3]} /> 
          </ul> */}
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <Coreconcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
