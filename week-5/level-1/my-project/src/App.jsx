import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Navbar />
      <Card
        image="https://pbs.twimg.com/profile_images/1625873284968611842/IzY2Jc3G_400x400.jpg"
        title="OSS | WEB | CLOUD"
        name="Harsh Deep"
        description="LOREM IPSUM DORES SIT AMET"
        intrests={["Linux", "Books", "Philosophy", "Spirtuality"]}
        socials={
          ({ app: "twitter", username: "HarshDeep61034" },
          { app: "Github", username: "HarshDeep61034" },
          { app: "linkedin", username: "in/harsh-deep-bb564b262/" })
        }
      />
      <h1 className="text-red-600 text-xl">Hello World</h1>
    </>
  );
}

export default App;
