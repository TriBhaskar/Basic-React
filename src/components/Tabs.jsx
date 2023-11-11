export default function Tabs({ children, buttons, ButtonsContainer }) {
  //ButtonsContainer is starting with capital so we can use it as a custom component
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
