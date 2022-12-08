import shamanSM from "../../assets/imgs/classIMG/shamanSM.png";
import mageSM from "../../assets/imgs/classIMG/mageSM.png";
import adeptSM from "../../assets/imgs/classIMG/adeptSM.png";
import faceSM from "../../assets/imgs/classIMG/faceSM.png";
import assassinSM from "../../assets/imgs/classIMG/assassinSM.png";
import investigatorSM from "../../assets/imgs/classIMG/investigatorSM.png";
import doctorSM from "../../assets/imgs/classIMG/doctorSM.png";
import bodyguardSM from "../../assets/imgs/classIMG/bodyguardSM.png";
import wpnspecSM from "../../assets/imgs/classIMG/wpnspecSM.png";
import runnerSM from "../../assets/imgs/classIMG/runnerSM.png";
import sniperSM from "../../assets/imgs/classIMG/sniperSM.png";
import gearheadSM from "../../assets/imgs/classIMG/gearheadSM.png";
import inforipperSM from "../../assets/imgs/classIMG/inforipperSM.png";
import pitfighterSM from "../../assets/imgs/classIMG/pitfighterSM.png";
import droneopSM from "../../assets/imgs/classIMG/droneopSM.png";
import witchhuntSM from "../../assets/imgs/classIMG/witchhuntSM.png";

