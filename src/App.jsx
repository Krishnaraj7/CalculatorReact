import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const resultHandle = () => {
    if (value != "") {
      try {
        setValue(eval(value));
      } catch {
        setValue("Syntax Error!!");
      }
    }
  };
  return (
    <>
      <div className="calculator">
        <div className="main">
          <form action="">
            <div className="input-field">
              <input type="text" value={value} />
            </div>
            <div>
              <input type="button" value="AC" onClick={(e) => setValue("")} />
              <input
                type="button"
                value="D"
                onClick={(e) => setValue(value.slice(0, -1))}
              />
              <input
                type="button"
                value="."
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="/"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="7"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="8"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="9"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="*"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="4"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="5"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="6"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="-"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="1"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="2"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="3"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                type="button"
                value="+"
                onClick={(e) => setValue(value + e.target.value)}
              />
            </div>
            <div>
              <input
                type="button"
                value="0"
                onClick={(e) => setValue(value + e.target.value)}
              />
              <input
                id="equal"
                type="button"
                value="="
                onClick={resultHandle}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
