import SearchBar from "./components/SearchBar";
import { useState } from "react";
import Table from "components/Table";
import { Data } from "assets/Data";

function App() {
  const [query, setQuery] = useState("");
  const search = (data) => {
    return data.filter((item) => item.name.toLowerCase().includes(query));
  };
  console.log(query);
  return (
    <div>
      <SearchBar setQuery={setQuery}></SearchBar>
      <Table data={search(Data)}></Table>
    </div>
  );
}

export default App;
