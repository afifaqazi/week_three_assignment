const colors = ["red", "green", "blue"];

function ColorList() {
  return (
    <ul>
      {colors.map((color) => (
        <li key={color} style={{ color: color }}>
          {color}
        </li>
      ))}
    </ul>
  );
}

export default ColorList;
