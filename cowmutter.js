/** @param {NS} ns */
/** COWMUTTER: COWSAY DEMAKE FOR BITBURNER
 * custom script by starg3n/appak
 * 
 * DOCS:
 * read setup.txt
 * > cowsay [message]
 * 
 */
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
