export default function Section({ title, children, ...props }) {
  //here ...props will take all other props and spread it where ever you are putting it(id or class).
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
