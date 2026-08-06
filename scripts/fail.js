// Runs only when the test step fails (see .github/workflows/ci.yml).
// Dependency-free ASCII cat so the failure path never depends on an install.
const cat = String.raw`
 /\_/\
( o.o )   Tests failed — don't merge yet!
 > ^ <
`;

console.log(cat);
console.log('❌ Check the failing test above and push a fix.');
