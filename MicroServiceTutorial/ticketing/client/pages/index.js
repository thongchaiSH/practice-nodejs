import buildClient from "../api/build.client";

const LandingPage = ({ currentUser }) => {
  //   console.log("I am in the component", currentUser);
  //   return <h1>Landing page</h1>;
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log("LandingPage");
  const { data } = await buildClient(context).get("/api/users/currentuser");
  //   console.log(data);
  return data;
};

export default LandingPage;
