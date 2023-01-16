import React, { useState } from "react";

function App() {
  const [name, setName] = useState(123);

  return <div>{name}</div>;
}

export default App;
