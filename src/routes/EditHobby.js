import HobbyForm from "../HobbyForm";
import { useLoaderData } from "react-router-dom";

export default function EditHobby() {
  const hobby = useLoaderData();

  return <HobbyForm hobby={hobby} title="Edit Hobby" />;
}
