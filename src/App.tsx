import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";

function App() {
  return (
    <>
      <Button
        variant={"primary"}
        size="lg"
        title={"Share"}
        startIcon={<PlusIcon size={"md"} />}
      ></Button>

      <Button variant={"secondary"} size="md" title={"Share"}></Button>
    </>
  );
}

export default App;
