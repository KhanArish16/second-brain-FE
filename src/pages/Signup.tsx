import { useRef } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Signup() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const userpasswordRef = useRef<HTMLInputElement>(null);

  function signup() {
    const username = usernameRef.current?.value;
    const password = userpasswordRef.current?.value;

    axios.post(BACKEND_URL + "/api/v1/signup", {
      username,
      password,
    });
    alert("you have signed up");
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input placeholder="Username" reference={usernameRef} />
        <Input placeholder="Password" reference={userpasswordRef} />
        <div className="flex justify-center pt-4">
          <Button
            onClick={signup}
            loading={false}
            variant="primary"
            text="Signup"
            fullWidth={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
