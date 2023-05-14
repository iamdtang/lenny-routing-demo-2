import { useEffect } from "react";
import HobbyForm from "../HobbyForm";
import { useLoaderData } from "react-router-dom";

export default function EditHobby() {
  const hobby = useLoaderData();

  useEffect(() => {
    document.title = "Edit Hobby";
  }, []);

  return <HobbyForm hobby={hobby} title="Edit Hobby" />;
}
