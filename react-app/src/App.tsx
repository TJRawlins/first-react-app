import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Houston", "Phoenix", "Los Angeles"];
  const handleSelectItem = (item: string) => { console.log(item)}
  return (
  <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
      <Alert>
        Hello World
      </Alert>
  </div>)
}

export default App;