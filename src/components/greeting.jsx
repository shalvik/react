function Greeting(props) {
  return (
    <div>
      <h1>Greeting Component</h1>
      <h3>{props.greetingText}</h3>
      <h3>{props.description}</h3>
    </div>
  );
}

export default Greeting;
