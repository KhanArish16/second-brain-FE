import Card from "./components/Card";
import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcons";

function App() {
  return (
    <>
      <Button
        variant={"primary"}
        size="lg"
        title={"Add Content"}
        startIcon={<PlusIcon size={"lg"} />}
      ></Button>
      <Button
        variant={"secondary"}
        size="md"
        title={"Share Brain"}
        startIcon={<ShareIcon size={"md"} />}
      ></Button>

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
    </>
  );
}

export default App;
