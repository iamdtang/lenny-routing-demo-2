import { useLoaderData, useSearchParams, Form, Link } from "react-router-dom";

export default function Index() {
  const hobbies = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  let filteredHobbies = hobbies;

  if (searchParams.has("q")) {
    const q = searchParams.get("q");

    filteredHobbies = hobbies.filter((hobby) => {
      return hobby.name.toLowerCase().includes(q.toLowerCase());
    });
  }

  return (
    <div>
      <h1>Hobbies</h1>

      <Form method="get">
        <input type="search" placeholder="Search for a hobby" name="q" />
      </Form>

      <ul>
        {filteredHobbies.map((hobby) => {
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
