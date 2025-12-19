import React, { useState } from "react";

function MultiSelectIdOnly() {
  const [selectedItems, setSelectedItems] = useState([]);

  const options = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "Python" },
    { id: 3, name: "React" },
    { id: 4, name: "Node.js" },
    { id: 5, name: "Django" }
  ];

  const handleSelect = (e) => {
    const selectedId = Number(e.target.value);

    // If already selected → remove the ID
    if (selectedItems.includes(selectedId)) {
      setSelectedItems(selectedItems.filter((id) => id !== selectedId));
    } else {
      // Else add ID
      setSelectedItems([...selectedItems, selectedId]);
    }
  };

  return (
    <div>
      <select multiple onChange={handleSelect}>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>

      <h3>Selected IDs:</h3>
      <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
    </div>
  );
}

export default MultiSelectIdOnly;
