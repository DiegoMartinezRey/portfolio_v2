import React from "react";
import Button from "../components/Button";

const Profile = () => {
  return (
    <>
      <section className="max-w-4xl flex flex-col items-center py-36">
        <h1>Hola! soy Diego Martinez</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, commodi
          laudantium omnis nulla quia ex minima! Non earum iste quibusdam
          voluptatibus debitis alias esse fuga.
        </h2>
        <Button title={"LinkedIn"} />
      </section>
    </>
  );
};

export default Profile;
