import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Houston", "Phoenix", "Los Angeles"];

  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // <></> FRAGMENT - Allows multiple elements in one component
  // Map each list item to an element
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items Found</p>}
      <ul className="list-group">
        {items.map((item, i) => (
          <li
            className={
              selectedIndex === i 
              ? "list-group-item active" 
              : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(i);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
