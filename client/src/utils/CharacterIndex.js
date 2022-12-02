import Human from "./VCharData/Human";
import Dwarf from "./VCharData/Dwarf";
import Elf from "./VCharData/Elf";
import Changeling from "./VCharData/Changeling";
import EOS from "./VCharData/EOS";
import Faeborn from "./VCharData/Faeborn";
import VaultClasses from "./VCharData/VaultClasses";
import VaultStyles from "./VCharData/Styles.js";

const Mystic = VaultStyles.Mystic;
const Titan = VaultStyles.Titan;
const Slayer = VaultStyles.Slayer;
const Strategist = VaultStyles.Strategist;

const Adept = VaultClasses.Adept;
const Shaman = VaultClasses.Shaman;
const Mage = VaultClasses.Mage;
const Face = VaultClasses.Face;
const Assassin = VaultClasses.Assassin;
const Investigator = VaultClasses.Investigator;
const Doctor = VaultClasses.Doctor;
const Bodyguard = VaultClasses.Bodyguard;
const WeaponsSpecialist = VaultClasses.WeaponsSpecialist;
const Runner = VaultClasses.Runner;
const Sniper = VaultClasses.Sniper;
const GearHead = VaultClasses.GearHead;
const InfoRipper = VaultClasses.InfoRipper;
const PitFighter = VaultClasses.PitFighter;
const DroneOperator = VaultClasses.DroneOperator;
const WitchHunter = VaultClasses.WitchHunter;

const CharacterOptions = {
	speciesOptions: [Human, Dwarf, Elf, Changeling, EOS, Faeborn],
	styleOptions: [Mystic, Titan, Slayer, Strategist],
	classOptions: [
		Adept,
		Shaman,
		Mage,
		Face,
		Assassin,
		Investigator,
		Doctor,
		Bodyguard,
		WeaponsSpecialist,
		Runner,
		Sniper,
		GearHead,
		InfoRipper,
		PitFighter,
		DroneOperator,
		WitchHunter,
	],
};

export default CharacterOptions;
