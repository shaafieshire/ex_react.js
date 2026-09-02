import UseCard from "./UseCard";

function App() {
  return (
    <div className="app">
      <UseCard email="john@example.com" name="John Doe" role="Admin" />
      <UseCard email="jane@example.com" name="Jane Smith" role="User" />
      <UseCard email="bob@example.com" name="Bob Johnson" role="User" />
    </div>
  )
}

export default App;
