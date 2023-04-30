import { useLoaderData, Form, Link } from "react-router-dom";

export default function Index() {
  const hobbies = useLoaderData();

  return (
    <div>
      <h1>Hobbies</h1>
      <ul>
        {hobbies.map((hobby) => {
          return (
            <li key={hobby.id}>
              <Link to={`/hobbies/${hobby.id}`}>{hobby.name}</Link>

              <Form method="post">
                <input type="hidden" name="hobbyId" value={hobby.id} />
                <button type="submit">Delete</button>
              </Form>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