const VaultClasses = {
	Shaman: {
		name: "Shaman",
		imageSM: shamanSM,
		shortdesc: "Totemic Magic Users with an Animal Companion",
		desc: "The shaman draws its magical power from nature itself. A totem is a segment of nature, usually an animal the shaman emulates in their efforts to understand nature, and in turn the magical world better. A totem companion is often a shaman’s best friend or greatest fears come to life.  In any case, the shaman should have a wealth of respect for his companion as it is his connection to the magical world. Often shaman mercenaries see the challenges of this career as a way to pit nature against the world of man and show dominance.",
		requresMystic: true,
		abilityGroups: ["Magical", "Survival"],
	},

	Mage: {
		name: "Mage",
		imageSM: mageSM,
		shortdesc: "Varied Magic Users with many Disciplines",
		desc: "When magic poured back into the world many in the science community took notice of the measurable and predictable ways it acted. Magic seems to be just another force like gravity or magnetism that had been cut off from us while the fae were in exile. With this knowledge and a lot of discipline a mage can command the elements, dominate weaker minds and even heal their allies. These secrets are anything but cheap to learn and Merc work might not always be glamorous but the pay, practice, and personal connections make up for that.",
		requresMystic: true,
		abilityGroups: ["Magical", "Personality"],
	},

	Adept: {
		name: "Adept",
		imageSM: adeptSM,
		shortdesc: "Close Combat Specialized Magic Users",
		desc: "The adept focuses their magical training inward to achieve great speed, strength, and stamina. So much so they will often rival the most roided out techo-enhanced cyborg a street surgeon can create. These powers can require years of intense training or come out of the clear blue with no effort at all. Once these powers are “unlocked” however few can resist using them, this makes them perfect for merc work as they can fight with the best of them and make it through a metal detector.",
		requresMystic: true,
		abilityGroups: ["Magical", "Close Combat"],
	},

	Face: {
		name: "Face",
		imageSM: faceSM,
		shortdesc: "Socilizers, Cons, and Distractions",
		desc: "Whether it's as an intelligent leader or devious trickster the face will confound its enemies if and when somebody does something stupid. There isn't much the face isn't good at but they prefer to keep weapons holstered and out talk their enemies. The face uses confusion and mobility to gain an advantage in a fight and these skills along with considerable contacts make them highly sought by mercenary teams.",
		requresMystic: null,
		abilityGroups: ["Personality", "Survival"],
	},

	Assassin: {
		name: "Assassin",
		imageSM: assassinSM,
		shortdesc: "Skilled Killers who Focus on Stealth",
		desc: "The Assassins skill set is really good for one thing, Killing people. While “wet work” isn't the job every time, when it is though, these guys can make it happen. Some take on the role of counter-Assassin but that work tends to be much more dangerous. They are skilled with a wide variety of weapons but truly excel up close and in someone's back. Mercenary groups have been known to hire these guys after meeting them just so that they are on their side and not someone they have to face in the future. ",
		requresMystic: null,
		abilityGroups: ["Personality", "Close Combat"],
	},

	Investigator: {
		name: "Investigator",
		imageSM: investigatorSM,
		shortdesc: "Seekers of Knowledge who are Good with a Gun",
		desc: "If you've ever wondered what happens to washed-up, burnt-out detectives here you go. They'd have the perfect skills to lead a group if they could only get over their rough past. This past does have its advantages; the investigator has a wealth of contacts even if they aren't all best friends and the skill to get just a bit more out of them than anyone else could. Obviously having an ex-cop makes being one step ahead of the law much easier and no team really wants to see what happens when you are one step behind.",
		requresMystic: null,
		abilityGroups: ["Personality", "Ranged Combat"],
	},

	Doctor: {
		name: "Doctor",
		imageSM: doctorSM,
		shortdesc: "Specialists in Medicine, Technology, or Phenomena",
		desc: "Doctors range from badass combat medics, to engineers, to mad scientists. A few of their specialties like the medic will keep you alive and moving far longer than your body will even want, while the developer of technology will be pushing the edge of what is possible, probably to the group’s benefit. The weird side of science is a little like mixing Steve Irwin and Doctor Frankenstein. Results may vary as to whether this guy is more trouble than he is worth but the one thing they all have in common is big plans.",
		requresMystic: null,
		abilityGroups: ["Personality", "Technological"],
	},

	Bodyguard: {
		name: "Bodyguard",
		imageSM: bodyguardSM,
		shortdesc: "Armored Protectors",
		desc: "It's nice to have someone watching your back in this line of work, nobody does that better than the bodyguard. Usually they are the bully of the battlefield and the muscle of the streets. It's hard to feel very safe if you don't have one nearby. Being in the mix all the time has its own advantages, they have gotten used to wearing heavy, bulky armor and can disengage from unimportant foes to keep up with clients and take out any actual threats.",
		requresMystic: null,
		abilityGroups: ["Close Combat", "Survival"],
	},

	WeaponsSpecialist: {
		name: "Weapons Specialist",
		imageSM: wpnspecSM,
		shortdesc: "Combat Masters, Inside and Out",
		desc: "These former soldiers turned mercenaries have trained harder than anyone else. Taking what they learned from their role in a military unit and then honing that skill set for sometimes years after, this has made them masters of that discipline. Again military experience can be very useful if you want to stay out of the way of “special forces” and trust me, you do!",
		requresMystic: null,
		abilityGroups: ["Close Combat", "Ranged Combat"],
	},

	Runner: {
		name: "Runner",
		imageSM: runnerSM,
		shortdesc: "Mobile Fighters with Style",
		desc: "Runners treat life and death as a game more than just about anyone else. Agile and fast, these are hard fighters to pin down and their skill with both hands make them well suited for everything from gun play to the old school sword and shield style. Their value to the group mostly comes from their versatility in combat and ability to be where they are needed at a moment's notice.",
		requresMystic: null,
		abilityGroups: ["Ranged Combat", "Survival"],
	},

	Sniper: {
		name: "Sniper",
		imageSM: sniperSM,
		shortdesc: "Long Range Killers",
		desc: "At range snipers can pull the weight of an entire combat unit. Staying out of sight, picking off targets before they have time to react, and then fading away again translates very well in a world of high security breaching. Up close a sniper's high accuracy makes them nearly as dangerous with a pistol, but few people can survive the laser precision of their rifles long enough to find out.",
		requresMystic: null,
		abilityGroups: ["Ranged Combat", "Survival"],
	},

	GearHead: {
		name: "Gear Head",
		imageSM: gearheadSM,
		shortdesc: "Piloting Focused with a Love of Big Guns",
		desc: "Mechanic, driver, and solo demolition crew all rolled up into one. It's hard to say what aspect of their expertise they will use the most but at some point every group will have one or wish they did. I can't tell you how many times the difference between a sweet payday and a bad case of high velocity lead poisoning came down to someone knowing how to make a busted up car start.",
		requresMystic: null,
		abilityGroups: ["Ranged Combat", "Technological"],
	},

	InfoRipper: {
		name: "Info Ripper",
		imageSM: inforipperSM,
		shortdesc: "The Best Hackers Around",
		desc: "When information is what you need these are the Mercs you want. As computers become more important the Rippers stock goes up. Often needing to be protected so they can enter the virtual world and then put their lives at risk again, this can still be the fastest and most efficient way to get what you’re looking for on a mission. Most of the time hacking is just another game but mega corps often make it a game with the Ripper's life up for ante and they play for keeps. ",
		requresMystic: null,
		abilityGroups: ["Personality", "Technological"],
	},

	PitFighter: {
		name: "P.I.T. Fighter",
		imageSM: pitfighterSM,
		shortdesc: "Prefers Metal to Meat",
		desc: "The Prosthetically Improved Tournament might sound a little boring but it is one of the most popular streaming shows there is. These combatants get loaded up with as much tech as they can handle and then proceed to rip each other apart in a no holds, guns, or explosives barred death match. Often the big bio upgrade developers will field test and advertise their newest products here. These fighters are the lucky ones who retired before some fully chromed out berserker put an axe through their skull. It's nice having a fearless arena fighter on your team and they are of course looking for the next upgrade.",
		requresMystic: null,
		abilityGroups: ["Close Combat", "Technological"],
	},

	DroneOperator: {
		name: "Drone Operator",
		imageSM: droneopSM,
		shortdesc: "Have Robots do your Bidding",
		desc: "Do you like remote control cars, how about when you can mount grenade launchers and machine guns on them… yea me too. Another tech expert, these masterminds are no couch potatoes, the range they need to keep to make sure pesky Hackers don't steal their toys is pretty close. However they can command an army of robots and who doesn’t want that on their side. If only drones weren’t one of the most expensive things on the black market, good thing the mercenary work pays so well.",
		requresMystic: null,
		abilityGroups: ["Ranged Combat", "Technological"],
	},

	WitchHunter: {
		name: "Witch Hunter",
		imageSM: witchhuntSM,
		shortdesc: "Monster Hunting Soldiers from a Secret Organization",
		desc: "Witch Hunters are people who took their distrust of magic and made a few life choices to become dedicated to the destruction of anyone who would misuse that power. The tattoos, scars, or brands that now cover their bodies are a dead giveaway but also the source of their power. The anti-magic inscriptions and deep understanding of “the true nature of magic” make them a terror to their mystical prey. It is very possible for a mage and a witch hunter to work together, I just wouldn't recommend reanimating dead bodies in front of them, it upsets them for some reason.",
		requresMystic: false,
		abilityGroups: ["Close Combat", "Survival"],
	},
};

export default VaultClasses;
