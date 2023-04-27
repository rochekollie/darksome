import {createSignal} from 'solid-js';

function App(props) {
  const [count, setCount] = createSignal(0);

  function handleClick() {
    setCount(count() + 1);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>Count: {count()}</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
