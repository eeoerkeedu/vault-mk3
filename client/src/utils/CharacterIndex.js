import Human from "./VCharData/Human";
import Dwarf from "./VCharData/Dwarf";
import Elf from "./VCharData/Elf";
import Changeling from "./VCharData/Changeling";
import EOS from "./VCharData/EOS";
import Faeborn from "./VCharData/Faeborn";
import VaultClasses from "./VCharData/VaultClasses";
import VaultStyles from "./VCharData/Styles";

const CharacterOptions = {
	speciesOptions: [Human, Dwarf, Elf, Changeling, EOS, Faeborn],
	styleOptions: VaultStyles,
	classOptions: VaultClasses,
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
