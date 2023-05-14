import { useEffect } from "react";
import HobbyForm from "../HobbyForm";

export default function CreateHobby() {
  useEffect(() => {
    document.title = "Create a hobby";
  }, []);

  return <HobbyForm title="Create a Hobby" />;
}
