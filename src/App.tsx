import "./styles.css"

function App() {

  return (
    <div className="container">
      <h1>Upload your image</h1>
      <span>File should be jpeg, png...</span>
      <img src="/image.svg" alt="" />
      <span>or</span>
      <button>Choose a file</button>
    </div>
  )
}

export default App
