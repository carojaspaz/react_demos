import { useParams } from "react-router-dom";

import Navbar from "../../components/NavBar";

const Profile = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h1>Perfil Usuario con Id: {id}</h1>
      <Navbar />
    </>
  );
};

export default Profile;
