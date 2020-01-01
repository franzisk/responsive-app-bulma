import React from "react";
import WindowDimensionsProvider from "./components/WindowDimensionsProvider";
import items from "./data.json";
import Content from "./components/Content";

const App = () => (
    <WindowDimensionsProvider>
        <div className="App">
            <Content items={items} />
        </div>
    </WindowDimensionsProvider>
);
export default App;
