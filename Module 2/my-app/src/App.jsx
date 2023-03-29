import logo from "./logo.svg";
import "./App.css";
import Profile, { Isidata, Propicts } from "./components/profile";

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     Happy Hacking!
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div>
//       <h1 style={{ color: "black", fontFamily: "cursive", fontSize: "50px" }}>
//         Hallo Warga Batam!
//       </h1>
//       <h1 className="judul">Welcome to NDP</h1>
//     </div>
//   );
// }

const App = () => {
  const judul = "welcome to the jungle";
  function muncul() {
    alert("hello");
  }
  return (
    <div className="paper">
      <h1 style={{ color: "black", fontFamily: "cursive", fontSize: "50px" }}>
        Hallo Warga Batam!
      </h1>
      <h1 className="judul">{judul}</h1>
      <button style={{ marginLeft: "10px" }} onClick={muncul}>
        ok
      </button>
      <Profile color="blue" font="40px" />
      <Propicts color="pink" value={judul} />
      <Isidata color="brown" />
    </div>
  );
};

export default App;
