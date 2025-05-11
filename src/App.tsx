import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <>
      <Button
        variant={"primary"}
        size="lg"
        title={"Share"}
        startIcon={<PlusIcon size={"lg"} />}
      ></Button>
      <Button
        variant={"secondary"}
        size="md"
        title={"Share"}
        startIcon={<PlusIcon size={"md"} />}
      ></Button>
      <Button
        variant={"primary"}
        size="sm"
        title={"Share"}
        startIcon={<PlusIcon size={"sm"} />}
      ></Button>
    </>
  );
}

export default App;
