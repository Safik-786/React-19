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
    <div className="ms-20">
      <select multiple onChange={handleSelect}>
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>p

      <h3>Selected IDs:</h3>
      <pre>{JSON.stringify(selectedItems)}</pre>
    </div>
  );
}

export default MultiSelectIdOnly;





// import React, { useState } from "react";

// function MultiSelectIdOnly() {
//   const [selectedItems, setSelectedItems] = useState([]);

//   const options = [
//     { id: 1, name: "JavaScript" },
//     { id: 2, name: "Python" },
//     { id: 3, name: "React" },
//     { id: 4, name: "Node.js" },
//     { id: 5, name: "Django" }
//   ];

//   const handleSelect = (e) => {

//     console.log(e.target.selectedOptions)
//     const selectedOptions = Array.from(
//       e.target.selectedOptions,
//       (option) => Number(option.value)
//     );
//     console.log(selectedOptions)

//     setSelectedItems(selectedOptions);
//   };

//   return (
//     <div style={{ marginLeft: "20px" }}>
//       <select
//         multiple
//         value={selectedItems}   // ✅ THIS MAKES IT ACTIVE
//         onChange={handleSelect}
//       >
//         {options.map((opt) => (
//           <option key={opt.id} value={opt.id}>
//             {opt.name}
//           </option>
//         ))}
//       </select>

//       <h3>Selected IDs:</h3>
//       <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
//     </div>
//   );
// }

// export default MultiSelectIdOnly;
