// Runs only when the test step fails (see .github/workflows/ci.yml).
// Prints a console cat so the failing run is impossible to miss.
import catMe from 'cat-me';

console.log(catMe());
console.log('❌ Check the failing test above and push a fix.');
