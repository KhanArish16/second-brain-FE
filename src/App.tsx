import { useState } from "react";
import Card from "./components/Card";
import CreateContentModal from "./components/CreateContentModal";
import Sidebar from "./components/Sidebar";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Sidebar />

      <div className="p-4 ml-72 bg-gray-50 min-h-screen">
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        <div className="p-4  flex gap-4">
          <Card
            title={"first Card"}
            link={"https://www.youtube.com/watch?v=QoMHwks6hUA"}
            type="youtube"
          />

          <Card
            type="twitter"
            title={"Second Card"}
            link={"https://x.com/toptweets/status/1241821178643329024"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
