import { Form, useLoaderData } from "react-router-dom";

export default function HobbyForm() {
  const hobby = useLoaderData();

  return (
    <>
      <h1>{hobby ? "Edit Hobby" : "Create a Hobby"}</h1>
      <Form method="post">
        <input type="hidden" name="id" defaultValue={hobby?.id} />
        <div className="form-floating mb-3">
          <input
            className="form-control"
            id="name-input"
            name="name"
            defaultValue={hobby?.name}
          />
          <label htmlFor="name-input">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="years-input"
            name="years"
            defaultValue={hobby?.years}
          />
          <label htmlFor="years-input">Years</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </>
  );
}
