import { useRouteError } from "react-router-dom"; //use se start hone waale hook hote h
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS!!</h1>
      <h2>Something Went Wrong!!</h2>
      <h3>{err.status}:{err.statusText}</h3>
    </div>
  );
};
export default Error;
