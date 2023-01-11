import React, { useState } from "react";

function Laptop({ data, setData }) {
    const [showMore, setShowMore] = useState({});
    const [ShowLess, setShowLess] = useState("");



    const handleClick = (data) => {
        setShowMore(() => ({
            ...prevState,
            [data.name]: !prevState[data.name],
        }));
    };

    const handleClick = (data) => {
        setShowLess(() => ({
            ...prevState,
            [data.name]: !prevState[data.name],
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

       

        fetch("https://demoapi.com/api/pi/laptop", {
            method: "POST",
            body: JSON.stringify({ email }),
            headers: { "Content-Type": "application/json" },
        }).then((response) => {
           console.log(response)
        });
    };

    console.log(data);
    return (
        <div>
            {data.map((item, index) => (
                <div key={item.name}>
                    {item.name}
                    <button
                        key={index}
                        onClick={() => {
                            handleClick(item);
                            handleClick1(index);
                        }}
                    >
                        {showMore[index] ? "Show Less" : "Show More"}
                    </button>
                    {showDetails[item.name] && <div>{item.details}</div>}
                </div>
            ))}

           
        </div>
    );
}
