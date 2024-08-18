import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!!</h1>
      <h2>Something went wrong.🐈</h2>
      <h1>😪</h1>
      <h3>
        {err.status}: {err.statusText}
      </h3>
      <h4>{err.data}</h4>
    </div>
  );
};

export default Error;
