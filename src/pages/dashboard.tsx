import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import Card from "../components/Card";
import CreateContentModal from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcons";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  //   const { contents, refresh } = contents();

  useEffect(() => {
    // refresh();
  }, [modalOpen]);

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant="primary"
            text="Add content"
            startIcon={<PlusIcon />}
          ></Button>
          <Button
            variant="secondary"
            text="Share brain"
            startIcon={<ShareIcon />}
          ></Button>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
