import { useState } from "react";
import Card from "./components/Card";
import CreateContentModal from "./components/CreateContentModal";

function App() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <CreateContentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <div className="p-4 bg-white flex gap-4">
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
    </>
  );
}

export default App;
