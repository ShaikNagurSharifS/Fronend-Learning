// A simple function to demonstrate a change for testing purposes
function sum(a: number, b: number): number {
    return a + b;
}

// Exporting the function as default
// export default sum;

// Component to demonstrate a change for testing purposes
export const DiffComponent = () => {
    return <div>This is a diff component</div>;
};

// Exporting the component as default
// export default DiffComponent;

// The main purpose of this file is to show differences in components and functions
// for testing purposes, so no additional functionality is needed.

// export keyword is optional here, depending on how you want to use the function/component

function Summation() {
    return <div>The sum of 3.324 and 3 is: {sum(3.234, 3)}</div>;
}

export default Summation;