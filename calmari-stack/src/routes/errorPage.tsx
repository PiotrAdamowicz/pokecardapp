import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="text-white bg-pkyellow-800 p-6 h-screen flex flex-col justify-center items-center text-center"
    >
      <h1 className="text-4xl">Oops!</h1>
      <p className="mt-2 mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="text-lg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
