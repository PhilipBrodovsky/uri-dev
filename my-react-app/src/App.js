import "./App.css";
export const b = 10;

function App() {
    function addUser() {}
    function remove() {}

    return (
        <div className="App">
            <header className="App-header">
                <Philip text="edit" onClick={addUser} />

                <Philip text="add" name="uri" onClick={remove} />

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Reactjjjjjjjjjjjjjhkjhjkljkldjklsajadkls lkjjkljlk jkljkl
                </a>
            </header>
        </div>
    );
}

function Philip(props) {
    if (props.isBanner) {
        return <code>sad</code>;
    }
    return (
        <p onClick={props.onClick}>
            {props.text} <code>{props.name}/App.js</code> and save to reload.
        </p>
    );
}
export default App;
