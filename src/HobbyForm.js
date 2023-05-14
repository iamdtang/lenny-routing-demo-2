import { Form } from "react-router-dom";

export default function HobbyForm({ hobby, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <Form method="post">
        <input type="hidden" name="hobbyId" defaultValue={hobby?.id} />
        <div className="form-floating mb-3">
          <input
            type="text"
            name="name"
            id="name-input"
            className="form-control"
            defaultValue={hobby?.name}
          />
          <label htmlFor="name-input">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            name="years"
            id="years-input"
            className="form-control"
            defaultValue={hobby?.years}
          />
          <label htmlFor="years-input">
            How long have you been doing this?
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
}
