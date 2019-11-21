var express = require('express');
var router = express.Router();

var infernos = [{
    id: "1",
    image: "1.png",
    circle: "First Circle (Limbo)",
    quote: "The kindly master said: `Do you not ask who are these spirits whom you see before you? I’d have you know, before you go ahead, they did not sin; and yet, though they have merits that’ s not enough, because they lacked baptism, the portal of the faith that you embrace. And if they lived before Christianity, they did not worship God in fitting ways; and of such spirits I myself am one. For these defects, and for no other evil, we now are lost and punished just with this: we have no hope and yet we live in longing.` Great sorrow seized my heart on hearing him, for I had seen some estimable men among the souls suspended in that limbo. -Inf.IV, 31 - 45 ",
    description: "Dante’s First Circle of Hell is resided by virtuous non-Christians and unbaptized pagans who are punished with eternity in an inferior form of Heaven. They live in a castle with seven gates which symbolize the seven virtues. Here, Dante sees many prominent people from classical antiquity such as Homer, Socrates, Aristotle, Cicero, Hippocrates, and Julius Caesar.",
  },

  {
    id: "2",
    image: "2.png",
    circle: "Second Circle (Lust)",
    quote: "I reached a place where every light is muted, which bellows like the sea beneath a tempest, when it is battered by opposing winds. The hellish hurricane, which never rests, drives on the spirits with its violence: wheeling and pounding, it harasses them. When they come up against the ruined slope, then there are cries and wailing and lament, and there they curse the force of the divine. I learned that those who undergo this torment are damned because they sinned within the flesh, subjecting reason to the rule of lust. - Inf.V, 28 - 39",
    description: "In the Second Circle of Hell, Dante and his companion Virgil find people who were overcome by lust. They are punished by being blown violently back and forth by strong winds, preventing them from finding peace and rest. Strong winds symbolize the restlessness of a person who is led by the desire for fleshly pleasures. Again, Dante sees many notable people from history and mythology including Cleopatra, Tristan, Helen of Troy and others who were adulterous during their lifetime.",
  },

  {
    id: "3",
    image: "3.png",
    circle: "Third Circle (Gluttony)",
    quote: "At which I said: `And after the great sentence – o master – will these torments grow, or else be less, or will they be just as intense?` And he to me: `Remember now your science, which says that when a thing has more perfection, so much the greater is its pain or pleasure. Though these accursed sinners never shall attain the true perfection, yet they can expect to be more perfect then than now.` - Inf. VI, 103-111",
    description: "When reaching the Third Circle of Hell, Dante and Virgil find souls of gluttons who are overlooked by a worm-monster Cerberus. Sinners in this circle of Hell are punished by being forced to lie in a vile slush that is produced by never-ending icy rain. The vile slush symbolizes personal degradation of one who overindulges in food, drink, and other worldly pleasures, while the inability to see others lying nearby represents the gluttons’ selfishness and coldness. Here, Dante speaks to a character called Ciacco who also tells him that the Guelphs (a fraction supporting the Pope) will defeat and expel the Ghibellines (a fraction supporting the Emperor to which Dante adhered) from Florence which happened in 1302 before the poem was written (after 1308).",
  },

  {
    id: "4",
    image: "4.png",
    circle: "Fourth Circle (Greed)",
    quote: "Here, more than elsewhere, I saw multitudes to every side of me; their howls were loud while, wheeling weights, they used their chests to push. They struck against each other; at that point, each turned around and, wheeling back those weights, cried out, Why do you hoard?` `Why do you squander?` So did they move around the sorry circle from left and right to the opposing point; again, again they cried their chant of scorn; and so, when each of them had changed positions, he circled halfway back to his next joust. - Inf.VII, 25 - 36 ",
    description: "In the Fourth Circle of Hell, Dante and Virgil see the souls of people who are punished for greed. They are divided into two groups – those who hoarded possessions and those who lavishly spent it – jousting. They use great weights as a weapon, pushing it with their chests which symbolizes their selfish drive for fortune during their lifetime. The two groups that are guarded by a character called Pluto (probably the ancient Greek ruler of the underworld) are so occupied with their actions that the two poets don’t try to speak to them. Here, Dante says to see many clergymen including cardinals and popes.",
  },

  {
    id: "5",
    image: "5.png",
    circle: "Fifth Circle (Anger)",
    quote: "`Wedged in the slime, they say: ‘We had been sullen in the sweet air that’s gladdened by the sun; we bore the mist of sluggishness in us: now we are bitter in the blackened mud.` This hymn they have to gurgle in their gullets, because they cannot speak it in full words. - Inf. VII, 121-126 ",
    description: "The Fifth Circle of Hell is where the wrathful and sullen are punished for their sins. Transported on a boat by Phlegyas, Dante and Virgil see the furious fighting each other on the surface of the river Styx and the sullen gurgling beneath the surface of the water. Again, the punishment reflects the type of the sin committed during their lifetime. While passing through, the poets are approached by Filippo Argenti, a prominent Florentine politician who confiscated Dante’s property after his expulsion from Florence.",
  },

  {
    id: "6",
    image: "6.png",
    circle: "Sixth Circle (Heresy)",
    quote: "`Of every malice that earns hate in Heaven, injustice is the end; and each such end by force or fraud brings harm to other men. However, fraud is man’ s peculiar vice; God finds it more displeasing– and therefore, the fraudulent are lower, suffering more.` - Inf. XI, 22-27",
    description: "When reaching the Sixth Circle of Hell, Dante and Virgil see heretics who are condemned to eternity in flaming tombs. Here, Dante talks with a couple of Florentines – Farinata degli Uberti and Cavalcante de’ Cavalcanti – but he also sees other notable historical figures including the ancient Greek philosopher Epicurus, Holy Roman Emperor Frederick II, and Pope Anastasius II. The latter, however, is according to some modern scholars condemned by Dante as a heretic by mistake. Instead, as some scholars argue, the poet probably meant the Byzantine Emperor Anastasius I.",
  },


  {
    id: "7",
    image: "7.png",
    circle: "Seventh Circle (Violence)",
    quote: "And he came on, that filthy effigy of fraud, and landed with his head and torso but did not draw his tail onto the bank. The face he wore was that of a just man, so gracious was his features’ outer semblance; and all his trunk, the body of a serpent; He had two paws, with hair up to the armpits; his back and chest as well as both his flanks had been adorned with twining knots and circlets. No Turks or Tartars ever fashioned fabrics more colorful in the background and relief, nor had Arachne ever loomed such webs. As boats will sometimes lie along the shore, with part of them on land and part in water, and just as there, among the guzzling Germans, the beaver sets himself when he means war, so did that squalid beast lie on the margin of stone that serves as border for the sand. And all his tail was quivering in the void while twisting upward its envenomed fork, which had a tip just like a scorpion’s. - Inf.XVII, 7 - 24",
    description: "The Seventh Circle of Hell is divided into three rings. The Outer Ring houses murderers and others who were violent to other people and property. Here, Dante sees Alexander the Great (disputed), Dionysius I of Syracuse, Guy de Montfort and many other notable historical and mythological figures such as the Centaurus, sank into a river of boiling blood and fire. In the Middle Ring, the poet sees suicides who have been turned into trees and bushes which are fed upon by harpies. But he also sees here profligates, chased and torn to pieces by dogs. In the Inner Ring are blasphemers and sodomites, residing in a desert of burning sand and burning rain falling from the sky.",
  },

  {
    id: "8",
    image: "8.png",
    circle: "Eight Circle (Fraud)",
    quote: "Below that point we found a painted people, who moved about with lagging steps, in circles, weeping, with features tired and defeated. And they were dressed in cloaks with cowls so low they fell before their eyes, of that same cut that’ s used to make the clothes for Cluny’s monks Outside, these cloaks were gilded and they dazzled; but inside they were all of lead, so heavy that Frederick’s capes were straw compared to them. A tiring mantle for eternity! - Inf.XXIII, 58 - 67",
    description: "The Eight Circle of Hell is resided by the fraudulent. Dante and Virgil reach it on the back of Geryon, a flying monster with different natures, just like the fraudulent. This circle of Hell is divided into 10 Bolgias or stony ditches with bridges between them. In Bolgia 1, Dante sees panderers and seducer. In Bolgia 2 he finds flatterers. After crossing the bridge to Bolgia 3, he and Virgil see those who are guilty of simony. After crossing another bridge between the ditches to Bolgia 4, they find sorcerers and false prophets. In Bolgia 5 are housed corrupt politicians, in Bolgia 6 are hypocrites and in the remaining 4 ditches, Dante finds hypocrites (Bolgia 7), thieves (Bolgia 7), evil counselors and advisers (Bolgia 8), divisive individuals (Bolgia 9) and various falsifiers such as alchemists, perjurers, and counterfeits (Bolgia 10).",
  },

  {
    id: "9",
    image: "9.png",
    circle: "Ninth Circle (Treachery)",
    quote: "Had I the crude and scrannel rhymes to suit the melancholy hole upon which all the other circling crags converge and rest, the juice of my conception would be pressed more fully; but because I feel their lack, I bring myself to speak, yet speak in fear; for it is not a task to take in jest, to show the base of all the universe – nor for a tongue that cries out, `mama,` `papa.` - Inf.XXXII, 1 - 9",
    description: "The last Ninth Circle of Hell is divided into 4 Rounds according to the seriousness of the sin. Though all residents are frozen in an icy lake. Those who committed more severe sin are deeper within the ice. Each of the 4 Rounds is named after an individual who personifies the sin. Thus Round 1 is named Caina after Cain who killed his brother Abel, Round 2 is named Antenora after Anthenor of Troy who was Priam’s counselor during the Trojan War, Round 3 is named Ptolomaea after Ptolemy (son of Abubus), while Round 4 is named Judecca after Judas Iscariot, the apostle who betrayed Jesus with a kiss.",
  }
]

router.get("/", (req, res, next) => {
  res.render("index", { title: "Dante's Inferno:", infernos: infernos });
});

module.exports = router;
