/** @param {NS} ns */
// COWSAY FOR BITBURNER
// BY HENRY BERMAN
export async function main(ns) {

  let speech = ns.args[0]; // speech added onto cow
  
  let cow = `
 ^__^
 (oo)\_______
 (__)       )--
     ||----w |
     ||     ||` // cow ascii art modified for bitburner
  
  ns.tprint(cow + speech) // I'm too stupid to make this look nice
}
