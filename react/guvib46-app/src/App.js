function App() {
  let moduleName = "GUVI B46 First React app!!!!";
  return (
    <div>
      <div className="header">Guvi Phone Directory</div>
      <button> Add </button>
      <div>
        <span>{moduleName}</span>
        <br />
        {/* <span> Name </span>
        <br />
        <span> Phone </span> */}
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Type here"
          defaultValue="Guvi-B46"
        ></input>
      </div>
    </div>
  );
}

export default App;
