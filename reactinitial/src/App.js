import React, { useEffect, useState } from "react"
import "./components/LoadingMask";
import LoadingMask from "./components/LoadingMask";
import "./components/Laptop";

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://demoapi.com/api/laptop`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    // console.log(data);

    return (
        <>
            <h1>Laptop</h1>
            {data.name}(
                <Laptop data={data} setData={setData} />
            ) : (
                <LoadingMask />
            )
        </>
    );
};
const App = () => {

  return (
    <div>
      Todo...
    </div>
  )
}

export default App
