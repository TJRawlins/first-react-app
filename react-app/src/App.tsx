import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Houston", "Phoenix", "Los Angeles"];
  const handleSelectItem = (item: string) => { console.log(item)}
  
  const [showAlert, setShowAlert] = useState(false);
  
  return (
  <>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      {showAlert && <Alert onClose={()=> setShowAlert(false)}>My Alert</Alert>}
      <Button color="danger" onClick={() => setShowAlert(true)}>
        Click Me!
      </Button>
  </>
  );
}

export default App;