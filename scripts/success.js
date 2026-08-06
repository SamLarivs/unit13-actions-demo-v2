// Runs only when the test step passes (see .github/workflows/ci.yml).
// Demonstrates that a runtime dependency (figlet) installed in CI actually works.
import figlet from 'figlet';

// Change the first argument to figlet to have it print whatever you want.
const banner = figlet.textSync('Sam loves PTRI 21!!!', {
  horizontalLayout: 'full',
});
console.log('\n' + banner + '\n');
console.log('✅ CI is green. Safe to merge.');
