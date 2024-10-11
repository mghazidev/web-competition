import React from "react";
import useFetch from "../hooks/useFetch";

const Landing = () => {
  const { data, isLoading, error } = useFetch(
    "https://670985e1af1a3998baa1c076.mockapi.io/api/v1/user"
  );
  const { person, setPerson } = React.useState("");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);
  return (
    <div>
      {data?.map((c, i) => (
        <div key={i}>
          <h2>{c.name}</h2>
          <p>{c.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Landing;
