import "./App.css";

// LAYOUTS
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

// SECTIONS
import Section_Home from "./components/Sections/Section_Home";
import Section_Aboutme from "./components/Sections/Section_Aboutme";
import Section_Skills from "./components/Sections/Section_Skills";
import Section_Certificate from "./components/Sections/Section_Certificate";
import Section_Portfolio from "./components/Sections/Section_Portfolio";
import Section_Contact from "./components/Sections/Section_Contact";

function App() {
  return (
    <div className="bg-white dark:bg-darkblue">
      <Header />

      <main className="p-0">
        <Section_Home></Section_Home>
        <Section_Aboutme></Section_Aboutme>
        <Section_Skills></Section_Skills>
        <Section_Certificate></Section_Certificate>
        <Section_Portfolio></Section_Portfolio>
        <Section_Contact></Section_Contact>
      </main>

      <Footer />
    </div>
  );
}

export default App;
