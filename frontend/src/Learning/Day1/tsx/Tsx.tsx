// What is tsx?
// TSX is a syntax extension for TypeScript that allows you to write HTML-like code within your TypeScript files.
// It is commonly used with React to define the structure and layout of user interfaces in a more readable way.
// TSX files have a .tsx extension, indicating that they contain TypeScript code with embedded JSX syntax.


// A simple React component written in TSX

import React from 'react';

const MyComponent: React.FC<{ name: string }> = ({ name }: { name: string }) => {
    return (<>
        <h1> This is an example of tsx file {greet(name)}</h1>
    </>);
};

// Utility functions were moved to a separate file (greet.ts) so this file only exports components,
// which is required for fast refresh to work correctly.
// Incase of Functional components, fast refresh works only if the file exports a component directly.
function greet(name: string): string {
    return `Hello, ${name}!`;
}
export default MyComponent;