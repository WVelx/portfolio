import "./App.css";

//LAYOUT
import Layout from "./components/Layout/Layout";

// SECTIONS
import Section_Home from "./components/Sections/Section_Home";
import Section_Aboutme from "./components/Sections/Section_Aboutme";
import Section_Skills from "./components/Sections/Section_Skills";
import Section_Certificate from "./components/Sections/Section_Certificate";
import Section_Portfolio from "./components/Sections/Section_Portfolio";
import Section_Contact from "./components/Sections/Section_Contact";

function App() {
  const classSection =
    "2xl:container p-6 bg-lightBackground dark:bg-darkBackground";

  return (
    <div className="bg-lightBackground dark:bg-darkBackground">
      <Layout>
        <main className="p-0">
          <Section_Home></Section_Home>
          <Section_Aboutme classSection={classSection}></Section_Aboutme>
          <Section_Skills classSection={classSection}></Section_Skills>
          <Section_Certificate classSection={classSection}></Section_Certificate>
          <Section_Portfolio classSection={classSection}></Section_Portfolio>
          <Section_Contact classSection={classSection}></Section_Contact>
        </main>
      </Layout>
    </div>
  );
}

export default App;
