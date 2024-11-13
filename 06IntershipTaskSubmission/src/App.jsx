import TopContainer from "./components/TopContainer";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <>
      <div className="h-screen w-full flex flex-col gap-10 items-center justify-center">
        <TopContainer />
        <CardGrid />
      </div>
    </>
  );
}

export default App;
