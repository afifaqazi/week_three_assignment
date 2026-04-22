
// Child Component (sirf ek item show karega)
export function FruitItem(props) {
  return <li>{props.name}</li>;
}

// Parent Component (list banayega)
export default function MyFruit() {
  return (
    <ul>
      <FruitItem name="Apple" />
      <FruitItem name="Orange" />
      <FruitItem name="Banana" />
    </ul>
  );
}

