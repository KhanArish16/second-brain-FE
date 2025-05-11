import { CrossIcon } from "../icons/CrossIcon";
import { Input } from "./Input";
import { Button } from "./ui/Button";
// enum ContentType {
//   Youtube = "youtube",
//   Twitter = "twitter",
// }

// controlled component
function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div>
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
              <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded fixed">
                  <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                      <CrossIcon />
                    </div>
                  </div>
                  <div>
                    <Input placeholder={"Title"} />
                    <Input placeholder={"Link"} />
                  </div>
                  <div>
                    <h1>Type</h1>
                    <div className="flex gap-1 justify-center pb-2">
                      <Button text="Youtube" variant={"secondary"}></Button>
                      <Button text="Twitter" variant={"secondary"}></Button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <Button variant="primary" text="Submit"></Button>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CreateContentModal;
