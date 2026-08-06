// Runs only when the test step passes (see .github/workflows/ci.yml).
// Demonstrates that a runtime dependency (figlet) installed in CI actually works.
import figlet from 'figlet';

const banner = figlet.textSync('Sam loves PTRI 21!!', { font: 'Standard' });
console.log('\n' + banner + '\n');
console.log('✅ CI is green. Safe to merge.');
