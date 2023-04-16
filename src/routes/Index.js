import { useLoaderData } from "react-router-dom";

export default function Index() {
  const hobbies = useLoaderData();

  return (
    <div>
      <h1>Hobbies</h1>
      <ul>
        {hobbies.map((hobby) => {
          return <li>{hobby.name}</li>;
        })}
      </ul>
    </div>
  );
}
