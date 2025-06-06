import React from "react";
import ReactDOM from "react-dom/client";
import HeaderNavComponent from "./HeaderNavComponent";

// const heading1 = React.createElement(
//     "h1",
//     {
//         id:"title",
//         key: "h1"
//     },
//     "Heading1 from parcel"
// );


const heading3 = React.createElement(
    "div",
    {
        key:"h3",
        className:"title"
    },
    React.createElement(
        "h1",
        {
            key:"h4",
            className: "title"
        },
        "H1"
    ),
    React.createElement(
        "h2",
        {
            key: "h5",
            className:"title"
        },
        "h2"
    )
);

//JSX
const header4 = <div>
    <h1>h1</h1>
    <h2>h2</h2>
</div>


// JSX
const heading1 = <h1 id="title" key="h1">Heading</h1>;

console.log(heading1);

// const heading2 = React.createElement(
//     "h2",
//     {
//         id:"title",
//         key: "h2"
//     },
//     "Heading 2"
// );

const heading2 = <h2 id="title" key="h2">Heading2</h2>

const HeaderComponent4 = () => {
    return (
        <div>
            <h1 key="h7">h</h1>
            <h2>h</h2>
        </div>
    )
}

const Title = () => (<h2 id="title" key="h2">Title</h2>);

const HeaderComponent = () => {
    return (
        <div>
            <h1>Hello</h1>
            <h2>hello000</h2>
        </div>
    ); // for multiple lines
};

var a = 10;

const HeaderComponent2 = () => (
    <div>
        {/* replaces the heading2 code */}
        {heading2} 
        {/* {a} */}
        {/* {console.log(a)} */}
        {/* {1+2} */}
        {/* <Title/> or {Title ()} */}
        {HeaderComponent4()}
        <h1>Hello</h1>
        <h2>hello</h2>
    </div>
);

const HeaderComponent3 = function () {
    return <h1>hello</h1>
}

//inline styling
// const styleObj = {
//     backgroundColor: "red",
// };

const a = (
    // <React.Fragment> or <>
    // <div style={styleObj}>
    <div style={{
        backgroundColor: "red",
    }}>
        <h1>he</h1>
        <h2>hehe</h2>
    {/* </React.Fragment> or </> */}
    </div>
)

const container = React.createElement(
    "div",
    {
        id: "container",
        hello: "world", //gets added as a attribute(called as props in React) to the div
    },
    [<HeaderNavComponent/>]);
    
    // heading3,heading1,heading2,header4, <HeaderComponent4 />,<HeaderComponent/>, <HeaderComponent2></HeaderComponent2>, <HeaderComponent3/>]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);  