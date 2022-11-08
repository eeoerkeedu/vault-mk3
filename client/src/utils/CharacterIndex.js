import Human from "./VCharData/Human";
import Dwarf from "./VCharData/Dwarf";
import Elf from "./VCharData/Elf";
import Changeling from "./VCharData/Changeling";
import EOS from "./VCharData/EOS";
import Faeborn from "./VCharData/Faeborn";

const CharacterOptions = {
	speciesOptions: [Human, Dwarf, Elf, Changeling, EOS, Faeborn],
	styleOptions: ["Mystic", "Titan", "Slayer", "Strategist"],
	classOptions: [
		"Shaman",
		"Mage",
		"Adept",
		"Face",
		"Assassin",
		"Investigator",
		"Doctor",
		"Bodyguard",
		"Weapons Specialist",
		"Duelist",
		"Sniper",
		"Gear Head",
		"Info Ripper",
		"PIT Fighter",
		"Drone Operator",
		"Witch Hunter",
	],
};

// class Character {
// 	constructor(name, species, style, charClass1, charClass2) {
// 		this.name = name;
// 		this.species = species;
// 		this.style = style;
// 		this.charClass1 = charClass1;
// 		this.charClass2 = charClass2;
// 	}
// }

export default CharacterOptions;
