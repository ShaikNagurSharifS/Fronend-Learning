export function namedExport() {
    console.log("This is the named export function from multiple export example.");
}

export function anotherNamedExport() {
    console.log("This is another named export function from multiple export example.");
}

function defaultExport() {
    console.log("This is the default export function from multiple export example.");
}

// You can have multiple named exports and one default export in a single file.
// While importing named exports need to use {}
// For example if we want to import both named and default exports:
// import defaultExport, { namedExport, anotherNamedExport } from './exportFunctionality/MultipleExport';


// Export not only functions but also variables, constants, or classes as named exports
// For example:
export const myConstant = 42;
// export class MyClass { /* class definition */ }

// while importing named exports need to use {}

export default defaultExport;
