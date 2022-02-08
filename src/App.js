import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Pull Request</p>
                <a
                    className="App-link"
                    href="https://jtamyrc.github.io/gh-demo-pr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    A demo here! OK!
                </a>
            </header>
        </div>
    );
}

export default App;
