// Here I am writing a React component without using TSX syntax
// This is to demonstrate how to create React elements using React.createElement
// instead of the more common TSX syntax.

import React, { createElement } from 'react';

const WithoutTsx: React.FC<{ name: string }> = ({ name }: { name: string }) => {
    return React.createElement('div', null,
        React.createElement('h1', null, ` This is an example of without tsx file ${greet(name)}`)
    );
}

export default WithoutTsx;

function greet(name: string): string {
    const trimmed = (name ?? '').trim();
    if (!trimmed) return 'Hello!';
    const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    return `${Hey} Hello, ${capitalized}! `;
}

// Utility functions were moved to a separate file (greet.ts) so this file only exports components
// Function without using React.createElement
function Hey() {
    return createElement("div", { id: 'Sum' }, "Hey");
}

// multiple elements without using React.createElement
export function MultipleElements() {
    return createElement("div", { id: 'Multiple' }, createElement("h1", null, "Hello"), createElement("h2", null, "World"));
}
