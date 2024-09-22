import { useState } from "react";
import PageSelection from "./components/PageSelection";
import PageMemoryShow from "./components/PageMemoryShow";
import PageMemoryTime from "./components/PageMemoryTime";

const App = () => {
  const [page, setPage] = useState("selection");

  return (
    <div className="w-full h-full">
      {page === "selection" && (
        <PageSelection setPage={setPage}></PageSelection>
      )}
      {page === "memoryShow" && <PageMemoryShow setPage={setPage} />}
      {page === "memoryTime" && <PageMemoryTime setPage={setPage} />}
    </div>
  );
};

export default App;
