import Human from "./VCharData/Human";
import Dwarf from "./VCharData/Dwarf";
import Elf from "./VCharData/Elf";

const CharacterOptions = {
	speciesOptions: [Human, Dwarf, Elf, "Changeling", "EOS", "Faeborn"],
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

class Character {
	constructor(name, species, style, charClasses) {
		this.name = name;
		this.species = species;
		this.style = style;
		this.charClasses = charClasses;
	}
}

export default CharacterOptions;
