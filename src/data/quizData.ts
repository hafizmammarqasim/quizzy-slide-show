export interface QuizQuestion {
  question: string;
  answer: string;
  category?: string;
  chapter?: number;
}

// export const quizQuestions: QuizQuestion[] = [

//     {
//       id: 1,
//       question: "1. Why metals are good conductors?",
//       answer: "According to the provided text (page 17, Section 7 Electrical Conductance): \"This property is mainly due to the presence of relatively loose electrons in the outermost shell of the element and ease of their movement in the solid lattice.\""
//     },
//     {
//       id: 2,
//       question: "2. Define hydration energy with examples.",
//       answer: "According to the provided text (page 18, Section 8 Hydration Energy): \"The hydration energy is the heat absorbed or evolved when one mole of gaseous ions dissolve in water to give an infinitely dilute solution.\" Example from the text (page 18): \"For example, when one mole of gaseous hydrogen ions are dissolved in water resulting an infinitely dilute solution, a large amount of heat is liberated: H⁺(g) + H₂O(l) → H₃O⁺(aq) ΔHh = -1075 kJ mol⁻¹\" The text also provides Table 1.2 (page 18) with hydration energies of various ions (e.g., Li⁺: -499 kJ mol⁻¹, Na⁺: -390 kJ mol⁻¹, F⁻: -457 kJ mol⁻¹)."
//     },
//     {
//       id: 3,
//       question: "3. Diamond is a non-conductor but graphite is good conductor. Why?",
//       answer: "According to the provided text (page 18, Section 7 Electrical Conductance): \"Carbon, in the form of diamond is non-conductor because all of its valence electrons are tetrahedrally bound and unable to move freely, while in the form of graphite, carbon is fairly good conductor because one of its four valence electrons is relatively free to move.\""
//     },
//     {
//       id: 4,
//       question: "4. Ionization energy increases from left to right in a period. Justify.",
//       answer: "According to the provided text (page 11, Section b) Variation Across a Period): \"By moving from left to right in a period, the outer shell remains the same, while the nuclear charge increases effectively that makes the removal of an electron difficult and hence the value of ionization energy increases.\" The text further adds (page 12): \"Although, the number of electrons also increases in this case but the shielding is not very effective within the same shell.\""
//     },
//     {
//       id: 5,
//       question: "5. How does hydrogen resemble with group IV-A elements.",
//       answer: "According to the provided text (page 25, Section 1.5 The Position of Hydrogen): \"Some of the characteristic properties of hydrogen also resemble with those of group IVA elements such as C and Si, etc. For example, valence shell of hydrogen is half filled like those of group IVA elements. Both, hydrogen and group IV elements combine with other elements through covalent bonding. Like carbon, hydrogen also possesses remarkable reducing properties.\""
//     },
//     {
//       id: 6,
//       question: "6. Why oxidation number of noble gases is usually zero?",
//       answer: "According to the provided text (page 17, Section 6 Oxidation State): \"Group VIIIA elements, which are also called zero group elements, usually show zero oxidation state because there is no vacancy in their outermost shells.\""
//     },
//     {
//       id: 7,
//       question: "7. What is electron affinity? Give its trend in periodic table.",
//       answer: "Definition from the provided text (page 12, Section 3 Electron Affinity (E.A)): \"The electron affinity is the energy released or absorbed, when an electron is added to a gaseous atom to form a negative ion.\" Trend from the provided text (page 13): \"Electron affinity generally increases with increasing atomic number within a period and decreases from lighter to heavier elements in a given group of the periodic table.\""
//     },
//     {
//       id: 8,
//       question: "8. Justify the position of hydrogen at the top of group VII-A elements.",
//       answer: "According to the provided text (page 24, Section 1.5 The Position of Hydrogen): \"Hydrogen resembles halogens in certain respects and can be placed at the top of VIIA group in the periodic table. Hydrogen is a gas like most of the halogens and is stable in diatomic form such as F₂, Cl₂ and Br₂. As required by halogens, hydrogen also needs one electron to complete its outermost shell. By accepting one electron hydrogen forms H⁻ (Hydride ion) similar to F⁻, Cl⁻ and Br⁻. Both hydrogen and halogens form stable ionic compounds with alkali metals.\""
//     },
//     {
//       id: 9,
//       question: "9. Give reasons that hydration energy of Al³⁺ ions more than Mg²⁺ ion?",
//       answer: "According to the provided text (page 18, Section 8 Hydration Energy): \"It is evident from the table that hydration energies highly depend upon charge to size ratio of the ions.\" And, \"On the contrary, the hydration energy increases significantly by moving from left to right in a period as the charge to size ratio increases, as found in the metal ions of third period.\" Al³⁺ has a higher charge (+3) and a smaller ionic radius compared to Mg²⁺ (+2). This results in a significantly higher charge-to-size ratio for Al³⁺ than for Mg²⁺, leading to stronger ion-dipole interactions with water molecules and thus a higher (more exothermic) hydration energy. (The provided text's Table 1.2 shows Al³⁺: -4613 kJ mol⁻¹, Mg²⁺: -1891 kJ mol⁻¹)."
//     },
//     {
//       id: 10,
//       question: "10. Give differences of lithium from its own family members.",
//       answer: "(This information was not found in the provided text. The following answer is based on general chemical knowledge.) \nLithium exhibits anomalous behavior compared to other alkali metals (its family members) due to its exceptionally small atomic and ionic size, and high charge density (high polarizing power). Key differences include:\n1.  **Hardness and Melting/Boiling Points:** Lithium is harder and has higher melting and boiling points than other alkali metals.\n2.  **Reactivity:** Lithium is less reactive than other alkali metals, though it is still a reactive metal. It reacts slowly with water, while others react vigorously.\n3.  **Nitrogen Reaction:** Lithium is the only alkali metal that reacts directly with nitrogen gas at room temperature to form lithium nitride (Li₃N).\n4.  **Nature of Compounds:** Lithium compounds tend to have more covalent character compared to the predominantly ionic compounds of other alkali metals. For example, LiCl is soluble in organic solvents like ethanol and acetone.\n5.  **Solubility of Salts:** Lithium carbonate (Li₂CO₃), lithium fluoride (LiF), and lithium phosphate (Li₃PO₄) are sparingly soluble in water, whereas the corresponding salts of other alkali metals are highly soluble.\n6.  **Thermal Stability of Carbonate and Nitrate:** Lithium carbonate decomposes on heating to give Li₂O and CO₂, unlike other alkali metal carbonates which are stable to heat. Lithium nitrate decomposes to give Li₂O, NO₂ and O₂, while other alkali metal nitrates give nitrites and oxygen.\n7.  **Formation of Bicarbonate:** Lithium does not form a solid bicarbonate, while other alkali metals do.\n8.  **Diagonal Relationship:** Lithium shows a diagonal relationship with magnesium (Mg) in Group 2, meaning it shares some similarities in properties with magnesium."
//     },
//     {
//       id: 11,
//       question: "11. Why the size of an anion is always greater than its parent atom?",
//       answer: "According to the provided text (page 9, b) Ionic Radius): \"On the contrary, a negative ion is always bigger than its parent atom. The reason is that addition of one or more electrons in the shell of a neutral atom enhances repulsion between the electrons causing expansion of the shell.\""
//     },
//     {
//       id: 12,
//       question: "12. Name various classes of hydrides.",
//       answer: "According to the provided text (page 21, b) Hydrides): \"According to the nature of bonding, hydrides may be broadly classified into three classes: ionic, covalent and intermediate.\""
//     },
//     {
//       id: 13,
//       question: "13. Why metallic character increases from top to bottom in a group of metals?",
//       answer: "According to the provided text (page 13, Section 4 Metallic and Non-Metallic Character): \"Chemically all the elements which have a tendency to form positive ions by losing electrons are considered metals.\" And \"As it becomes easier to remove the electron of an atom bigger in size, therefore metallic character increases from top to bottom in a given group of elements.\" This is because as atomic size increases down a group, the outermost electrons are further from the nucleus and experience greater shielding from inner electrons, making them easier to lose."
//     },
//     {
//       id: 14,
//       question: "14. Alkali metals give ionic hydrides. Why?",
//       answer: "According to the provided text (page 21, b) Hydrides): \"The elements of group IA ... form ionic hydrides, which contain H⁻ (Hydride) ion.\" The text implies this is due to their electropositive nature. Alkali metals are highly electropositive and have a strong tendency to lose their single valence electron. Hydrogen, in this case, gains an electron to form the hydride ion (H⁻). The large difference in electronegativity between the highly electropositive alkali metal and hydrogen (when it forms H⁻) leads to the formation of an ionic bond."
//     },
//     {
//       id: 15,
//       question: "15. Give four uses of nitric acid.",
//       answer: "(This information was not found in the provided text. The following answer is based on general chemical knowledge.)\nFour common uses of nitric acid (HNO₃) are:\n1.  **Manufacture of Fertilizers:** A primary use is in the production of ammonium nitrate (NH₄NO₃), which is a key component in many fertilizers.\n2.  **Production of Explosives:** Nitric acid is used to manufacture various explosives, such as nitroglycerin, trinitrotoluene (TNT), and gun cotton (nitrocellulose).\n3.  **Chemical Synthesis:** It serves as a reagent in the synthesis of various organic and inorganic chemicals, including dyes, plastics (like nylon precursors), and other nitrates.\n4.  **Metallurgy and Metal Treatment:** It is used in metallurgy for processes like pickling of stainless steel, etching, and dissolving noble metals like silver (though not gold without HCl, as in aqua regia)."
//     }

// ,
//     {
//       id: 16,
//       question: "1. How does hydrogen resemble with alkali metals?",
//       answer: "Based on Chapter 2's discussion of Group IA elements (alkali metals): Hydrogen (1s¹) and alkali metals (ns¹) both have a single electron in their outermost 's' orbital. Like alkali metals, hydrogen can lose this one electron to form a monopositive ion (H⁺) and typically shows a +1 oxidation state in many of its compounds. (Note: A more detailed comparison is often found in introductory chapters on periodic trends, but this resemblance in valence electron configuration and formation of M⁺ ions is consistent with Chapter 2's description of alkali metals on page 3.)"
//     },
//     {
//       id: 17,
//       question: "2. Write formula of borax and Chile saltpetre.",
//       answer: "Chile saltpetre: NaNO₃ (From Chapter 2, page 5, Table 2.3).\nBorax: Na₂B₄O₇.10H₂O (This information is not found in Chapter 2, which focuses on s-Block elements. Borax is a compound of boron, discussed in Chapter 3. The formula is based on general chemical knowledge and its presence in Chapter 3 of the provided text series)."
//     },
//     {
//       id: 18,
//       question: "3. Give formula of natron and halite.",
//       answer: "Natron: Na₂CO₃.H₂O (From Chapter 2, page 5, Table 2.3).\nHalite (also known as Rock Salt): NaCl (From Chapter 2, page 5, Table 2.3)."
//     },
//     {
//       id: 19,
//       question: "4. How will you distinguish between ethanol and propanol.",
//       answer: "(This information is not found in Chapter 2, which deals with s-Block elements. The following answer is based on general chemical knowledge.)\nEthanol can be distinguished from propan-1-ol using the iodoform test. Ethanol gives a positive iodoform test: when warmed with iodine and sodium hydroxide solution, it forms a yellow precipitate of iodoform (CHI₃) with a characteristic antiseptic smell. Propan-1-ol does not give this test. (Note: Propan-2-ol would also give a positive iodoform test. If 'propanol' is unspecified, this test distinguishes ethanol from propan-1-ol but not necessarily from propan-2-ol without further tests.)"
//     },
//     {
//       id: 20,
//       question: "5. Give two similar properties of lithium and magnesium.",
//       answer: "Based on the peculiar behavior of lithium discussed in Chapter 2, which often makes it resemble magnesium (due to diagonal relationship):\n1.  **Reaction with Nitrogen:** Lithium reacts with nitrogen to form lithium nitride (Chapter 2, page 9, point 13: 6Li + N₂ → 2Li₃N). Magnesium also readily reacts with nitrogen to form magnesium nitride (Chapter 2, page 14, regarding burning magnesium in air, and page 15, point 3: 3Mg + N₂ → Mg₃N₂).\n2.  **Formation of Normal Oxide:** When burnt in air, lithium forms only the normal oxide (Li₂O) (Chapter 2, page 8, point 6, and page 11). Magnesium similarly forms its normal oxide (MgO) when burnt in air (Chapter 2, page 14)."
//     },
//     {
//       id: 21,
//       question: "6. Write chemical formula of Beryl and Barite.",
//       answer: "Beryl: Be₃Al₂(SiO₃)₆ (From Chapter 2, page 7, Table 2.4).\nBarite: BaSO₄ (From Chapter 2, page 7, Table 2.4)."
//     },
//     {
//       id: 22,
//       question: "7. What are two major problems faced during the working of diaphragm cell?",
//       answer: "According to Chapter 2, page 24 (Commercial Preparation of Sodium Hydroxide by the Diaphragm Cell):\n1.  \"Chlorine produced can react with hydroxide ions in cold giving hypochlorite ions.\" (Cl₂(g) + 2OH⁻(aq) → OCl⁻(aq) + Cl⁻(aq) + H₂O)\n2.  \"Hydroxide ions may be attracted towards anode, where they can be discharged releasing oxygen gas. This oxygen gas may contaminate the chlorine and renders it impure.\""
//     },
//     {
//       id: 23,
//       question: "8. Why Down’s cell is preferable method for the preparation of sodium on large scale?",
//       answer: "According to Chapter 2, page 22 (Commercial Preparation of Sodium by Down's Cell), the Down's cell process has the following advantages, making it preferable:\n(a) \"The metallic fog is not produced.\"\n(b) \"Liquid sodium can easily be collected at 600°C.\"\n(c) \"Material of the cell is not attacked by the products formed during the electrolysis.\""
//     },
//     {
//       id: 24,
//       question: "9. Give formula of (i). Dolomite (ii.) Asbestos",
//       answer: "(i) Dolomite: MgCO₃.CaCO₃ (From Chapter 2, page 7, Table 2.4).\n(ii) Asbestos: CaMg₃(SiO₃)₄ (From Chapter 2, page 7, Table 2.4)."
//     },
//     {
//       id: 25,
//       question: "10. What reaction occur when (i). Lithium carbonate is heated (ii). Sodium bicarbonate is heated",
//       answer: "(i) Lithium carbonate is heated: According to Chapter 2, page 9 (point 11) and page 19, lithium carbonate decomposes upon heating to give lithium oxide and carbon dioxide. The equation is: Li₂CO₃(s) → Li₂O(s) + CO₂(g).\n(ii) Sodium bicarbonate is heated: Chapter 2 (page 31, Q1 (ix) in exercises) indicates that metallic bicarbonates decompose on heating into their carbonates, along with water and carbon dioxide. Thus, for sodium bicarbonate, the reaction is: 2NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)."
//     }
// ,
//     {
//       id: 26,
//       question: "1. Write four uses of Borax.",
//       answer: "According to Chapter 3, page 9 (Uses of Borax):\n1.  \"It is used to prepare borate glass, which is heat resistant.\"\n2.  \"It is used in softening of water.\"\n3.  \"It is employed in borax bead test, for the detection of metallic cations.\"\n4.  \"It is used in metallurgical operations.\" (Other uses mentioned include: as a flux in welding, in making washing powders, in leather industry for tanning and dyeing, in cosmetics, soaps, textiles, paints, medicine, match industry, and as a preservative.)"
//     },
//     {
//       id: 27,
//       question: "2. What is borax bead test?",
//       answer: "According to Chapter 3, page 8 (Section 6. Borax Bead Test): \"Prepare a loop at the end of a platinum wire. Heat the wire and take a little powdered borax on the hot loop. Heat again, borax first swells up and then melts into colourless, glasslike bead on the loop. Now put a few grains of the substance, under examination, on the beads and re-heat it first in the oxidizing flame and then in the reducing flame.\" \nThe Chemistry of the Borax-bead Test (Chapter 3, pages 8-9) explains: \"Borax, when fused, is decomposed into sodium metaborate and boric anhydride. (Na₂B₄O₇ → 2NaBO₂ + B₂O₃). The metallic oxide formed from the substance, under examination, combines with B₂O₃ giving the coloured metallic borates. With cupric oxide, the beads are coloured blue in the oxidizing flame because cupric borates are blue in colour. (CuO + B₂O₃ → Cu(BO₂)₂).\""
//     },
//     {
//       id: 28,
//       question: "3. How is Borax used as a water softening agent?",
//       answer: "Chapter 3, page 9, under 'Uses of Borax', states: \"It is used in softening of water.\"\n(The provided text in Chapter 3 does **not** explain *how* borax acts as a water softening agent. The following explanation is from general chemical knowledge.) Borax (sodium tetraborate, Na₂B₄O₇) softens water by reacting with dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) ions, which are responsible for water hardness. Borax precipitates these ions as insoluble calcium borate and magnesium borate, effectively removing them from the solution. For example: Na₂B₄O₇ + Ca²⁺ → CaB₄O₇(s) + 2Na⁺. Additionally, the hydrolysis of borax produces a slightly alkaline solution, which can also help in precipitating some hardness-causing ions as hydroxides."
//     },
//     {
//       id: 29,
//       question: "4. Why are borate glazes preferred over silicate glazes?",
//       answer: "According to Chapter 3, page 12 (Uses of Boric Acid, which is related to borates): \"It is used in pottery as a glaze because borate glazes are more fusible than silicate glazes and possess a higher coefficient of expansion.\""
//     },
//     {
//       id: 30,
//       question: "5. Give any four uses of aluminium in our daily life.",
//       answer: "According to Chapter 3, page 14 (USES of Aluminium):\n1.  \"It is very-light (nearly three times less dense than iron) but posseses high tensile strength. These properties account for its extensive use in the transport industries, in the construction of aircrafts, ships and cars.\"\n2.  \"It is an excellent conductor of both electricity and heat. Thus, it is used as heat exchanger in chemical, oil and other industries. Heavy duty electrical cables are made of aluminium metal.\"\n3.  \"Aluminium foil is also used to jam radar.\" (And for insulating buildings, implying uses beyond just daily life but foil is a daily item).\n4.  \"At homes, aluminium is found in the form of cooking utensils, window frames and kitchen foil.\"\n(Other uses include: non-toxic and used for food/brewing equipment and packaging, forms alloys, making petrol/milk storage tanks)."
//     },
//     {
//       id: 31,
//       question: "6. Give two similarities between carbon and silicon.",
//       answer: "According to Chapter 3, page 16 (discussion of Group IVA elements):\n1.  \"Carbon and silicon both form acidic oxides\".\n2.  \"Both carbon and silicon form covalent bonds. Their oxides are acidic and both form hydrides and chlorides.\"\n(The text on page 17 further lists common properties: \"All the elements of this group show a valency of four. All of them form hydrides, MH₄. They form tetrachlorides, MCl₄. They also form the dioxides, MO₂.\" Carbon and silicon fit these general properties.)"
//     },
//     {
//       id: 32,
//       question: "7. Give reaction of P2O5 with cold and hot water",
//       answer: "(This information is **not found in Chapter 3**, which covers Group IIIA and Group IVA elements. Phosphorus (P) and its oxides are Group VA elements, discussed in Chapter 4 of the provided text series.)\nAccording to Chapter 4, pages 23-24:\nWith cold water: Phosphorus pentoxide (P₂O₅ or P₄O₁₀) forms metaphosphoric acid. P₂O₅(s) + H₂O(l) [cold] → 2HPO₃(aq)\nWith hot water: It forms orthophosphoric acid. P₂O₅(s) + 3H₂O(l) [hot] → 2H₃PO₄(aq)"
//     },
//     {
//       id: 33,
//       question: "8. The aqueous solution of borax is alkaline. Give reason.",
//       answer: "According to Chapter 3, page 7 (Properties of Borax): \"Its aqueous solution is alkaline in nature due to hydrolysis. Na₂B₄O₇ + 7H₂O ⇌ 2NaOH + 4H₃BO₃\".\nThe text further explains on page 8: \"So, a strong alkali (NaOH) is formed which is highly ionized. On the other hand, boric acid (H₃BO₃) is ionized to a little extent, because it is a weak acid. Hence, solution of borax as a whole is alkaline in nature.\" The hydrolysis of the tetraborate ion itself can be written as: B₄O₇²⁻(aq) + 7H₂O(l) ⇌ 4H₃BO₃(aq) + 2OH⁻(aq), showing the production of hydroxide ions which causes alkalinity."
//     },
//     {
//       id: 34,
//       question: "9. What is carbonization?",
//       answer: "(The term 'carbonization' is **not explicitly defined in Chapter 3**. While Chapter 3 discusses carbon, its allotropes, and compounds, a formal definition of 'carbonization' is not provided. The following answer is based on general chemical knowledge.)\nCarbonization is a thermochemical process of converting organic substances into carbon or a carbon-containing residue through pyrolysis or destructive distillation. It involves heating the material to high temperatures in an inert atmosphere or in the absence (or limited supply) of air, which drives off volatile components like water, methane, and other hydrocarbons, leaving behind a carbon-rich solid (char, coke, or charcoal)."
//     },
//     {
//       id: 35,
//       question: "10. Explain the structure of CO2.",
//       answer: "According to Chapter 3, page 19 (Structure of the Carbon Dioxide): \"Carbon dioxide exists in the gaseous state as linear molecules. The observed C-O bond distance is 115 pm and is in agreement with the Structure shown [referring to implied O=C=O]. Solid CO₂ has a face-centered cubic structure. Being linear its dipole moment is zero.\"\nThe linearity implies that the carbon atom is sp hybridized and forms two sigma bonds and two pi bonds with the two oxygen atoms, resulting in a double bond to each oxygen (O=C=O)."
//     },
//     {
//       id: 36,
//       question: "11. Write two uses of sodium silicate.",
//       answer: "According to Chapter 3, page 22 (Uses of Sodium Silicate):\n1.  \"It is used as a filler for soap in soap industry.\"\n2.  \"It is used in textile as a fire proof.\" (Other uses mentioned: furniture polish, calico printing.)"
//     },
//     {
//       id: 37,
//       question: "12. How borax can be prepared from colemanite? Give equation",
//       answer: "According to Chapter 3, page 6 (Manufacture of Borax, point 2): \"Now-a-days borax is almost exclusively obtained from calcium borate. Finely powdered colemanite is boiled with Na₂CO₃ solution, when CaCO₃ precipitates out and a mixture of borax and sodium metaborate is formed.\"\nEquation from the text: Ca₂B₆O₁₁(s) [Colemanite] + 2Na₂CO₃(s) → 2CaCO₃(s) + Na₂B₄O₇(s) [Borax] + 2NaBO₂(s)"
//     },
//     {
//       id: 38,
//       question: "13. Write names and formulas of oxyacids of nitrogen.",
//       answer: "(This information is **not found in Chapter 3**, which covers Group IIIA and Group IVA elements. Nitrogen (N) and its oxyacids are Group VA elements, discussed in Chapter 4 of the provided text series.)\nAccording to Chapter 4, page 10:\n\"There are two important oxyacids of nitrogen, nitrous acid and nitric acid.\"\n1.  Nitrous Acid: HNO₂\n2.  Nitric Acid: HNO₃"
//     }
//   ,
//     {
//       id: 39,
//       question: "How does nitrogen differ from other elements of its group?",
//       answer: "Nitrogen differs from other elements of its group (Group VA) in several ways:\n1.  **Physical State:** Nitrogen is a colorless gas at room temperature, while phosphorus is a solid, and arsenic, antimony, and bismuth are metallic solids.\n2.  **Electronegativity and Metallic Character:** Nitrogen is the most electronegative element in the group and has the greatest tendency to attract electrons. The metallic character increases down the group, with bismuth showing definite metallic properties, while nitrogen and phosphorus are typical non-metals.\n3.  **Availability of d-orbitals:** Phosphorus and other heavier members of the group can use d-orbitals in their bonding, allowing them to exhibit valencies like +5 by promoting an s-electron to a d-orbital. Nitrogen, being in the second period, lacks available d-orbitals in its valence shell and thus cannot expand its octet in the same way.\n4.  **Occurrence:** Nitrogen is present in its free state as a major constituent of air (78% by volume) and is relatively inactive. Inorganic compounds of nitrogen are not commonly found as minerals. In contrast, phosphorus does not occur in a free state in nature and is found in deposits of phosphate rock. (This information is from Chapter 4, referencing Table 4.1, Section 4.1.1, Section 4.2.1, and Section 4.3.1)."
//     },
//     {
//       id: 40,
//       question: "Why does aqua regia dissolve gold and platinum?",
//       answer: "Aqua regia, a mixture of one volume of concentrated HNO₃ and three volumes of concentrated HCl, dissolves noble metals like gold and platinum due to the formation of nitrosyl chloride (NOCl) and nascent chlorine, or Cl₂. The reactions are:\n\nHNO₃(conc.) + 3HCl(conc.) → NOCl(aq) + Cl₂(g) + 2H₂O(l)\n\nThe NOCl formed can further decompose:\nNOCl(g) → NO(g) + [Cl](g) (nascent chlorine)\n\nThis liberated chlorine (either Cl₂ or nascent [Cl]) is highly reactive and converts noble metals like gold and platinum into their water-soluble chlorides.\nFor example, with gold:\nAu(s) + 3[Cl](aq) → AuCl₃(aq)\n(This information is from Chapter 4, Page 18, Section 4.2.3, Point 5)."
//     },
//     {
//       id: 41,
//       question: "Why the elements of group VIA other than oxygen show more than two oxidation states?",
//       answer: "Elements of Group VIA, other than oxygen, show more than two oxidation states (specifically +2, +4, and +6) because they can utilize their vacant d-orbitals for bonding. \n- The +2 oxidation state is shown due to the two unpaired electrons in their p-orbitals.\n- The +4 oxidation state is exhibited when one electron from a p-orbital is promoted to an available d-orbital, resulting in four unpaired electrons.\n- The +6 oxidation state is shown when another electron, this time from the s-orbital, is also promoted to a d-orbital, leading to six unpaired electrons available for bonding.\nOxygen, being in the second period, does not have d-orbitals in its valence shell and is thus generally restricted to an oxidation state of -2 (except in peroxides, superoxides, or when bonded to fluorine). (This information is from Chapter 4, Page 28, Section 4.4.1)."
//     },
//     {
//       id: 42,
//       question: "Write down a comparison of the properties of oxygen and sulphur.",
//       answer: "Oxygen and sulphur, both in Group VIA, show similarities and dissimilarities:\n\n**Similarities:**\n1.  Both have the same outer electronic configuration (ns²np⁴).\n2.  Both are usually divalent.\n3.  Both exhibit allotropic forms (Oxygen: O₂, O₃; Sulphur: α, β, γ forms).\n4.  Both can form polyatomic molecules (O₂; Sulphur: S₂, S₈).\n5.  Both combine with metals forming O⁻² and S⁻² ions (oxidation state -2).\n6.  Both combine with non-metals to form covalent compounds (e.g., H₂O and H₂S; CO₂ and CS₂).\n7.  Both are typical non-metals.\n8.  Both are found in free and combined states in nature.\n\n**Dissimilarities:**\n| Property                       | Oxygen                                                                    | Sulphur                                                                                              |\n|--------------------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|\n| Allotropic Forms               | Two (O₂ and O₃).                                                          | Three (rhombic, monoclinic, and plastic).                                                            |\n| Physical State (ordinary temp.)| Gas.                                                                      | Solid.                                                                                               |\n| Solubility in Water            | Sparingly soluble.                                                        | Not soluble.                                                                                         |\n| Combustion                     | Helps in combustion.                                                      | Is itself combustible.                                                                               |\n| Magnetic Nature                | Paramagnetic.                                                             | Diamagnetic.                                                                                         |\n| Reaction with Water            | Does not react.                                                           | When steam is passed through boiling sulphur, a little H₂S and SO₂ are formed.                       |\n| Reaction with Acids            | Does not react.                                                           | Readily oxidized by concentrated H₂SO₄ or HNO₃.                                                        |\n| Reaction with Alkalies         | Does not react.                                                           | Reacts with alkali solution to form sulphides and thiosulphates.                                     |\n| Oxidation States               | Generally -2.                                                             | Shows -2, +2, +4, and +6.                                                                            |\n(This information is from Chapter 4, Page 28-29, Section 4.4.3)."
//     },
//     {
//       id: 43,
//       question: "Write down the equation for the reaction between conc. H2SO4 and copper and explain what type of reaction is it.",
//       answer: "The reaction between hot concentrated sulphuric acid (H₂SO₄) and copper (Cu) is:\n\nCu(s) + 2H₂SO₄(conc.) → CuSO₄(aq) + 2H₂O(l) + SO₂(g)\n\n**Explanation of the reaction type:**\nThis is a **redox reaction** (oxidation-reduction reaction).\n-   **Oxidation:** Copper (Cu) is oxidized. Its oxidation state changes from 0 in elemental Cu to +2 in CuSO₄.\n-   **Reduction:** Sulphuric acid (H₂SO₄) is reduced. The oxidation state of sulphur changes from +6 in H₂SO₄ to +4 in sulphur dioxide (SO₂).\nIn this reaction, concentrated sulphuric acid acts as an **oxidizing agent**.\n(This information is from Chapter 4, Page 35, Section 4.5.2, Point 3 (iv) (c) and Point 5)."
//     }

//     ,
//         {
//           id: 44,
//           question: "What is “Iodized Salt”?",
//           answer: "Iodized salt is common salt (sodium chloride) to which sodium or potassium iodide has been added. This is done to ensure the presence of iodide ion in the diet, as insufficient iodide can lead to an enlargement of the thyroid gland (Goiter). (This information is from Chapter 5, Page 21, Section 5.6)."
//         },
//         {
//           id: 45,
//           question: "What are Freons and Teflon?",
//           answer: "Freons and Teflon are compounds prepared using fluorine:\n-   **Freons:** Freon is the commercial name for low molecular mass fluorochlorocarbons, such as CCl₂F₂ and CClF₃. They are used as refrigerants and aerosol propellants. (This information is from Chapter 5, Page 20, Section 5.6).\n-   **Teflon:** Teflon is a polymerized tetrafluoroethylene compound, with the general formula (-CF₂— CF₂-)n. It is a valuable plastic that resists the action of oxidants, acids, and alkalies. It is used for making corrosion-proof parts of machinery, for coating electrical wiring, and as a non-stick coating for cooking pans. (This information is from Chapter 5, Page 20, Section 5.6)."
//         },
//         {
//           id: 46,
//           question: "Arrange the following ions in order of increasing size: F-, Cl-, I-, Br-",
//           answer: "The order of increasing ionic size for the given halide ions is: F⁻ < Cl⁻ < Br⁻ < I⁻.\nThis is based on their ionic radii (pm) values provided in the textbook: F⁻ (136 pm), Cl⁻ (181 pm), Br⁻ (196 pm), I⁻ (216 pm). (This information is from Chapter 5, Table 5.1, Page 4)."
//         },
//         {
//           id: 47,
//           question: "Why iodine has metallic luster?",
//           answer: "The textbook states that iodine is a \"metallic-appearing shiny greyish black solid\" (Chapter 5, Page 2, Section 5.1), which indicates it has metallic luster. The textbook does not explicitly detail the reason for this luster. \n\n(Information not explicitly from the textbook, but a general chemical explanation): The metallic luster of iodine is attributed to its ability to absorb light over a wide range of wavelengths and re-emit it, similar to metals. This is due to the relatively large size of iodine atoms and the delocalization or ease of excitation of its outermost electrons. In solid iodine, the molecules are packed in a layered lattice, and the interactions between these layers allow for some electron mobility, which contributes to its shiny appearance and electrical conductivity (though it's a semiconductor, not a full metallic conductor)."
//         },
//         {
//           id: 48,
//           question: "Which halogen sublimes to violet vapours?",
//           answer: "Iodine is the halogen that sublimes to produce violet vapors. While this specific property is not explicitly stated in the main descriptive text of Chapter 5, it is a well-known characteristic of iodine, and its relevance to the chapter is indicated by an exercise question (Q.13 v) asking this very point. (This information is based on common chemical knowledge related to the content of Chapter 5)."
//         },
//         {
//           id: 49,
//           question: "Which halogen is used as an antiseptic?",
//           answer: "Iodine is used as an antiseptic. The textbook mentions that its major applications are in the pharmaceutical industry, and it is used as a disinfectant and germicide. Tincture of iodine is a popular preparation. (This information is from Chapter 5, Page 21, Section 5.6 and implied by Q.13 (vi) on Page 30)."
//         },
//         {
//           id: 50,
//           question: "Which halogen is used in water treatment to kill bacteria ?",
//           answer: "Chlorine is used in water treatment to kill bacteria. It is used as a disinfectant in swimming pools and water treatment plants. (This information is from Chapter 5, Page 20, Section 5.6 and implied by Q.13 (vii) on Page 30)."
//         },
//         {
//           id: 51,
//           question: "Name the gas, which is used for earthquake prediction.",
//           answer: "Radon is the noble gas used for earthquake prediction. (This information is from Chapter 5, Page 27, Section 5.7.6, Point 10 and Q.13 (viii) on Page 30)."
//         },
//         {
//           id: 52,
//           question: "Name the gas, which is used in bactericidal lamps.",
//           answer: "Xenon is the noble gas used in bactericidal lamps. (This information is from Chapter 5, Page 27, Section 5.7.6, Point 9 and Q.13 (ix) on Page 30)."
//         }
//       ,

//         {
//           id: 53,
//           question: "(Chapter 7) 1. What is meant by organic chemistry?",
//           answer: "According to the modern definition provided in the text, organic chemistry is that branch of chemistry which deals with the study of compounds of carbon and hydrogen (hydrocarbons) and their derivatives. (from Chapter 7, Section 7.1.1)"
//         },
//         {
//           id: 54,
//           question: "(Chapter 7) 2. What are homocyclic and heterocyclic compounds? Give examples.",
//           answer: "-   **Homocyclic or Carbocyclic Compounds:** These are cyclic compounds in which the ring consists of only carbon atoms. Example: Benzene or Cyclohexane.\n-   **Heterocyclic Compounds:** These are cyclic compounds in which the ring consists of atoms of more than one kind, typically carbon along with elements like nitrogen (N), oxygen (O), or sulphur (S). Example: Pyridine.\n(from Chapter 7, Section 7.7 (2))"
//         },
//         {
//           id: 55,
//           question: "(Chapter 7) 3. Why is ethene an important industrial element? (Also asked as Q.12)",
//           answer: "The text states that cracking of petroleum produces large amounts of useful by-products, including ethene. These by-products (ethene being one of them) are used for manufacturing drugs, plastics, detergents, synthetic fibres, fertilizers, weed killers and important chemicals like ethanol, phenol and acetone. This indicates its importance as a starting material in various industrial processes. (from Chapter 7, Section 7.5, paragraph 3)"
//         },
//         {
//           id: 56,
//           question: "(Chapter 7) 4. Define isomers. Write the names of its four types.",
//           answer: "Isomers are two or more compounds having the same molecular formula but different structural formulas and properties. The phenomenon is called isomerism.\nThe text mentions five types of structural isomerism (not four):\n1.  Chain Isomerism\n2.  Position Isomerism\n3.  Functional Group Isomerism\n4.  Metamerism\n5.  Tautomerism\nIt also discusses Cis-trans (Geometric) Isomerism separately.\n(from Chapter 7, Section 7.10 and 7.10.1)"
//         },
//         {
//           id: 57,
//           question: "(Chapter 7) 5. What is meant by a functional group? Name typical functional groups containing oxygen.",
//           answer: "A functional group is an atom or a group of atoms or a double bond or a triple bond whose presence imparts specific properties to organic compounds; they are the chemically functional parts of molecules.\nTypical functional groups containing oxygen include:\n-   Hydroxyl group (-OH) in Alcohols/Phenols\n-   Ether linkage (-O-) in Ethers\n-   Formyl group (-CHO) in Aldehydes\n-   Carbonyl group (>C=O) in Ketones\n-   Carboxyl group (-COOH) in Carboxylic acids\n-   Ester group (-COOR) in Esters\n(from Chapter 7, Section 7.8 and Table 7.2)"
//         },
//         {
//           id: 58,
//           question: "(Chapter 7) 6. Define thermal cracking and steam cracking.",
//           answer: "-   **Thermal Cracking:** Breaking down of large molecules by heating at high temperature and pressure.\n-   **Steam Cracking:** A process where higher hydrocarbons in the vapour phase are mixed with steam, heated for a short duration to about 900°C, and cooled rapidly.\n(from Chapter 7, Section 7.5)"
//         },
//         {
//           id: 59,
//           question: "(Chapter 7) 7. What is meant by catenation? Give examples.",
//           answer: "Catenation is the self-linking property of an element, where atoms link with other atoms of the same element to form long chains or rings. Carbon shows this property uniquely and extensively, forming the basis for the large number of organic compounds. Examples include the carbon chains in n-butane (CH₃-CH₂-CH₂-CH₃) or the ring in cyclohexane. (from Chapter 7, Section 7.2 (1))"
//         },
//         {
//           id: 60,
//           question: "(Chapter 7) 8. What is meant by cis-trans isomerism?",
//           answer: "Cis-trans isomerism (or geometric isomerism) is a type of isomerism that arises due to restricted rotation around a carbon-carbon double bond. Compounds which possess the same structural formula but differ with respect to the positions of the identical groups in space are called cis-trans isomers. In the cis-form, similar groups lie on the same side of the double bond, while in the trans-form, they lie on opposite sides. (from Chapter 7, Section 7.10.1 (2))"
//         },
//         {
//           id: 61,
//           question: "(Chapter 7) 9. Define tautomerism and give example.",
//           answer: "Tautomerism is a type of isomerism that arises due to the shifting of a proton from one atom to another in the same molecule. (from Chapter 7, Section 7.10.1 (v)). An example is not provided in the text for this specific type."
//         },
//         {
//           id: 62,
//           question: "(Chapter 7) 10. Define alicyclic and aromatic compounds.",
//           answer: "-   **Alicyclic Compounds:** These are homocyclic compounds which contain a ring of three or more carbon atoms and resemble aliphatic compounds.\n-   **Aromatic Compounds:** These are carbocyclic compounds that contain at least one benzene ring (six carbon atoms with three alternate double and single bonds).\n(from Chapter 7, Section 7.7 (a))"
//         },
//         {
//           id: 63,
//           question: "(Chapter 7) 11. What is petroleum? Give its origin.",
//           answer: "Petroleum, also called mineral oil when refined, is a liquid of blackish colour known as crude oil when extracted. It is thought to have been formed by the slow chemical and biochemical decomposition of the remains of organic matters found between sedimentary rocks. (from Chapter 7, Section 7.4, Petroleum section)"
//         },
//         {
//           id: 64,
//           question: "(Chapter 7) 12. Why is ethene an important industrial chemical? (Duplicate of Q.3)",
//           answer: "The text states that cracking of petroleum produces large amounts of useful by-products, including ethene. These by-products (ethene being one of them) are used for manufacturing drugs, plastics, detergents, synthetic fibres, fertilizers, weed killers and important chemicals like ethanol, phenol and acetone. This indicates its importance as a starting material in various industrial processes. (from Chapter 7, Section 7.5, paragraph 3)"
//         },
//         {
//           id: 65,
//           question: "(Chapter 7) 13. What is coal tar? Give its fractions.",
//           answer: "Coal tar is one of the products obtained when coal is subjected to destructive distillation (heated in the absence of air). It contains a large number of organic compounds which separate out on fractional distillation. The specific fractions obtained from coal tar distillation are not listed in the provided text of Chapter 7. (from Chapter 7, Section 7.4, Coal section)"
//         },
//         {
//           id: 66,
//           question: "(Chapter 7) 14. How will you define octane number? How it can be improved?",
//           answer: "The quality of a fuel (like gasoline) is indicated by its octane number. It relates to how smoothly the fuel burns in an engine. Isooctane (2,2,4-trimethyl pentane) burns very smoothly and is arbitrarily given an octane number of 100. Fuels with low octane numbers (like straight-chain hydrocarbons) cause knocking.\nThe octane number can be improved by:\n1.  **Reforming:** Converting straight-chain hydrocarbons into branched-chain ones by heating in the absence of oxygen and presence of a catalyst.\n2.  **Adding Additives:** Blending the fuel with a small amount of an additive like tetraethyl lead (TEL), although TEL causes lead pollution.\n(from Chapter 7, Section 7.6)"
//         },
//         {
//           id: 67,
//           question: "(Chapter 7) 15. What is iodized salt?",
//           answer: "This answer is not found in the provided textbook text for Chapter 7. (It is found in Chapter 5)."
//         },
//         {
//           id: 68,
//           question: "(Chapter 7) 16. Write the structural formula of two possible isomers of C4H10.",
//           answer: "The two possible isomers of C₄H₁₀ (butane) are:\n1.  **n-Butane:** CH₃ — CH₂ — CH₂ — CH₃\n2.  **Isobutane:** CH₃—CH(CH₃)—CH₃\n(from Chapter 7, Section 7.10)"
//         },
//         {
//           id: 69,
//           question: "(Chapter 7) 17. Describe important sources of organic compounds.",
//           answer: "The important sources of organic compounds described are fossil fuels:\n1.  **Coal:** Formed from ancient plant remains. Destructive distillation yields coke, coal gas, and coal tar (a source of many organic compounds).\n2.  **Natural Gas:** Primarily methane, formed from organic matter decomposition. Used as fuel and in fertilizer/cement industries.\n3.  **Petroleum (Mineral Oil):** Formed from decomposition of organic matter in sedimentary rocks. Refined via fractional distillation into fractions like gasoline, kerosene, etc., which are sources of various organic compounds.\n(from Chapter 7, Section 7.4)"
//         },
//         {
//           id: 70,
//           question: "(Chapter 7) 18. What is catalytic cracking",
//           answer: "Catalytic cracking is a process where higher hydrocarbons are cracked (broken down into smaller, lower-boiling hydrocarbons) at a lower temperature (around 500°C) and lower pressure (around 2 atm) in the presence of a suitable catalyst, typically a mixture of silica (SiO₂) and alumina (Al₂O₃). This method is used for obtaining better quality gasoline with a higher octane number. (from Chapter 7, Section 7.5 (2))"
//         },
//         {
//           id: 71,
//           question: "(Chapter 8) 1. How do you distinguish between ethane and ethyne?",
//           answer: "Ethane (an alkane) and ethyne (an alkyne) can be distinguished using chemical tests that react with the triple bond in ethyne but not the single bonds in ethane:\n1.  **Reaction with Ammoniacal Silver Nitrate (Tollen's Reagent for Alkynes):** Ethyne reacts with ammoniacal silver nitrate to form a white precipitate of disilver acetylide. Ethane does not react.\n    HC≡CH + 2AgNO₃ + 2NH₄OH → AgC≡CAg↓ + 2NH₄NO₃ + 2H₂O\n2.  **Reaction with Ammoniacal Cuprous Chloride:** Ethyne reacts with ammoniacal cuprous chloride to form a reddish-brown precipitate of dicopper acetylide. Ethane does not react.\n    HC≡CH + Cu₂Cl₂ + 2NH₄OH → CuC≡CCu↓ + 2NH₄Cl + 2H₂O\n3.  **Reaction with Baeyer's Reagent (Cold Alkaline KMnO₄):** Ethyne decolorizes the pink/purple KMnO₄ solution (though the reaction is complex, oxidation occurs). Ethane does not react under these mild conditions.\n(Based on reactions in Chapter 8, Section 8.5.4 D and lack of reactivity of alkanes Section 8.3.3)"
//         },
//         {
//           id: 72,
//           question: "(Chapter 8) 2. Why the π bond is more reactive than σ bond?",
//           answer: "In the formation of a π-bond, the partially filled p-orbitals overlap in a parallel fashion. The probability of finding the π-electrons is away from the line joining the two nuclei. Because of this, π-electrons are less firmly held between the nuclei compared to σ-electrons (where electron density is concentrated between the nuclei). A π-bond is, therefore, weaker than a σ-bond and breaks more easily during reactions. Furthermore, the loosely held and more exposed π-electrons are readily available for attack by electrophilic reagents, making compounds with π-bonds (like alkenes and alkynes) more reactive than those with only σ-bonds (like alkanes). (from Chapter 8, Section 8.4.3 and 8.3.3)"
//         },
//         {
//           id: 73,
//           question: "(Chapter 8) 3. Convert 1-butene to 1-butyne.",
//           answer: "The direct conversion of 1-butene to 1-butyne is not described in a single step in the text. It typically involves multiple steps:\n1.  **Halogenation:** Add Br₂ to 1-butene to form 1,2-dibromobutane.\n    CH₂=CH-CH₂-CH₃ + Br₂ → CH₂(Br)-CH(Br)-CH₂-CH₃\n2.  **Double Dehydrohalogenation:** Treat 1,2-dibromobutane with a strong base like alcoholic KOH (first step, may yield bromobutene) followed by a stronger base like sodamide (NaNH₂) to eliminate two molecules of HBr and form the triple bond of 1-butyne.\n    CH₂(Br)-CH(Br)-CH₂-CH₃ + 2KOH (alc.) → HC≡C-CH₂-CH₃ + 2KBr + 2H₂O (Simplified - NaNH₂ is often required for terminal alkyne formation)\n(This answer outlines a plausible route based on reactions covered in Chapter 8, like dehydrohalogenation in Section 8.5.1, but the specific conversion isn't explicitly given)."
//         },
//         {
//           id: 74,
//           question: "(Chapter 8) 4. Give fours uses of methane.",
//           answer: "Four uses of methane are:\n1.  As a fuel and as an illuminating gas.\n2.  For the preparation of methyl chloride, dichloromethane, chloroform, and carbon tetrachloride.\n3.  For the industrial preparation of methyl alcohol, formaldehyde, and hydrogen cyanide.\n4.  For the preparation of carbon black (used in paints, printing inks, automobile tires).\n(An additional use mentioned is manufacturing urea fertilizer).\n(from Chapter 8, Section 8.3.5)"
//         },
//         {
//           id: 75,
//           question: "(Chapter 8) 5. Synthesize i.benzene ii. Oxalic acid from ethyne.",
//           answer: "i. **Benzene from Ethyne:** When ethyne (acetylene) is passed through a copper tube heated to 300°C, it polymerizes to form benzene.\n   3HC≡CH ---(Cu tube, 300°C)--> C₆H₆\nii. **Oxalic Acid from Ethyne:** The text describes the oxidation of ethyne with strong alkaline KMnO₄ to give glyoxal (OHC-CHO). Further oxidation of glyoxal would yield oxalic acid (HOOC-COOH), although this second step is not explicitly shown in the text.\n   HC≡CH + [O] (from alk. KMnO₄) → OHC-CHO (Glyoxal)\n   OHC-CHO + [O] → HOOC-COOH (Oxalic Acid) (This second oxidation step is implied but not explicitly stated).\n(from Chapter 8, Section 8.5.4 C2 and 8.5.4 B1)"
//         },
//         {
//           id: 76,
//           question: "(Chapter 8) 6. Convert ethene into ethylalcohol? (Also asked as Q14)",
//           answer: "Ethene can be converted into ethyl alcohol (ethanol) by hydration. This involves treating ethene with cold concentrated sulphuric acid to form ethyl hydrogen sulphate, which is then boiled with water.\n   CH₂=CH₂ + H₂SO₄(conc.) → CH₃-CH₂-OSO₃H (Ethyl hydrogen sulphate)\n   CH₃-CH₂-OSO₃H + H₂O --(Boil)--> CH₃-CH₂-OH + H₂SO₄\n(from Chapter 8, Section 8.4.4 A3)"
//         },
//         {
//           id: 77,
//           question: "(Chapter 8) 7. What is Markonikov’s rule?",
//           answer: "Markownikov’s Rule states that in the addition of an unsymmetrical reagent to an unsymmetrical alkene, the negative part of the adding reagent goes to that carbon atom of the double bond which has the least number of hydrogen atoms attached to it. (from Chapter 8, Section 8.4.4 A2)"
//         },
//         {
//           id: 78,
//           question: "(Chapter 8) 8. Write a note on acidity of ethene?",
//           answer: "The provided text for Chapter 8 does not discuss the acidity of ethene. It focuses on the acidity of ethyne (and terminal alkynes) due to the sp hybridization of the carbon atoms involved in the triple bond, which increases their electronegativity and makes the attached hydrogen slightly acidic. Ethene involves sp² hybridized carbons, which are less electronegative than sp hybridized carbons, and the C-H bonds in ethene are not considered acidic under normal conditions."
//         },
//         {
//           id: 79,
//           question: "(Chapter 8) 9. Convert methane into formic acid.",
//           answer: "Methane can be converted to formic acid via catalytic oxidation. When methane is oxidized in the presence of a copper catalyst at 400°C and 200 atm pressure, it first forms methyl alcohol, then formaldehyde, and finally formic acid (which can be further oxidized to CO₂ and H₂O).\n   CH₄ + [O] --(Cu, 400°C, 200atm)--> CH₃OH\n   CH₃OH + [O] --(Cu, 400°C, 200atm)--> HCHO + H₂O\n   HCHO + [O] --(Cu, 400°C, 200atm)--> HCOOH (Formic acid)\n(from Chapter 8, Section 8.3.4 (ii))"
//         },
//         {
//           id: 80,
//           question: "(Chapter 8) 10. What is Raney-Nickel? Give its uses.",
//           answer: "Raney Nickel is a catalyst prepared by treating a Nickel-Aluminium (Ni-Al) alloy with caustic soda (NaOH). The reaction is:\n   Ni-Al + NaOH + H₂O → Ni + NaAlO₂ + 3/2 H₂\nIt is used as a catalyst for the hydrogenation of alkenes to alkanes, typically carried out at about 100°C and up to 3 atmospheres pressure. It is also used industrially for the hydrogenation of vegetable oils to produce vegetable ghee. (from Chapter 8, Section 8.4.4 A1)"
//         },
//         {
//           id: 81,
//           question: "(Chapter 8) 11. Alkanes are less reactive than alkenes. Comment.",
//           answer: "Alkanes are less reactive than alkenes primarily due to the nature of their bonding. Alkanes contain only strong sigma (σ) bonds (C-C and C-H). The electrons in these σ-bonds are tightly held between the nuclei and are not readily available for attack by electrophilic or nucleophilic reagents, making the σ-bond inert under normal conditions. Alkenes, in addition to σ-bonds, contain a pi (π) bond. The π-electrons are located above and below the plane of the nuclei, are less firmly held, and more exposed. This makes the π-bond weaker and more susceptible to attack by electrophilic reagents, leading to the characteristic addition reactions of alkenes. Therefore, the presence of the reactive π-bond makes alkenes significantly more reactive than alkanes. (from Chapter 8, Sections 8.3.3 and 8.4.3)"
//         },
//         {
//           id: 82,
//           question: "(Chapter 8) 12. Convert ethyne into acetaldehyde.",
//           answer: "Ethyne (acetylene) can be converted into ethanal (acetaldehyde) by the addition of water in the presence of mercuric sulphate (HgSO₄) dissolved in sulphuric acid (H₂SO₄) at 75°C.\n   HC≡CH + HOH --(HgSO₄/H₂SO₄, 75°C)--> [CH₂=CHOH] (Vinyl alcohol) → CH₃CHO (Acetaldehyde)\nThe initial product, vinyl alcohol, is unstable and immediately isomerizes (tautomerizes) to the more stable acetaldehyde. (from Chapter 8, Section 8.5.4 A4)"
//         },
//         {
//           id: 83,
//           question: "(Chapter 8) 13. How cis and trans alkenes are produced? Give reactions.",
//           answer: "Cis and trans alkenes can be produced by the partial hydrogenation of alkynes, using different conditions:\n1.  **Cis-Alkene Production:** Controlled hydrogenation of an alkyne using hydrogen gas with Lindlar's catalyst (finely divided palladium supported on BaSO₄, poisoned with quinoline) yields a cis-alkene.\n    R-C≡C-R + H₂ --(Lindlar's Catalyst)--> R-CH=CH-R (cis)\n2.  **Trans-Alkene Production:** Treating an alkyne with sodium (Na) in liquid ammonia (NH₃) at -33°C yields a trans-alkene.\n    R-C≡C-R + 2Na + 2NH₃ --(liq. NH₃, -33°C)--> R-CH=CH-R (trans) + 2NaNH₂\n(from Chapter 8, Section 8.4.1 (5))"
//         },
//         {
//           id: 84,
//           question: "(Chapter 8) 14. Convert ethene into ethylalcohol? (Duplicate of Q6)",
//           answer: "Ethene can be converted into ethyl alcohol (ethanol) by hydration. This involves treating ethene with cold concentrated sulphuric acid to form ethyl hydrogen sulphate, which is then boiled with water.\n   CH₂=CH₂ + H₂SO₄(conc.) → CH₃-CH₂-OSO₃H (Ethyl hydrogen sulphate)\n   CH₃-CH₂-OSO₃H + H₂O --(Boil)--> CH₃-CH₂-OH + H₂SO₄\n(from Chapter 8, Section 8.4.4 A3)"
//         },
//         {
//           id: 85,
//           question: "(Chapter 8) 15. What is hydrogenolysis?",
//           answer: "Hydrogenolysis is a process where alkanes are prepared from alkyl halides using palladium-charcoal as a catalyst. It involves hydrogenation (addition of H₂) accompanied by bond cleavage (breaking the C-X bond).\n   R-X + H₂ --(Pd/C, Δ)--> R-H + HX\n(from Chapter 8, Section 8.3.1 (2))"
//         },
//         {
//           id: 86,
//           question: "(Chapter 8) 16. What is Baeyer’s Test? Give its uses",
//           answer: "Baeyer's Test involves treating a compound with a mild oxidizing agent, typically cold, dilute (1%), alkaline potassium permanganate (KMnO₄) solution (also known as Baeyer's Reagent). \n*Reaction with Alkenes:* Alkenes react with Baeyer's reagent undergoing hydroxylation (addition of -OH groups across the double bond) to form vicinal glycols (1,2-diols). During this reaction, the pink/purple colour of the KMnO₄ solution is discharged, and often a brown precipitate of MnO₂ is formed.\n   3CH₂=CH₂ + 2KMnO₄ + 4H₂O → 3CH₂(OH)-CH₂(OH) + 2MnO₂ + 2KOH\n*Uses:* Baeyer's test is used as a qualitative test for the detection of unsaturation (specifically carbon-carbon double or triple bonds) in an organic molecule. The disappearance of the pink/purple KMnO₄ colour indicates the presence of unsaturation. (from Chapter 8, Section 8.4.4 B2)"
//         },
//         {
//           id: 87,
//           question: "(Chapter 9) 1. Briefly describe x-ray studies of benzene structure.",
//           answer: "X-ray studies of benzene have confirmed its hexagonal planar structure. These studies revealed that all six carbon atoms and all six hydrogen atoms lie in the same plane. All C-C-C and H-C-C bond angles are 120°. Furthermore, all carbon-carbon bond lengths are identical (1.397 Å), which is intermediate between a typical C-C single bond (1.54 Å) and a C=C double bond (1.34 Å). The C-H bond length was found to be 1.09 Å. (from Chapter 9, Section 9.3.4)"
//         },
//         {
//           id: 88,
//           question: "(Chapter 9) 2. Define electrophile. Give two examples.",
//           answer: "The text in Chapter 9 uses the term electrophile extensively in the context of benzene's reactions but does not provide a formal definition. It describes electrophiles as species that attack the electron-rich benzene ring. Examples generated or used in the reactions within Chapter 9 include:\n-   Halogenonium ions (X⁺, e.g., Cl⁺, Br⁺) generated from halogens using a catalyst like FeX₃ or AlCl₃.\n-   Nitronium ion (NO₂⁺) generated from a mixture of concentrated HNO₃ and H₂SO₄.\n-   Sulphonium species (like SO₃ or HSO₃⁺) from H₂SO₄ or fuming H₂SO₄.\n-   Carbocations (R⁺) generated from alkyl halides and AlCl₃ in Friedel-Crafts alkylation.\n-   Acylium ions (RCO⁺) generated from acyl halides and AlCl₃ in Friedel-Crafts acylation.\n(Examples derived from mechanisms in Chapter 9, Section 9.5.2; formal definition implied)"
//         },
//         {
//           id: 89,
//           question: "(Chapter 9) 3. Give reaction of benzene with ozone.(ozonolysis)",
//           answer: "Benzene reacts with ozone (O₃) to first form an unstable intermediate, benzene triozonide. This triozonide is then typically hydrolyzed (e.g., with Zn/H₂O) to yield three molecules of glyoxal (OHC-CHO).\n   C₆H₆ + 3O₃ → C₆H₆(O₃)₃ (Benzene triozonide)\n   C₆H₆(O₃)₃ + 3H₂O --(Zn)--> 3 OHC-CHO + 3H₂O₂\n(from Chapter 9, Section 9.5.3 (d) ii)"
//         },
//         {
//           id: 90,
//           question: "(Chapter 9) 4. How benzene is converted into maleic acid by catalytic oxidation?",
//           answer: "Benzene is oxidized when strongly heated with air in the presence of vanadium pentoxide (V₂O₅) as a catalyst. The benzene ring is destroyed, and maleic anhydride is formed, which upon hydrolysis yields maleic acid.\n   C₆H₆ + 9/2 O₂ --(V₂O₅, Heat)--> C₄H₂O₃ (Maleic Anhydride) + 2CO₂ + 2H₂O\n   C₄H₂O₃ + H₂O → HOOC-CH=CH-COOH (Maleic Acid)\n(from Chapter 9, Section 9.5.3 (d) i)"
//         },
//         {
//           id: 91,
//           question: "(Chapter 9) 5. What are aromatic compounds?",
//           answer: "Aromatic hydrocarbons include benzene and all those compounds that are structurally related to benzene. They originally derived their name from their characteristic aroma, but this is not a defining feature. They generally have a low hydrogen-to-carbon ratio and often contain a six-carbon unit similar to benzene. (from Chapter 9, Section 9.1)"
//         },
//         {
//           id: 92,
//           question: "(Chapter 9) 6. Why benzene is less reactive than alkene?",
//           answer: "Benzene is less reactive than alkenes despite being highly unsaturated because of its unique stability derived from the extensive delocalization of its π-electrons. The π-electrons form a continuous sheath above and below the ring, making them less available for electrophilic attack compared to the localized π-electrons in an alkene double bond. While alkenes readily undergo addition reactions, benzene resists addition reactions (which would destroy the stable delocalized system) and prefers electrophilic substitution reactions, which require more powerful electrophiles and often catalysts, allowing the stable aromatic ring to be retained in the product. (from Chapter 9, Section 9.6 and 9.5.1)"
//         },
//         {
//           id: 93,
//           question: "(Chapter 9) 7. What is Wurts Fitting reaction? Give its importance.",
//           answer: "The Wurtz-Fittig reaction involves reacting an aryl halide (like bromobenzene) with an alkyl halide (like bromoethane) and sodium metal in dry ether. It results in the formation of an alkyl aromatic hydrocarbon.\n   C₆H₅Br + 2Na + BrC₂H₅ --(Ether)--> C₆H₅C₂H₅ + 2NaBr\n*Importance:* It extends the Wurtz reaction (used for alkane synthesis) to the synthesis of alkyl aromatic hydrocarbons. (from Chapter 9, Section 9.4 (5))"
//         },
//         {
//           id: 94,
//           question: "(Chapter 9) 8. Give two oxidation reactions of benzene.",
//           answer: "Two oxidation reactions of benzene are:\n1.  **Catalytic Oxidation:** Benzene is oxidized by heating strongly with air in the presence of V₂O₅ catalyst to form maleic anhydride, CO₂, and H₂O.\n    C₆H₆ + 9/2 O₂ --(V₂O₅, Heat)--> C₄H₂O₃ + 2CO₂ + 2H₂O\n2.  **Ozonolysis:** Benzene reacts with ozone to form benzene triozonide, which upon hydrolysis yields glyoxal.\n    C₆H₆ + 3O₃ → C₆H₆(O₃)₃ --(H₂O/Zn)--> 3 OHC-CHO\n(Combustion is also an oxidation reaction: 2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O)\n(from Chapter 9, Section 9.5.3 (c) and (d))"
//         },
//         {
//           id: 95,
//           question: "(Chapter 9) 9. What are fused rings aromatic compounds?",
//           answer: "Fused ring aromatic compounds are polycyclic aromatic hydrocarbons in which the benzene rings are fused together at ortho positions, meaning the adjacent rings share a common carbon-to-carbon bond (two carbon atoms). Examples given are naphthalene, phenanthrene, and anthracene. (from Chapter 9, Section 9.1 (b) ii)"
//         },
//         {
//           id: 96,
//           question: "(Chapter 9) 10. Give reaction of benzene with SO3.",
//           answer: "SO₃ (sulfur trioxide) is the actual electrophile in the sulphonation of benzene when concentrated sulfuric acid is used. It attacks the benzene ring to form a carbocation intermediate, which then loses a proton to form benzenesulphonic acid. The direct attack step can be represented as:\n   C₆H₆ + SO₃ → [C₆H₆SO₃] (intermediate) → C₆H₅SO₃H\n(from Chapter 9, Section 9.5.2 (3) - Mechanism)"
//         },
//         {
//           id: 97,
//           question: "(Chapter 9) 11. Prepare benzene from i. n-Hexane ii. Sodium benzoate",
//           answer: "i.  **From n-Hexane:** Benzene is prepared by passing the vapours of n-hexane over a mixture of catalysts (Cr₂O₃ + Al₂O₃ + SiO₂) at 500°C. This process is called aromatization or reforming.\n    CH₃(CH₂)₄CH₃ --(Cr₂O₃/Al₂O₃/SiO₂, 500°C)--> C₆H₆ + 4H₂\nii. **From Sodium Benzoate:** Benzene is prepared in the laboratory by heating sodium benzoate with soda lime (NaOH + CaO).\n    C₆H₅COONa + NaOH --(CaO, Heat)--> C₆H₆ + Na₂CO₃\n(from Chapter 9, Section 9.4 (3) and (4) i)"
//         },
//         {
//           id: 98,
//           question: "(Chapter 9) 12. Give the mechanism of nitration of Benzene.",
//           answer: "The mechanism for the nitration of benzene involves three steps:\n1.  **Generation of the Electrophile (Nitronium ion, NO₂⁺):** Concentrated sulfuric acid protonates nitric acid, which then loses water to form the nitronium ion.\n    HNO₃ + H₂SO₄ ⇌ H₂NO₃⁺ + HSO₄⁻\n    H₂NO₃⁺ ⇌ NO₂⁺ + H₂O\n2.  **Attack of Electrophile on Benzene Ring:** The electrophile NO₂⁺ attacks the π-electron cloud of benzene to form a resonance-stabilized carbocation intermediate (arenium ion or sigma complex).\n    C₆H₆ + NO₂⁺ → [C₆H₆NO₂]⁺ (sigma complex)\n3.  **Removal of Proton:** The HSO₄⁻ ion (or another base like H₂O) removes a proton from the carbon atom bearing the NO₂ group, restoring the stable aromatic ring and forming nitrobenzene.\n    [C₆H₆NO₂]⁺ + HSO₄⁻ → C₆H₅NO₂ + H₂SO₄\n(from Chapter 9, Section 9.5.2 (2))"
//         },
//         {
//           id: 99,
//           question: "(Chapter 9) 13. Give reactivity of benzene towards electrophiles.",
//           answer: "Benzene's delocalized π-electrons are less available for attack by weak electrophiles compared to the localized π-electrons of alkenes. Therefore, benzene requires more powerful electrophiles to react. Reactions like halogenation require catalysts (e.g., FeX₃, AlCl₃) to generate strong electrophiles (like X⁺). Benzene undergoes electrophilic substitution reactions, where an electrophile replaces a hydrogen atom on the ring, rather than addition reactions (which occur less readily) because substitution allows the stable, delocalized aromatic system to be retained in the product. (from Chapter 9, Section 9.5.1)"
//         },
//         {
//           id: 100,
//           question: "(Chapter 9) 14. Show Benzene’s cyclic structure with diagram.",
//           answer: "Benzene has a cyclic, regular hexagonal structure. It can be represented by Kekule structures with alternating single and double bonds, or often by a hexagon with an inscribed circle representing the delocalized π-electron cloud.\n\n   [Diagram showing a hexagon with alternating double bonds] \n   OR \n   [Diagram showing a hexagon with a circle inside]\n(Based on structures shown throughout Chapter 9, e.g., Section 9.3.3, 9.3.7)"
//         },
//         {
//           id: 101,
//           question: "(Chapter 9) 15. Define aromatization.",
//           answer: "Aromatization is the process of converting non-aromatic hydrocarbons (like alkanes or cycloalkanes) into aromatic hydrocarbons (like benzene or its derivatives). An example given is the conversion of n-hexane into benzene by passing its vapours over specific catalysts (Cr₂O₃ + Al₂O₃ + SiO₂) at 500°C. (from Chapter 9, Section 9.4 (3))"
//         },
//         {
//           id: 102,
//           question: "(Chapter 10) 1. Prepare (i) ethyl thioalcohol (ii) ethyl acetate from ethyl bromide.",
//           answer: "(i) **Ethyl thioalcohol (Ethanethiol):** React ethyl bromide (CH₃CH₂Br) with sodium hydrogen sulphide (NaSH) or potassium hydrogen sulphide (KSH). The SH⁻ ion acts as a nucleophile.\n   CH₃CH₂Br + NaSH → CH₃CH₂SH + NaBr\n(ii) **Ethyl acetate:** React ethyl bromide (CH₃CH₂Br) with sodium acetate (CH₃COONa). The acetate ion (CH₃COO⁻) acts as a nucleophile.\n   CH₃CH₂Br + CH₃COONa → CH₃COOCH₂CH₃ + NaBr\n(These reactions are shown in the table of SN reactions in Chapter 10, Page 14)"
//         },
//         {
//           id: 103,
//           question: "(Chapter 10) 2. What are primary, secondary and tertiary alkyl halides? Give example of each.",
//           answer: "-   **Primary (1°) Alkyl Halide:** The halogen atom is attached to a primary carbon atom (a carbon attached to only one or no other carbon atom). Example: Chloroethane (CH₃CH₂Cl).\n-   **Secondary (2°) Alkyl Halide:** The halogen atom is attached to a secondary carbon atom (a carbon attached to two other carbon atoms). Example: 2-Chloropropane (CH₃CHClCH₃).\n-   **Tertiary (3°) Alkyl Halide:** The halogen atom is attached to a tertiary carbon atom (a carbon attached to three other carbon atoms). Example: 2-Chloro-2-methylpropane ((CH₃)₃CCl).\n(from Chapter 10, Section 10.1)"
//         },
//         {
//           id: 104,
//           question: "(Chapter 10) 3. Explain Markownikov’s rule with suitable example.",
//           answer: "This answer is not found in the provided textbook text for Chapter 10. (Markownikov's rule is discussed in Chapter 8 concerning addition to alkenes)."
//         },
//         {
//           id: 105,
//           question: "(Chapter 10) 4. Starting from C2H5Br how will you prepare ethane and ethene?",
//           answer: "-   **Ethane from Ethyl Bromide:** Ethyl bromide can be reduced to ethane using Zinc (Zn) metal in the presence of an aqueous acid (like HCl or CH₃COOH), or via hydrogenolysis using H₂ gas with a Pd/C catalyst.\n    CH₃CH₂Br + Zn + H⁺ + Br⁻ → CH₃CH₃ + ZnBr₂ (using Zn/acid)\n    OR\n    CH₃CH₂Br + H₂ --(Pd/C, Δ)--> CH₃CH₃ + HBr (hydrogenolysis)\n-   **Ethene from Ethyl Bromide:** Ethene can be prepared by β-elimination reaction. Treating ethyl bromide with a strong base, such as alcoholic potassium hydroxide (KOH), causes the removal of HBr.\n    CH₃CH₂Br + KOH(alc.) → CH₂=CH₂ + KBr + H₂O\n(Reduction from Section 10.5.3 (2); Elimination reaction implied by mechanism discussion in Section 10.5.3)"
//         },
//         {
//           id: 106,
//           question: "(Chapter 10) 5. Explain the following reaction: CH4 CH3CH2COOH.",
//           answer: "The conversion of Methane (CH₄) to Propanoic Acid (CH₃CH₂COOH) involves multiple steps and is not shown as a direct reaction in Chapter 10. A possible synthetic route might involve:\n1.  CH₄ + Cl₂ --(UV light)--> CH₃Cl (Methyl chloride)\n2.  CH₃Cl + Mg --(Dry Ether)--> CH₃MgI (Methyl magnesium chloride - Grignard)\n3.  CH₃MgI + CH₂O (Formaldehyde) → Intermediate --(H₃O⁺)--> CH₃CH₂OH (Ethanol)\n4.  CH₃CH₂OH + PBr₃ → CH₃CH₂Br (Ethyl bromide)\n5.  CH₃CH₂Br + KCN(alc.) → CH₃CH₂CN (Propanenitrile)\n6.  CH₃CH₂CN + 2H₂O + HCl --(Heat)--> CH₃CH₂COOH + NH₄Cl\n(This involves reactions described or similar to those in Chapters 8, 10, 11, 12, and 13, but the specific sequence isn't given in Chapter 10)."
//         },
//         {
//           id: 107,
//           question: "(Chapter 10) 6. How do you compare SN1 and SN2 mechanism?",
//           answer: "**Comparison of SN1 and SN2 Mechanisms:**\n| Feature          | SN1 (Nucleophilic Substitution Unimolecular) | SN2 (Nucleophilic Substitution Bimolecular) |\n|------------------|----------------------------------------------|----------------------------------------------|\n| **Steps**        | Two steps (Ionization then Attack)           | One step (Simultaneous attack and departure) |\n| **Intermediate** | Carbocation                                  | Transition state (no true intermediate)      |\n| **Molecularity** | Unimolecular (Rate-det. step = 1 molecule) | Bimolecular (Rate-det. step = 2 molecules) |\n| **Kinetics**     | First order (Rate = k[Alkyl Halide])         | Second order (Rate = k[Alkyl Halide][Nu⁻])  |\n| **Stereochem.**  | Racemization (50% Inversion, 50% Retention)| Complete Inversion of configuration          |\n| **Nu⁻ Attack**   | Either side of planar carbocation            | Backside attack (opposite leaving group)     |\n| **Substrate**    | Favored by Tertiary (3°) alkyl halides       | Favored by Primary (1°) alkyl halides        |\n(Based on descriptions in Chapter 10, Section 10.5.2)"
//         },
//         {
//           id: 108,
//           question: "(Chapter 10) 7. How do we get alkyl nitriles from Grignard’s reagent?",
//           answer: "Alkyl nitriles (R-CN) can be prepared by reacting a Grignard reagent (R-MgX) with cyanogen chloride (Cl-C≡N).\n   R-MgX + Cl-C≡N → R-C≡N + Mg(X)Cl\n(from Chapter 10, Section 10.6, Reaction iii)"
//         },
//         {
//           id: 109,
//           question: "(Chapter 10) 8. What are elimination reactions? Give an example of E1 reaction.",
//           answer: "Elimination reactions involve the removal of two atoms or groups from adjacent carbon atoms in a substrate molecule, typically under the influence of a base or nucleophile, resulting in the formation of a multiple bond (e.g., a double bond in β-elimination).\n**Example of E1 Reaction:** The E1 mechanism involves two steps. First, the alkyl halide ionizes slowly to form a carbocation. Second, a base (like water or the nucleophile itself) removes a proton from the β-carbon adjacent to the carbocation center, forming an alkene.\n*Step 1 (Ionization):* (CH₃)₃C-Br ⇌ (CH₃)₃C⁺ + Br⁻ (slow)\n*Step 2 (Proton removal):* (CH₃)₃C⁺ + H₂O → CH₂=C(CH₃)₂ + H₃O⁺ (fast)\n(Definition and mechanism from Chapter 10, Section 10.5.3)"
//         },
//         {
//           id: 110,
//           question: "(Chapter 10) 9. What is Grignard reagent? (Also asked as Q14)",
//           answer: "A Grignard reagent is an organometallic compound, specifically an alkyl magnesium halide with the general formula R-MgX, where R is an alkyl group and X is a halogen (Cl, Br, I). It is prepared by reacting an alkyl halide with magnesium metal in dry ether. (from Chapter 10, Section 10.6)"
//         },
//         {
//           id: 111,
//           question: "(Chapter 10) 10. What are Alkyl halides? Give their general formula.",
//           answer: "Alkyl halides are monohalo derivatives of alkanes. Their general formula is R-X, where R is an alkyl group (like methyl, ethyl, propyl) and X represents a halogen atom (F, Cl, Br, I). (from Chapter 10, Section 10.1)"
//         },
//         {
//           id: 112,
//           question: "(Chapter 10) 11. What are types of nucleophilic substitution reaction?",
//           answer: "There are two main types (mechanisms) of nucleophilic substitution reactions discussed for alkyl halides:\n1.  Nucleophilic Substitution Bimolecular (SN2)\n2.  Nucleophilic Substitution Unimolecular (SN1)\n(from Chapter 10, Section 10.5.2)"
//         },
//         {
//           id: 113,
//           question: "(Chapter 10) 12. Convert ethyl alcohol into their respective halides by using PCl3 and PCl5",
//           answer: "Ethyl alcohol (Ethanol) can be converted to ethyl halides using phosphorus halides:\n-   **Using PCl₃:** 3CH₃CH₂OH + PCl₃ → 3CH₃CH₂Cl + H₃PO₃\n-   **Using PCl₅:** CH₃CH₂OH + PCl₅ → CH₃CH₂Cl + POCl₃ + HCl\n(from Chapter 10, Section 10.3 (1) c)"
//         },
//         {
//           id: 114,
//           question: "(Chapter 10) 13. What is Wurtz synthesis?",
//           answer: "Wurtz synthesis is a reaction where alkyl halides react with sodium metal in an ether solvent to couple the alkyl groups and form an alkane, usually with double the number of carbon atoms as the original alkyl halide. It is particularly useful for preparing symmetrical alkanes (R-R).\n   Example: 2 CH₃CH₂Cl + 2Na --(Ether)--> CH₃CH₂CH₂CH₃ + 2NaCl\n(from Chapter 10, Section 10.5.3 (1))"
//         },
//         {
//           id: 115,
//           question: "(Chapter 10) 14. What is Grignard reagent? (Duplicate of Q9)",
//           answer: "A Grignard reagent is an organometallic compound, specifically an alkyl magnesium halide with the general formula R-MgX, where R is an alkyl group and X is a halogen (Cl, Br, I). It is prepared by reacting an alkyl halide with magnesium metal in dry ether. (from Chapter 10, Section 10.6)"
//         },
//         {
//           id: 116,
//           question: "(Chapter 11) 1. Convert methanol into ethanol",
//           answer: "The conversion of methanol to ethanol is not explicitly shown in Chapter 11. A typical route involves:\n1.  Convert methanol to methyl halide (e.g., CH₃OH + PBr₃ → CH₃Br).\n2.  React methyl halide with KCN to form ethanenitrile (CH₃Br + KCN → CH₃CN).\n3.  Reduce the nitrile to ethylamine (e.g., CH₃CN + H₂/Ni → CH₃CH₂NH₂).\n4.  React ethylamine with nitrous acid to form ethanol (CH₃CH₂NH₂ + HNO₂ → CH₃CH₂OH + N₂ + H₂O).\nAlternatively, using Grignard reaction (requires reactions from Ch 10):\n1.  CH₃OH → CH₃Br\n2.  CH₃Br + Mg → CH₃MgBr\n3.  CH₃MgBr + HCHO (formaldehyde) → Intermediate --(H₃O⁺)--> CH₃CH₂OH.\n(This answer is not found in the provided textbook text for Chapter 11)."
//         },
//         {
//           id: 117,
//           question: "(Chapter 11) 2. Differentiate between primary and secondary alcohols.",
//           answer: "The difference lies in the type of carbon atom the hydroxyl (-OH) group is attached to:\n-   **Primary (1°) Alcohol:** The -OH group is attached to a primary carbon atom (a carbon atom attached to only one or no other carbon atom). Example: Ethanol (CH₃CH₂OH).\n-   **Secondary (2°) Alcohol:** The -OH group is attached to a secondary carbon atom (a carbon atom attached to two other carbon atoms). Example: 2-Propanol (CH₃CHOHCH₃).\nThey also differ in their oxidation products (primary alcohols oxidize to aldehydes then carboxylic acids; secondary alcohols oxidize to ketones) and their reactivity in the Lucas test (secondary react in 5-10 mins, primary react only on heating).\n(Definitions from Chapter 11, Section 11.2; Lucas test from 11.3; Oxidation from 11.2.7)"
//         },
//         {
//           id: 118,
//           question: "(Chapter 11) 3. Write structural formula of a)carbolic acid b)glycerol",
//           answer: "a)  **Carbolic Acid (Phenol):** C₆H₅OH or [A benzene ring with an -OH group attached]\nb)  **Glycerol (1,2,3-Propanetriol):**\n    CH₂OH\n     |\n    CHOH\n     |\n    CH₂OH\n(Phenol structure from 11.5; Glycerol structure shown in diagram in 11.2.1 (iii))"
//         },
//         {
//           id: 119,
//           question: "(Chapter 11) 4. What are rectified spirit, commercial alcohol and absolute alcohol?",
//           answer: "-   **Rectified Spirit:** Ethanol obtained by repeated distillation of the fermentation product (which is usually up to 12-14% alcohol). Rectified spirit contains about 95% ethanol.\n-   **Absolute Alcohol:** Highly pure ethanol (close to 100%). It can be obtained by redistilling rectified spirit in the presence of a dehydrating agent like CaO to absorb the remaining moisture.\n-   **Commercial Alcohol:** This term is not explicitly defined in the text, but usually refers to ethanol sold for industrial use, often meaning rectified spirit (95% ethanol).\n(Definitions derived from Chapter 11, Section 11.2.2, Ethanol section)"
//         },
//         {
//           id: 120,
//           question: "(Chapter 11) 5. Why water has higher boiling point than ethanol?",
//           answer: "The text states that alcohols have higher boiling points than corresponding alkanes due to hydrogen bonding. It does not explicitly compare the boiling points of water and ethanol or provide the reasons. (Reasons generally involve water's ability to form more hydrogen bonds per molecule and its smaller size, leading to stronger overall intermolecular forces compared to ethanol). (Inference based on discussion in Chapter 11, Section 11.2.3, but direct comparison is missing)."
//         },
//         {
//           id: 121,
//           question: "(Chapter 11) 6. Convert methanol into ethanol and acetone into ethyle alcohol.",
//           answer: "-   **Methanol into Ethanol:** This conversion is not explicitly detailed in Chapter 11. See answer to Q1 of Chapter 11 for possible routes.\n-   **Acetone into Ethyl Alcohol:** This conversion is not explicitly detailed in Chapter 11. Reduction of acetone (propanone) yields 2-propanol (a secondary alcohol), not ethanol (a primary alcohol).\n    CH₃COCH₃ + [H] → CH₃CHOHCH₃ (2-Propanol)\n(Therefore, the conversion of acetone to ethanol is not a direct standard reaction shown)."
//         },
//         {
//           id: 122,
//           question: "(Chapter 11) 7. What is Lucas test?",
//           answer: "Lucas test is used to identify and distinguish between primary, secondary, and tertiary alcohols. The test involves reacting the alcohol with the Lucas reagent (concentrated HCl in anhydrous ZnCl₂). An oily layer of the corresponding alkyl chloride separates out at different rates:\n-   Tertiary alcohols: Form an oily layer immediately.\n-   Secondary alcohols: Form an oily layer in five to ten minutes.\n-   Primary alcohols: Form an oily layer only upon heating.\n(from Chapter 11, Section 11.3)"
//         },
//         {
//           id: 123,
//           question: "(Chapter 11) 8. Give the uses of ethyle alcohols and methyl alcohols.",
//           answer: "-   **Methyl Alcohol (Methanol):** Used as a solvent (for fats, oils, paints, varnishes), as antifreeze in automobile radiators, and for denaturing ethyl alcohol.\n-   **Ethyl Alcohol (Ethanol):** Used as a solvent, as a drink (beverage), as a fuel (in some countries), in pharmaceutical preparations, and as a preservative for biological specimens.\n(from Chapter 11, Section 11.4)"
//         },
//         {
//           id: 124,
//           question: "(Chapter 11) 9. Ethyl alcohol is liquid while methyl chloride is a gas. Why?",
//           answer: "The text states that lower alcohols (like ethanol) are liquids due to intermolecular hydrogen bonding. Methyl chloride is not discussed in Chapter 11, but it is known to be a gas at room temperature. (The reason, not explicitly stated in comparison in Ch 11, is that ethanol molecules are strongly associated via hydrogen bonds, requiring more energy to vaporize, while methyl chloride molecules are held together by much weaker dipole-dipole and van der Waals forces). (Hydrogen bonding in alcohols mentioned in Chapter 11, Section 11.2.3)"
//         },
//         {
//           id: 125,
//           question: "(Chapter 11) 10. Write the names and formulas of two polyhydric alcohols.",
//           answer: "Polyhydric alcohols contain more than one -OH group. Two examples shown in the text are:\n1.  **Ethylene Glycol (1,2-Ethanediol):** CH₂(OH)CH₂(OH)\n2.  **Glycerol (1,2,3-Propanetriol):** CH₂(OH)CH(OH)CH₂(OH)\n(from Chapter 11, Section 11.2.1 (iii))"
//         },
//         {
//           id: 126,
//           question: "(Chapter 11) 11. Define fermentation. Give its conditions.",
//           answer: "Fermentation is a biochemical process which occurs in the presence of certain enzymes secreted by microorganisms such as yeast. It is used industrially to prepare ethanol.\n**Conditions:**\n-   Optimum temperature: 25-35°C.\n-   Presence of enzymes (from yeast).\n-   Proper aeration.\n-   Dilution of solution.\n-   Absence of any preservative.\n(from Chapter 11, Section 11.2.2, Ethanol section)"
//         },
//         {
//           id: 127,
//           question: "(Chapter 11) 12. Absolute alcohols cannot be prepared by fermentation. Why?",
//           answer: "Absolute alcohol (nearly 100% ethanol) cannot be prepared directly by fermentation because the enzymes responsible for fermentation become inactive when the alcohol concentration reaches about 12%, and it never exceeds 14%. To get higher concentrations, the fermentation product must be distilled (yielding 95% rectified spirit), and then further dehydrated (e.g., using CaO) to obtain absolute alcohol. (from Chapter 11, Section 11.2.2, Ethanol section)"
//         },
//         {
//           id: 128,
//           question: "(Chapter 11) 13. What is wood-spirit? How is it prepared from water gas?",
//           answer: "Wood-spirit is another name for methanol (methyl alcohol). It was formerly called this because it was prepared by the distillation of wood.\nIt is prepared industrially from water gas (a mixture of carbon monoxide and hydrogen) by passing the purified and compressed gases over a catalyst mixture (ZnO + Cr₂O₃) heated to 450-500°C under 200 atm pressure.\n   CO(g) + 2H₂(g) --(ZnO+Cr₂O₃, 450-500°C, 200atm)--> CH₃OH(g)\n(from Chapter 11, Section 11.2.2, Methanol section)"
//         },
//         {
//           id: 129,
//           question: "(Chapter 11) 14. Write equation for the reaction of C2H5OH with PBr3, PCI5",
//           answer: "-   **Reaction with PBr₃:**\n    3CH₃CH₂OH + PBr₃ → 3CH₃CH₂Br + H₃PO₃\n-   **Reaction with PCl₅:**\n    CH₃CH₂OH + PCl₅ → CH₃CH₂Cl + POCl₃ + HCl\n(from Chapter 11, Section 11.2.7 (iii))"
//         },
//         {
//           id: 130,
//           question: "(Chapter 13) 1. What are peptides and peptide linkage?",
//           answer: "Peptides are compounds formed by the condensation of two or more (same or different) α-amino acids. The condensation occurs between the carboxyl group of one amino acid and the amino group of another, with the elimination of a water molecule. The resulting -CO-NH- linkage formed between the amino acids is called a peptide linkage. (from Chapter 13, Section 13.8.8)"
//         },
//         {
//           id: 131,
//           question: "(Chapter 13) 2. What is ninhydrin test?",
//           answer: "Ninhydrin test is a chemical test for amino acids. Ninhydrin reacts with an amino acid to form an intensely coloured bluish-violet product. This reaction is widely used to 'visualize' amino acids, for example, after separation by paper chromatography. (from Chapter 13, Section 13.8.7)"
//         },
//         {
//           id: 132,
//           question: "(Chapter 13) 3. What are aromatic carboxylic acids?",
//           answer: "Aromatic carboxylic acids are organic compounds containing a carboxyl group (-COOH) attached directly to an aryl group (like a benzene ring). Their general formula can be represented as Ar-COOH. Example: Benzoic acid (C₆H₅COOH). (from Chapter 13, Section 13.1)"
//         },
//         {
//           id: 133,
//           question: "(Chapter 13) 4. Give the mechanism for the esterification of the carboxylic acids.",
//           answer: "The mechanism for the acid-catalyzed esterification between a carboxylic acid (e.g., acetic acid) and an alcohol (e.g., ethanol) involves several steps:\n1.  **Protonation of Carboxylic Acid:** The carbonyl oxygen of the carboxylic acid is protonated by the acid catalyst (H₂SO₄), making the carbonyl carbon more electrophilic.\n    CH₃COOH + H⁺ ⇌ [CH₃C(OH)₂]⁺\n2.  **Nucleophilic Attack by Alcohol:** The alcohol molecule acts as a nucleophile and attacks the protonated carbonyl carbon.\n    [CH₃C(OH)₂]⁺ + C₂H₅OH ⇌ CH₃C(OH)₂(O⁺H C₂H₅)\n3.  **Proton Transfer:** A proton is transferred, typically to one of the -OH groups, preparing it to leave as water.\n    CH₃C(OH)₂(O⁺H C₂H₅) ⇌ CH₃C(OH)(OH₂⁺)(OC₂H₅)\n4.  **Elimination of Water and Deprotonation:** Water molecule leaves, and a proton is removed from the remaining oxygen, regenerating the acid catalyst and forming the ester.\n    CH₃C(OH)(OH₂⁺)(OC₂H₅) ⇌ [CH₃C(OH)(OC₂H₅)]⁺ + H₂O\n    [CH₃C(OH)(OC₂H₅)]⁺ ⇌ CH₃COOC₂H₅ + H⁺\n(from Chapter 13, Section 13.6 (b) 2, Mechanism)"
//         },
//         {
//           id: 134,
//           question: "(Chapter 13) 5. What are essential and non-essential amino acids?",
//           answer: "-   **Non-essential Amino Acids:** These are the amino acids that the human body can synthesize itself. The text states the body can synthesize ten out of the twenty required for protein synthesis.\n-   **Essential Amino Acids:** These are the amino acids that the human body cannot synthesize and must be supplied through the diet. They are required for proper health and growth, and their deficiency can cause diseases. The text mentions there are ten essential amino acids.\n(from Chapter 13, Section 13.8.1)"
//         },
//         {
//           id: 135,
//           question: "(Chapter 13) 6. Name five dicarboxylic acids and give their formulas.",
//           answer: "The text explicitly shows the formulas for two aliphatic dicarboxylic acids and one aromatic dicarboxylic acid:\n1.  **Oxalic Acid:** HOOC-COOH\n2.  **Malonic Acid:** HOOC-CH₂-COOH\n3.  **Phthalic Acid:** C₆H₄(COOH)₂ (specifically benzene-1,2-dicarboxylic acid)\n(Other common examples like Succinic acid, Glutaric acid, Adipic acid are not explicitly named or shown with formulas in Chapter 13). (from Chapter 13, Section 13.1)"
//         },
//         {
//           id: 136,
//           question: "(Chapter 13) 7. What is strecker’s synthesis?",
//           answer: "The Strecker synthesis is a method for preparing α-amino acids. It involves adding hydrogen cyanide (HCN) to an aldehyde in the presence of ammonia (NH₃). This forms an intermediate α-amino nitrile, which upon acidic hydrolysis yields an α-amino acid.\n   RCHO + HCN + NH₃ → R-CH(NH₂)-CN (α-amino nitrile)\n   R-CH(NH₂)-CN + 2H₂O + H⁺ → R-CH(NH₂)-COOH + NH₄⁺\n(from Chapter 13, Section 13.8.5 (2))"
//         },
//         {
//           id: 137,
//           question: "(Chapter 13) 8. Give four uses of nitric acid.",
//           answer: "This answer is not found in the provided textbook text for Chapter 13. (Uses of nitric acid are listed in Chapter 4)."
//         },
//         {
//           id: 138,
//           question: "(Chapter 13) 9. How carboxylic acid is converted into a-amino acids?",
//           answer: "Carboxylic acids can be converted into α-amino acids indirectly. First, the carboxylic acid is halogenated at the α-position (e.g., using Br₂/P) to form an α-bromo carboxylic acid. Then, this α-bromoacid is reacted with ammonia to substitute the bromine atom with an amino group, yielding the α-amino acid.\n   RCH₂COOH + Br₂ --(P)--> RCH(Br)COOH + HBr\n   RCH(Br)COOH + 2NH₃ → RCH(NH₂)COOH + NH₄Br\n(from Chapter 13, Section 13.8.5 (1))"
//         },
//         {
//           id: 139,
//           question: "(Chapter 13) 10. Give four uses of acetic acid.",
//           answer: "Four uses of acetic acid are:\n1.  As a coagulant for latex in the rubber industry.\n2.  In the manufacture of plastics (polyvinyl acetate), rayon (cellulose acetate), and silk.\n3.  In medicine as a local irritant.\n4.  As a solvent in the laboratory for carrying out reactions.\n(Other uses mentioned: manufacture of pickles, manufacture of acetone, acetates, esters).\n(from Chapter 13, Section 13.7.5)"
//         },
//         {
//           id: 140,
//           question: "(Chapter 13) 11. How ethanol is converted into acetic acid and vice versa?",
//           answer: "-   **Ethanol to Acetic Acid:** Ethanol (a primary alcohol) can be oxidized to acetic acid using strong oxidizing agents like potassium dichromate (K₂Cr₂O₇) in an acidic medium (e.g., dilute H₂SO₄). The oxidation proceeds via acetaldehyde as an intermediate.\n    C₂H₅OH + [O] --(K₂Cr₂O₇/H₂SO₄)--> CH₃CHO + H₂O\n    CH₃CHO + [O] --(K₂Cr₂O₇/H₂SO₄)--> CH₃COOH\n-   **Acetic Acid to Ethanol:** Acetic acid can be reduced to ethanol (a primary alcohol) using a strong reducing agent like lithium aluminium hydride (LiAlH₄).\n    4CH₃COOH + 3LiAlH₄ → [Complex] --(H₂O/H⁺)--> 4CH₃CH₂OH + ...\n(Oxidation from 13.3 (1); Reduction from 13.6 (c) i)"
//         },
//         {
//           id: 141,
//           question: "(Chapter 13) 12. Define proteins? How do they differ from polypeptides?",
//           answer: "Proteins are defined as high molecular weight organic materials, which upon complete hydrolysis, yield amino acids. They are extremely complicated nitrogenous compounds made up of amino acids.\nThey differ from polypeptides based on molecular mass. By convention, a peptide having a molecular mass up to 10,000 is called a polypeptide, while a peptide having a molecular mass greater than 10,000 is called a protein. (from Chapter 13, Section 14.6.3 and 14.8.8)"
//         },
//         {
//           id: 142,
//           question: "(Chapter 13) 13. What are fatty acids? Give examples.",
//           answer: "Fatty acids are aliphatic monocarboxylic acids. The name is used particularly for the higher members of the series (like C₁₂ onwards) which are obtained by the hydrolysis of fats and oils. Examples mentioned are Palmitic acid (C₁₅H₃₁COOH) and Stearic acid (C₁₇H₃₅COOH). (from Chapter 13, Section 13.2)"
//         },
//         {
//           id: 143,
//           question: "(Chapter 13) 14. What are Zwitter ions? Give equation.",
//           answer: "A Zwitter ion is a dipolar ion formed by amino acids, having both a positive and a negative charge within the same molecule. It is formed when the proton from the carboxyl group (-COOH) transfers to the amino group (-NH₂).\nEquation:\n   R-CH(NH₂)COOH ⇌ R-CH(N⁺H₃)COO⁻\nThis dipolar structure is also called an internal salt. (from Chapter 13, Section 13.8.3)"
//         },
//         {
//           id: 144,
//           question: "(Chapter 13) 15. How will you prepare acetic acid from ethynes?",
//           answer: "Acetic acid can be prepared from ethyne (acetylene) in two main steps:\n1.  **Hydration of Ethyne:** Treat ethyne with 20% H₂SO₄ and 1.0% HgSO₄ at 80°C. This adds water across the triple bond, initially forming unstable vinyl alcohol which rearranges to ethanal (acetaldehyde).\n    HC≡CH + H₂O --(H₂SO₄/HgSO₄)--> [CH₂=CHOH] → CH₃CHO\n2.  **Oxidation of Ethanal:** Oxidize the ethanal formed using an oxidizing agent like V₂O₅ (for industrial process) or K₂Cr₂O₇/H₂SO₄ (general method).\n    CH₃CHO + [O] → CH₃COOH\n(from Chapter 13, Section 13.7.2 (1))"
//         },
//         {
//           id: 145,
//           question: "(Chapter 14) 1. Define carbohydrates. Classify them and give example of each.",
//           answer: "**Definition:** Carbohydrates (hydrates of carbon) are a large group of naturally occurring organic compounds, commonly called 'sugars'. Chemically, they are polyhydroxy compounds of aldehydes and ketones. Early examples fit the empirical formula Cx(H₂O)y.\n**Classification:**\n1.  **Monosaccharides:** Simple sugars that cannot be hydrolyzed further. Empirical formula (CH₂O)n, n ≥ 3. Examples: Glucose, Fructose, Glyceraldehyde.\n2.  **Oligosaccharides:** Formed when 2 to 9 monosaccharide units combine via glycosidic linkages with loss of water. Hydrolysis yields monosaccharides. Example: Sucrose (a disaccharide of glucose and fructose), Lactose, Maltose.\n3.  **Polysaccharides:** High molecular mass carbohydrates yielding many monosaccharide units on hydrolysis. Formula often (C₆H₁₀O₅)n. They are generally amorphous, insoluble in water, and tasteless ('non-sugars'). Examples: Starch, Cellulose, Glycogen.\n(from Chapter 14, Sections 14.6.1 and 14.6.2)"
//         },
//         {
//           id: 146,
//           question: "(Chapter 14) 2. What do you mean by rancidity of fats and oils?",
//           answer: "Rancidity refers to the spoilage of fats or oils, which results in them giving off an unpleasant odour. It is mainly caused by hydrolytic or oxidative reactions that release foul-smelling aldehydes and fatty acids. Oils containing a higher proportion of unsaturated fatty acid chains (like those from sea animals) tend to deteriorate or become rancid more rapidly. (from Chapter 14, Section 14.6.15)"
//         },
//         {
//           id: 147,
//           question: "(Chapter 14) 3. Define the following: i. proteins ii. Lipids iii. polymers",
//           answer: "i.  **Proteins:** High molecular weight organic materials, which upon complete hydrolysis, yield amino acids. They are nitrogenous compounds essential for life, present in all living organisms, making up tissues like muscles, skin, hair, etc.\nii. **Lipids:** Naturally occurring organic compounds of animal and plant origin which are soluble in organic solvents (like ether, chloroform) and insoluble in water. Their primary building blocks include fatty acids, glycerol, and sterols. They are utilized by living organisms.\niii. **Polymers:** A polymer is a large molecule (macromolecule) built up by the repetition of small and simple chemical units known as monomers. The repeating units link linearly, branched, or in a network.\n(Proteins from 14.6.3; Lipids from 14.6.8; Polymers from 14.2)"
//         },
//         {
//           id: 148,
//           question: "(Chapter 14) 4. How is polystyrene prepared? Give its two uses.",
//           answer: "**Preparation:** Polystyrene is prepared by the addition polymerization of styrene monomer, typically in the presence of a catalyst. The reaction involves initiation, propagation, and termination steps involving free radicals.\n   n(C₆H₅-CH=CH₂) --(Catalyst)--> [-CH(C₆H₅)-CH₂-]n\n**Uses:**\n1.  Manufacture of food containers.\n2.  Manufacture of cosmetic bottles, toys, and packing material.\n(from Chapter 14, Section 14.5 (2) and 14.4 (1))"
//         },
//         {
//           id: 149,
//           question: "(Chapter 14) 5. Give the structure of cholesterol.",
//           answer: "The structure of cholesterol is based on the perhydrocyclopentanophenanthrene nucleus, which consists of three fused six-membered rings (A, B, C) and one five-membered ring (D). The specific structure with attached groups (like -OH, alkyl side chain) is depicted in the text figure associated with Section 14.6.18 (1). (A textual description is difficult, refer to the structure diagram in the text)."
//         },
//         {
//           id: 150,
//           question: "(Chapter 14) 6. Write down uses of proteins.",
//           answer: "Proteins have various uses and importance:\n1.  Essential part in forming protoplasm.\n2.  Nucleoproteins serve as carriers of heredity.\n3.  Enzymes (biological catalysts) are proteins.\n4.  Specialized functions: Haemoglobin transports O₂, some proteins act as hormones (insulin, thyroxine).\n5.  Industrial uses: Leather (tanned hides), Gelatin (from bones/skin for bakery), Casein (for buttons/buckles).\n(from Chapter 14, Section 14.6.7)"
//         },
//         {
//           id: 151,
//           question: "(Chapter 14) 7. What is saponification number and iodine number?",
//           answer: "-   **Saponification Number:** It is defined as the number of milligrams of potassium hydroxide (KOH) or sodium hydroxide (NaOH) required to saponify one gram of a fat or oil.\n-   **Iodine Number:** It defines the extent of unsaturation in a fat or oil. It is defined as the number of grams of iodine which will add to 100 grams of the fat or oil. Its value depends on the number of double bonds in the fatty acid components.\n(from Chapter 14, Sections 14.6.14 and 14.6.16)"
//         },
//         {
//           id: 152,
//           question: "(Chapter 14) 8. What are fatty acids? Give examples.",
//           answer: "The text in Chapter 14 defines fatty acids as primary building blocks of lipids (specifically fats and oils, which are esters of glycerol and fatty acids). It mentions they are long-chain acids. Examples like palmitic acid and stearic acid are not explicitly given in Chapter 14 but are commonly understood components referred to implicitly in the discussion of triglycerides. (Definition implied in 14.6.8, 14.6.10; specific examples not listed in Ch 14)."
//         },
//         {
//           id: 153,
//           question: "(Chapter 14) 9. How polymers are classified on the basis of heat effect?",
//           answer: "Based on thermal properties (effect of heat), polymers are classified into two types:\n1.  **Thermoplastic Polymers:** These can be softened repeatedly when heated and hardened when cooled with little change in properties (e.g., PVC).\n2.  **Thermosetting Polymers:** These become hard on heating and cannot be softened again; they decompose on further heating instead of melting (e.g., epoxy resins).\n(from Chapter 14, Section 14.3)"
//         },
//         {
//           id: 154,
//           question: "(Chapter 15+16) 1. What reaction takes place in decomposition zone during manufacturing of cement?",
//           answer: "In the decomposition zone (moderate temperature zone, up to 900°C) of the rotary kiln during cement manufacturing, the limestone (CaCO₃) decomposes into lime (CaO) and carbon dioxide (CO₂).\n   CaCO₃(s) --(900°C)--> CaO(s) + CO₂(g)\n(from Chapter 15, Section 15.5.5 (3b))"
//         },
//         {
//           id: 155,
//           question: "(Chapter 15+16) 2. Which type of woody raw material is used in paper industry?",
//           answer: "Woody raw materials used in the paper industry mentioned in the text are Poplar (hardwood), Eucalyptus (hardwood), and Douglas fir (softwood). (from Chapter 15, Section 15.6.3)"
//         },
//         {
//           id: 156,
//           question: "(Chapter 15+16) 3. Write two woody and two non woody raw material for paper pulp manufacture.",
//           answer: "-   **Woody Raw Materials:** Poplar, Eucalyptus (or Douglas fir).\n-   **Non-woody Raw Materials:** Wheat straw, Rice straw (or Bagasse, Bamboo, Rags, Cotton stalk/linter, Kahi grass).\n(from Chapter 15, Section 15.6.3)"
//         },
//         {
//           id: 157,
//           question: "(Chapter 15+16) 4. What are macro nutrients?",
//           answer: "Macro-nutrients are essential elements required in large amounts for the growth of plants. These include Nitrogen, Phosphorus, Potassium, Calcium, Magnesium, Sulphur, Carbon, Hydrogen, and Oxygen. They are generally required in quantities ranging from 5 kg to 200 kg per acre. (from Chapter 15, Section 15.3.2)"
//         },
//         {
//           id: 158,
//           question: "(Chapter 15+16) 5. What is role of chlorofluorocarbons in destroying ozone?",
//           answer: "Chlorofluorocarbons (CFCs), used as refrigerants and propellants, are inert in the lower atmosphere (troposphere) but diffuse into the stratosphere. There, ultraviolet (UV) radiation breaks them down, generating Chlorine free radicals (Cl•). These radicals act as catalysts in the destruction of ozone (O₃):\n1.  A CFC molecule breaks down: CFCl₃ --(UV)--> •CFCl₂ + Cl•\n2.  Chlorine radical attacks ozone: Cl• + O₃ → ClO• + O₂\n3.  Chlorine monoxide radical reacts with an oxygen atom (present in stratosphere): ClO• + O → Cl• + O₂\nThe chlorine radical (Cl•) is regenerated in step 3, allowing it to destroy many more ozone molecules (up to 100,000) in a catalytic cycle. (from Chapter 16, Section 16.2.2 (3))"
//         },
//         {
//           id: 159,
//           question: "(Chapter 15+16) 6. How do you compare SN1 and SN2 mechanism?",
//           answer: "This answer is not found in the provided textbook text for Chapter 15 or 16. (SN1 and SN2 mechanisms are discussed in Chapter 10)."
//         },
//         {
//           id: 160,
//           question: "(Chapter 15+16) 7. What is need for fertilizers?",
//           answer: "Fertilizers are needed to make up the deficiency of essential elements (like N, P, K) required for the proper growth of plants. They enhance the natural fertility of the soil or replenish the chemical elements taken up from the soil by previous crops, especially necessary due to nutrient depletion from repeated cultivation. (from Chapter 15, Section 15.2.2 and 15.4.4)"
//         },
//         {
//           id: 161,
//           question: "(Chapter 15+16) 8. What do you mean by prilling of urea? (Also asked as Q15)",
//           answer: "Prilling of urea is the process of converting molten urea into solid, pellet-like form. The molten urea (around 99.7%) obtained after evaporation is sprayed down from the top of a prilling tower using a prilling bucket. As the droplets fall, they are cooled by an upward current of air, causing them to solidify into tiny, hard pellets called prills. (from Chapter 15, Section 15.4.1 (ii), Prilling section)"
//         },
//         {
//           id: 162,
//           question: "(Chapter 15+16) 9. What are some commonly used bleaching agents in paper manufacture?",
//           answer: "Commonly used bleaching agents in the paper industry in Pakistan mentioned in the text are chlorine, sodium hypochlorite, and hydrogen peroxide. (from Chapter 15, Section 15.6.5 (viii))"
//         },
//         {
//           id: 163,
//           question: "(Chapter 15+16) 10. Define clinker? How is it used in manufacturing of Cement.",
//           answer: "**Definition:** Cement clinker is the product obtained after heating the prepared mixture of raw materials (calcarious and argillaceous) in the rotary kiln to high temperatures (burning zone ~1500°C). It has the appearance of greenish black or grey coloured balls (pea to small nut size).\n**Use:** Clinker is the intermediate product in cement manufacturing. After cooling, it is ground to a fine powder along with a small percentage (around 2%) of gypsum to produce the final product, Portland cement. (from Chapter 15, Section 15.5.5 (iv) and (v))"
//         },
//         {
//           id: 164,
//           question: "(Chapter 15+16) 11. What is meant by setting of cement?",
//           answer: "Setting of cement refers to the property of cement paste (cement mixed with water) hardening to a stone-like mass when allowed to stand for some time. This process involves chemical reactions, primarily hydration and hydrolysis of the cement components (like tricalcium aluminate and tricalcium silicate), leading to the formation of colloidal gels and crystalline structures (like calcium hydroxide and calcium sulpho-aluminate) that interlock and harden the mass. (from Chapter 15, Section 15.5.6)"
//         },
//         {
//           id: 165,
//           question: "(Chapter 15+16) 12. What is the role of phosphorus in growth of plants?",
//           answer: "Phosphorus is required by plants to:\n-   Stimulate early growth.\n-   Accelerate seed and fruit formation during later stages of growth.\n-   Increase resistance to diseases.\n(from Chapter 15, Section 15.4.2)"
//         },
//         {
//           id: 166,
//           question: "(Chapter 15+16) 13. Give the role/importance of potassium in the growth of plants.",
//           answer: "Potassium is required by plants for:\n-   Formation of starch, sugar, and fibrous material.\n-   Increasing resistance to diseases.\n-   Making plants strong by helping in healthy root development.\n-   Helping in the ripening of seeds, fruits, and cereals.\n(Potassium fertilizers are noted as especially useful for tobacco, coffee, potato, and corn).\n(from Chapter 15, Section 15.4.3)"
//         },
//         {
//           id: 167,
//           question: "(Chapter 15+16) 14. Write names of steps in paper making process.",
//           answer: "The essential steps mentioned for the Neutral Sulphite Semi Chemical Process (pulping) and paper making are:\n**Pulping:**\n1.  Cutting of Raw Materials\n2.  Dry Cleaning\n3.  Wet Cleaning\n4.  Screening\n5.  Digestion\n6.  Blow Tank\n7.  Pulp Washing\n8.  Bleaching\n9.  Stock Preparation Plant\n**Paper Making Machine Stages:**\n1.  Flow Spreader\n2.  Head Box\n3.  Fourdrinier Table\n4.  Press Section\n5.  Dryer Section\n6.  Calendar Stock\n7.  Reel\n(from Chapter 15, Section 15.6.5)"
//         },
//         {
//           id: 168,
//           question: "(Chapter 15+16) 15. What do you mean by prilling of urea?* (Duplicate of Q8)",
//           answer: "Prilling of urea is the process of converting molten urea into solid, pellet-like form. The molten urea (around 99.7%) obtained after evaporation is sprayed down from the top of a prilling tower using a prilling bucket. As the droplets fall, they are cooled by an upward current of air, causing them to solidify into tiny, hard pellets called prills. (from Chapter 15, Section 15.4.1 (ii), Prilling section)"
//         }

// ];

export const quizQuestions: QuizQuestion[] = [
  {
    question: "(Chapter 15) 1. What is lithotripsy? (LB-2018)",
    answer:
      "Lithotripsy is a non-surgical technique used for the removal of kidney stones. It is used to break up stones that form in the kidney, ureter, or gall bladder. High concentrations of X-rays or ultrasound are directed from a machine outside the body to the stone inside. The shock waves break the stone into tiny pieces or sand, which are then passed out of the body in urine.",
    chapter: 15,
  },
  {
    question: "(Chapter 15) 2. What are pyrogens? (LB-2008,2013)",
    answer:
      "Pyrogens are chemicals produced by leukocytes (white blood cells) and pathogens (like bacteria and viruses) during infections. Pyrogens displace the set point of the hypothalamus above the normal point of 37°C, leading to fever. Fever or high temperature helps in stimulating the protective mechanisms against the pathogens.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 3. What is hypertonic environment and what changes occur in a cell in such environment? (OR) Differentiate between hypotonic and hypertonic environment. (LB-2010,2012,2016)",
    answer:
      "A hypertonic environment is one where the external solution is more concentrated with solutes compared to the cell's internal concentration. When a cell is placed in a hypertonic environment, it loses water by osmosis, causing the cell's internal solutions to become concentrated and the cell to shrink. A hypotonic environment, in contrast, is a diluted solution compared to the cell's concentration, causing water to enter the cell, potentially leading to turgidity or harm if unregulated.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 4. What are osmoconformers and osmoregulators? (LB-2011)",
    answer:
      "Osmoconformers are animals whose body fluids are kept isotonic to the external environment, even in marine saltwater. These animals do not actively adjust their internal osmotic state. Osmoregulators are animals whose body fluid concentrations differ noticeably from the outside environment. They actively regulate to discharge excess water in hypotonic conditions or excrete salts in hypertonic conditions.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 5. What is extracorporal shock wave lithotripsy? (LB-2014)",
    answer:
      "Extracorporeal shock wave lithotripsy is the most common type of lithotripsy, a non-surgical technique used to break up stones that form in the kidney, ureter, or gall bladder. In this procedure, high concentrations of X-rays or ultrasound are directed from a machine outside the body (extracorporeally) to the stone inside. The shock waves break the stone into tiny pieces or sand, which are then passed out of the body in urine.",
    chapter: 15,
  },
  {
    question: "(Chapter 15) 6. What are heat shock proteins? (LB-2016)",
    answer:
      "Heat-shock proteins are special proteins synthesized by plant cells in large quantities when exposed to high temperatures or heat stress (e.g., 40°C and above for temperate region plants). These proteins embrace enzymes and other proteins, helping to prevent their denaturation and thus protecting the plant's metabolism from heat damage.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 7. What are flame cells? Give their role. (OR) What are flame cells? Why they are called so? (LB-2014)",
    answer:
      "Flame cells are specialized excretory cells that cap the branches of the protonephridial system in flatworms like Planaria. Each flame cell has a tuft of cilia. The beating of these cilia propels interstitial fluid into the tubular system, which then drains to the exterior through nephridiopores. They are called flame cells because the beating of the cilia looks like a flickering flame. Their role is primarily in osmoregulation (excreting very dilute urine in freshwater flatworms) and disposing of nitrogenous wastes.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 8. Write structural formula of urea and uric acid. (LB-2010,2012)",
    answer:
      "The text (Chapter 15) describes urea and uric acid and mentions their formation (Fig 15.5 shows general structures and 15.6 shows urea cycle) but does not explicitly provide detailed, isolated structural formulas for both urea and uric acid in a way that can be directly copied as a simple formula. Fig 15.5 provides a visual representation: Urea is depicted as CO(NH2)2. Uric acid is shown as a more complex bicyclic structure C5H4N4O3. For detailed structural formulas: Urea: O=C(NH2)2. Uric Acid: It is a heterocyclic compound with the formula C₅H₄N₄O₃.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 9. Define homeostasis. Give its importance. (LB-2011,2013)",
    answer:
      "Homeostasis is the protection of the internal environment of an organism from the harms of fluctuations in the external environment. It involves various control systems that keep internal fluctuations within a narrow range, compared to wider external fluctuations. Its importance is central to the maintenance of an organism, compelling adaptations in constantly changing conditions and contributing to the evolutionary process. It ensures normal body functions by regulating susceptible components like water, solutes, and temperature.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 10. Define anhydrobiosis with an example. (LB-2012,2014,2018)",
    answer:
      "Anhydrobiosis is the characteristic of some terrestrial animals to tolerate dehydration. It refers to their ability to survive in conditions of extreme dryness by losing most of their body water. The text mentions that this characteristic differs in various animals. An example given is the kangaroo rat, which survives without drinking water by feeding on seeds of desert plants containing more carbohydrates, which produce water of metabolism, and by producing concentrated urine, thus exhibiting a high tolerance to dehydration.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 11. Define counter current multiplier mechanism. (LB-2018)",
    answer:
      "The counter-current multiplier mechanism is a process in the mammalian kidney, particularly involving the loop of Henle, that causes a gradual increase in the concentration of the interstitial fluid from the cortical to the medullary part. This mechanism involves the opposite flow of filtrate in the descending and ascending limbs of the loop of Henle. The descending loop is permeable to water, allowing osmotic outflow, while the ascending loop actively transports Na+ ions into the interstitium, sustaining its high concentration. This high concentration gradient is crucial for the reabsorption of water and the production of concentrated urine.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 12. Differentiate between poikilotherms and homeotherms. (LB-2012,2013)",
    answer:
      "Poikilotherms are animals in which body temperature tends to fluctuate more or less with the ambient (surrounding) temperature when air or water temperatures change. All invertebrates, fish, amphibians, and reptiles are generally considered in this category. Homeotherms are animals that maintain their body temperature when exposed to changing air or water temperatures. Birds and mammals are included in this category. However, the text notes that this terminology has difficulties, as some poikilotherms (like lizards) regulate their body temperature, and some homeotherms (like certain birds and mammals) vary their body temperature.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 13. Differentiate between ectotherms and endotherms. (LB-2009,2014)",
    answer:
      "Ectotherms are animals that produce metabolic heat at a low level, and this heat is also exchanged quickly with the environment; however, they primarily absorb heat from their surroundings to regulate body temperature. Most invertebrates, fish, amphibians, and reptiles are in this category. Endotherms are animals that generate their own body heat through metabolic processes, such as heat production as a by-product during metabolism. Flying insects, some fishes, birds, and mammals are endotherms. This classification is based on the source of heat production.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 14. Differentiate between shivering and non-shivering thermogenesis.",
    answer:
      "Shivering thermogenesis is a mechanism used by mammals to increase heat production in cold temperatures. It involves increased muscle contraction through movements or shivering. Non-shivering thermogenesis is another mechanism for heat production, triggered by hormones such as thyroid hormones. Some mammals also possess brown fat, which is specialized for rapid heat production as a form of non-shivering thermogenesis.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 15. Differentiate between hemodialysis and peritoneal dialysis. (LB-2018)",
    answer:
      "Hemodialysis involves cleaning the blood by circulating it through a machine containing a dialyzer (artificial kidney). The dialyzer has two spaces separated by a thin membrane; blood passes on one side and dialysis fluid on the other, allowing wastes and excess water to pass from the blood to the dialysis fluid. Peritoneal dialysis works on the same principle, but the filtering occurs within the abdomen. The peritoneal cavity, lined by the peritoneum, is filled with dialysis fluid via a catheter. Excess water and wastes pass from the blood vessels in the peritoneum into the dialysis fluid. This process is repeated several times a day.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 16. Differentiate between xerophytes and mesophytes. (OR) What are xerophytes? Give two adaptations of xerophytes. (LB-2012)",
    answer:
      "Xerophytes are plants adapted to severely dry terrestrial environments. They have adaptations for reduced rates of transpiration. Two adaptations include: 1) Possessing small, thick leaves to limit water loss by reducing surface area proportional to volume, and having a thick, waxy, leathery cuticle. 2) Some xerophytes, like cacti, shed their leaves during the driest season to restrict transpiration completely, with stems becoming photosynthetic organs and storing water during rainy seasons. Mesophytes are plants that have moderate water availability. They keep stomata open to promote loss of excess water in sufficient supply but close stomata in restricted supply to prevent water loss (e.g., Brassica, rose, mango).",
    chapter: 15,
  },
  {
    question: "(Chapter 15) 17. Draw and label urea cycle. (LB-2018)",
    answer:
      "Chapter 15, Fig. 15.6 illustrates the urea cycle. The diagram shows that two ammonia molecules and one carbon dioxide molecule enter the cycle. One ammonia molecule combines with carbon dioxide and ornithine (a precursor from the previous cycle) to form citrulline. Subsequently, another ammonia molecule combines to form arginine. Arginine is then split by the enzyme arginase to form urea and ornithine, which re-enters the cycle. (The question asks to draw and label, which cannot be fully done in text. The text provides a description of the diagram's content).",
    chapter: 15,
  },
  {
    question: "(Chapter 15) 18. Explain the process of panting with example.",
    answer:
      "Panting is a mechanism of evaporative cooling in the respiratory tract, used by some terrestrial mammals to dissipate excess heat in warm temperatures. It involves rapid, shallow breathing that increases the evaporation of water from the surfaces of the respiratory tract, thereby cooling the body. An example given in the text is dogs, which utilize panting as one of their major temperature-reducing strategies.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 19. Illustrate the function of Malpighian tubules. (LB-2010)",
    answer:
      "Malpighian tubules are excretory structures in terrestrial arthropods, particularly insects. Their function is to collect excretory products from the hemolymph. The epithelial lining of these tubules transports solutes, including salts and nitrogenous waste, from the hemolymph into the tubule's lumen. The fluid then passes to the hindgut and into the rectum. The rectum reabsorbs most of the salts and water. Nitrogenous wastes, typically uric acid crystals, are then excreted as solid excreta along with feces. This system is an adaptation for water conservation in environments with acute water shortage. (Fig. 15.9 in the text illustrates this system).",
    chapter: 15,
  },
  {
    question:
      "(Chapter 15) 20. Why leaves are said to be excretophore? (LB-2011)",
    answer:
      "Leaves are said to be excretophores because in some plants, they serve as organs for the storage and subsequent removal of accumulated waste products. Plants produce certain inorganic and organic wastes which are stored in organs like leaves. These leaves are destined to fall off, as in the case of autumn leaves, or die off. The falling of yellow leaves in autumn is a seasonal time for these plants to get rid of accumulated wastes. The text mentions that microscopic examination shows autumn leaves are loaded with pigmented compounds and many toxic materials like heavy metals increase sharply as yellowing proceeds, prior to falling off.",
    chapter: 15,
  },
  {
    question:
      "(Chapter 16) 1. What is sciatica? (OR) What is sciatica and its causes? (LB-2009,2010,2016)",
    answer:
      "Sciatica is a condition characterized by stabbing pain radiating over the course of the sciatic nerve. It results from an injury to the proximal sciatic nerve. Causes might include a fall, a herniated disc, or improper administration of an injection into the buttock. Depending on the precise nerve root injured, it can lead to a number of lower limb impairments.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 2. What is foremantriosseum? (OR) What is foremantriosseum? How it is formed? (LB-2010,2015)",
    answer:
      "The foramen triosseum is an opening found in birds, formed between the scapula, coracoid, and clavicle bones. The tendon of the supra-coracoid muscle passes through this opening and is attached to the upper surface of the humerus. This arrangement allows the supra-coracoid muscles to provide power for the upward stroke of the wing during flight.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 3. What is the role of vascular cambium? (LB-2011,2012)",
    answer:
      "Vascular cambium is responsible for secondary growth in plants, leading to an increase in plant girth (thickness). It first appears as a cylinder of actively dividing cells between primary xylem and primary phloem. It gives rise to two new tissues: secondary xylem towards its inner surface and secondary phloem towards its outer surface. The secondary xylem causes most of the increase in stem thickness. Vascular cambium also forms callus or wood tissue on or over wounds, aiding in healing and uniting branches during budding and grafting.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 4. What is axial skeleton? (LB-2012)",
    answer:
      "The axial skeleton is one of the two main parts of the human skeleton. It includes the skull (cranium and facial bones), the vertebral column (backbone), the ribs, and the sternum (breastbone). Its primary functions are to provide support and protection for the central parts of the body, such as the brain, spinal cord, heart, and lungs.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 5. What are synovial joints? (LB-2014)",
    answer:
      "Synovial joints are joints that contain a cavity filled with synovial fluid and are adapted to reduce friction between the moving bones. These joints are surrounded by a layer of connective tissue called a fibrous capsule, and their inner layer is the synovial membrane, which secretes the synovial fluid. Some parts of the capsule may be modified to form distinct ligaments holding the bones together. They allow for free movement and are classified based on structure and movement, e.g., hinge joints and ball and socket joints.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 6. What is meant by passive and active flight? (OR) Differentiate between active and passive flight. (LB-2012,2013)",
    answer:
      "Passive flight, or gliding, in birds occurs when the wings act as aerofoils. An aerofoil is any smooth surface which moves through the air at an angle to the airstream. The airflow over the wing gives the bird lift, with the amount of lift depending on the wing's angle relative to the airstream. Active flight occurs when little or no support can be gained from upward air currents. The bird achieves lift by flapping its wings. As the bird moves, air flows more quickly over the curved upper surface than the lower surface, reducing air pressure on top and creating a net upward pressure (lift).",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 7. What is rickets? Give its causes and cure. (OR) How is rickets produced? (LB-2012)",
    answer:
      "Rickets is a disease in children characterized by bowed legs and a deformed pelvis. It is caused by a deficiency of calcium in the diet or a vitamin D deficiency. Vitamin D is necessary for calcium absorption. It is treated by administering vitamin D fortified milk and by exposing the skin to sunlight, which helps the body synthesize vitamin D.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 8. What is herniation of discs? (OR) Defined disc-slip. (OR) What are the causes of herniation of discs? (LB-2010,2011,2013)",
    answer:
      "Herniation of a disc, commonly known as a slipped disc, occurs when severe or sudden physical trauma to the spine (e.g., from bending forward while lifting a heavy object) causes the rupture of the annulus fibrosus (the strong outer ring of fibrocartilage of an intervertebral disc) followed by the protrusion of the spongy nucleus pulposus (the inner semi-fluid part). If the protrusion presses on the spinal cord or spinal nerves, it can generate severe pain or even destruction of these nervous structures.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 9. What is the difference between tetanus and muscle tetany? (LB-2018)",
    answer:
      "Tetanus is an acute infectious disease caused by the anaerobic bacterium Clostridium tetani, resulting in persistent painful spasms of some skeletal muscles, often starting with stiffness of the jaws and neck (lockjaw) and progressing to rigidity of trunk and limb muscles. It can be fatal due to respiratory failure. Muscle tetany, on the other hand, is a disease caused by low calcium in the blood. It increases the excitability of neurons and results in loss of sensations, muscle twitches, and convulsions. If untreated, it can progress to spasm of the larynx, respiratory paralysis, and death.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 10. What are the sources of energy for muscle contraction? (LB-2012)",
    answer:
      "The primary source of energy for muscle contraction is ATP. The supply of ATP is maintained by the aerobic breakdown of glucose in the muscle cell, which comes from stored glycogen in the cell. When more energy is required due to high metabolism, it is provided by another energy-storing substance called creatine phosphate. During oxygen deficiency or very high metabolic activity (prolonged or strenuous muscular activity), ATP requirement is met by anaerobic breakdown of glucose into lactic acid.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 11. What is the difference between exoskeleton and endoskeleton? (OR) What is the composition of exoskeleton? (LB-2015)",
    answer:
      "An exoskeleton is a hardened outer covering to which internal muscles are attached. It is inert, non-living, and secreted by the ectoderm. It is composed of two layers: the outer epicuticle (waxy lipoprotein) and the inner procuticle (chitin and proteins, hardened by sclerotization and sometimes calcium carbonate). An endoskeleton is an internal skeleton primarily made of bones and cartilage, both of which are rigid connective tissues consisting of living cells embedded in a matrix of collagen. The exoskeleton provides external protection and support, while the endoskeleton provides internal support and framework. (Question about composition is also answered here).",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 12. What is hematoma formation? (LB-2016)",
    answer:
      "Hematoma formation is the first phase in the repair of a broken bone. When a bone breaks, blood vessels in the bone itself and possibly in the surrounding area are torn, resulting in hemorrhage. As a result, a hematoma, which is a mass of clotted blood, forms at the fracture site. Soon after, bone cells deprived of food begin to die, and the tissue at the fracture site becomes swollen and painful.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 13. What is effective and recovery stroke? (OR) Differentiate between effective and recovery stroke. (LB-2016)",
    answer:
      "Effective stroke and recovery stroke refer to the movement of cilia, such as in Paramecium. According to Bradford's suggestion (1955), an effective stroke occurs when five out of the nine peripheral double fibrils of a cilium contract or slide simultaneously, causing the cilium to bend or shorten, propelling the organism. A recovery stroke occurs when the other four out of nine double fibrils contract, causing the cilium to become straight again. This sequence of effective and recovery strokes allows Paramecium to swim.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 14. What are plantigrade and unguligrade? (OR) What are plantigrade, digitigrade and unguligrade mammals? (LB-2017)",
    answer:
      "Plantigrade, digitigrade, and unguligrade describe modes of locomotion in mammals based on how their feet contact the ground. Plantigrade mammals (e.g., monkeys, apes, man, bear) walk on their soles with palm, wrist, and digits all resting more or less on the ground. Digitigrade mammals (e.g., rabbit, rodents) walk on their digits only, which allows them to run faster than plantigrades; the first digit is often reduced or lost. Unguligrade mammals (e.g., deer, goat) walk on the tips of their toes, which are modified into hooves; this is the most swift type of locomotion.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 15. Characterize collenchyma cells. (LB-2011,2012)",
    answer:
      "Collenchyma cells are plant cells that have protoplasts and usually lack secondary walls. They are characterized by angular thickenings in their primary cell walls. They are usually grouped in strands or cylinders, often found just below the surface in young stems. Collenchyma cells provide support to young, herbaceous parts of the plant and are elastic, elongating with the growth of stems and leaves.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 16. Compare phototropism and geotropism. (LB-2017)",
    answer:
      "Phototropism is the movement or growth of a part of a plant in response to the stimulus of light. It is caused by differential growth. Stems typically show positive phototropism (growing towards light), while roots may show negative phototropism. Geotropism (also known as gravitropism) is the movement or growth of a part of a plant in response to the stimulus of gravity. Roots typically display positive geotropism (growing downwards, with gravity), and shoots display negative geotropism (growing upwards, against gravity). Both are types of tropic movements.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 17. Compare hinge joint with ball and socket joint. (LB-2012,2018)",
    answer:
      "A hinge joint allows movement in two directions (like a door hinge), such as at the elbow and knee. At these joints, pairs of muscles are typically arranged in the same plane as the joint. A ball and socket joint allows movement in several directions, providing maximum flexibility. Such joints have at least two pairs of muscles present perpendicular to each other. Examples include the hip joint and shoulder joint, where a rounded head (ball) of one bone fits into a cup-like cavity (socket) of another.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 18. Discuss hematoma formation. (LB-2010)",
    answer:
      "Hematoma formation is the initial stage in the repair of a simple bone fracture. When a bone breaks, blood vessels within the bone and potentially in the surrounding tissues are torn, leading to hemorrhage (bleeding). This results in the formation of a hematoma, which is a mass of clotted blood, at the fracture site. Following this, bone cells deprived of their food supply begin to die, and the tissue at the fracture site becomes swollen and painful.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 19. Define photonasty and thermonasty. (LB-2016)",
    answer:
      "Photonasty is a type of nastic movement (non-directional movement of plant parts in response to external stimuli) where the principal stimulus is the photoperiod or light intensity. For example, flowers may open and close due to changes in light intensity. Thermonasty is a type of nastic movement due to temperature changes. For example, the flowers of a tulip may close at night due to rapid growth on the lower side caused by upward and inward bending of the petals in response to temperature changes.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 20. Define haptonastic movement. (LB-2014)",
    answer:
      "Haptonastic movements are nastic movements (non-directional movements of plant parts in response to external stimuli) that occur in response to contact or touch. An example includes the rapid closing action of the Venus flytrap when an insect touches its sensory hairs.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 21. Define antagonistic movement of muscles. (LB-2018)",
    answer:
      "Antagonistic movement of muscles refers to the way pairs of skeletal muscles work against each other at a joint to produce movement. When one muscle (or group of muscles) contracts to cause a movement, its antagonist muscle (or group) relaxes. To reverse the movement, the antagonist muscle contracts while the first muscle relaxes. An example is the biceps and triceps muscles at the elbow joint: the biceps bends the arm (flexion), and the triceps straightens it (extension).",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 22. Define ecdysis. (OR) What is the process of ecdysis (moulting). (LB-2012)",
    answer:
      "Ecdysis, or moulting, is the process by which arthropods periodically shed their exoskeleton to allow for growth, as the exoskeleton itself cannot grow. The process involves several stages: 1. Enzymes digest the old endocuticle, separating the hypodermis from the exoskeleton. 2. The old exoskeleton splits. 3. New procuticle and epicuticle are secreted. 4. The new exoskeleton hardens, often by deposition of calcium carbonate. During hardening, the arthropod is vulnerable. The process is controlled by hormones like ecdysone.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 23. Discuss two main types of cartilage. (LB-2013)",
    answer:
      "The text mentions three main types of cartilage. Two of them are: 1. Hyaline Cartilage: This is the most abundant type in the human body. It is found at the movable joints, covering the ends of bones. 2. Elastic Cartilage: This type has a matrix containing bundles of collagen fibers and elastic fibers. It forms structures like the external pinnae of the ears and the epiglottis. (The third type mentioned is Fibrocartilage).",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 24. Differentiate between sclerenchyma and collenchyma cells. (LB-2013)",
    answer:
      "Sclerenchyma cells typically have thick secondary cell walls, usually impregnated with lignin, making them tough and hard. Most sclerenchyma cells are non-living at maturity and their primary function is to provide support. Examples include fibers and sclereids. Collenchyma cells have protoplasts and usually lack secondary walls but have angular thickenings in their primary walls. They are living cells, usually grouped in strands or cylinders, and provide support to young, growing herbaceous parts of the plant. They are elastic and elongate with stem and leaf growth.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 25. Differentiate between fibers and sclereids. (LB-2014)",
    answer:
      "Fibers and sclereids are both types of sclerenchyma cells. Fibers (which include tracheids in the context of xylem support and conduction) are long and cylindrical cells. They may exist as solid bundles in xylem or as bundle caps, providing strength and support. Sclereids are shorter than fibers and are found in structures like seed coats and nut shells, where they provide protection. They have very thick, lignified secondary walls.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 26. Differentiate between compact bone and spongy bone. Give only two differences. (LB-2018)",
    answer:
      "1. Structure & Density: Compact bone is dense and forms the hard outer shell of bones, while spongy bone is light, highly porous, and found in the interior of bones. 2. Function/Location of Marrow: Compact bone provides strong attachment sites for muscles. Spongy bone contains bone marrow in its cavities, where blood cells are formed.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 27. Distinguish between axial skeleton and appendicular skeleton. (LB-2008,2014)",
    answer:
      "The axial skeleton includes the bones that form the main axis of the body: the skull, the vertebral column, the ribs, and the sternum. It primarily provides protection for vital organs and support for the body. The appendicular skeleton consists of the bones of the limbs (forelimbs and hind limbs) and the girdles (pectoral and pelvic) that attach the limbs to the axial skeleton. It is primarily involved in movement and manipulation.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 28. Differentiate between skeletal and smooth muscles. (LB-2012)",
    answer:
      "Skeletal muscles are attached to the skeleton and are responsible for the movement of bones. They are consciously controlled (voluntary) and appear striated (striped) due to the regular arrangement of actin and myosin filaments. Smooth muscles are found in the walls of blood vessels, the digestive tract, and other internal organs. They are not under voluntary control (involuntary) and lack striations, appearing smooth. Skeletal muscle cells are typically cylindrical and multinucleated, while smooth muscle cells are spindle-shaped with a single nucleus.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 29. Differentiate between Osteoporosis and Osteomalacia. (LB-2016)",
    answer:
      "Osteoporosis is a group of diseases where bone resorption outpaces bone deposit, leading to reduced bone mass, although the chemical composition of the matrix remains normal. It often occurs in aged women due to decreased estrogen levels and can be influenced by factors like insufficient exercise and poor diet. Osteomalacia (soft bones) includes disorders where bones receive inadequate minerals. Calcium salts are not deposited properly, so bones soften and weaken. Weight-bearing bones may bend and deform, and a key symptom is pain when weight is put on affected bones. It can be caused by calcium or vitamin D deficiency.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 30. Distinguish between the phototactic and chemotactic movements. (OR) What is phototactic movement? (OR) What is chemotactic movement? (LB-2015)",
    answer:
      "Phototactic movement is a tactic movement (locomotion of an entire cell or organism) in response to the stimulus of light. It can be positive (towards light) or negative (away from light). An example is the movement of chloroplasts due to cyclosis to absorb maximum light. Chemotactic movement is a tactic movement in response to the stimulus of chemicals. An example is the movement of sperms of liverworts, mosses, and ferns towards archegonia in response to nucleic acid released by the ovum.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 31. Differentiate between brachialis and brachioradialus.",
    answer:
      "The brachialis and brachioradialis are both muscles involved in bending the arm at the elbow (flexion), working along with the biceps brachii. The biceps brachii is inserted into the radius. The brachialis is inserted in the ulna. The brachioradialis is inserted in the radius. When these muscles contract, they lift the radius and ulna and bend the arm at the elbow. The primary difference lies in their specific points of insertion and thus slightly different roles or leverages in the flexion movement.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 32. Differentiate between origin and insertion of muscle.",
    answer:
      "The origin of a skeletal muscle is the end of the muscle that remains fixed or relatively stationary when the muscle contracts. The insertion is the end of the muscle that is attached to the bone that moves when the muscle contracts. The belly is the thick part of the muscle between the origin and insertion, which actually contracts.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 33. Differentiate between bone and cartilage.",
    answer:
      "Bone is the most rigid form of connective tissue, with its collagen fibers hardened by deposits of calcium phosphate. It forms the main structural framework of the body. Cartilage is a softer, more flexible form of connective tissue. Its matrix, secreted by chondrocytes, is made of collagen and is elastic. Bone has blood vessels, while cartilage typically does not. Bone cells include osteoblasts, osteocytes, and osteoclasts; cartilage cells are chondrocytes. Cartilage covers bone ends at joints and supports flexible structures like the nose and ears.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 34. Differentiate between troponin and tropomyosin.",
    answer:
      "Troponin and tropomyosin are both regulatory proteins associated with the thin (actin) filaments in muscle cells, involved in controlling muscle contraction. Tropomyosin consists of two strands that twist around the actin chains, covering the myosin-binding sites on actin when the muscle is at rest. Troponin is a three-polypeptide complex: one part binds to actin, another binds to tropomyosin, and the third binds calcium ions. When calcium ions bind to troponin, it causes a conformational change that moves tropomyosin, exposing the myosin-binding sites on actin, allowing contraction to occur.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 35. Differentiate between heartwood and sapwood.",
    answer:
      "Heartwood and sapwood are two types of secondary xylem found in older woody stems. Sapwood is the active, outer, younger portion of the secondary xylem that is involved in the conduction of water and dissolved substances. Heartwood is the inactive, non-conducting, older wood found towards the center of the stem. In most species, heartwood accumulates chemicals like resins, oils, gums, and tannins, which provide resistance to decay and insect attack.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 36. Differentiate between vessel and tracheids.",
    answer:
      "Vessels (tracheae) and tracheids are both types of water-conducting cells found in xylem tissue and are classified as sclerenchyma cells due to their lignified walls, providing support. Vessels are long tubular structures made up of vessel elements joined end to end, forming long continuous pipes for water transport. Tracheids are also elongated cells involved in water transport and support, but they are generally narrower and more tapered than vessel elements, with water passing between them through pits. The text lists tracheids under 'Fibers (Tracheids)' as long and cylindrical sclerenchymatous cells.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 37. Differentiate between ligament and tendon. (LB-2018)",
    answer:
      "Ligaments and tendons are both types of dense connective tissue made of collagen fibers. Ligaments attach bone to bone at joints and are slightly elastic, helping to stabilize the joint. Tendons attach muscles to bones and are non-elastic, transmitting the force of muscle contraction to the bone to cause movement.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 38. Explain two types of nastic movements. (OR) Compare epinasty and hyponasty. (LB-2012,2013,2016)",
    answer:
      "Nastic movements are non-directional movements of plant parts in response to external stimuli. The text mentions two broad types: Nyctinasty and Haptonasty. Nyctinasty includes Photonasty (response to light intensity/photoperiod, e.g., flower opening/closing) and Thermonasty (response to temperature, e.g., tulip flower closing at night). Epinasty and Hyponasty are types of autonomic growth movements, not nastic. Epinasty is when the upper surface of a leaf or petal in a bud shows more growth than the lower surface, leading to the opening of buds. Hyponasty is when the lower surface shows more growth, causing the bud to remain closed. The question might be conflating nastic and autonomic movements, or asking for examples within nastic movements. The text details Epinasty and Hyponasty under 'Growth Movements' (autonomic).",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 39. Enlistsome of the functions of skeleton. (LB-2015)",
    answer:
      "Some major functions of the skeletal system are: (i) Support and shape: Bones support soft tissues, serve as attachment sites for muscles, and provide shape to the body. (ii) Protection: Bones protect critical internal organs like the brain, spinal cord, heart, and lungs. (iii) Movement: Skeletal muscles attached to bones help in moving the body. (iv) Mineral homeostasis: Bones store calcium, phosphorus, sodium, and potassium, releasing or taking them up to maintain homeostasis. (v) Blood cell production: Red and white blood cells are produced in bone marrow.",
    chapter: 16,
  },
  {
    question: "(Chapter 16) 40. How callus is formed? (LB-2012)",
    answer:
      "Callus is soft parenchymatous tissue that is rapidly formed on or below the damaged surface of stems and roots, essentially over a wound. It is formed by the activity of the cambium. Callus tissue also unites branches during budding and grafting.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 16) 41. Name the different types of cells associated with bones. (LB-2014)",
    answer:
      "There are three main types of cells associated with bone: 1. Osteoblasts: These are bone-forming cells. 2. Osteocytes: These are mature bone cells, which are osteoblasts that have become entrapped within the bone matrix they secreted. 3. Osteoclasts: These are bone-dissolving cells, involved in bone resorption and remodeling.",
    chapter: 16,
  },
  {
    question: "(Chapter 17) 1. What is innate behavior? (LB-2016)",
    answer:
      "Innate behavior is a collection of responses that are predetermined by the inheritance of specific nerve or cytoplasmic pathways in multicellular or unicellular (acellular) organisms. As a result of these built-in pathways, a given stimulus invariably produces the same response. These behavior patterns have been developed and refined over many generations (selected) and their primary adaptive significance lies in their survival value to the species. All plant behavior is innate.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 2. What is the role of hypothalamus? (LB-2016)",
    answer:
      "The hypothalamus, a part of the forebrain, plays a major coordinating role in homeostasis. It acts as a major co-ordinating centre controlling body temperature, hunger, the menstrual cycle, water balance, and the sleep-wake cycle. Many sensory stimuli of the nervous system are converted into hormonal responses here. It produces releasing and inhibiting hormones that control the anterior pituitary, and it also produces oxytocin and antidiuretic hormone (ADH) which are stored in and released from the posterior pituitary. In thermoregulation, it acts as the homeostatic thermostat.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 3. What is synapse? (LB-2011)",
    answer:
      "A synapse is a microscopic gap between two consecutive neurons, where the axon endings of one neuron are connected to the dendrites (or cell body) of the next neuron. There is no cytoplasmic connection between the two neurons. A nerve impulse is passed from one neuron to the other across the synapse, typically via chemical messengers called neurotransmitters.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 4. What is habituation? Give an example. (LB-2013)",
    answer:
      "Habituation is the simplest form of learning and involves the modification of behavior through a diminution of response to repeated stimuli. It's a loss of receptivity to repetitious stimuli that can be useful in preventing a drain of energy and attention for trivial purposes. An example is a snail crawling on a sheet of glass retracting into its shell when the glass is tapped. After a pause, it emerges. A second tap causes retraction, but it emerges more quickly. Ultimately, tapping has no effect, and the snail ceases to respond.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 5. What is the role of thyroxine?",
    answer:
      "Thyroxine (and tri-iodothyronine) acts on the basal metabolic rate by stimulating the breakdown of glucose, leading to the release of heat and generation of ATP. It also acts in conjunction with somatotropin (growth hormone) in bringing about growth and directly on brain cells causing them to differentiate. In amphibians, thyroxine brings about metamorphosis. Its secretion is controlled by TSH from the pituitary, which in turn is regulated by thyroxine levels in the blood (negative feedback).",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 6. What is the role of vasopressin/ADH and oxytocin hormone?",
    answer:
      "Antidiuretic hormone (ADH) or Vasopressin is secreted by the posterior lobe of the pituitary. Its secretion is caused by factors like decreased blood pressure or increased osmotic pressure of blood. Its primary role is to increase water reabsorption in the distal parts of the nephron in the kidney, thus conserving water. A lack of ADH produces diabetes insipidus. Oxytocin is also secreted by the posterior pituitary. Its release is stimulated by distension of the cervix and neural stimuli during parturition and suckling. Its primary action is on smooth muscle, particularly causing uterine contractions during childbirth, and it also causes milk ejection from mammary glands.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 7. What is the function of estrogen and progesterone?",
    answer:
      "Estrogen is secreted by ripening follicles in the ovary. It brings about the development of secondary sexual characters in females, causes thickening of the uterine wall, and at a point in the menstrual cycle, exerts positive feedback for LH release. It also aids in healing and repair of the uterine wall after menstruation. Progesterone is produced by the corpus luteum after ovulation. It inhibits further FSH secretion, thus preventing more follicles from ripening. It also causes further thickening and vascularization of the uterine wall, preparing it for pregnancy, and suppresses ovulation.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 8. What is the commercial application of cytokinins? (LB-2016)",
    answer:
      "Commercial applications of cytokinins include: delaying the aging (senescence) of fresh leaf crops such as cabbage and lettuce, keeping flowers fresh, and they can also be used to break the dormancy of some seeds.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 9. What are androgens?",
    answer:
      "Androgens are male sex hormones. The primary androgen is testosterone, produced by the interstitial cells of the testes. Adrenal glands also secrete very small amounts of androgens in both males and females. Testosterone is responsible for the development of male secondary sexual characteristics and promotes the sex drive. In the foetus, it initiates the development of male sex organs.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 10. What are sensory neurons? (LB-2016)",
    answer:
      "Sensory neurons are one of the three functional types of neurons. They are responsible for detecting stimuli from the external or internal environment and transmitting this information in the form of nerve impulses from receptors (like those in the skin, eyes, ears) to the central nervous system (brain and spinal cord). Many sensory neurons have a single fiber which branches, with one branch (peripheral) running from the receptor site to the dorsal-root ganglion (where the cell body is) and the other branch (central) running from the ganglion into the spinal cord or brain.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 11. What are axons and dendrites? (OR) How axon differ from dendrites. (LB-2009,2010,2014)",
    answer:
      "Axons and dendrites are cytoplasmic processes or fibers extending from the cell body of a neuron. Dendrites (or a single dendron) are processes that typically carry nerve impulses towards the cell body. They are often short, branched, and may have a spiny look. Axons are processes that conduct impulses away from the cell body. An axon can be very long, sometimes more than a meter. The cytoplasm of an axon is called axoplasm. Nissl's granules are present in the cell body and dendrites but are absent from the axon.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 12. What is reflex arc? (OR) Differentiate between reflex action and reflex arc. (LB-2012,2014,2018)",
    answer:
      "A reflex arc is the pathway of passage of a nerve impulse during a reflex action. It typically involves a receptor that detects a stimulus, a sensory neuron that transmits the impulse to the central nervous system (CNS), an associative neuron (interneuron or relay neuron) within the CNS that processes the information, a motor neuron that transmits the impulse from the CNS, and an effector (muscle or gland) that carries out the response. A reflex action is a type of involuntary, rapid response to a stimulus, mediated by the reflex arc.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 13. What are the symptoms of Alzheimer’s disease? (LB-2013)",
    answer:
      "Alzheimer's disease is characterized by a decline in brain function. Its symptoms are similar to those diseases that cause dementia, primarily involving memory loss. The text also implies that other cognitive functions may decline as part of general brain function decline.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 14. What is the difference between CNS and PNS? (LB-2012,2016)",
    answer:
      "The Central Nervous System (CNS) consists of the brain and the spinal cord. These are protected by the cranium and vertebral column respectively, as well as meninges and cerebrospinal fluid. The CNS is the primary control center, processing information and coordinating body activities. The Peripheral Nervous System (PNS) comprises sensory neurons and motor neurons, which may form ganglia (concentrations of cell bodies) and nerves (bundles of axons or dendrites). The PNS connects the CNS to the rest of the body, transmitting sensory information to the CNS and motor commands from the CNS to muscles and glands.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 15. What is the function of parathyroid gland or parathormone? (LB-2008,2013,2016)",
    answer:
      "The parathyroid glands produce parathormone. The primary function of parathormone is to regulate calcium levels in the blood. Low levels of blood Ca++ ions stimulate the parathyroid to increase parathormone production, which in turn acts to increase blood calcium levels (e.g., by promoting calcium release from bones and reabsorption in kidneys). High levels of Ca++ ions suppress its release. It is antagonistic to calcitonin.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 16. What is Parkinson’s disease? (OR) Differentiate between Parkinson’s and Epilepsy. (LB-2009,2012,2018)",
    answer:
      "Parkinson's disease is a nervous disorder characterized by involuntary tremors, diminished motor power, and rigidity. Mental faculties are not affected. It is believed to be caused by cell death in a brain area that produces dopamine. Onset is usually in the 50s and 60s. Epilepsy is a convulsive disorder characterized by abrupt, transient symptoms of a motor, sensory, psychic, or autonomic nature, often associated with changes in consciousness. These changes are believed to be secondary to sudden, transient alterations in brain function associated with excessive rapid electric discharges in the gray matter. The onset of epilepsy is usually before age 30.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 17. What is neuroglia?",
    answer:
      "Neuroglia, or glial cells, are non-neuronal cells in the nervous system, particularly in higher animals like humans, that make up as much as half of the nervous system. They play a vital role in the nutrition of neurons and their protection, for example, by forming the myelin sheath around axons.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 18. What are Nissl’s granules? (OR) What are neuroglia and Nissl’s granules?",
    answer:
      "Nissl's granules are groups of ribosomes associated with rough endoplasmic reticulum (E.R.) and Golgi apparatus, found in the cell body (soma) and dendrites of neurons. They are involved in protein synthesis necessary for the neuron's growth and maintenance. They are absent from the axon. Neuroglia are supporting cells in the nervous system that provide nutrition and protection (like myelin sheath formation) to neurons.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 19. What are gastrin and secretin? (OR) Give the functions of secretin and gastrin. (OR) Name the two hormones of gut. (LB-2010,2013)",
    answer:
      "Gastrin and secretin are two important hormones produced by the gut. Gastrin is produced by the mucosa of the pyloric region of the stomach. It stimulates the secretion of gastric juice and is produced under the influence of protein food in the stomach after partial digestion. Secretin is produced from the duodenum when acid food touches its lining. It affects the pancreas to produce and release pancreatic juice and also affects the rate of bile production in the liver.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 20. Write function of photoreceptors and nociceptors. (LB-2014)",
    answer:
      "Photoreceptors (electromagnetic receptors) respond to the stimuli of light. In the eyes, rods and cones are examples of photoreceptors, responsible for vision. Nociceptors are undifferentiated nerve endings that produce the sensation of pain in response to damaging or potentially damaging stimuli.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 21. Compare Circadian and Circannual rhythms.",
    answer:
      "Circadian rhythms are biological rhythms or behavioral activities that occur at regular intervals with a periodicity of about 24 hours (circa = about, dies = day), so they are also called diurnal rhythms. Circannual rhythms are biorhythms that have a periodicity of about 365 days (circa = about, annum = year), relating to yearly cycles or seasons.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 22. Define saltatory impulse. (OR) Define saltatory impulse and synapse. (LB-2001,2011)",
    answer:
      "Saltatory impulse (or saltatory conduction) is the way a nerve impulse travels along myelinated neurons. The impulse 'jumps' from one node of Ranvier to the next, rather than propagating continuously along the axon membrane. This significantly increases the speed of nerve impulse transmission. A synapse is a microscopic gap between two consecutive neurons where a nerve impulse is transmitted from one neuron to the next, usually via chemical neurotransmitters.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 23. Define the term hormone, give one example? (LB-2012)",
    answer:
      "Hormones are organic compounds of varying structural complexity, secreted by endocrine (ductless) glands. They are poured directly into the blood and transported to respective target tissues or cells. Hormones affect target cells by regulating enzymatic and other chemical reactions already present, either stimulating or inhibiting a function. An example is insulin, a protein hormone that regulates blood glucose levels.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 24. Define feedback mechanism. (LB-2018)",
    answer:
      "A feedback mechanism is a type of interaction in which a controlling mechanism is itself controlled by the products of the reactions it is controlling. This means the output or product of a process influences the process itself. For example, the concentration of secretions is controlled because certain information is 'fed back' to the source, so the output of the secretion is adjusted. The interaction between the pituitary and other endocrine glands is an example, such as the regulation of thyroxine secretion by TSH and thyroxine levels.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 25. Differentiate between biorhythms and diurnal rhythms. (LB-2014)",
    answer:
      "Biorhythms (or biological rhythms) are behavioral activities in living things that occur at regular intervals. Diurnal rhythms are a specific type of biorhythm that shows a periodicity of about 24 hours. Diurnal rhythms are also known as circadian rhythms. So, diurnal rhythms are a subset of biorhythms.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 26. Differentiate between etiolation and chlorosis. (OR) What is chlorosis? (LB-2018)",
    answer:
      "Etiolation is a condition in plants grown without light, where they become extremely long and fail to form chlorophyll, resulting in a pale or yellowish appearance. Chlorosis is a condition where plants take on a yellowish hue due to a failure to form sufficient chlorophyll. Chlorosis usually arises from short supplies of mineral nutrients in the soil. While both result in a lack of green color, etiolation is specifically due to lack of light and characterized by elongation, whereas chlorosis is due to nutrient deficiency affecting chlorophyll synthesis.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 27. Differentiate between callus and galls.",
    answer:
      "A callus is a mass of amorphous material with very poor differentiation that often develops when plants are wounded. It is essentially an undifferentiated growth of plant cells. Galls are growths on a plant that are induced by parasites (e.g., bacteria, fungi, insects) and usually have a highly organized growth structure, though tumors induced by bacteria are usually less differentiated than other types of galls. Callus is a plant's response to wounding; galls are induced by parasites.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 28. Differentiate between sympathetic and parasympathetic nervous system.",
    answer:
      "The sympathetic and parasympathetic nervous systems are two divisions of the autonomic nervous system. The sympathetic system generally prepares the body for 'fight or flight' responses during emergency situations; its ganglion fibers mostly arise from the middle portion of the spinal cord and terminate in ganglia near the cord. It accelerates heart beat, dilates pupils, and inhibits digestion. The parasympathetic system promotes 'rest and digest' responses associated with a relaxed state; its nerves include some cranial nerves (like the vagus nerve) and nerves from the bottom portion of the spinal cord. It contracts pupils, promotes digestion, and retards heart beat.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 29. Differentiate between active and resting membrane potential. (LB-2018)",
    answer:
      "Resting membrane potential is the net difference in charge between the inner and outer surface of a non-conducting neuron, typically around -70mV, with the outside being more positive than the inside. It is maintained by factors like the sodium-potassium pump, negative organic ions inside, and K+ leakage. Active membrane potential (or action potential) is a remarkable localized change and momentary reversal in the resting membrane potential that occurs when a neuron is stimulated by a threshold stimulus. During this state (lasting about a millisecond), the inner membrane surface becomes more positive than the outside (around +50mV) due to an influx of Na+ ions. This change constitutes the nerve impulse.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 30. Give role of 2,4 Dichlorophenoxyacetic Acid. (LB-2014)",
    answer:
      "2,4-Dichlorophenoxyacetic acid (2,4-D) is a synthetic auxin. Its role is as a selective weed killer. It kills broad-leaved species (dicots) and is used in cereal crops and lawns to eliminate weeds without harming the monocot crops or grasses.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 31. Give two commercial applications of Gibberellins. (LB-2011,2014,2018)",
    answer:
      "Two commercial applications of Gibberellins are: 1. They promote fruit setting, for example in tangerines and pears, and are used for growing seedless grapes (parthenocarpy) and also to increase the berry size. 2. GA3 (a type of gibberellin) is used in the brewing industry to stimulate α-amylase production in barley, which promotes malting. (Another application mentioned is to delay ripening and improve storage life of bananas and grapefruits).",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 32. Name and define different types of tropisms. (LB-2008)",
    answer:
      "Tropisms are movements in curvature of a whole plant organ towards or away from stimuli. Chapter 16 (Support and Movement) details these: (i) Phototropism: Movement in response to light. (ii) Thigmotropism: Movement in response to touch (e.g., climbing vines). (iii) Chemotropism: Movement in response to chemicals (e.g., fungal hyphae). (iv) Hydrotropism: Movement in response to water (e.g., root growth towards water). (v) Geotropism (Gravitropism): Movement in response to gravity (e.g., roots grow down, shoots grow up). Chapter 17 mentions them briefly under plant movements but directs to the previous chapter for detail.",
    chapter: 16,
  },
  {
    question:
      "(Chapter 17) 33. Give effects of nicotine on blood vascular system and digestive system in man. (OR) What is the action of nicotine on coordination? (LB-2011-2015)",
    answer:
      "Nicotine affects the postsynaptic membrane in the CNS and PNS by mimicking the action of acetylcholine on nicotine receptors, thus acting as a stimulant of nerve impulse. Its effects include increasing the heart beat rate and blood pressure (affecting the blood vascular system). It also increases digestive tract mobility. Nicotine may induce vomiting and diarrhoea and can even cause water retention by the kidneys. These actions reflect its impact on nervous coordination controlling these systems.",
    chapter: 17,
  },
  {
    question:
      "(Chapter 17) 34. Explain the functions of two hormones secreted by Islets of Langerhans. (OR) What is the role of insulin and glucagon in the body? (LB-2013)",
    answer:
      "The Islets of Langerhans in the pancreas secrete insulin and glucagon. Insulin, produced by β-cells, depresses blood glucose levels by increasing glycogen synthesis, increasing cell utilization of glucose, stimulating conversion of glucose into lipid and protein, and inhibiting glycogen hydrolysis. Glucagon, produced by α-cells, is antagonistic to insulin and causes an increase in blood glucose levels, mainly by promoting the breakdown of glycogen to glucose in the liver and muscles, and increasing the rate of breakdown of fats.",
    chapter: 17,
  },
  {
    question: "(Chapter 17) 35. Explain imprinting? (LB-2010,2012)",
    answer:
      "Imprinting is a form of learning best known in birds such as geese, ducks, and chickens (precocial birds). Shortly after hatching, these young birds have a tendency to follow moving objects in their surroundings. They have a brief sensitive period during which the shape or form of objects can be 'imprinted,' resulting in the young birds following them. Normally, the first moving object is the mother bird, but if parents are absent, a young bird may imprint on other species, humans, or inanimate objects.",
    chapter: 17,
  },
  {
    question: "(Chapter 18) 1. What is follicle atresia?",
    answer:
      "Follicle atresia is a degenerative process that occurs in the ovaries during the female reproductive cycle. When the pituitary gland releases follicle-stimulating hormone (FSH), it stimulates the development of several primary follicles. However, usually only one of these follicles continues to grow with its primary oocyte, while the rest break down. This breakdown of the other developing follicles is known as follicle atresia.",
    chapter: 18,
  },
  {
    question: "(Chapter 18) 2. What is afterbirth?",
    answer:
      "Afterbirth refers to the stage following the delivery of a baby. Within 10-45 minutes after birth, the uterus contracts and separates the placenta from the wall of the uterus. The placenta then passes out through the vagina. This expelled placenta and associated fetal membranes constitute the afterbirth.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 3. What is the role of placenta in human? (LB-2008)",
    answer:
      "The placenta is an organ established between the uterine and foetal tissues during pregnancy in humans. Its primary role is to facilitate the exchange of materials between the mother and the developing foetus. This includes the exchange of oxygen, carbon dioxide, nutrients (from mother to foetus), and waste products (from foetus to mother). Once established, the placenta also starts secreting the hormone progesterone, which is essential for maintaining the pregnancy.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 4. What is seed dormancy? Give its importance. (LB-2014)",
    answer:
      "Seed dormancy is a special condition of rest in which an embryo within a seed ceases or limits its growth. Its importance is that it enables the embryo to survive long periods of unfavourable environmental conditions, such as water scarcity or low temperature. This prevents the dormant seed from germinating prematurely in response to temporary favorable conditions (like a warm spell in winter) that might be followed by conditions fatal to a young seedling. Germination requires very precise combinations of environmental cues.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 5. What is the role of interstitial cells in sperm production? (LB-2012)",
    answer:
      "Interstitial cells (also known as Leydig cells) are located between the seminiferous tubules in the testes. Their role is to secrete the hormone testosterone. Testosterone is essential for the successful production of sperms (spermatogenesis) within the seminiferous tubules and also controls the development of male secondary sexual characteristics during puberty.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 6. What is the structure and function of corpus luteum? (LB-2013)",
    answer:
      "The corpus luteum is a special yellowish glandular structure formed in the ovary from the follicle cells after the release of the egg (ovulation). Its main function is to secrete the hormone progesterone. Progesterone develops the endometrium (uterine lining), making it receptive for the implantation of a zygote and placenta formation, and helps maintain pregnancy. If fertilization does not occur, the corpus luteum starts degenerating.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 7. What is parthenocarpy? (OR) Define parthenocarpy with examples. (OR) How does parthenocarpy differ from parthenogenesis? (LB-2010,2011,2013)",
    answer:
      "Parthenocarpy is the development of fruit without fertilization, and thus no seed formation takes place. Examples include banana, pineapples, and some varieties of oranges and grapes. It is often due to hormonal imbalance, usually high auxin levels in the ovaries. Parthenocarpy can be artificially induced for commercial purposes. Parthenogenesis, on the other hand, is the development of an egg into an embryo without fertilization, leading to an organism (e.g., drones in honeybees). Parthenocarpy refers to fruit development; parthenogenesis refers to embryo/organism development.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 8. Write down at least two important measures to prevent AIDS. (LB-2013)",
    answer:
      "The text mentions that AIDS is a dangerous disease and sexual contact is one of its major sources of spread. Under the 'Control' section for STDs (which includes AIDS), it states: \"The above dreadful sexual diseases can be controlled and prevented by avoiding sexual contacts with carrier or diseased person and adopting the hygienic conditions.\" Therefore, two important measures are: 1. Avoiding sexual contact with individuals who are carriers or infected. 2. Adopting hygienic conditions (which broadly implies safe practices). More specific measures often cited externally include using condoms and avoiding sharing needles.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 9. What are Oviparous, Viviparous and Ovoviviparous animals? (OR) Give difference between Oviparous and Viviparous animals. (OR) What are Ovoviviparous animals? Give examples. (OR) Differentiate between oviparity and viviparity. (LB-2008,2009,2012,2013)",
    answer:
      "Oviparous animals are those in which internal fertilization leads to external development in shelled eggs that are laid by the female, protecting the developing embryo (e.g., reptiles and birds). Viviparous animals are those in which internal fertilization leads to internal development of the embryo inside the female body, which then gives birth to live young ones (e.g., most mammals). Ovoviviparous animals are those where internal fertilization leads to internal development of the young one within a shelled egg inside the mother's body; when development is completed, the shelled egg is laid and then hatches, or the young hatches internally and is born live. Examples given are duckbill platypus and spiny ant-eater.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 10. Classify the plants according to photoperiodic requirement for flowering. (OR) Name types of plants according to photoperiodism. (LB-2013,2015)",
    answer:
      "Plants are classified according to their photoperiodic requirements for flowering into three main types: 1. Short-day plants (SDPs): These flower when the dark period is longer than a critical length (or day length is shorter than a critical length). Examples include cocklebur, chrysanthemum, soybean, tobacco. 2. Long-day plants (LDPs): These flower when the dark period is shorter than a critical length (or day length is longer than a critical length). Examples include henbane, snapdragon, cabbage, spring wheat. 3. Day-neutral plants (DNPs): These flower independently of the photoperiod. Examples include cucumber, tomato, garden pea, maize.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 11. Compare sexual and asexual reproduction. (LB-2015)",
    answer:
      "Asexual reproduction typically involves a single parent, produces no gametes, lacks meiosis, and results in offspring genetically identical to the parent. It's common in plants and less differentiated animals, often leading to rapid production of offspring. Sexual reproduction usually involves two parents, produces haploid gametes (which fuse during fertilization to form a diploid zygote), involves meiosis at some stage, and results in offspring that are not identical to parents due to genetic variation from recombination. It occurs in the majority of plant and animal species and generally leads to a less rapid increase in numbers compared to asexual reproduction.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 12. Define photoperiodism and write its effects in plants. (OR) Give importance of photoperiodism in plants. (LB-2011,2016)",
    answer:
      "Photoperiodism is the influence of variations in day length (photoperiod) on living organisms, particularly plants. Its effects in plants include influencing flowering (when shoot meristems start producing floral buds instead of leaves), fruit and seed production, bud and seed dormancy, leaf fall, and germination. The importance of photoperiodism is that it serves to synchronize the reproductive behavior of plants with their environment, ensuring reproduction at favorable times of the year and ensuring that members of the same species flower at the same time, encouraging cross-pollination for genetic variability.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 13. Define apomixes. (OR) What is meant by apomixes? (OR) What is apomixes (LB-2014,2018)",
    answer:
      "Apomixis is a form of parthenogenesis in flowering plants. In apomixis, a diploid cell of the ovule, either from the nucellus or megaspore, develops into a functional embryo in the absence of a male gamete (fertilization). The rest of the ovule develops into the seed, and the ovary into the fruit.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 14. Define vernalization. (OR) What is vernalization? (LB-2012,2018)",
    answer:
      "Vernalization is the process by which biennials and perennial plants are stimulated to flower by exposure to low temperature (chilling). The low temperature stimulus is received by the shoot apex of a mature stem or the embryo of the seed. The duration of chilling required varies (e.g., four days to three months), with temperatures around 4°C being very effective. It is believed to stimulate the production of a hormone (vernalin, possibly gibberellin) that induces flowering.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 15. Differentiate between haploid parthenogenesis and diploid parthenogenesis. (OR) Define diploid parthenogenesis. (OR) Define diploid parthenogenesis. Give an example. (LB-2012)",
    answer:
      "Haploid parthenogenesis occurs when an unfertilized haploid egg develops into a haploid offspring. An example is male honeybees (drones) developing from unfertilized eggs laid by the queen. Diploid parthenogenesis occurs when an egg-producing cell of the female undergoes a modified form of meiosis (e.g., involving total non-disjunction of chromosomes) so that the egg retains the diploid number of chromosomes. This diploid egg then develops into a diploid offspring without fertilization. An example is found in aphids, where diploid eggs develop into young females.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 16. Differentiate between menupause and ovulation. (OR) Explain menupause and afterbirth. (LB-2012)",
    answer:
      "Menopause is the end or complete stop of the menstrual cycle in human females, after which the female stops producing ova. Ovulation is the release of an ovum (egg) from the follicle in the ovary, typically occurring once per menstrual cycle. Afterbirth is the expulsion of the placenta and associated fetal membranes from the uterus after the delivery of a baby, usually within 10-45 minutes after birth.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 17. Differentiate between internal and external fertilization. (LB-2018)",
    answer:
      "External fertilization is the fusion of gametes (sperm and egg) that occurs outside the body of the female, typically in an aquatic environment where male gametes can swim towards female gametes (e.g., in fish and frogs). Internal fertilization is the fusion of gametes that occurs inside the body of the female, where sperms are lodged (e.g., in reptiles, birds, and mammals).",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 18. Differentiate between spermatogenesis and oogenesis. (LB-2009)",
    answer:
      "Spermatogenesis is the process of sperm production in males, occurring in the seminiferous tubules of the testes. Cells of the germinal epithelium (spermatogonia) divide and differentiate through meiotic divisions to form spermatids, which then mature into sperms. This process is continuous from puberty throughout life. Oogenesis is the process of egg (ovum) production in females, occurring in the ovaries. Germ cells (oogonia) divide to form primary oocytes, which undergo meiosis. Typically, one ovum is discharged from the ovary at a time (ovulation) in a cyclic manner. Second meiotic division in the oocyte is completed only upon fertilization.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 19. Differentiate between identical twins and fraternal twins. (OR) How identical twins and fraternal twins are produced? (LB-2010,2013)",
    answer:
      "Identical twins are produced when a single zygote, after fertilization, undergoes cleavage and the resulting two blastomeres separate and develop into two independent individuals. Since they originate from one zygote by mitosis, they have an identical genetic makeup. Fraternal twins are produced when a female produces more than one egg, and each egg is independently fertilized by a different sperm, forming two or more zygotes. These zygotes develop into offspring with different genetic combinations, similar to ordinary siblings.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 20. How can you differentiate between menstrual cycle and oestrous cycle? (OR) Define/Explain oestrous cycle. (LB-2014)",
    answer:
      "The menstrual cycle is a periodic reproductive cycle in human females, completed approximately every 28 days, involving changes in the ovaries and uterus, and characterized by menstruation (discharge of blood and cell debris if fertilization does not occur). The oestrous cycle is a reproductive cycle found in all female mammals except humans. In this cycle, estrogen prepares the uterus for conception, and follicle develops ova. A key feature of the oestrous cycle is that the female exhibits a desire for mating, or is said to be on 'heat,' often requiring the physical stimulus of mating for ovulation to occur. Menstruation is generally absent in the oestrous cycle; instead, the endometrium may be reabsorbed if conception doesn't occur.",
    chapter: 18,
  },
  {
    question: "(Chapter 18) 21. How lactation differ from gestation? (LB-2010)",
    answer:
      "Gestation is the period of pregnancy, from fertilization and implantation of the embryo/foetus in the uterus until birth. In humans, it's about 280 days. It involves the development of the foetus. Lactation is the production and secretion of milk by the mammary glands, typically starting after childbirth, to nourish the newborn. Hormones like Luteotropic Hormone (LTH) and human placental lactogen stimulate mammary development during pregnancy in preparation for lactation.",
    chapter: 18,
  },
  {
    question:
      "(Chapter 18) 22. How test tube babies are produced? (OR) What are test tube babies (LB-2009,2014)",
    answer:
      "Test tube babies are produced through a process of in vitro fertilization (IVF). Parental sperm and ovum (egg) are fertilized outside the female body, in a laboratory setting (in vitro, literally 'in glass'). The resulting zygote is then implanted back into the mother's uterus. If implantation is successful, a placenta establishes, and the remaining development takes place inside the mother's body, leading to a normal birth. This method benefits parents who are unable to conceive naturally due to certain physiological or physical abnormalities.",
    chapter: 18,
  },
  {
    question: "(Chapter 19) 1. What do you mean by open growth? (LB-2011,2012)",
    answer:
      "Open growth is a growth pattern characteristic of plants where, throughout their life, they continuously add new organs such as branches, leaves, and roots, primarily enlarging from the tips of roots and shoots (apical meristems). This means their growth is not predetermined to stop at a certain size or form, unlike the determinate growth seen in many animal structures or some plant parts like flowers and leaves.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 2. What is blastoderm?",
    answer:
      "In chick development, after cleavage of the fertilized egg (which occurs discoidally on the surface of the yolk), a disc-shaped mass of cells, two or more layers thick, is formed. This cap of cells is called the blastoderm. It lies close to the yolk. The blastoderm later splits into two layers, the epiblast and hypoblast, during gastrulation.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 3. What is cleft palate?",
    answer:
      "Cleft palate is a congenital condition (an abnormality present at birth) in which the palatine processes of the maxilla and the palatine bone fail to fuse during embryonic development. This results in a persistent opening between the oral and nasal cavities, which can interfere with sucking and may lead to inhalation of food into the lungs, causing aspiration pneumonia. It is listed as a genetic cause of skeletal deformity.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 4. What is microcephaly?",
    answer:
      "Microcephaly is a condition characterized by a small-sized skull. It is mentioned in the text as an example of a skeletal deformation that can be caused by some genetic defect.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 5. What is neurula? (OR) What is neurocoel? (LB-2015)",
    answer:
      "Neurula is the stage of embryonic development during which the neural tube is formed from the neural plate through the process of neurulation. The embryo at this stage is termed a neurula. The neurocoel is the cavity enclosed within the newly formed neural tube. The neural tube itself develops into the central nervous system (brain and spinal cord).",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 6. What is present goal of gerontology? (LB-2010)",
    answer:
      "Gerontology is the study of aging. The present goal of gerontology is not necessarily to increase life span but to increase health span, meaning to improve the quality of life and health during the aging process, allowing older individuals to remain healthy and active for longer.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 7. What is gastrocoel and from which germ layer it is originated? (LB-2013)",
    answer:
      "The gastrocoel, also known as the archenteron or primitive gut, is the cavity formed during gastrulation in an embryo. In chick development, the text states that the cavity between the yolk and the endoderm, which has been called gastrocoele, is later termed as primitive gut. It is lined by endoderm. The endoderm (hypoblast) itself originates from the rearrangement and differentiation of cells of the blastoderm during gastrulation.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 8. What is Henson’s node? Give its role. (LB-2012)",
    answer:
      "Hensen's node (also known as the primitive knot) is a local thickening of closely packed cells found at the cephalic (anterior) end of the primitive streak in the chick embryo during gastrulation. Its role is significant as it marks the site of a special type of invagination. Cells push in from the region of Hensen's node to form the rod-like notochord in the midline beneath the ectoderm. Dorsal mesoderm, which organizes into somites, is also formed from Hensen's node.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 9. What is meant by discoidal cleavage? (LB-2016)",
    answer:
      "Discoidal cleavage is a type of cleavage (early mitotic divisions of a fertilized egg) that occurs in eggs with a large amount of yolk, such as in birds (like the chick). In this process, cell division is confined to a small, disc-shaped area of cytoplasm (the blastodisc or germinal disc) lying on the surface of the yolk at the animal pole. The cleavage furrows do not cut through the entire yolk mass.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 10. What is meristem? (OR) Define meristem. Name its types based on position. (OR) Describe various types of meristems. (OR) What is apical meristem? (OR) What are intercalary meristems. Give their role. (OR) What do you mean by lateral meristem. (LB-2013,2015,2016,2017,2018)",
    answer:
      "Meristems are young tissues or groups of cells in plants that retain the potential to divide, and are responsible for growth. Based on position, types include: 1. Apical Meristems: Found at the tips (apices) of roots and shoots, they are primarily concerned with the extension of the plant body (primary growth). 2. Intercalary Meristems: These are parts of apical meristems that get separated by permanent tissues, situated at the bases of internodes in many plants. They play an important role in the production of leaves and flowers and are of a temporary nature. 3. Lateral Meristems: These are cylinders of dividing cells found in dicots and gymnosperms, such as vascular cambium and cork cambium. They are responsible for the increase in diameter of stems and roots (secondary growth).",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 11. What is the difference between epiblast and hypoblast? (LB-2017)",
    answer:
      "During gastrulation in the chick embryo, the blastoderm splits into two layers: an upper layer of cells called the epiblast, and a lower layer of cells called the hypoblast. The epiblast is mainly presumptive ectoderm (which will form the epidermis and nervous system) and mesoderm (which will form muscles, skeleton, etc.). The hypoblast is mainly presumptive endoderm, as its cells grow outward over the surface of the yolk and then downward around it to form the endodermal lining of the yolk sac and primitive gut.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 12. What is the difference between inhibitory effect and compensatory effect?",
    answer:
      "In the context of apical dominance, the inhibitory effect refers to the suppression of growth in lower axillary (lateral) buds by the active shoot apex (apical bud). This inhibition is thought to be caused by auxin diffusing from the apical bud. The compensatory effect occurs when the apical bud is removed; this releases the lateral buds from apical dominance, allowing them to grow. This release and subsequent growth of lateral buds is the compensatory effect.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 13. Write down the names of different kinds of cytoplasm’s with their functions.",
    answer:
      "In the fertilized egg of an ascidian, different cytoplasmic components are segregated into different blastomeres and are believed to contain morphogenetic determinants for cell differentiation: 1. Clear cytoplasm: Produces larval epidermis. 2. Yellow cytoplasm: Gives rise to muscle cells. 3. Gray vegetal cytoplasm: Gives rise to gut. 4. Grey equatorial cytoplasm: Produces notochord and neural tube.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 14. Briefly describe the external and internal factors that affect growth in plants. (LB-2009)",
    answer:
      "External factors affecting plant growth include: Temperature (optimum usually 25-30°C), Light (intensity, quality, duration for photosynthesis and photoperiodism), Oxygen (necessary for metabolic activity), Carbon Dioxide (essential for photosynthesis), Water (for cell elongation), and Nutrition (supplies energy). Internal factors include: Hormones (e.g., IAA causes cell elongation) and Vitamins (synthesized by plants, deficiencies can cease growth).",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 15. Define aging and write its symptoms. (OR) Give symptoms of aging. (OR) What are important signs of aging in human beings? (OR) What are the causes of aging and how aging can be slowed down? (LB-2014)",
    answer:
      "Aging is an inevitable process defined as negative physiological changes in our body. Symptoms (signs of old age) include: loss of hair pigment, development of pigmented areas in skin, dryness and wrinkling of skin, loss of agility, increased weight due to fat, poor vision, forgetfulness, general weakness, and decreased body immunity. Degeneration of organs and tissues like arthritis (cartilage degeneration) and arteriosclerosis (blood vessel hardening) also occur. Causes are not fully known but include finite mitotic divisions of cells, changes in intracellular substances (e.g., collagen cross-linking), and spontaneous mutations. Aging can be slowed down by better nutrition, regular meals, exercise, adequate sleep, abstinence from smoking, and maintaining ideal weight.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 16. Define gastrulation in chick. (LB-2013)",
    answer:
      "Gastrulation in chick is characterized by the movement and rearrangement of cells in the embryo. During this process, the blastoderm splits into two layers: an upper layer called the epiblast (presumptive ectoderm and mesoderm) and a lower layer called the hypoblast (presumptive endoderm). A midline thickening called the primitive streak forms as presumptive mesodermal cells migrate medially and caudally. The Hensen's node at the anterior end of the primitive streak is the site from which the notochord and dorsal mesoderm invaginate.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 17. Define growth correlations. (LB-2018)",
    answer:
      "Growth correlations refer to the reciprocal relationship in the development of a plant where different organs grow at different rates and in different directions, and the development of different parts takes place in a coordinated manner. One of the most important correlative effects is apical dominance, where the active shoot apex controls the development of lateral buds.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 18. Define neurocoel, blastocoel and gastrocoel.",
    answer:
      "Blastocoel is the segmentation cavity present in the blastula stage of embryonic development, formed as a result of cleavage. Gastrocoel (also archenteron or primitive gut) is the cavity formed during gastrulation, lined by endoderm. In chick, it's the cavity between the yolk and endoderm. Neurocoel is the cavity enclosed within the neural tube, which is formed during neurulation and later develops into the ventricles of the brain and the central canal of the spinal cord.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 19. Define organizer and inducer substance. (OR) What are primary organizer and inducer substances? (LB-2009,2013)",
    answer:
      "An organizer, specifically the primary organizer (as designated by Spemann), is a region of an early embryo (like the dorsal lip of the blastopore in amphibians) that is capable of inducing the development of a secondary embryo or specific structures in the host tissue when transplanted. Inducer substances are presumed to be chemical signals released by the organizer tissue that influence the differentiation and development of adjacent cells or tissues, evoking a specific developmental response. The organizer (e.g., dorsal lip) acts by releasing these inducer substances.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 20. Define regeneration with examples. (LB-2011)",
    answer:
      "Regeneration is the ability of an organism to regain or recover a lost or injured part of its body. Examples include: sponges growing into a complete sponge from any piece of their body; a lobster regenerating a lost pincer claw; a starfish regenerating arms or even a whole individual from a piece containing part of the central disc; an earthworm regenerating a new head if the original is removed; salamanders regenerating limbs; lizards regenerating tails; and healing of fractures and skin wounds in mammals. In plants, it's the basis of vegetative propagation.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 21. Define teratology and teratogens? (OR) Define teratology. (LB-2018)",
    answer:
      "Teratology is the branch of biology that deals with abnormal developments and the causes for such developments in organisms. Teratogens are environmental factors that cause or contribute to abnormal development. Examples of teratogens include ionizing radiations (like X-rays), nutritional deficiencies, toxins, and certain drugs ingested by the mother during pregnancy.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 22. Differentiate between area pellucida and area opacca.",
    answer:
      "In the chick blastoderm during early development, the area pellucida is the central, translucent area where the cells have separated from the underlying yolk, often with a pool of fluid beneath them. The area opaca is the peripheral part of the blastoderm where the cells remain unseparated from the yolk and are closely adherent to it, giving it a white, opaque appearance that transmits less light.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 23. Differentiate between gerontology and teratology. (LB-2010)",
    answer:
      "Gerontology is the study of aging, which involves the negative physiological changes that occur in an organism over time. Teratology is the branch of biology that deals with abnormal developments (malformations) and the factors or causes that lead to such abnormalities during embryonic or fetal development.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 24. Differentiate between growth and development. (OR) Define growth. (LB-2010,2016,2017)",
    answer:
      "Growth is the permanent and irreversible increase in size that occurs as an organism matures. It involves processes like cell division and cell elongation. Development is a broader term referring to the programmed series of stages an organism undergoes from a simpler to a more complex form, including not only growth but also cellular differentiation, morphogenesis (formation of tissues and organs), and maturation. Embryonic development refers to the progressive changes an organism undergoes from a fertilized egg to an adult form.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 25. Differentiate between morula and blastula.",
    answer:
      "A morula is an early stage of embryonic development resulting from cleavage of the zygote. It consists of a rounded, closely packed mass of blastomeres. In chick, it's a disc-shaped mass. A blastula is a subsequent stage, characterized by the presence of a fluid-filled cavity called the blastocoel. The morula stage is generally short-lived and transitions into the blastula as the blastocoel forms.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 26. Differentiate between primary and secondary growth. (LB-2018)",
    answer:
      "Primary growth in plants refers to the increase in length of roots and shoots, and the formation of primary tissues. This growth originates from the activity of apical meristems located at the tips of roots and stems. Secondary growth refers to the increase in thickness or girth of stems and roots, primarily in dicots and gymnosperms. This growth results from the activity of lateral meristems, namely the vascular cambium (which adds secondary xylem and phloem) and the cork cambium (which adds cork).",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 27. Give the name of the two sheets like layers into which mesoderm splits and name the cavity formed between these. (OR) Differentiate between somatic and splanchnic mesoderm. (LB-2012,2013)",
    answer:
      "The lateral plate mesoderm in an embryo splits into two sheet-like layers: the outer somatic mesoderm and the inner splanchnic mesoderm. The somatic mesoderm is associated with the ectoderm (forming somatopleure, which contributes to the body wall). The splanchnic mesoderm is associated with the endoderm (forming splanchnopleure, which contributes to the gut wall). The cavity formed between the somatic and splanchnic mesoderm is the coelom (body cavity).",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 28. How do final size of cells of cortex and tracheids is attained in zone of maturation? (LB-2013)",
    answer:
      "In the zone of maturation in plants, cell enlargement ceases and cells attain their final size and form. Cells that develop into pith and cortex do not elongate further along the axis. Other cells, like fibers and tracheids, elongate lengthwise more than in other directions during this phase, reaching their final specialized dimensions as part of the maturation process.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 29. How notochord is formed in chick embryo? (LB-2011)",
    answer:
      "In the chick embryo, after the primitive streak and endoderm are established, cells begin to push in (invaginate) from the region of Hensen's node (the anterior end of the primitive streak). These cells migrate forward in the midline, beneath the ectoderm and between the epiblast and hypoblast, to form the rod-like notochord. In an embryo of about 18 hours, the notochord is one of the few prominent structural features.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 30. How primitive streak in formed? (LB-2008)",
    answer:
      "In the chick embryo during gastrulation, presumptive mesodermal cells from the epiblast migrate medially (towards the midline) and caudally (towards the posterior). This aggregation and convergence of cells creates a midline thickening called the primitive streak. As more cells continue to aggregate, the primitive streak rapidly grows in length.",
    chapter: 19,
  },
  {
    question: "(Chapter 19) 31. State dedifferentiation of cells. (LB-2012)",
    answer:
      "Dedifferentiation of cells is a process where specialized cells lose their specialized characteristics and revert to a less specialized or more embryonic-like state. The text mentions this in the context of regeneration in organisms like salamanders or newts, where some specialized tissue cell types in the stump of an amputated limb apparently dedifferentiate before they proceed to differentiate again into the same or possibly different types of cells needed for the new part.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 19) 32. State the role of gray vegetal and grey equatorial cytoplasm. (LB-2012)",
    answer:
      "In the fertilized egg of an ascidian, specific cytoplasmic regions are segregated into different blastomeres and are believed to contain morphogenetic determinants for cell differentiation. The gray vegetal cytoplasm gives rise to the gut. The grey equatorial cytoplasm produces the notochord and the neural tube.",
    chapter: 19,
  },
  {
    question:
      "(Chapter 20) 1. What is semi-conservative replication of DNA? (LB-2015)",
    answer:
      "Semi-conservative replication is the process by which DNA makes copies of itself. In this model, the original double helix unwinds, and each of the two parent strands serves as a template for the synthesis of a new complementary strand. As a result, each of the two daughter DNA molecules consists of one original (parental) strand and one newly synthesized strand. Thus, the original duplex is not conserved as a whole, but each strand of it is.",
    chapter: 20,
  },
  {
    question: "(Chapter 20) 2. What is sickle cell anemia? (LB-2016)",
    answer:
      "Sickle cell anemia is a hereditary disease caused by a defect in the hemoglobin protein. It results from a single point mutation in the gene encoding the beta-globin chain of hemoglobin, where glutamic acid is replaced by valine at a specific position. This alteration changes the structure of hemoglobin, causing red blood cells to become sickle-shaped under low oxygen conditions, reducing their ability to carry oxygen and leading to various health problems.",
    chapter: 20,
  },
  {
    question: "(Chapter 20) 3. What is transformation? (LB-2011,2016)",
    answer:
      "Transformation is the transfer of genetic material from one cell to another, which can alter the genetic makeup of the recipient cell. This phenomenon was first observed by Frederick Griffith in his experiments with Streptococcus pneumoniae, where information specifying the polysaccharide coat passed from dead, virulent S bacteria to live, coatless R bacteria, permanently transforming the R bacteria into the virulent S variety.",
    chapter: 20,
  },
  {
    question: "(Chapter 20) 4. What is translation? (LB-2014,2015)",
    answer:
      "Translation is the second step in the central dogma of gene expression. It is the process by which the genetic information contained in the nucleotide sequence of a messenger RNA (mRNA) molecule is used to direct the synthesis of a polypeptide (protein) by ribosomes. The mRNA sequence is 'translated' into an amino acid sequence in the polypeptide chain.",
    chapter: 20,
  },
  {
    question: "(Chapter 20) 5. What are mutagens? Give one example. (LB-2018)",
    answer:
      "Mutagens are agents that cause damage to DNA, leading to mutations (changes in the DNA sequence). These can be physical, like radiations, or chemical. An example of a mutagen is radiation (e.g., X-rays, UV light) or various chemicals released into the environment by industrial societies.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 6. What are the contributions of P.A. Levene for determining the structure of DNA? (LB-2017)",
    answer:
      "In the 1920s, biochemist P.A. Levene determined the basic structure of nucleic acids. He found that DNA contains three main components: (1) phosphate (PO4) groups, (2) a five-carbon sugar (deoxyribose), and (3) nitrogen-containing bases (purines: adenine and guanine; pyrimidines: thymine and cytosine). Levene concluded that DNA and RNA molecules are made of repeating units called nucleotides.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 7. What is alkaptonuria? (OR) What is phenylketonuria? (OR) Differentiate between alkaptonuria and phenylketonuria.",
    answer:
      "Alkaptonuria is an inherited disease where patients produce urine containing homogentisic acid, which oxidizes and turns the urine black upon exposure to air. This is because they lack the enzyme necessary to break down homogentisic acid. Phenylketonuria (PKU) is an inherited disorder where the amino acid phenylalanine is not degraded due to a defective enzyme, phenylalanine hydroxylase. Phenylalanine consequently accumulates in cells, leading to mental retardation if untreated, as the brain fails to develop properly in infancy. Both are examples of inborn errors of metabolism due to enzyme deficiencies caused by gene mutations.",
    chapter: 20,
  },
  {
    question: "(Chapter 20) 8. What is central dogma? (LB-2018)",
    answer:
      "The central dogma describes the basic mechanism of reading and expressing genes, which is common to all organisms. It states that genetic information flows from DNA to RNA, and then from RNA to protein. The first step, DNA to RNA, is transcription (an mRNA copy of the gene is produced). The second step, RNA to protein, is translation (the mRNA sequence directs polypeptide synthesis).",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 9. What is genetic code? (OR) What are non-sense codons? (OR) Enlist non-sense codons and their function. (OR) 10. Where codon and anticodon are situated? (LB-2012,2014,2018)",
    answer:
      "The genetic code is a set of rules by which information encoded in genetic material (DNA or RNA sequences) is translated into proteins (amino acid sequences) by living cells. It is a triplet code, meaning a combination of three nucleotides, called a codon, specifies a particular amino acid. Codons are situated on the messenger RNA (mRNA). Non-sense codons (also called stop codons) are specific codons that do not code for any amino acid and signal the termination of protein synthesis. The three non-sense codons are UAA, UAG, and UGA. An anticodon is a sequence of three nucleotides located on a transfer RNA (tRNA) molecule that is complementary to a corresponding codon on an mRNA sequence.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 11. What is heterochromatin? (OR) What is euchromatin? (OR) Differentiate between heterochromatin and euchromatin. (LB-2016,2018)",
    answer:
      "Heterochromatin refers to highly condensed portions of chromatin (the complex of DNA and proteins, mainly histones, that forms chromosomes). Some heterochromatin remains permanently condensed, and its DNA is generally not expressed (transcriptionally inactive). Euchromatin is the remainder of the chromosome material that is less condensed. It is condensed only during cell division for compact packaging but exists in an open configuration at other times, allowing its genes to be expressed (transcriptionally active).",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 12. What is mutation? (OR) What do you mean by mutations? (OR) Define mutation and differentiate between chromosomal aberration and point mutation. (LB-2010,2013,2017)",
    answer:
      "A mutation is a change in the DNA sequence of an organism. Mutations can occur due to mistakes in DNA replication or damage to the genetic message. Chromosomal aberrations are large-scale changes involving the presence of an extra chromosome, loss of a chromosome, or structural changes like deletions, insertions, or inversions in parts of a chromosome. Point mutations are smaller-scale mutational changes that affect the message itself, producing alterations in the sequence of DNA nucleotides, often involving only one or a few base pairs in the coding sequence.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 13. What is phosphodiester linkage? Draw structural formula. (OR) What is phosphodiester bond or linkage? (LB-2013,2015,2016)",
    answer:
      "A phosphodiester linkage (or bond) is a covalent bond that links two nucleotides together in a DNA or RNA strand. It is formed by a dehydration synthesis reaction between the phosphate group of one nucleotide (attached to its 5' carbon) and the hydroxyl group of another nucleotide (on its 3' carbon), eliminating a water molecule. The phosphate group becomes linked to the two sugars by means of a pair of ester (P-O-C) bonds. (Fig 20.11 in the text shows this linkage).",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 14. Compare replication, transcription and translation.",
    answer:
      "Replication is the process by which a DNA molecule makes an identical copy of itself. Both strands of the DNA serve as templates. Transcription is the process where the genetic information from a segment of DNA (a gene) is copied into a complementary RNA molecule (usually mRNA). Only one DNA strand serves as a template. Translation is the process where the nucleotide sequence of an mRNA molecule is used to synthesize a specific polypeptide (protein) chain on a ribosome, involving tRNA to bring amino acids.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 15. Define chromosomal theory of inheritance. (LB-2010,2014)",
    answer:
      "The chromosomal theory of inheritance, first formulated by Walter Sutton in 1902, states that Mendelian genes are located on chromosomes. It proposes that the behavior of chromosomes during meiosis (segregation and independent assortment) accounts for Mendel's laws of inheritance. The segregation of traits corresponds to the segregation of chromosomes.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 16. Define karyotype. (OR) What is karyotype? (OR) What do you mean by karyotype? Give its significance. (LB-2014)",
    answer:
      "A karyotype is the particular array of chromosomes that an individual possesses, characterized by the number and appearance (size, shape, centromere location, banding patterns) of the chromosomes in the nucleus of a eukaryotic cell. Karyotypes show marked differences among species and sometimes even among individuals of the same species. Its significance lies in identifying species, detecting chromosomal abnormalities associated with genetic disorders, and studying evolutionary relationships.",
    chapter: 20,
  },
  {
    question: "(Chapter 20) 17. Define nucleosome. (LB-2012)",
    answer:
      "A nucleosome is the basic structural unit of DNA packaging in eukaryotes. It consists of a segment of DNA wound around a core of eight histone proteins (two each of H2A, H2B, H3, and H4). The DNA duplex is coiled around this histone core approximately every 200 nucleotides. Nucleosomes help to compact the long DNA molecule to fit into the nucleus and play a role in regulating gene expression.",
    chapter: 20,
  },
  {
    question: "(Chapter 20) 18. Define nucleotide and nucleoside. (LB-2017)",
    answer:
      "A nucleotide is the repeating monomer unit of DNA and RNA. It consists of three main components: a phosphate group, a five-carbon sugar (deoxyribose in DNA, ribose in RNA), and a nitrogen-containing base (adenine, guanine, cytosine, thymine in DNA; uracil instead of thymine in RNA). A nucleoside is a part of a nucleotide, consisting of just the nitrogenous base attached to the five-carbon sugar, without the phosphate group.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 19. Define one gene/one polypeptide hypothesis? (LB-2017)",
    answer:
      "The one-gene/one-polypeptide hypothesis states that each gene encodes the structure of one specific polypeptide chain. This is a refinement of the earlier one-gene/one-enzyme hypothesis by Beadle and Tatum. It recognizes that many enzymes and other proteins are composed of multiple polypeptide subunits, with each subunit being encoded by a separate gene.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 20. Define point mutation. (OR) State point mutation with examples. (OR) Define point mutations. Give one example. (LB-2012,2014,2018)",
    answer:
      "A point mutation is a mutational change that affects the DNA sequence at a specific point, typically involving alterations of only one or a few base pairs in the coding sequence. These can occur due to spontaneous pairing errors during DNA replication or from damage to DNA caused by mutagens. An example is sickle cell anemia, where a single base pair change leads to the substitution of one amino acid (valine for glutamic acid) in the hemoglobin beta chain. Another example is phenylketonuria.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 21. Define transcription and how it is initiated? (OR) What is the function of RNA polymerase in transcription? (LB-2010,2013)",
    answer:
      "Transcription is the process in which an mRNA copy of a gene's DNA sequence is produced. It is initiated when the enzyme RNA polymerase binds to a specific DNA sequence called a promoter, located upstream of the gene. In prokaryotes, a subunit of RNA polymerase called the sigma factor is responsible for recognizing the promoter and correctly initiating the transcription process. RNA polymerase then moves along the DNA template strand, synthesizing a complementary RNA chain. Its function is to catalyze the synthesis of RNA from a DNA template.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 22. Differentiate among conservative, semi-conservative and dispersive replication of DNA.",
    answer:
      "Conservative replication model proposed that the parental double helix would remain intact, and an entirely new daughter DNA molecule would be synthesized. Semi-conservative replication model (which is the correct one) states that the parental DNA double helix unwinds, and each parent strand serves as a template for the synthesis of a new complementary strand, resulting in two daughter DNA molecules, each composed of one old and one new strand. Dispersive replication model predicted that the parental DNA would become completely dispersed, and each strand of all daughter molecules would be a mixture of old and new DNA segments.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 23. Differentiate between leading and lagging strand.",
    answer:
      "During DNA replication, the leading strand is synthesized continuously in the 5' → 3' direction, moving towards the replication fork. DNA polymerase III adds nucleotides continuously to its growing 3' end. The lagging strand is also synthesized in the 5' → 3' direction but discontinuously, as a series of short segments called Okazaki fragments, because it elongates away from the replication fork. Each Okazaki fragment is initiated with an RNA primer, and then these fragments are later joined together by DNA ligase.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 24. Differentiate between sense and anti-sense strands of DNA. (LB-2018)",
    answer:
      "During transcription, only one of the two DNA strands is transcribed into RNA. The strand that is transcribed is called the template strand or the antisense strand; its sequence is complementary to the RNA produced. The opposite DNA strand, which is not transcribed, is called the coding strand or the sense strand; its sequence (with U replacing T) is similar to the RNA transcript produced (except for the RNA containing uracil instead of thymine).",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 25. Differentiate between rough and smooth type of bacteria. (LB-2017)",
    answer:
      "In Griffith's experiments with Streptococcus pneumoniae, the smooth (S) type bacteria are the normal pathogenic form that forms smooth colonies on a culture dish. They possess a polysaccharide coat which is necessary for their virulence. The rough (R) type bacteria are a mutant form that lacks the enzyme needed to manufacture the polysaccharide coat. They form rough colonies on a culture dish and are non-virulent (do not cause disease).",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 26. Enlist different shapes of chromosome. (LB-2012)",
    answer:
      "Chromosomes acquire different shapes at the time of anaphase during cell division, depending on the location of the centromere. The text mentions that the usual shapes are i, j, and v. These correspond to telocentric (i-shaped, centromere at the very end), acrocentric (j-shaped, centromere very close to one end), and metacentric (v-shaped, centromere in the middle) or submetacentric (L-shaped or j-shaped, centromere slightly off-center) chromosomes.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 27. Give the length of Okazaki fragment. (OR) What are Okazaki fragments? (LB-2015,2016)",
    answer:
      "Okazaki fragments are short segments of DNA that are synthesized discontinuously on the lagging strand during DNA replication. Each fragment is synthesized in the 5' → 3' direction. The length of Okazaki fragments is about 100-200 nucleotides long in eukaryotes and 1000-2000 nucleotides long in prokaryotes. These fragments are later joined together by the enzyme DNA ligase to form a continuous lagging strand.",
    chapter: 20,
  },
  {
    question: "(Chapter 20) 28. Give the role and kinds of tRNA. (LB-2013)",
    answer:
      "Transfer RNA (tRNA) molecules play a crucial role in translation (protein synthesis). Their role is to transport specific amino acids to the ribosomes for use in building polypeptides. They also position each amino acid at the correct place on the elongating polypeptide chain by recognizing and binding to the complementary codons on the mRNA via their anticodon sequence. Human cells contain about 45 different kinds of tRNA molecules, each specific for carrying a particular amino acid or recognizing specific codons.",
    chapter: 20,
  },
  {
    question:
      "(Chapter 20) 29. How many types of DNA polymerases are found, write down their names? (LB-2017)",
    answer:
      "In bacteria (specifically E. coli mentioned in the text), there are three main DNA polymerases: DNA polymerase I, DNA polymerase II, and DNA polymerase III. DNA polymerase III is the true E. coli replicating enzyme, while DNA polymerase I plays a supporting role in replication (e.g., removing RNA primers and filling gaps). The role of DNA polymerase II is less central to replication and more involved in DNA repair.",
    chapter: 20,
  },
  {
    question: "(Chapter 21) 30. What is Necrosis? (LB-2014)",
    answer:
      "Necrosis is a type of cell death that occurs due to tissue damage, such as injury or infection. Unlike apoptosis (programmed cell death), during necrosis the typical cell swells and bursts, releasing its intracellular contents freely into the extracellular environment. This release can damage neighboring cells and often causes inflammation.",
    chapter: 21,
  },
  {
    question: "(Chapter 21) 31. What is tumor? (LB-2014)",
    answer:
      "A tumor is an unwanted clone of cells formed when a cell begins to grow and divide in an unregulated fashion, without the body's need for further cells of its type, and produces new cells that continue to proliferate in an uncontrolled fashion. Tumors can be benign (small, localized, cells behave like normal cells) or malignant (cancerous, cells divide rapidly, invade surrounding tissues, and can spread to other parts of the body).",
    chapter: 21,
  },
  {
    question: "(Chapter 21) 32. What is Klinefelter’s syndrome? (LB-2016)",
    answer:
      "Klinefelter's syndrome is a genetic disorder resulting from sex chromosome non-disjunction, where individuals have an additional X chromosome, resulting in a karyotype of 47 chromosomes (44 autosomes + XXY). Phenotypically, they are male but often have enlarged breasts, a tendency to tallness and obesity, small testes with no sperm at ejaculation, and underdeveloped secondary sex characters.",
    chapter: 21,
  },
  {
    question: "(Chapter 21) 33. What is metastasis? (LB-2016)",
    answer:
      "Metastasis is the spread of tumor cells from their site of original appearance to other parts of the body and the establishment of secondary areas of growth. This is a characteristic of malignant tumors (cancer). Metastatic cells break contact with other cells, overcome barriers, get into the body's circulatory system, and proliferate in new locations.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 34. What is the importance of bivalent formation? (LB-2012)",
    answer:
      "Bivalent formation (also called a tetrad) occurs during prophase I of meiosis when homologous chromosomes pair up (synapsis). The importance of bivalent formation is that it allows for genetic recombination through crossing over. Within each bivalent, non-sister chromatids of homologous chromosomes can exchange segments at chiasmata, leading to new combinations of alleles on the chromosomes. This reshuffling of genetic material is crucial for producing genetic variation in the offspring.",
    chapter: 21,
  },
  {
    question: "(Chapter 21) 35. Whathappens during metaphase I? (LB-2013)",
    answer:
      "During metaphase I of meiosis, the nuclear membrane disorganizes (if it reformed in telophase I, or at the start of prophase I). Spindle fibers originate, and kinetochore fibers from each pole attach to the kinetochores of the homologous chromosomes (one chromosome of each homologous pair attaches to fibers from one pole, and the other chromosome to fibers from the opposite pole). The bivalents (paired homologous chromosomes) align at the equator of the spindle, forming the metaphase plate. The sister chromatids of an individual chromosome in the bivalent behave as a unit.",
    chapter: 21,
  },
  {
    question: "(Chapter 21) 36. What are mutagens? Give one example. (LB-2018)",
    answer:
      'This question is also present for Chapter 20. Mutagens are agents that cause mutations, which are changes in the DNA sequence. The text in Chapter 21 mentions that cancer is caused mainly by mutations in somatic cells, and these mutations can be brought about by various factors. Chapter 20 (page 39) gives examples: "radiations or chemicals. The latter class of mutations is of particular practical importance because modem industrial societies often release many chemical mutagens into the environment." So, an example of a mutagen is radiation (e.g., X-rays) or chemical mutagens.',
    chapter: 20,
  },
  {
    question:
      "(Chapter 21) 37. What are the apparent symptoms or effects of Down’s syndrome? (OR) What is Down’s syndrome? (OR) Describe causes and symptoms of Down’s syndrome. (OR) Write symptoms of Down’s syndrome. (LB-2014,2018)",
    answer:
      "Down's syndrome (also known as Mongolism) is a consequence of autosomal non-disjunction, specifically the failure of the 21st pair of chromosomes to segregate during meiosis. This results in an individual having 47 chromosomes (trisomy 21, 2n+1). Apparent symptoms or effects include a flat, broad face, squint eyes with a skin fold in the inner corner, protruding tongue, mental retardation, and defective development of the central nervous system. The risk is related to maternal age.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 38. What are the symptoms of Turner’s syndrome? (OR) How Turner’s syndrome is caused and give its features. (OR) What is Turner’s syndrome? (LB-2013,2014)",
    answer:
      "Turner's syndrome is a genetic disorder caused by the non-disjunction of sex chromosomes, resulting in individuals having one missing X chromosome, leading to a karyotype of 45 chromosomes (44 autosomes + X, denoted as XO). Individuals with this condition often do not survive pregnancy and are aborted. Those who survive have a female appearance but exhibit symptoms such as short stature, webbed neck, lack of ovaries, and complete absence of germ cells, leading to sterility.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 39. What is Apoptosis? (OR) Differentiate between Necrosis and Apoptosis. (OR) How cell death (Apoptosis) is beneficial for organisms? (LB-2014)",
    answer:
      "Apoptosis is a programmed cell death, an internal program of events and sequence of morphological changes by which a cell commits suicide. During apoptosis, the dying cell shrinks, condenses, and ultimately splits up, releasing small membrane-bounded apoptotic bodies which are generally phagocytosed by other cells. Necrosis, in contrast, is cell death due to tissue damage, where the cell swells and bursts, releasing intracellular contents that can damage neighboring cells and cause inflammation. Apoptosis is beneficial as it helps in the proper control of multicellular development, leading to the deletion of entire structures (e.g., tail of developing human embryos) or parts of structures (e.g., tissue between developing digits), and even controls the number of neurons.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 40. What is mitotic apparatus? (OR) What is mitotic apparatus? Give its functions. (LB-2013,2016,2018)",
    answer:
      "The mitotic apparatus is a specialized microtubule structure formed during mitosis in animal cells. It includes the asters (radiating astral microtubules from the centrioles) and the spindle (composed of kinetochore microtubules and polar microtubules). It originates from the two pairs of centrioles that migrate to opposite poles of the nucleus. Its functions are to attach to and capture chromosomes, align them at the metaphase plate, and then separate the sister chromatids (or homologous chromosomes in meiosis I) to ensure their equal distribution to the daughter cells.",
    chapter: 21,
  },
  {
    question: "(Chapter 21) 41. Define cell cycle. (LB-2015)",
    answer:
      "The cell cycle is the sequence of changes a cell undergoes, which involves a period of growth, replication of DNA, followed by cell division. It comprises two main phases: interphase (the period of non-apparent division, including G1, S, and G2 sub-phases) and the period of division (mitotic phase or M-phase).",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 42. Define non-disjunction. (OR) What is non-disjunction or meiotic errors? (OR) What do you mean by non-disjunction? (LB-2017)",
    answer:
      "Non-disjunction is a meiotic error where chromosomes fail to segregate (separate) properly during anaphase and telophase of meiosis I or meiosis II. This results in an unequal distribution of chromosomes among the daughter nuclei, leading to gametes with either an increase (e.g., n+1) or decrease (e.g., n-1) in the number of chromosomes. This can cause serious genetic disorders in the resulting offspring if such gametes are fertilized.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 43. Define karyokinesis and cytokinesis. (OR) How do karyokinesis and cytokinesis phases of cell division differ? (LB-2014)",
    answer:
      "Karyokinesis is the division of the nucleus, which occurs during mitosis (or meiosis). It involves stages like prophase, metaphase, anaphase, and telophase, where the chromosomes are condensed, aligned, and segregated. Cytokinesis is the division of the whole cell (cytoplasm) into two daughter cells, which typically follows karyokinesis. Karyokinesis deals with nuclear material, while cytokinesis deals with the division of the cytoplasm and cell membrane/wall.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 44. Define meiosis and mitosis. (OR) What is the importance of mitosis and meiosis? (LB-2017)",
    answer:
      "Mitosis is a type of cell division that ensures the same number of chromosomes in the daughter cells as in the parent cell. It is important for growth, development, asexual reproduction, regeneration, healing, and replacement of old cells, ensuring genetic continuity. Meiosis is a special type of cell division in which the number of chromosomes in daughter cells is reduced to half as compared to the parent cell. It involves two consecutive divisions (meiosis I and meiosis II) and produces four haploid cells from a diploid parent cell. Meiosis is important for gamete formation in animals and spore formation in plants, maintaining a constant chromosome number across generations in sexually reproducing organisms, and creating genetic variation through crossing over and random assortment of chromosomes.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 45. Differentiate between benign and malignant tumor.",
    answer:
      "A benign tumor is typically of small size and localized, meaning it does not spread to other parts of the body. The cells in a benign tumor usually behave like normal cells and have little deleterious effect, except possibly due to interference with normal cells or hormone-like secretions. A malignant tumor, or cancer, is composed of cells that divide more rapidly, invade surrounding tissues, can get into the body's circulatory system, and set up areas of proliferation away from their original site (metastasis). Malignant cells are less differentiated than normal cells and exhibit characteristics of rapid growth.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 46. Differentiate between G o-phase and S-phase of interphase. (OR) Differentiate between interphase and mitotic phase. (OR) Describe changes occur during G1-phase. (LB-2011,2012,2016)",
    answer:
      "Interphase is the period of the cell cycle between two consecutive divisions, involving growth and DNA replication. It includes G1, S, and G2 phases. The mitotic phase (M-phase) is the period of actual cell division (mitosis and cytokinesis). G1 (Gap 1) phase is a period of extensive metabolic activity where the cell normally grows in size, specific enzymes are synthesized, and DNA base units are accumulated for DNA synthesis. S-phase (synthesis phase) is when DNA is synthesized and chromosomes are replicated. G0-phase is a state where a post-mitotic cell can exit the cell cycle during G1 and remain in a non-proliferating state for days, weeks, or even a lifetime.",
    chapter: 21,
  },
  {
    question: "(Chapter 21) 47. Give events of Zygotene. (LB-2013)",
    answer:
      "Zygotene is a stage of Prophase I in meiosis. The essential phenomenon that occurs during zygotene is synapsis, which is the pairing of homologous chromosomes. This pairing is highly specific and exact, point for point, though it has no definite starting point(s). The paired complex structure of homologous chromosomes formed during synapsis is called a bivalent or tetrad.",
    chapter: 21,
  },
  {
    question: "(Chapter 21) 48. Give two main importance of meiosis. (LB-2013)",
    answer:
      "Two main importances of meiosis are: 1. It produces genetic variation: Through crossing over (exchange of segments between homologous chromosomes) and random assortment of chromosomes during anaphase I, meiosis generates a wide variety of gametes, leading to variations in offspring. This is crucial for evolution. 2. It maintains a constant chromosome number: Meiosis halves the chromosome number in gametes (or spores), so when fertilization occurs, the diploid chromosome number of the species is restored and maintained generation after generation.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 49. How can you identify Cancer cells? (OR) Cancer is uncontrolled cell division, explain. (LB-2011)",
    answer:
      "Cancer cells can be distinguished from normal cells because they are generally less differentiated. They exhibit characteristics of rapidly growing cells, such as a high nucleus-to-cytoplasm ratio, prominent nucleoli, and many mitoses. The presence of invading cells in otherwise normal tissue is an indication of malignancy. Cancer is uncontrolled cell division because the normal regulatory mechanisms that control cell multiplication break down. Cancer cells proliferate in an unregulated fashion, forming tumors and potentially spreading (metastasizing) without regard to the body's needs or checks.",
    chapter: 21,
  },
  {
    question:
      "(Chapter 21) 50. In what respects does mitosis in plant cells differ from that in animal cells? (OR) Explain cytokinesis in plants. (OR) How cytokinesis occur in plants? (LB-2010,2018)",
    answer:
      "Mitosis in plant cells differs from animal cells in a few respects: 1. Centrioles: Most higher plants lack visible centrioles; instead, they have an analogous region from which spindle microtubules radiate. Animal cells have centrioles that form asters. 2. Cell Shape: Plant cell shape does not change greatly during mitosis due to the rigid cell wall, unlike animal cells which can round up. 3. Cytokinesis: In plant cells, cytokinesis occurs by the formation of a cell plate (phragmoplast) in the equatorial region, derived from vesicles originating from the Golgi complex. These vesicles fuse to form the cell plate, which grows outwards to divide the parent cell into two. Animal cells undergo cytokinesis by forming a contractile ring of actin and myosin, leading to a cleavage furrow that pinches the cell in two.",
    chapter: 21,
  },
  {
    question: "(Chapter 21) 51. Sketch and label cell cycle. (LB-2010)",
    answer:
      "Chapter 21, Fig. 21.1 illustrates the cell cycle. The diagram shows the cell cycle divided into Interphase (consisting of G1 phase - cell growth, S phase - DNA synthesis/chromosome replication, and G2 phase - preparation for mitosis) and M phase (Mitosis - nuclear division, and Cytokinesis - cytoplasmic division). It also shows the G0 phase as an exit from G1 for non-dividing cells. (The question asks to sketch and label, which cannot be fully done in text. The text describes the diagram's content).",
    chapter: 21,
  },
  {
    question: "(Chapter 22) 1. What is Bombay phenotype? (LB-2016,2017)",
    answer:
      "Bombay phenotype is an example of epistasis related to the ABO blood group system. Individuals with Bombay phenotype (genotype hh for the H locus on chromosome 19) cannot produce substance H, which is a precursor glycoprotein on the surface of RBCs. Substance H is necessary for antigen A or antigen B (specified by IA or IB genes on chromosome 9) to attach to the RBC. Without substance H, A and B antigens cannot adhere to RBCs, even if the IA or IB genes are present. These individuals are phenotypically like blood group O (lacking A and B antigens) but are not genotypically O. This masking of ABO gene expression by the hh genotype is the Bombay phenotype.",
    chapter: 22,
  },
  {
    question: "(Chapter 22) 2. What is MODY? (LB-2008,2015,2016)",
    answer:
      "MODY stands for Maturity Onset Diabetes of the Young. It is a form of Type II diabetes (non-insulin dependent diabetes mellitus - NIDDM) that occurs early in life, typically before 25 years of age, in about 2-5% of Type II diabetics. MODY can be inherited as an autosomal dominant trait. About 50% of MODY cases are caused by mutations in the glucokinase gene, and it can also be caused by mutations in other genes encoding transcription factors involved in pancreatic development and insulin regulation.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 3. What is SRY gene? How it is transferred? (LB-2011)",
    answer:
      "SRY (Sex-determining Region of Y) is the male-determining gene located at the tip of the short arm of the Y chromosome in humans. It acts as a male sex switch, triggering the developmental process towards maleness, typically after 6 weeks of pregnancy. Being located on the Y chromosome, the SRY gene is transferred from father to son through the Y chromosome during sexual reproduction. It is not present on the X chromosome.",
    chapter: 22,
  },
  {
    question: "(Chapter 22) 4. What are the genes and alleles? (LB-2016)",
    answer:
      "A gene is the basic unit of biological information and heredity. It is a part of DNA comprising its base sequences, responsible for determining a particular trait. The position of a gene on a chromosome is called its locus. Alleles are alternative forms of a gene that occupy the same locus on homologous chromosomes. For a given gene, an individual inherits one allele from each parent. These alleles can be identical (homozygous) or different (heterozygous).",
    chapter: 22,
  },
  {
    question: "(Chapter 22) 5. What is a nullo gamete?",
    answer:
      "A nullo gamete is a gamete that lacks any sex chromosome. This term is used in the context of the XO-XX sex determination system (e.g., in grasshoppers), where the heterogametic male (XO) produces two types of sperms: half with an X chromosome and the other half with no sex chromosome at all (nullo gametes).",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 6. What do you know about hypophosphatemic rickets?",
    answer:
      "Hypophosphatemic rickets (also known as vitamin D resistant rickets) is a rare hereditary disease that is an X-linked dominant trait. It is different from common dietary rickets because it does not result from vitamin D deficiency and cannot be cured by taking vitamin D. Its cause is a genetic communication failure at the molecular level, where the genes encoding bone proteins do not receive or respond to vitamin D's message to function properly, leading to impaired phosphate reabsorption and bone mineralization issues.",
    chapter: 22,
  },
  {
    question: "(Chapter 22) 7. What is testicular feminization syndrome?",
    answer:
      "Testicular feminization syndrome is a rare X-linked recessive trait, also known as androgen insensitivity syndrome. Individuals with this condition have a male XY chromosome set, but due to a defect in the tfn gene on their X chromosome, their body cells are insensitive to male sex hormones (androgens like testosterone). As a result, they develop physically as females, having breasts, female genitalia, and a blind vagina, but no uterus. Degenerated testes are present in the abdomen. Such individuals are typically raised and identify as females but are sterile.",
    chapter: 22,
  },
  {
    question: "(Chapter 22) 8. What are pseudoautosomal genes?",
    answer:
      "Pseudoautosomal genes are genes that are present on both the X and Y chromosomes in the regions where these sex chromosomes can pair and recombine during meiosis (pseudoautosomal regions). An example given in the text is the bobbed gene in Drosophila. Because they are present on both sex chromosomes and can undergo recombination, their pattern of inheritance resembles that of autosomal genes rather than typical X-linked or Y-linked genes.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 9. What is haemophilia and its various types? (OR) What is haemophilia?",
    answer:
      "Haemophilia is a rare hereditary disease characterized by the blood's failure to clot properly after an injury, due to a reduction, malfunction, or absence of specific blood clotting factors. This can lead to excessive bleeding. There are three main types: Haemophilia A (due to abnormality of factor VIII, accounts for 80% of cases), Haemophilia B (due to disturbance in factor IX, accounts for about 20%), and Haemophilia C (due to reduction in factor XI, less than 1%). Haemophilia A and B are X-linked recessive traits, while Haemophilia C is an autosomal recessive trait.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 10. What is the role of blood groups in establishing parentage? (LB-2010)",
    answer:
      "Genetic analysis based on blood groups (like ABO and Rh systems) can help in solving cases of disputed parentage. While blood group testing cannot definitively prove that an individual *is* the parent of a particular child, it can be used to prove that an individual *is not* the parent. For example, a child of AB phenotype (genotype IAIB) cannot be the child of a parent of phenotype O (genotype ii). Similarly, a man of B phenotype cannot be the father of a blood type A child whose mother is O; the father would need to be A or AB.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 11. What is meant by universal blood donor and universal recipient?",
    answer:
      "In the ABO blood group system, individuals with blood group O are called universal donors because their red blood cells lack both A and B antigens. Therefore, their blood (specifically packed RBCs with minimal plasma) can theoretically be transfused to individuals of any ABO blood group (A, B, AB, or O) in emergency situations for small transfusions, as there are no A or B antigens to react with the recipient's antibodies. Individuals with blood group AB are called universal recipients because their plasma lacks both anti-A and anti-B antibodies. Therefore, they can receive red blood cell transfusions from any of the four ABO blood groups (A, B, AB, or O). (Note: Rh factor compatibility is also crucial).",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 12. What are X-linked and Y-linked genes? Give one example of both.",
    answer:
      "X-linked genes are genes located on the X chromosome. An example is the gene for eye color in Drosophila (e.g., w+ for red eyes, w for white eyes) or the gene for haemophilia (e.g., H for normal clotting, h for haemophilia A) in humans. Y-linked genes are genes located on the Y chromosome, having no counterpart on the X chromosome. An example is the SRY gene on the human Y chromosome, which determines maleness.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 13. What is crossing over? What is its importance? (LB-2013)",
    answer:
      "Crossing over is an exchange of segments between non-sister chromatids of homologous chromosomes that occurs during prophase I of meiosis, specifically when chiasmata are formed. Its importance lies in the fact that it results in the recombination of genes. Since alleles on non-sister chromatids can be different, this exchange of segments leads to new combinations of alleles on the chromosomes passed to the gametes. This genetic recombination is a major source of genetic variation among offspring, which provides raw material for evolution.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 14. What is bean-bag genetics? (OR) What is a gene pool? (OR) Differentiate between gene and gene pool. (LB-2014)",
    answer:
      'A gene pool is the total aggregate of all the genes and their alleles found in a breeding population at a given time. It represents the total genetic information encoded in that population. "Beanbag genetics" is a conceptual approach to understanding population genetics where the alleles in a gene pool are likened to beans in a beanbag. The entire beanbag full of beans represents the gene pool. A gene is a specific segment of DNA that codes for a trait, while the gene pool is the collection of all such genes and their variant alleles within an entire interbreeding population.',
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 15. What is meant by erythroblastosis foetalis? (OR) Why erythroblastosis foetalis is called so? (OR) How does ABO incompatibility protect the developing baby against Rh-incompatibility? (LB-2011,2012)",
    answer:
      "Erythroblastosis foetalis is a hemolytic disease of the newborn that can occur due to Rh incompatibility between an Rh- mother and an Rh+ foetus. If Rh+ foetal red blood cells (RBCs) enter the Rh- mother's bloodstream, she produces anti-Rh antibodies. In a subsequent Rh+ pregnancy, these maternal antibodies can cross the placenta and destroy the foetal RBCs (hemolysis). The foetus becomes anaemic and starts releasing many immature erythroblasts (nucleated RBCs) into the bloodstream, hence the name erythroblastosis foetalis. ABO incompatibility can sometimes offer protection: if an O- mother conceives an A+ or B+ baby, any foetal A or B type RBCs entering her blood are quickly destroyed by her existing anti-A or anti-B antibodies before she can form significant anti-Rh antibodies.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 16. What is meant by linkage, linked genes and linkage groups? (OR) What is a linkage group? (OR) Define linkage group by giving example. (OR) What are linkage groups? Give their number in human beings. (OR) Define gene linkage and gene linkage groups (LB-2012,2013,2015,2018)",
    answer:
      "Gene linkage is the phenomenon where genes located on the same chromosome tend to be inherited together because the chromosome is passed as a single unit to gametes. Linked genes are genes whose loci are on the same chromosome. A linkage group refers to all the genes located on a single homologous pair of chromosomes; these genes are linked and are inherited together. The number of linkage groups in an organism corresponds to its haploid number of chromosomes. For example, humans have 23 linkage groups (22 autosomal + 1 sex chromosome linkage group). Examples include genes for colour blindness, haemophilia, and gout forming one linkage group on the human X-chromosome.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 17. What is test cross? Why did Mendel suggest this cross? (OR) Give the significance of test cross. (OR) What is test cross? Give its uses. (LB-2011,2012,2013,2018)",
    answer:
      "A test cross is a mating in which an individual showing a dominant phenotype (whose genotype is unknown, could be homozygous dominant or heterozygous) is crossed with an individual showing its recessive phenotype (which is always homozygous recessive). Mendel devised this cross to determine the genotype of the dominant-phenotype individual. The significance or use of a test cross is to find out whether the individual expressing the dominant trait is homozygous or heterozygous. If any offspring from the test cross show the recessive phenotype, the parent with the dominant phenotype must be heterozygous.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 18. What is the difference between heterogametic and homogametic individuals? (OR) What is heterogametic individual? Give example. (LB-2018)",
    answer:
      "A heterogametic individual is one that produces two different types of gametes with respect to sex chromosomes. For example, in humans and Drosophila, the male (XY) is heterogametic, producing sperms carrying either an X chromosome or a Y chromosome. In the XO-XX system (e.g., grasshopper), the male (XO) is also heterogametic, producing sperms with an X chromosome and nullo sperms (no sex chromosome). A homogametic individual produces only one type of gamete with respect to sex chromosomes. For example, human females (XX) are homogametic, producing eggs that all carry an X chromosome.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 19. What are compound sex chromosomes and their example? (LB-2013)",
    answer:
      "Compound sex chromosomes occur in some species where multiple X or Y chromosomes (or both X and Y chromosomes of more than one kind) act together as a single sex-determining group. This can lead to a large difference in the total number of chromosomes between males and females. An example given is the roundworm Ascaris incurva, where the female has 42 chromosomes (8 pairs of compound X + 13 pairs of autosomes), and the male has 35 chromosomes (8X + one Y + 13 pairs of autosomes).",
    chapter: 22,
  },
  {
    question: "(Chapter 22) 20. Compare monohybrids with dihybrids. (LB-2014)",
    answer:
      "A monohybrid is an individual that is heterozygous for one specific gene (e.g., Rr for seed shape). A monohybrid cross involves parents that differ in only one trait. A dihybrid is an individual that is heterozygous for two different genes (e.g., RrYy for seed shape and seed color). A dihybrid cross involves parents that differ in two traits. Monohybrids are studied to understand the inheritance of a single trait, while dihybrids are used to study the inheritance of two traits simultaneously and to demonstrate principles like independent assortment.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 21. Define laws of Mendel. (OR) Define Mendel’s law of segregation (law of purity of gametes). (OR) Define law of segregation. (LB-2015,2018)",
    answer:
      "Mendel formulated two main laws of inheritance: 1. Law of Segregation: This law states that the two coexisting alleles for each trait in an individual segregate (separate) from each other during meiosis, so that each gamete receives only one of the two alleles. Alleles unite again at random fertilization when the zygote is formed. This is also known as the law of purity of gametes because each gamete contains only one allele for a trait. 2. Law of Independent Assortment: This law states that when two contrasting pairs of traits are followed in the same cross, their alleles assort independently into gametes. The distribution of alleles of one trait into gametes has no influence on the distribution of alleles of the other trait.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 22. Differentiate between phenotype and genotype. (OR) What is the difference between phenotype and genotype? (LB-2014)",
    answer:
      "Phenotype refers to the observable characteristics or the form of appearance of a trait in an organism (e.g., red flower color, tall height). Genotype refers to the specific genetic makeup or the combination of alleles an individual possesses for a particular trait (e.g., RR, Rr, or rr for flower color). The genotype determines the potential phenotype, often in conjunction with environmental factors.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 23. Differentiate between incomplete dominance and co-dominance. (LB-2012)",
    answer:
      "In incomplete dominance, the phenotype of the heterozygote is intermediate between the phenotypes of the two homozygotes. Neither allele completely masks the other, resulting in a blended appearance (e.g., pink flowers from red and white parent 4 O'clock plants). In codominance, both alleles in a heterozygous individual are independently and fully expressed, resulting in a phenotype that shows distinct characteristics of both alleles simultaneously, rather than an intermediate blend. An example is the MN blood group system in humans, where the MN phenotype has both M and N antigens present on red blood cells.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 24. Differentiate between autosomes and sex-chromosomes. (LB-2011)",
    answer:
      "Autosomes are all the chromosomes in a cell other than the sex chromosomes. They occur in homologous pairs and carry genes that determine most of the body's characteristics, but typically not those primarily involved in sex determination. Sex chromosomes are a specific pair of chromosomes (e.g., X and Y in humans) that carry genes determining the sex of an individual and may also carry other genes for traits unrelated to sex (sex-linked traits). Autosome pairs are usually similar in both sexes, while sex chromosomes can differ between males and females (e.g., XX in females, XY in males).",
    chapter: 22,
  },
  {
    question: "(Chapter 22) 25. Differentiate between gene and genome.",
    answer:
      "A gene is a specific segment of DNA that typically codes for a particular protein or functional RNA molecule, thereby influencing a specific trait. It is the basic unit of heredity. A genome refers to the complete set of genetic material (all the DNA, including all genes and non-coding sequences) present in an organism or in a particular cell or organelle. The genome encompasses all the genes an organism possesses.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 26. Differentiate between homozygous and hemizygous.",
    answer:
      "Homozygous refers to a condition where an individual has two identical alleles for a particular gene on a pair of homologous chromosomes (e.g., RR or rr). Hemizygous refers to a condition where an individual has only one copy of a particular gene, instead of two. This is typically seen in males for X-linked genes, as they have only one X chromosome and thus only one allele for genes located on the X chromosome (with no corresponding allele on the Y chromosome). For example, a male with XwY genotype for eye color in Drosophila is hemizygous for the white-eye allele.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 27. Differentiate between homozygous and heterozygous. (LB-2011,2014,2016)",
    answer:
      "Homozygous describes a genotype where an individual has two identical alleles for a particular gene at a specific locus on homologous chromosomes (e.g., RR for round seeds or rr for wrinkled seeds). Heterozygous describes a genotype where an individual has two different alleles for a particular gene at a specific locus on homologous chromosomes (e.g., Rr for seed shape).",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 28. Differentiate between dominant trait and recessive trait.",
    answer:
      "A dominant trait is one that is expressed in an individual who has at least one copy of the dominant allele for that gene. The dominant allele masks the effect of the recessive allele when present in a heterozygous state (e.g., if R is dominant for round seeds, both RR and Rr genotypes will show the round phenotype). A recessive trait is one that is expressed only when an individual has two copies of the recessive allele for that gene (i.e., is homozygous recessive, e.g., rr for wrinkled seeds). The effect of a recessive allele is hidden by a dominant allele in a heterozygote.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 29. Differentiate between qualitative and quantitative traits.",
    answer:
      "Qualitative traits are those that show discontinuous variations with sharply distinct phenotypes, often determined by one or a few genes with clear-cut effects (e.g., pea seed shape: round or wrinkled; ABO blood groups: A, B, AB, O). Quantitative traits (also called polygenic traits) are those that exhibit continuous variation over a range of many phenotypes, with individuals differing by small degrees. These traits are typically encoded by alleles of two or more different gene pairs (polygenes) found at different loci, all influencing the same trait in an additive way, and are often significantly influenced by environmental factors (e.g., height, weight, skin color in humans).",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 30. Differentiate between X-linked and Y-linked traits.",
    answer:
      "X-linked traits are characteristics determined by genes located on the X chromosome. These traits can appear in both males and females, but often show different patterns of inheritance in each sex due to males being hemizygous (XY) and females having two X chromosomes (XX). Examples include haemophilia and red-green color blindness. Y-linked traits are characteristics determined by genes located on the Y chromosome. These traits are found only in males and are passed directly from father to son, as females do not inherit a Y chromosome. An example is the SRY gene determining maleness.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 31. Differentiate between X-linked and Y-linked genes.",
    answer:
      "X-linked genes are genes located on the X chromosome. Y-linked genes are genes located on the Y chromosome. Most X-linked genes do not have a corresponding allele on the Y chromosome, and similarly, most Y-linked genes do not have a counterpart on the X chromosome (except in pseudoautosomal regions). This leads to different inheritance patterns for traits determined by these genes.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 32. Differentiate between X-linked dominant and X-linked recessive traits.",
    answer:
      "An X-linked dominant trait is determined by a dominant allele located on the X chromosome. An affected male will pass the trait to all his daughters but none of his sons. An affected heterozygous female will pass the trait to half her sons and half her daughters. It's often more common in females. An X-linked recessive trait is determined by a recessive allele on the X chromosome. It is more common in males, as they only need one copy of the recessive allele to express the trait (hemizygous). Females need two copies (homozygous recessive) to express it. Carrier females (heterozygous) do not express the trait but can pass it to their sons. It often shows a crisscross pattern of inheritance (maternal grandfather to grandson via a carrier daughter).",
    chapter: 22,
  },
  {
    question: "(Chapter 22) 33. Differentiate between IDDM and NIDDM.",
    answer:
      "IDDM stands for Insulin-Dependent Diabetes Mellitus (Type I diabetes). It usually occurs in early age (before 40) and arises due to a deficiency of insulin because the insulin-producing beta-cells in the pancreas are destroyed, often by an autoimmune disorder. Patients require exogenous insulin to survive. NIDDM stands for Non-Insulin-Dependent Diabetes Mellitus (Type II diabetes). It accounts for 90% of diabetic patients, typically occurs after age 40, and is common among the obese. In NIDDM, individuals produce some insulin, but their body cells fail to respond effectively to it (insulin resistance).",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 34. Differentiate between multifactorial and polygenic traits.",
    answer:
      "Polygenic traits are those whose phenotypic expression is controlled by the additive effects of alleles from two or more different gene pairs (polygenes) located at different loci. These genes collectively contribute to a continuous range of phenotypes. Multifactorial traits are polygenic traits that are also significantly influenced by environmental factors. So, a multifactorial trait's phenotype is a result of the interaction between multiple genes and the environment. Diabetes mellitus and blood pressure are given as examples of multifactorial traits in the text.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 35. Differentiate between probability and product rule. (LB-2008)",
    answer:
      "Probability is the chance or likelihood of a specific event occurring. In genetics, it's used to predict the outcome of crosses (e.g., the probability of an offspring inheriting a particular allele). The product rule is a principle used in probability to calculate the chance of two or more independent events occurring simultaneously. It states that the joint probability of independent events occurring together is equal to the product of their individual probabilities. Mendel used this to predict phenotypic ratios in dihybrid crosses (e.g., probability of round AND yellow seeds = probability of round seeds x probability of yellow seeds).",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 36. Differentiate between protanopia, deuteranopia and tritanopia.",
    answer:
      "Protanopia, deuteranopia, and tritanopia are types of dichromatic color blindness where individuals are unable to perceive one of the three primary colors due to missing opsins (light-absorbing proteins in cone cells). Protanopia is red blindness (inability to perceive red light). Deuteranopia is green blindness (inability to perceive green light). Tritanopia is blue blindness (inability to perceive blue light). Genes for red and green opsins are on the X chromosome, while the gene for blue opsin is on autosome 7.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 37. Differentiate between allele and multiple alleles? (OR) What are multiple alleles? Give example. (LB-2014)",
    answer:
      "Alleles are alternative forms of a single gene that occupy the same locus on homologous chromosomes. Typically, a diploid organism has two alleles for each gene (one from each parent). Multiple alleles refer to a situation where a gene has more than two alternative forms or alleles present within a population (though any diploid individual still only carries two of them). An example is the human ABO blood group system, which is controlled by a single gene I with three common alleles: IA, IB, and i.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 38. Differentiate between dominance and epistasis. (OR) What is epistasis? How it differs from dominance? (LB-2010,2012,2018)",
    answer:
      "Dominance refers to the relationship between alleles of the *same gene* occupying the *same locus*. In complete dominance, one allele (dominant) masks the phenotypic expression of the other allele (recessive) in a heterozygote. Epistasis is an interaction between *different genes* occupying *different loci*, where a gene or gene pair at one locus interferes with or hides the phenotypic effect of another gene or gene pair at a different locus. An example of epistasis is the Bombay phenotype, where the hh genotype at the H locus masks the expression of ABO blood group genes.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 39. Differentiate between sex-limited and sex-influenced traits. (OR) What are sex-limited traits? (OR) What are sex-influenced traits? (OR) What is the sex-limited traits? Give an example. (LB-2008,2009,2013,2017,2018)",
    answer:
      "Sex-limited traits are expressed in only one sex due to anatomical differences, even though the genes for these traits may be present in both sexes (and can be autosomal or sex-linked). An example is milk yield in dairy cattle, which is limited to females, or beard growth in humans, limited to males. Sex-influenced traits occur in both males and females, but they are more common or expressed differently in one sex compared to the other. This is often because an allele is dominant in one sex but recessive in the other, usually due to hormonal differences. An example is pattern baldness in humans, which is dominant in males but recessive in females.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 40. Distinguish between polygenes and pleiotropy. (OR) Define pleiotropy. (OR) What is pleiotropy and its example? (LB-2013)",
    answer:
      "Pleiotropy is when a single gene affects two or more different phenotypic traits. Such a gene with multiple phenotypic effects is called pleiotropic. An example is the white eye gene in Drosophila, which also affects the shape of sperm-storing organs. Polygenes (or polygenic inheritance) is when a single trait is influenced by the additive effects of alleles from two or more different genes located at different loci. This typically results in continuous variation for the trait. Example: human skin color or height.",
    chapter: 22,
  },
  {
    question: "(Chapter 22) 41. Give the concept of fixed allele. (LB-2012)",
    answer:
      "An allele is said to be fixed in the gene pool of a population if all members of that population are homozygous for that same allele. This means that for that particular gene locus, only one allelic form exists in the population, and its frequency is 100% (or 1.0). There is no genetic variation at that locus in such a population.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 22) 42. How sex determination occurs in yeast? (LB-2017)",
    answer:
      "Yeast, like many eukaryotic microorganisms, does not have sex chromosomes. Instead, it depends on a genic system for the determination of sex (or mating types). In this system, sexes are specified by simple allelic differences at a small number of gene loci. For example, the two mating types of yeast, 'a' and 'α' (alpha), are controlled by alleles MATa and MATα respectively, at the MAT (mating type) locus.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 43. The value of parental combination of two linked gene AB and ab is 40, 40 and of recombinant gene Ab and aB is 10, 10 respectively. Find recombination frequency. (LB-2010)",
    answer:
      "Recombination frequency = (Number of recombinant types / Sum of all combinations) x 100. Number of recombinant types = (Ab) + (aB) = 10 + 10 = 20. Sum of all combinations = (AB) + (ab) + (Ab) + (aB) = 40 + 40 + 10 + 10 = 100. Recombination frequency = (20 / 100) x 100 = 20%.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 5. Describe Mendel’s law of segregation (law of purity of gametes) (OR) Define Mendel’s law of segregation. Explain it with one example. (OR) What is Mendel’s law of segregation? Illustrate it with an example (LB-2011,2016)",
    answer:
      "Mendel’s Law of Segregation states that the two coexisting alleles for each trait in an individual segregate (separate) from each other at meiosis, so that each gamete receives only one of the two alleles. Alleles unite again at random fertilization of gametes when the zygote is formed. It's also called the law of purity of gametes because each gamete contains only one allele for a trait. For example, if a pea plant is heterozygous for seed shape (Rr), during gamete formation, the 'R' allele and the 'r' allele will segregate, so half the gametes will carry 'R' and the other half will carry 'r'.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 6. Define Mendel’s law of Independent Assortment. Explain it with an example.",
    answer:
      "Mendel’s Law of Independent Assortment states that when two contrasting pairs of traits are followed in the same cross, their alleles assort independently into gametes. This means the alleles of one gene pair inherit independently of the alleles of another gene pair, provided the genes are on different chromosomes or far apart on the same chromosome. The distribution of alleles of one trait into gametes has no influence on the distribution of alleles of the other trait. For example, in a pea plant dihybrid for seed shape (Round/wrinkled, R/r) and seed color (Yellow/green, Y/y) with genotype RrYy, the segregation of R and r alleles is independent of the segregation of Y and y alleles. Thus, four types of gametes (RY, Ry, rY, ry) are formed in equal proportions.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 7. Discuss sex-linkage in humans with one example. (LB-2018)",
    answer:
      "Sex-linkage in humans refers to the pattern of inheritance of traits determined by genes located on the sex chromosomes (X or Y). Most commonly discussed are X-linked traits. An example of an X-linked recessive trait is haemophilia. In haemophilia, the gene for a specific blood clotting factor is located on the X chromosome. A male (XY) needs only one copy of the recessive allele on his X chromosome to be affected. A female (XX) needs two copies of the recessive allele (one on each X) to be affected; if she has one recessive allele, she is a carrier. The trait typically passes in a crisscross fashion from an affected maternal grandfather through a carrier daughter to an affected grandson. It does not pass directly from father to son.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 8. Discuss the genetics of color-blindness. (OR) Describe the genetics of color-blindness in humans. (LB-2014,2016)",
    answer:
      "Red-green color-blindness is a common X-linked recessive trait in humans. Normal trichromatic color vision depends on three types of cone cells, each with specific opsin proteins sensitive to red, green, or blue light. The genes for red and green opsins are on the X chromosome. Mutations in these genes can lead to an inability to distinguish between red and green colors (or perceive them normally). Since it's X-linked recessive, males are more frequently affected because they only need one copy of the recessive allele on their single X chromosome to express the trait. Females require two copies. The inheritance pattern is crisscross: an affected maternal grandfather can pass the allele to his carrier daughter, who can then pass it to her son.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 9. Explain in detail diabetes mellitus and its types. (LB-2017)",
    answer:
      "Diabetes mellitus is a hereditary disease characterized by elevated blood sugar levels due to the body's inability to metabolize glucose properly. There are two major types: Type I (IDDM - Insulin-Dependent Diabetes Mellitus), also called Juvenile diabetes, usually occurs before age 40. It's an autoimmune disorder where insulin-producing β-cells in the pancreas are destroyed, leading to insulin deficiency. Patients require exogenous insulin. The insulin gene is on chromosome 11, and it's considered a multifactorial inheritance. Type II (NIDDM - Non-Insulin-Dependent Diabetes Mellitus) accounts for 90% of cases, typically occurs after age 40, and is common in obese individuals. These patients produce some insulin, but their body cells develop insulin resistance. MODY (Maturity Onset Diabetes of the Young) is a form of Type II occurring before age 25, sometimes inherited as an autosomal dominant trait linked to mutations in genes like glucokinase.",
    chapter: 22,
  },
  {
    question:
      "(Chapter 22) 10. Explain different patterns of sex determination. (OR) Explain different patterns of sex determination in animals (LB-2010,2014,2015)",
    answer:
      "There are three common patterns of chromosomal sex determination: 1. XO - XX Type: Found in grasshoppers. Males are XO (one X chromosome, the other sex chromosome is missing) and heterogametic (produce X-carrying and nullo sperms). Females are XX and homogametic (all eggs carry X). Sex is determined by the sperm. 2. XY - XX Type: Found in Drosophila, humans. Males are XY and heterogametic (produce X-carrying and Y-carrying sperms). Females are XX and homogametic. Sex is determined by the sperm. 3. ZZ - ZW Type: Common in birds, butterflies, moths. Females are ZW and heterogametic (produce Z-carrying and W-carrying eggs). Males are ZZ and homogametic (all sperms carry Z). Sex is determined by the egg.",
    chapter: 22,
  },
  {
    question: "(Chapter 23) 1. What is a probe? (LB-2014)",
    answer:
      "A probe, in molecular biology, is a single-stranded nucleotide sequence (DNA or RNA) that is complementary to a certain piece of DNA (the target sequence). Probes are used to identify and locate specific DNA sequences, for example, in a genomic library or during DNA fingerprinting. The location of the probe is made possible because the probe is typically labeled, either radioactively or with a fluorescent dye, allowing it to be detected after it hybridizes (pairs by complementary base pairing) with the target DNA.",
    chapter: 23,
  },
  {
    question: "(Chapter 23) 2. What is gene pharming? (LB-2018)",
    answer:
      "Gene pharming is the use of transgenic farm animals to produce pharmaceuticals (drugs or therapeutic proteins). In this process, genes that code for therapeutic and diagnostic proteins are incorporated into an animal's DNA. The desired proteins are then typically secreted in the animal's milk (or sometimes urine). This method is being pursued to produce drugs for treating various disorders like cystic fibrosis, cancer, and blood diseases. For example, antithrombin III is being produced by a herd of transgenic goats.",
    chapter: 23,
  },
  {
    question: "(Chapter 23) 3. What is aspartame?",
    answer:
      "Aspartame is a dipeptide sweetener, commonly known by the brand name Nutrasweet. The text mentions it in the context of producing phenylalanine, an organic chemical needed to make aspartame, using genetically engineered bacteria. This indicates aspartame is a synthetic product used as a sugar substitute.",
    chapter: 23,
  },
  {
    question: "(Chapter 23) 4. What is gene therapy?",
    answer:
      "Gene therapy is the insertion of genetic material (genes) into human cells for the treatment or prevention of a disorder. It includes procedures that provide a patient with healthy genes to make up for faulty genes, and also the use of genes to treat various other human illnesses such as cancer and cardiovascular diseases. There are two main methods: ex vivo gene therapy (cells are modified outside the body and then returned) and in vivo gene therapy (genes are delivered directly into the patient's body).",
    chapter: 23,
  },
  {
    question: "(Chapter 23) 5. What is cystic fibrosis?",
    answer:
      "Cystic fibrosis is a genetic disorder where patients lack a functional gene that codes for a transmembrane carrier of the chloride ion. This defect leads to the production of thick, sticky mucus, particularly affecting the respiratory and digestive systems. Patients often die due to numerous infections of the respiratory tract. Gene therapy using liposomes to deliver the normal gene into the patient's nostrils is being tried as a treatment.",
    chapter: 23,
  },
  {
    question: "(Chapter 23) 6. What are clonal plants? (LB-2011)",
    answer:
      "Clonal plants are plants that are genetically identical to each other and to the parent plant from which they were derived. They are produced through asexual reproduction methods such as micropropagation via meristem culture. Since the shoots developed from a single shoot tip (meristem) are genetically identical, the adult plants that develop from them are clones, all having the same traits.",
    chapter: 23,
  },
  {
    question: "(Chapter 23) 7. What is meant by cloning? (LB-2010)",
    answer:
      "Cloning refers to the production of organisms, cells, or molecules that are genetically identical to an original specimen. Gene cloning produces many identical copies of a gene. Cell cloning produces a population of identical cells. Organismal cloning (e.g., cloning an animal) is a form of asexual reproduction that requires the genes of only one animal to produce a genetically identical copy. For example, Dolly the sheep was produced by taking a 2n nucleus from an adult cell and injecting it into an enucleated egg, which then developed into a cloned individual.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 8. What are Palindromic sequences? (LB-2013,2016,2018)",
    answer:
      "Palindromic sequences, in the context of DNA and restriction enzymes, are specific sequences of four or six nucleotides that read the same forwards on one DNA strand as they do backwards on the complementary strand when read in the same orientation (e.g., 5' to 3'). Restriction endonucleases, used in recombinant DNA technology, recognize and cut DNA at these specific palindromic sequences. An example is the sequence GAATTC, which is recognized by the EcoRI restriction enzyme; its complement is CTTAAG.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 9. What are the various methods of gene or DNA sequencing? (LB-2016)",
    answer:
      "The text mentions two general methods for gene or DNA sequencing developed in the late 1970s: 1. Sanger's method (enzymatic or dideoxy method): This method uses dideoxyribonucleoside triphosphates (ddNTPs) to terminate DNA synthesis at different sites, generating DNA fragments of varying lengths that all start from the same point. 2. Maxam-Gilbert method: This method involves chemically cutting DNA threads into pieces of different sizes. The main principle for both is to generate DNA pieces of different sizes starting from the same point and ending at different points, separate them by gel electrophoresis, and then read the sequence from the gel.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 10. What are the two goals of Human Genome Project? (LB-2016,2018)",
    answer:
      "The Human Genome Project has two primary goals: 1. To construct a genetic map of the human genome: This aims to show the sequence and location of genes along the length of each human chromosome. 2. To construct a base sequence map: This involves determining the complete nucleotide sequence (all three billion base pairs) of the entire human genome.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 11. What is the biodegradable plastic and its origin? (LB-2013)",
    answer:
      "The text mentions that a weed called mouse-eared cress (Arabidopsis thaliana) has been genetically engineered to produce a biodegradable plastic called polyhydroxybutyrate (PHB) in its cell granules. This PHB is a type of polyester produced naturally by some bacteria, and the genes for its synthesis can be transferred to plants, making them a source for this biodegradable plastic.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 12. What is SCID? (OR) Differentiate between cystic fibrosis and SCID.",
    answer:
      "SCID stands for Severe Combined Immunodeficiency Syndrome. It is a disorder where children lack the enzyme adenosine deaminase (ADA), which is involved in the maturation of T and B cells (lymphocytes). This deficiency severely compromises their immune system, making them highly susceptible to life-threatening infections. Cystic fibrosis is a genetic disorder caused by a faulty gene for a chloride ion transmembrane carrier, leading to thick mucus in the respiratory and digestive tracts. SCID is an immune system disorder due to an enzyme deficiency affecting lymphocyte maturation, while cystic fibrosis is a disorder affecting mucus and sweat glands due to a faulty ion channel.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 13. What is the role of suicide gene in transgenic bacteria? (LB-2013)",
    answer:
      "Suicide genes are incorporated into some genetically engineered (transgenic) bacteria, particularly those designed for environmental cleanup tasks like degrading toxins. The role of these suicide genes is to cause the bacteria to self-destruct once their specific job (e.g., cleaning up a toxic waste dump) has been accomplished. This is a safety measure to prevent the engineered bacteria from persisting indefinitely in the environment after their task is completed.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 14. What is the advantage of genetic engineering of C4 plants?",
    answer:
      "The text mentions that a team of Japanese scientists is attempting to introduce the C4 photosynthetic cycle into rice (which is a C3 plant). The advantage of C4 plants is that they perform well in hot, dry weather and are generally more efficient at photosynthesis under such conditions compared to C3 plants, partly because they avoid the inefficiency of RuBP carboxylase (Rubisco) by using a different initial CO2 capture mechanism. Genetic engineering to create C4 characteristics in C3 crops like rice could potentially increase their yield and resilience in warmer climates.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 15. What are transgenic plants. (OR) Give two advantages of transgenic plants. (LB-2011,2014,2015)",
    answer:
      "Transgenic plants are plants that carry a foreign gene (a gene from a different species or a modified gene from the same species) that has been intentionally introduced into their cells, giving them new and different traits. Two advantages of transgenic plants include: 1. Pest resistance: Plants can be engineered to produce insect toxins (e.g., from Bacillus thuringiensis), making them resistant to insect pests, thus reducing the need for chemical pesticides (e.g., transgenic cotton, corn, potato). 2. Herbicide resistance: Plants can be made resistant to specific herbicides, allowing farmers to use these herbicides to control weeds without harming the crop, which can lead to less tillage and reduced soil erosion (e.g., transgenic soybeans, corn).",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 16. What is Ex-vivo gene therapy? (OR) Differentiate between Ex-vivo and In-vivo gene therapy. (LB-2016,2017)",
    answer:
      "Ex-vivo gene therapy is a method where genetic material is inserted into cells that have been removed from the patient's body. These modified cells are then cultured (grown) outside the body and subsequently returned to the patient. An example is treating SCID by removing bone marrow stem cells, infecting them with a retrovirus carrying the normal ADA gene, and then returning them. In-vivo gene therapy involves introducing the genetic material directly into the cells within the patient's body, without removing the cells first. An example attempt is spraying liposomes coated with the gene for cystic fibrosis into the patient's nostrils.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 17. What is a genome and genomic library? (OR) Differentiate between genome and genomic library. (OR) Define genomic library. (LB-2016,2018)",
    answer:
      "A genome is the full set of genes (and all other DNA) of an individual or organism. A genomic library is a collection of bacterial or bacteriophage clones, where each clone contains a particular segment of DNA from the source cell's genome. To create a genomic library, an organism's DNA is cut into pieces, and these pieces are inserted into vectors (like plasmids or viruses) which are then taken up by host bacteria. The entire collection of these clones represents all the genes of that organism. So, a genome is the total genetic material, while a genomic library is a collection of cloned DNA fragments representing that genome.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 18. What is PCR and write applications of PCR amplification. (OR) What are the uses of PCR amplification and analysis? (LB-2013)",
    answer:
      "PCR stands for Polymerase Chain Reaction. It is a technique developed by Kary B. Mullis in 1983 that can create millions of copies of a single gene or any specific piece of DNA quickly in a test tube, using a thermostable DNA polymerase (like Taq polymerase) and primers. Applications of PCR amplification and analysis include: (1) diagnosing viral infections, genetic disorders, and cancer; (2) use in forensic laboratories to identify criminals from small DNA samples (e.g., from hair, skin cells); and (3) determining the evolutionary history of human populations by amplifying ancient DNA. It has also been used to sequence DNA from ancient mummified remains and fossils.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 19. What is totipotency? (OR) What is totipotent cell? (OR) Define the term totipotent. (OR) Why plant cells are said to be totipotent? (LB-2014,2017)",
    answer:
      "Totipotency is the ability of a single cell to divide and differentiate to develop into a complete organism, possessing the full genetic potential of that organism. A totipotent cell is a cell that has this capacity. Plant cells are said to be totipotent because many types of plant cells, even differentiated ones (like phloem cells or mesophyll protoplasts), can be cultured in vitro and, under appropriate conditions (with sugars, minerals, vitamins, and hormones), can regenerate into an entire new plant. This was demonstrated by F.C. Steward who grew a complete carrot plant from a piece of phloem.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 20. Define biotechnology. Give its application. (LB-2016)",
    answer:
      "Biotechnology, in a broad sense, refers to the use of living organisms or their components (like enzymes) to make or modify products, improve plants or animals, or develop microorganisms for specific uses. Modern biotechnology often involves genetic engineering and DNA technology. Applications are diverse: producing drugs and vaccines (e.g., human insulin, human growth hormone, hepatitis B vaccine), developing genetically engineered bacteria to clean up environmental pollutants or increase soil fertility, creating transgenic plants with pest resistance or improved nutritional value, and gene therapy in humans to treat genetic disorders.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 21. Define Molecular scissors. (OR) What are restriction enzymes? Give example. (OR) Differentiate between molecular scissors and molecular vectors? (LB-2009,2018)",
    answer:
      "Molecular scissors refer to restriction endonucleases (or restriction enzymes). These are natural enzymes found in bacteria that cut DNA at very specific recognition sites, which are often palindromic sequences. They are used in recombinant DNA technology to cut out genes of interest and to open up vectors. An example is EcoRI. Molecular vectors (or carriers) are DNA molecules, such as plasmids or viral DNA, used to carry a foreign gene of interest into a host cell for cloning or expression. So, molecular scissors cut DNA, while molecular vectors carry DNA.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 22. What is the role of molecular carrier-the vector? (OR) Differentiate between plasmids pSC101 and pBR322? (OR) Elaborate the use of plasmids. (OR) Mention the role of lambda phage during recombinant DNA technology. (LB-2012,2013,2014,2017)",
    answer:
      "A molecular carrier, or vector, is a DNA molecule used to transport a foreign gene of interest into a host cell, where it can be replicated (cloned) and/or expressed. Plasmids (extrachromosomal circular DNA in bacteria) are common vectors; they often carry genes like antibiotic resistance, which helps in selecting host cells that have taken up the plasmid. For example, plasmid pSC101 has a gene for tetracycline resistance, while pBR322 has genes for both tetracycline and ampicillin resistance, allowing for selection. Lambda phage, a bacterial virus, can also be used as a vector; its DNA is modified to include the gene of interest, and when the phage infects a bacterium, it introduces this recombinant DNA, which then replicates within the host.",
    chapter: 23,
  },
  {
    question:
      "(Chapter 23) 23. Explain the importance of gene sequencing. (LB-2010)",
    answer:
      "Gene sequencing, or DNA sequencing, is the process of determining the precise order of nucleotides (adenine, guanine, cytosine, and thymine) within a DNA molecule or a specific gene. Its importance is immense: 1. Understanding gene function: Knowing the sequence helps in predicting the amino acid sequence of the protein it codes for, and thus its function. 2. Identifying mutations: It allows for the identification of genetic mutations responsible for diseases. 3. Genome projects: It's fundamental to large-scale projects like the Human Genome Project, which aims to map all human genes. 4. Evolutionary studies: Comparing gene sequences between different organisms helps in understanding evolutionary relationships. 5. Diagnostics and forensics: It's used in diagnosing genetic disorders and in forensic science. The automation of DNA sequencing has led to a vast amount of information, crucial for many areas of biological research and application.",
    chapter: 23,
  },
  {
    question: "(Chapter 24) 1. What is genetic drift? (LB-2010,2011,2012)",
    answer:
      "Genetic drift is a change in the frequency of alleles at a locus in a population that occurs purely by chance, rather than by natural selection. It is particularly significant in small populations. Such random fluctuations in allele frequencies from one generation to the next can lead to the loss of particular alleles or the fixation of others, even if they are not advantageous. This may occur, for example, when a few individuals in a small population fail to reproduce, and their specific genes are consequently lost from the population's gene pool.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 2. What are hydrothermal vents? How do they support life?",
    answer:
      "Hydrothermal vents are underwater hot springs found deep in the oceans. One speculation about the origin of life is that it may have begun at these vents. They could have supported early life by supplying the necessary energy (from geothermal heat) and raw materials (chemicals released from the Earth's interior) for the origin and survival of early life forms. A group of bacteria called archaebacteria, which tolerate very high temperatures (up to 120°C) and seem to have undergone less evolutionary change than other living species, supports this vent hypothesis.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 3. What is modern synthesis/Neo-Darwinism? (OR) Give the concept of Neo-Darwinism. (LB-2012,2014)",
    answer:
      "Neo-Darwinism, also known as the modern synthesis, is a comprehensive theory of evolution developed in the early 1940s. It represents a reconciliation of Mendel's principles of genetics (Mendelism) with Darwin's theory of natural selection. It emphasizes extensive genetic variation within populations and recognizes the importance of quantitative characters. The modern synthesis integrated discoveries and ideas from many different fields, including paleontology, taxonomy, biogeography, and especially population genetics, to provide a more complete understanding of the mechanisms of evolutionary change, with natural selection acting on genetic variation as its core principle.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 4. Write the name of theories of evolution presented by Lamarck and Darwin. (LB-2011)",
    answer:
      "Jean Baptiste Lamarck presented the theory of evolution based on two main ideas: 1. The use and disuse of parts: Parts of the body used extensively become larger and stronger, while those not used deteriorate. 2. The inheritance of acquired characteristics: Modifications an organism acquires during its lifetime can be passed on to its offspring. Charles Darwin presented the theory of evolution primarily based on: 1. Descent with Modification: All organisms are related through descent from a common ancestor, with modifications accumulating over time. 2. Natural Selection: The process by which individuals with inherited characteristics best suited to their environment are more likely to survive and reproduce, leading to a gradual change in populations and the evolution of new species.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 5. What are vestigial organs? Name some important vestigial organs of man. (OR) What are vestigial organs? Give one example (LB-2010,2012,2014,2018)",
    answer:
      "Vestigial organs are rudimentary structures found in an organism that are of marginal, if any, use to that organism but are historical remnants of structures that had important functions in its ancestors. They provide evidence of evolution. Examples in humans include the vermiform appendix (which is large and functional in some herbivorous mammals) and ear muscles (used by many mammals to move their ears but largely non-functional in humans). The text also mentions the skeletons of whales and some snakes retaining vestiges of pelvis and leg bones.",
    chapter: 24,
  },
  {
    question: "(Chapter 24) 6. Define the term Neo-Darwanism. (LB-2018)",
    answer:
      "Neo-Darwinism, also known as the modern synthesis, is a comprehensive theory of evolution developed in the early 1940s. It integrated Darwin's theory of natural selection with Mendelian genetics and insights from population genetics, paleontology, taxonomy, and biogeography. It emphasizes genetic variation within populations as the raw material upon which natural selection acts to bring about evolutionary change.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 7. Define fossil. Where are most of the fossils found? (LB-2014)",
    answer:
      "Fossils are either the actual remains or traces of organisms that lived in ancient geological times. The organism may be embedded in sand, resin, or ice, or an impression or cast may be made of the body parts, with the tissue being replaced or petrified by minerals like silica or calcium carbonate. Most fossils are found in sedimentary rocks, which are formed by the accumulation and compression of sediments over long periods.",
    chapter: 24,
  },
  {
    question: "(Chapter 24) 8. Define endosymbiont hypothesis.",
    answer:
      "The endosymbiont hypothesis, first proposed by Lynn Margulis, is a theory explaining the origin of eukaryotic cells from prokaryotic organisms. It suggests that eukaryotic cells evolved when a large anaerobic amoeboid prokaryote ingested smaller aerobic bacteria and stabilized them as endosymbionts instead of digesting them. These aerobic bacteria are thought to have evolved into mitochondria. Similarly, ingestion of photosynthetic prokaryotes (like cyanobacteria) could have led to the evolution of chloroplasts, and ingestion of spirochete-like prokaryotes could have led to flagella.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 9. Define endangered species. (OR) What are endangered species? Give examples. (OR) Differentiate between endangered and threatened species. (LB-2018)",
    answer:
      "An endangered species is a species that is in imminent danger of extinction throughout its entire range (where it lives). A threatened species is one that is likely to become endangered in the near future. The text mentions that in Pakistan, species like the Indus dolphin, Blackbuck, Common leopard, Great Indian bustard, Houbara bustard, White-headed duck, and Marbled teal are near to extinction (implying they are endangered or threatened). Saving species requires preserving genetic diversity and large populations.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 10. Define Hardy Weinberg Theorem and give its equation in the form of binomial expansion. (LB-2013)",
    answer:
      "The Hardy-Weinberg Theorem states that the frequencies of alleles and genotypes in a population’s gene pool remain constant over generations unless acted upon by agents other than sexual recombination (i.e., in a non-evolving population). The equation representing this equilibrium is derived from the binomial expansion of (p+q)^2, where p is the frequency of one allele (e.g., A) and q is the frequency of the other allele (e.g., a). The equation is: p^2 + 2pq + q^2 = 1, where p^2 is the frequency of the homozygous dominant genotype (AA), 2pq is the frequency of the heterozygous genotype (Aa), and q^2 is the frequency of the homozygous recessive genotype (aa).",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 11. Differentiate between homology and analogy. (LB-2013)",
    answer:
      "Homology refers to similarity in characteristics (e.g., anatomical structures) between different species that results from their inheritance from a common ancestor. Homologous structures may have different functions but share an underlying common structural plan (e.g., the forelimbs of humans, cats, whales, and bats). Analogy refers to similarity in function between structures in different species that do not share a recent common ancestor but have evolved independently, often as adaptations to similar environmental pressures (convergent evolution). Analogous structures may be functionally similar but structurally different (e.g., wings of birds and insects).",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 12. Differentiate between homologous and analogous organs. (OR) Define homologous organs by giving examples (LB-2011,2012)",
    answer:
      "Homologous organs are structures in different species that are similar because they were inherited from a common ancestor, even if they now have different functions. They demonstrate divergent evolution. An example is the forelimbs of humans (for grasping), cats (for walking), whales (flippers for swimming), and bats (wings for flying); all share the same basic skeletal elements. Analogous organs are structures in different species that have similar functions but have evolved independently and do not share a recent common ancestral structure. They demonstrate convergent evolution. An example is the wings of birds and the wings of insects, both used for flight but structurally very different.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 13. Name any four factors affecting gene frequency. (LB-2013)",
    answer:
      "Four factors that can alter gene frequency in a population are: 1. Mutation: The ultimate source of new alleles, though individual mutations occur rarely. 2. Migration (Gene Flow): Emigration and immigration of individuals cause changes in the gene pool. 3. Genetic Drift: Random changes in allele frequencies, especially significant in small populations. 4. Selection (Natural or Artificial): Differential survival and reproduction of individuals based on their inherited characteristics.",
    chapter: 24,
  },
  {
    question:
      "(Chapter 24) 14. State/define theory of special creation. (LB-2014)",
    answer:
      "The Theory of Special Creation is the belief that all living things came into existence in their present forms, especially and specifically created by Nature (or a divine creator). Proponents, like Carolus Linnaeus in his time, believed that species were permanent and fixed creations, not subject to evolutionary change.",
    chapter: 24,
  },
  {
    question: "(Chapter 25) 1. What is ammonification? (LB-2010)",
    answer:
      "Ammonification is a stage in the nitrogen cycle. It is the process by which soil-dwelling microorganisms, chiefly bacteria and fungi, decompose complex organic nitrogenous compounds (such as proteins, amino acids, nucleic acids, and nucleotides found in dead organic materials) into simpler compounds, releasing excess nitrogen in the form of ammonia (NH3) or ammonium ions (NH4+).",
    chapter: 25,
  },
  {
    question: "(Chapter 25) 2. What are root nodules? (LB-2017)",
    answer:
      "Root nodules are swellings formed on the roots of legume plants (like peas and beans) that house symbiotic bacteria (e.g., Rhizobium). These bacteria are capable of nitrogen fixation, meaning they convert atmospheric nitrogen (N2) into ammonia and then into amino acids, which the host plant can use. In return, the host plant provides the bacteria with food (carbohydrates) and protection.",
    chapter: 25,
  },
  {
    question: "(Chapter 25) 3. What is assimilation? (LB-2014)",
    answer:
      "In the context of the nitrogen cycle, assimilation is the process by which plants take up nitrate (NO3-) from the soil into their roots. Once inside the plant cell, nitrate is reduced back to ammonium ions (NH4+). These ammonium ions are then transferred to carbon-containing compounds to produce amino acids and other nitrogenous organic compounds needed by the plant. This process requires energy.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 4. What is a Mycorrhiza? (OR) What are Mycorrhizae? (LB-2009,2011)",
    answer:
      "Mycorrhiza (plural: mycorrhizae) is a symbiotic association between the roots of certain plants (especially those growing in acidic soil, like pine, beech, or heather) and specific fungi. In this relationship, the host plant provides the fungus with carbohydrates (e.g., by secreting enzymes to digest carbohydrates in leaf litter). In return, the fungal symbiont enhances the plant's uptake of mineral ions, particularly phosphorus, from the soil by increasing the surface area for absorption.",
    chapter: 25,
  },
  {
    question: "(Chapter 25) 5. What are lichens? (LB-2008)",
    answer:
      "Lichen is a dual organism composed of a symbiotic association between an alga (or cyanobacterium) and a fungus. The alga lives within the fungal mycelium. In this mutualistic relationship, the alga provides carbohydrates through photosynthesis, and the fungus provides protection, moisture, and minerals. Lichens are important colonizers of bare ground and can grow on exposed rock surfaces.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 6. What is grazing? How grazing affect the texture of soil? (OR) Define grazing. How grazers affect the ecosystem? (LB-2008,2010)",
    answer:
      "Grazing is a mode of feeding where animals (grazers) like rabbits, goats, sheep, cows, and horses feed on grasses, herbs, and shrubs in pasturelands. Grazing can affect soil texture: if too many animals are kept on a pasture (over-grazing), they eat grasses down to the roots, and their hooves can trample the soil into a hard, compacted layer. This reduces water penetration, leading to increased rainwater runoff and erosion of fertile topsoil. Moderate grazing, however, can be beneficial by destroying competitors and helping grasses grow well, thus maintaining the grassland ecosystem. Over-grazing can lead to desertification.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 7. What is biome? (OR) Differentiate between biome and biosphere?",
    answer:
      "A biome is a major type of ecosystem that occupies a broad geographical region, characterized by a uniform life-form of vegetation (e.g., grass, coniferous trees) and a combination of plants and animals in a fully developed climax community. Examples include forest, grassland, and desert biomes. The biosphere is the thin layer of Earth in which all living organisms exist, encompassing all biomes. It includes the upper reaches of the atmosphere, the surface of the land, and the depths of the oceans. So, the biosphere is the sum total of all biomes and ecosystems on Earth.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 8. Briefly write about secondary succession. (LB-2012)",
    answer:
      "Secondary succession is a type of ecological succession where a new ecosystem develops after an existing ecosystem is disturbed, for example, by a forest fire or in an abandoned farm field. It happens much more rapidly than primary succession because the previous community has left its mark in the form of improved soil (often rich in nutrients and organic matter) and seeds or other propagules of plants that can quickly recolonize the area.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 9. Define predation. (OR) Give the significance of predation. (LB-2012,2016)",
    answer:
      "Predation is an interaction where one animal, the predator, preys on (catches and eats) another animal, the prey. The predator is a consumer. The significance of predation lies in its role in regulating population sizes of both predator and prey, creating a cyclical relationship. If the prey population is large, it supports an increase in predators; as predators feed, the prey population falls, leading to a decrease in predators, which then allows the prey population to recover. Predation also drives natural selection, favoring adaptations in both predators (for efficient hunting) and prey (for escape and defense).",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 10. Define succession and name its types. (LB-2014)",
    answer:
      "Succession is a sequence of changes in the community structure of an ecosystem over a period of time, where assemblages of plants and animals replace earlier ones until a stable, self-sustaining climax community is reached. The two major forms of succession on dry land are: 1. Primary succession: An ecosystem is formed from bare rock, sand, or a clear glacial pool where no trace of previous life existed. 2. Secondary succession: A new ecosystem develops after an existing ecosystem is disturbed (e.g., by fire or abandonment of a farm). Succession can also be classified based on the starting environment, such as hydrosere (starting in a pond) and xerosere (starting on dry soil).",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 11. Define biogeochemical cycles. (OR) What are biogeochemical cycles? (LB-2012)",
    answer:
      "Biogeochemical cycles, also known as nutrient cycles, are the pathways by which chemical elements essential for life (biogenic or nutrient elements) move from the non-living (geological and atmospheric) components of an ecosystem to the living (biological) components and back again in a cyclic manner. These cycles involve biological, geological, and chemical processes. Examples include the nitrogen cycle and carbon cycle.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 12. Define productivity of an ecosystem and differentiate between gross primary production and net primary production. (LB-2008)",
    answer:
      "Productivity of an ecosystem refers to the rate at which biomass (organic matter) is produced. Gross Primary Production (GPP) is the total amount of energy fixed by plants (producers) in an ecosystem through photosynthesis over a given period. Net Primary Production (NPP) is the amount of energy left after plants have met their own respiratory needs (energy used for their own maintenance and growth). NPP is the energy that shows up as plant biomass and is available to consumers in the ecosystem. So, NPP = GPP - Respiration by plants.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 13. Define ecosystem. Write its components. (OR) Define ecosystem. (LB-2012,2016)",
    answer:
      "An ecosystem is a functional unit of ecology consisting of organisms interacting with their environment. It comprises two basic interacting components: 1. Biotic components: These are the living parts of the ecosystem, including all organisms such as plants, animals, fungi, and microorganisms. These can be further divided into producers, consumers, and decomposers. 2. Abiotic components: These are the non-living physical and chemical parts of the environment, such as atmosphere (air), climate, soil (lithosphere), and water (hydrosphere).",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 14. Define biosphere. (OR) What is biosphere. (OR) Define biosphere and ecosystem. (LB-2014,2015,2018)",
    answer:
      "The biosphere is a thin layer of the Earth in which all living organisms exist. It extends about 8-10 kilometers into the upper reaches of the atmosphere and the same distance into the depths of the oceans, encompassing all ecosystems on the planet. An ecosystem is a smaller, functional unit within the biosphere, consisting of biotic (living organisms) and abiotic (non-living physical and chemical factors) components interacting with each other and their environment.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 15. Define and describe biotic components of an ecosystem. (LB-2014)",
    answer:
      "Biotic components of an ecosystem include all the living organisms present within it. These can be broadly categorized based on their role in energy flow and nutrient cycling: 1. Producers: These are autotrophic organisms, primarily green photosynthetic plants, that capture light energy and convert it into organic food from simpler inorganic substances. 2. Consumers: These are heterotrophic organisms, mainly animals, that obtain energy by feeding directly or indirectly on producers or other consumers. They include herbivores (primary consumers), carnivores (secondary/tertiary consumers), and omnivores. 3. Decomposers: These are mainly fungi and bacteria that obtain energy by breaking down dead organic matter (dead plants and animals, waste products). They release chemical elements back into the ecosystem as ions, making them available to producers again.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 16. Define parasitism. Give its significance. (OR) Differentiate between predation and parasitism. (LB-2009,2012)",
    answer:
      "Parasitism is an association between two organisms, a host and a parasite, where the parasite benefits by obtaining food, protection, and conditions for survival from the host, while the host is often harmed (though not always killed quickly). Diseases caused by parasites are called infestations. Significance: Parasitism can regulate host populations and influence community structure. Predation is an interaction where a predator catches and eats prey, usually resulting in the immediate death of the prey. In parasitism, the parasite typically lives in or on the host for an extended period and may not kill the host directly or quickly. Both are forms of symbiotic relationships where one organism benefits at the expense of the other, but the mode of interaction and immediate outcome for the host/prey differ.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 17. Define commensalism. Give one example. (OR) Define commensalism with the help of an example. (LB-2013,2018)",
    answer:
      "Commensalism is a type of symbiotic relationship between two organisms in which one organism benefits from the association, while the other organism is neither harmed nor benefited (i.e., it is unaffected). An example given is the relationship between sharks and remoras (small fish). Remoras attach themselves to sharks and pick up scraps of food when the shark feeds. The remoras benefit by getting food and transportation, while the shark is not affected by the presence of the remoras.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 18. Define food chain and food web. (OR) Define food chain by giving an example. (LB-2010,2012,2013,2015)",
    answer:
      "A food chain is a sequence of organisms where each organism is eaten by the next organism in the chain, representing the flow of energy. For example: Grass (producer) → Caterpillar (primary consumer) → Blue bird (secondary consumer) → Eagle (tertiary consumer). A food web is a more complex network consisting of many interconnected food chains within an ecosystem. It shows the multiple feeding relationships between different organisms, as most animals eat more than one type of food and are eaten by more than one type of predator.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 19. Differentiate between population and community. (LB-2014)",
    answer:
      "A population is a group of interbreeding individuals of the *same species* occurring together in a specific space and time. A community consists of *all the different populations* of various species (plants, animals, fungi, microorganisms) that live and interact within a particular ecosystem or habitat. So, a community is a more inclusive level of organization, comprising multiple interacting populations.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 20. Differentiate between habitat and niche. (OR) Define niche. (OR) Explain ecological niche. (LB-2011,2012,2013)",
    answer:
      "A habitat is the actual location or place where an organism lives; it is its 'address'. An ecological niche is the role a species plays in a community, including its behavior and influence. It encompasses all aspects of its interaction with the living (biotic) and non-living (abiotic) environment, such as its relationship to its food (what it eats, what eats it), its competitors, its methods of obtaining energy and materials, and all the physical factors necessary for its survival (e.g., temperature range, humidity, pH). While habitat is where an organism lives, niche is 'what it does' or its 'profession' in that habitat.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 21. Differentiate between autecology and synecology. (OR) What is synecology? (OR) What is autecology? (LB-2011,2013,2018)",
    answer:
      "Autecology is the study of the relationship of a *single population* (or individual species) to its environment. For example, studying the effect of water pollution on a specific population of soybean plants. Synecology (or community ecology) is the study of the relationship of *different communities* (groups of interacting populations) to their environment. It involves studying the origin, structure, composition, and dynamics of entire communities. Autecology focuses on one species; synecology focuses on groups of species and their interactions.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 22. Differentiate between micro and macronutrients? (LB-2010)",
    answer:
      "Macronutrients are chemical elements required by organisms in relatively large amounts for their growth and survival. Examples include water, carbon, hydrogen, oxygen, nitrogen, phosphorus, sulphur, and calcium. Micronutrients (or trace elements) are chemical elements required by organisms in very small quantities or trace amounts. Examples include zinc, molybdenum, iron, and iodine. Both are essential for life, but differ in the quantity needed.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 23. Differentiate between consumers and decomposers. (OR) What are consumers? (LB-2014)",
    answer:
      "Consumers are organisms, primarily animals, that obtain energy by feeding on other organisms (producers or other consumers) as ready-made organic food. They are heterotrophic and include herbivores, carnivores, and omnivores. Decomposers are mainly fungi and bacteria that obtain their energy by breaking down dead and decaying organic matter (dead plants and animals, waste products). They play a crucial role in nutrient cycling by releasing chemical elements as ions back into the ecosystem, making them available for producers. Consumers ingest living or recently killed organisms; decomposers break down dead organic material.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 24. Differentiate between hydrosere and xerosere. (LB-2015,2017)",
    answer:
      "Hydrosere and xerosere are terms used to describe types of primary ecological succession based on the starting environment. Hydrosere refers to primary succession that starts in a body of water, such as a pond or lake, gradually transitioning towards a terrestrial community. Xerosere refers to primary succession that starts on dry land or in a dry habitat, such as bare rock or sand, gradually developing into a more complex terrestrial community like a forest.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 25. Differentiate between primary and secondary succession. (OR) How primary succession differ from secondary succession? (LB-2012,2017)",
    answer:
      "Primary succession is an ecological succession that begins in an environment where there was no trace of previous life, such as on bare rock, sand, or a newly formed volcanic island. It involves the formation of an ecosystem from scratch and is a very slow process, often requiring thousands of years. Secondary succession occurs in an area where an existing ecosystem has been disturbed or removed, for example, by a fire, flood, or human activities like farming, but soil and some life (like seeds or roots) remain. Secondary succession is much more rapid than primary succession because the previous community has left behind improved soil and a seed bank.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 25) 26. Name some ways of nitrogen depletion from soil and its remedy.",
    answer:
      "Ways of nitrogen depletion from soil include: 1. Soil erosion: Nitrates can be washed away with the topsoil. 2. Fire: Burning of organic matter releases nitrogen. 3. Water percolating down through the soil: Leaching of nitrates. 4. Denitrification: Certain soil bacteria, in the absence of oxygen, break down nitrates, releasing nitrogen gas back into the atmosphere. Remedies for nitrogen depletion primarily involve: 1. Activities of nitrogen-fixing bacteria: These bacteria convert atmospheric nitrogen into organic nitrogen compounds, replenishing soil nitrogen. 2. Addition of nitrogen fertilizers by humans: Artificially adding nitrogen-rich compounds to the soil.",
    chapter: 25,
  },
  {
    question:
      "(Chapter 26) 1. What is the composition of air of terrestrial ecosystem? (LB-2012)",
    answer:
      "In terrestrial ecosystems, air is in constant motion, so its composition is generally more uniform. The text states that the amount of O2 and CO2 in the air is much constant and most beneficial to terrestrial ecosystems. This implies the standard atmospheric composition, roughly 78% nitrogen, 21% oxygen, and small amounts of other gases including carbon dioxide (around 0.04%).",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 2. What is the effect of human impact on Tundra ecosystem? (LB-2013)",
    answer:
      "The tundra is perhaps the most fragile of all biomes due to its short growing season. Human activities in the tundra, such as those related to oil drilling sites, pipelines, mines, and military bases, can leave scars that persist for centuries. The impact of civilization, though currently localized in these areas, can be very damaging and long-lasting due to the slow recovery rate of the tundra ecosystem.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 3. What is the effect of human impact on Desert ecosystem? (LB-2010)",
    answer:
      "Human activities are causing the spread of deserts, a process called desertification. An example is the Sahel region in Africa, bordering the Sahara desert, where below-average rainfall coupled with rapid human population growth (leading to overgrazing, deforestation for fuel, and unsustainable agriculture) has caused a steady southward spread of the desert. This occurs when human populations exceed the carrying capacity of the land, leading to loss of ecosystem productivity which can be nearly irreversible and result in famines.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 4. Where the Desert ecosystem is found in Pakistan. (LB-2018)",
    answer:
      "In Pakistan, desert ecosystems are found in: 1. Western Punjab (Mianwali and Bukhar), where it is known as 'Thai'. 2. Southern Punjab, in areas like Fort Abbass, Bahawal Nagar, Yazman, Bahawal Pur (Cholistan), Khan pur, and Rahim Yar Khan. 3. In Sindh, where this desert ecosystem is called 'Thar'.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 5. What is the range of rainfall and temperature in Temperate Deciduous Forest (OR) Discuss animal life of temperate deciduous forest? (LB-2012)",
    answer:
      "In Temperate Deciduous Forests, the average rainfall is between 750 - 1500 mm. The temperature is moderate, ranging from 4°C - 30°C. The animal life includes mammals such as Macaca mulatta (rhesus monkey), Solenorctos thibetanus (black bear), Felis bengalensis (leopard cat), deer, and wolves. Various types of microorganisms like bacteria, fungi, and earthworms are also present, which help convert litter into organic matter.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 6. What are the four major requirements for life? (OR) Which two are limiting factors in terrestrial ecosystem?",
    answer:
      "The text doesn't explicitly list four major requirements for life in one place, but common biological understanding includes: energy, water, nutrients, and suitable temperatures. In terrestrial ecosystems, the text highlights that while light (for energy via photosynthesis) is plentiful and soil provides abundant nutrients, the two factors that are often limited and very unevenly distributed both in place and in time are **water** and **favourable temperatures**.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 7. What is meant by layering in a grassland ecosystem? (OR) Give the layering characteristics of grassland. (LB-2013)",
    answer:
      "Layering in a grassland ecosystem refers to the vertical stratification of vegetation based on height. The text describes three layers: 1. First layer: Formed by tall grasses (e.g., Andropogon, Panicum). 2. Second layer: Formed by mid-high grasses (e.g., Stipa, Sporobolus, Oryzopsis). 3. Third layer: Formed by short grasses and forbs (herbaceous flowering plants other than grasses), and dwarf species (e.g., Poa, Bromus), along with mosses and lichens. This layering creates different microhabitats and resource availability within the grassland.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 8. What is profundal zone? Give its one character. (OR) What type of organisms are present in profundal zone of lake? (LB-2018)",
    answer:
      "The profundal zone is the deep, open-water area in a lake where light is insufficient to support photosynthesis. One character is its darkness or low light penetration. Organisms in the profundal zone are mainly nourished by detritus (dead organic matter) that falls from the littoral and limnetic zones above, and by incoming sediment. Organisms present include decomposers (bacteria, fungi) and detritus feeders, such as snails, certain insect larvae, and some types of fish adapted to low light and oxygen conditions.",
    chapter: 26,
  },
  {
    question: "(Chapter 26) 9. Define productivity of an ecosystem.",
    answer:
      "The productivity of an ecosystem refers to the rate at which biomass (organic matter) is produced by organisms, typically producers through photosynthesis. In aquatic ecosystems, it can be indicated by the consumption of CO2 and the evolution of oxygen during photosynthesis. It is fundamentally determined by factors like light availability and nutrient content. (Chapter 25 provides a more detailed definition differentiating gross and net primary production).",
    chapter: 25,
  },
  {
    question:
      "(Chapter 26) 10. Differentiate between climate and weather. (OR) What is climate?",
    answer:
      "Weather refers to short-term fluctuations in atmospheric conditions such as temperature, humidity, cloud cover, wind, and precipitation over periods of hours or days. Climate, in contrast, refers to the overall patterns of weather that prevail from year to year, even century to century, in a particular region. Climate is the long-term average of weather conditions.",
    chapter: 26,
  },
  {
    question: "(Chapter 26) 11. Differentiate between thal and thar.",
    answer:
      "Thal and Thar are names given to desert ecosystems in different regions of Pakistan. 'Thal' refers to the desert ecosystem found in western Punjab, in areas like Mianwali and Bukhar. 'Thar' refers to the desert ecosystem found in the province of Sindh. Both are desert biomes but are geographically distinct within Pakistan.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 12. Differentiate between Alpine and Boreal forests. (LB-2009,2018)",
    answer:
      "Both Alpine and Boreal forests are types of coniferous forests characterized by evergreen trees like pines, firs, and spruces, adapted to harsh, cold climates. The differentiation is based on their geographical location: Boreal forests (also called Taiga) are coniferous forests located at high latitudes, stretching across northern North America, northern Europe, and Siberia, just south of the tundra. Alpine forests are coniferous forests located at high altitudes on mountains, above the typical timberline. So, Boreal is defined by latitude, Alpine by altitude, though both share similar vegetation types and climatic conditions.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 13. Differentiate between Zooplankton and Phytoplankton. (LB-2008,2011)",
    answer:
      'Phytoplankton (Greek for "drifting plants") are microscopic, photosynthetic organisms found in aquatic ecosystems, including photosynthetic protista, bacteria (like cyanobacteria), and algae. They are producers, forming the base of the aquatic food web. Zooplankton (Greek for "drifting animals") are microscopic or very small animal organisms that drift in water. They are primary consumers, feeding on phytoplankton. Examples include protozoa and tiny crustaceans like copepods.',
    chapter: 26,
  },
  {
    question: "(Chapter 26) 14. Differentiate between Prairies and Savanna.",
    answer:
      "Prairies and Savannas are both types of grassland ecosystems. Prairies are grasslands found in temperate climates, such as those in North America (e.g., Prairies of North America) and Argentina (Pampas). They typically do not have woody plants (trees) and are characterized by a continuous cover of grass. Savannas are grasslands found in tropical climates. They are characterized by grasses but also have scattered woody trees. The presence or absence of trees and the climatic zone are key differences.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 15. Differentiate among littoral, limnetic and profundal zone. (OR) Characterize littoral zone of fresh water lakes. (OR) What is limnetic zone mention its life. (LB-2013,2014)",
    answer:
      "These are life zones in a freshwater lake: 1. Littoral zone: This is the near-shore, shallow water zone where light penetrates to the bottom, allowing rooted plants (like water lilies, submerged vascular plants, algae) to flourish. It has abundant nutrients from bottom sediments and trapped sediments. It supports the greatest diversity of animals, including plankton, small crustaceans, insect larvae, snails, flatworms, Hydra, frogs, aquatic snakes, and turtles. 2. Limnetic zone: This is the upper layer of open water away from the shore where enough light penetrates to support photosynthesis. Phytoplankton (e.g., cyanobacteria) are the main producers, eaten by zooplankton (protozoa, small crustaceans), which are then consumed by fish. 3. Profundal zone: This is the deep, open-water zone below the limnetic zone where light is insufficient for photosynthesis. Organisms are nourished by detritus from upper zones and sediment. Inhabitants include decomposers (bacteria, fungi) and detritus feeders (snails, insect larvae, fish).",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 16. Describe animal life of Grassland ecosystem. (LB-2012)",
    answer:
      "The animal life in a grassland ecosystem is dominated by herbivores. Invertebrates, particularly insects like grasshoppers, can be very numerous and compete with other herbivores for plant foliage. Predators include reptiles (lizards), amphibians (toads), and mammals (foxes, wolves). Turtles also prey on insects. Decomposers like bacteria, actinomycetes, and various fungi (molds, yeasts, mushrooms, bracket fungi) are common. Large grazing animals such as zebras, wild horses, and bisons are also important components of grassland animal life.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 17. Enlist two adaptations in plants and two in animals for a terrestrial ecosystem. (OR) Give two adaptations of terrestrial ecosystem. (LB-2010,2012)",
    answer:
      "Two adaptations in plants for terrestrial ecosystems: 1. Supporting tissues: Development of vascular bundles (xylem and phloem) to provide structural support against gravity and transport water/nutrients. 2. Conservation of water: Development of features like a waxy cuticle on leaves and bark on stems to reduce water loss. Two adaptations in animals for terrestrial ecosystems: 1. Supporting tissues: Development of an internal or external skeleton for support against gravity. 2. Conservation of water/Temperature regulation: Development of skin to prevent water loss and help in temperature regulation; mechanisms like homeostasis for maintaining internal water balance.",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 18. Give the name of some major ecosystems on land in Pakistan.",
    answer:
      "Some major terrestrial ecosystems found in Pakistan include: 1. Temperate Deciduous Forests (e.g., Shogran, Neelam valley). 2. Coniferous Alpine and Boreal Forests (e.g., upper Kaghan, Malam Jabba, Dir, Chilas). 3. Grassland Ecosystems (e.g., Gilgit, Kashmir, Waziristan). 4. Desert Ecosystems (e.g., Thal in Punjab, Thar in Sindh). 5. Tundra Ecosystems (e.g., mountains of Karakoram and Koh Hindu Kush).",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 19. Give location of Tundra ecosystem in Pakistan. (LB-2014)",
    answer:
      "In Pakistan, the Tundra ecosystem is found at high altitudes in the mountains of the Karakoram and Koh Hindu Kush ranges, above the timberline.",
    chapter: 26,
  },
  {
    question: "(Chapter 26) 20. Name six major terrestrial biomes.",
    answer:
      "The text implicitly lists several major terrestrial biomes by discussing them. Six major ones based on the chapter content and general knowledge would be: 1. Tropical Rain Forests (mentioned as having distinct wet/dry seasons further from equator leading to deciduous forests). 2. Temperate Deciduous Forests. 3. Coniferous Forests (Taiga/Boreal and Alpine). 4. Grasslands (Prairies and Savannas). 5. Deserts. 6. Tundra (Arctic and Alpine). (Fig. 26.3 legend also visually shows these).",
    chapter: 26,
  },
  {
    question:
      "(Chapter 26) 21. Mention the characteristicsof plant life in desert ecosystem. (LB-2013)",
    answer:
      "Plant life in a desert ecosystem is characterized by adaptations to conserve water and survive arid conditions. Plants are often widely spaced. Many are bushes or cacti with large, shallow root systems to absorb scarce rainfall quickly. They often have waterproof, waxy coatings on their leaves/stems to prevent evaporation. Succulents like cacti and Euphorbia have fleshy stems to store water for use during droughts. Leaves may be reduced to spines or shed during dry periods to minimize water loss.",
    chapter: 26,
  },
  {
    question: "(Chapter 27) 1. What is acid rain? (LB-2013)",
    answer:
      "Acid rain refers to precipitation (rain, snow, fog) that is more acidic than normal due to the presence of pollutants like sulfur dioxide (SO2) and nitrogen oxides (NOx) in the atmosphere. These pollutants are primarily released from the burning of fossil fuels (coal, oil, and natural gas) by industries and vehicles. When these gases react with water, oxygen, and other chemicals in the atmosphere, they form sulfuric acid and nitric acid, which then fall to the earth as acid rain. Acid rain can harm forests, soils, aquatic ecosystems, and man-made structures.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 2. What is Eutrophication? (OR) What is algal bloom? (LB-2015)",
    answer:
      "Eutrophication is the process where a body of water becomes overly enriched with minerals and nutrients (like phosphates and nitrates), which induces excessive growth of plants and algae (like phytoplankton, especially blue-green algae). This excessive growth is often called an algal bloom. Algal blooms can form a scum on the water surface, blocking sunlight from submerged plants, leading to their death. The decomposition of this dead organic matter by bacteria depletes dissolved oxygen in the water, harming or killing fish and other aquatic organisms. Human activities like sewage discharge and agricultural runoff accelerate eutrophication. (This concept is also touched upon in Chapter 26 under 'Intervention of Man in Aquatic Ecosystem').",
    chapter: 26,
  },
  {
    question:
      "(Chapter 27) 3. What is Ozone? (OR) Give the importance of ozone layer. (LB-2017)",
    answer:
      "Ozone (O3) is a molecule made up of three oxygen atoms. The ozone layer is a region in the Earth's stratosphere that contains a high concentration of ozone. Its importance lies in its ability to absorb most of the Sun's harmful ultraviolet (UV) radiation, particularly UVB radiation. By absorbing this UV radiation, the ozone layer protects life on Earth from its damaging effects, which include skin cancer, cataracts, immune system suppression in humans, and harm to plants and aquatic ecosystems. (Chapter 24 mentions ozone filtering UV radiation making life on land possible).",
    chapter: 27,
  },
  {
    question: "(Chapter 27) 4. What are pollutants?",
    answer:
      "Pollutants are substances or energy introduced into the environment that have undesired effects, or adversely affect the usefulness of a resource. Pollutants can harm the health of humans, animals, and plants, and damage ecosystems. They can be chemical substances (e.g., pesticides, heavy metals, industrial waste), noise, heat, or light. Pollution is the introduction of pollutants into the natural environment.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 5. Write names of various types of pollution. (LB-2011)",
    answer:
      "Various types of pollution include: 1. Air pollution (e.g., from industrial emissions, vehicle exhaust). 2. Water pollution (e.g., from sewage, industrial discharge, agricultural runoff). 3. Soil/Land pollution (e.g., from solid waste, industrial waste, pesticides). 4. Noise pollution. 5. Thermal pollution (e.g., release of heated water into aquatic systems). 6. Light pollution. 7. Radioactive pollution.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 6. What are the main sources of water pollution? (OR) Give main causes of water pollution. (LB-2012,2015)",
    answer:
      "Main sources/causes of water pollution include: 1. Sewage and wastewater: Discharge from domestic, municipal, and industrial sources containing organic waste, pathogens, and chemicals. 2. Agricultural runoff: Fertilizers, pesticides, and animal waste washed from farmlands into water bodies. 3. Industrial discharge: Effluents from factories containing toxic chemicals, heavy metals, and other pollutants. 4. Oil spills: Accidental release of petroleum products into water. 5. Solid waste dumping: Improper disposal of garbage and other solid materials. 6. Atmospheric deposition: Pollutants from the air (like acid rain) entering water bodies. (Chapter 26 mentions sewage and farm feedlots contributing to eutrophication, a form of water pollution).",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 7. Write the causes and effects of ozone depletion? (OR) Give the effects of ozone depletion on life. (LB-2012)",
    answer:
      "Causes of ozone depletion: The primary cause is the release of man-made chemicals, particularly chlorofluorocarbons (CFCs), halons, and other ozone-depleting substances (ODS), into the atmosphere. These substances, once in the stratosphere, are broken down by UV radiation, releasing chlorine and bromine atoms, which then catalytically destroy ozone molecules. Effects of ozone depletion on life: Depletion of the ozone layer allows more harmful ultraviolet (UVB) radiation to reach the Earth's surface. This increased UV exposure can lead to: 1. Increased incidence of skin cancer (melanoma and non-melanoma) in humans. 2. Higher rates of cataracts and other eye damage. 3. Suppression of the immune system, making individuals more susceptible to diseases. 4. Damage to plants, including reduced growth, photosynthesis, and crop yields. 5. Harm to aquatic ecosystems, particularly phytoplankton, which form the base of the marine food web.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 8. What are solid wastes and how these can be used as source of energy? (OR) Give importance of solid waste.",
    answer:
      "Solid wastes are unwanted or discarded materials that are not liquid or gaseous, arising from human and animal activities. They include garbage, refuse, sludge from wastewater treatment plants, and other discarded materials from residential, commercial, industrial, and agricultural operations. Importance/Use as energy source: Some solid wastes, particularly organic components (like food waste, paper, wood, agricultural residues), can be used as a source of energy through processes such as: 1. Incineration: Burning solid waste at high temperatures to generate heat, which can be used to produce steam and then electricity (waste-to-energy plants). 2. Anaerobic digestion: Decomposition of organic waste by microorganisms in the absence of oxygen to produce biogas (mainly methane), which can be burned for heat or electricity. 3. Landfill gas recovery: Methane produced from the decomposition of organic waste in landfills can be captured and used as fuel. 4. Pyrolysis and Gasification: Thermal processes that convert solid waste into gas, liquid, or solid fuels.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 9. What do you mean by non-renewable resources? (OR) What are renewable resources. Give examples. (OR) Differentiate between renewable and non-renewable resources. (LB-2011,2013,2014,2016,2018)",
    answer:
      "Renewable resources are natural resources that can be replenished or regenerated naturally over a relatively short period of time (on a human timescale). They are considered sustainable if managed properly. Examples include solar energy, wind energy, hydropower (water), geothermal energy, biomass (e.g., wood, crops for biofuels), and forests (if harvested sustainably). Non-renewable resources are natural resources that exist in finite amounts and are consumed much faster than they can be naturally formed. Once depleted, they are effectively gone forever on a human timescale. Examples include fossil fuels (coal, oil, natural gas) and minerals (like iron ore, copper, aluminum).",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 10. What measures should be taken for conservation of energy? (OR) How we can save energy? Mention any four ways in which we can save energy. (OR) Write four ways of energy conservation? (LB-2014,2017)",
    answer:
      "Measures for conservation of energy include: 1. Improving energy efficiency: Using appliances, vehicles, and industrial processes that consume less energy to perform the same task (e.g., LED bulbs, fuel-efficient cars). 2. Reducing energy consumption: Making conscious choices to use less energy, such as turning off lights when not needed, using public transport or carpooling, and adjusting thermostats. 3. Utilizing renewable energy sources: Shifting from fossil fuels to renewable sources like solar, wind, and hydropower, which are sustainable and generally less polluting. 4. Better insulation: Properly insulating homes and buildings to reduce the need for heating and cooling, thus saving energy.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 11. What is deforestation? (OR) What is afforestation? (OR) What is reforestation? (OR) What is the difference between deforestation and afforestation? (OR) Differentiate between afforestation and reforestation. (OR) What is the difference among deforestation, afforestation and reforestation? (LB-2014,2015)",
    answer:
      "Deforestation is the clearing or removal of forests or stands of trees where the land is thereafter converted to a non-forest use, such as agriculture, ranching, or urban development. Afforestation is the process of establishing a forest or stand of trees in an area where there was no previous tree cover (e.g., planting trees on barren land). Reforestation is the process of replanting trees and restoring a forest in an area where forests previously existed but have been depleted, for example, due to deforestation or natural disasters like fire. So, deforestation is removal of forests; afforestation is creating new forests; reforestation is restoring old forests.",
    chapter: 27,
  },
  {
    question: "(Chapter 27) 12. Define greenhouse effect.",
    answer:
      "The greenhouse effect is a natural process that warms the Earth's surface. Certain gases in the atmosphere, known as greenhouse gases (e.g., carbon dioxide, methane, water vapor, nitrous oxide), trap some of the Earth's outgoing infrared radiation (heat) that would otherwise escape into space. This trapped heat keeps the planet warmer than it would be without these gases, making it habitable. However, an increase in the concentration of greenhouse gases due to human activities (like burning fossil fuels) can enhance this effect, leading to global warming and climate change.",
    chapter: 27,
  },
  {
    question: "(Chapter 27) 13. Describe abuses of land. (LB-2012)",
    answer:
      "Abuses of land refer to human activities that degrade or damage land resources, reducing their productivity and ecological value. These can include: 1. Deforestation: Clearing forests for agriculture, logging, or urban development, leading to soil erosion, loss of biodiversity, and climate change. 2. Overgrazing: Excessive grazing by livestock, which destroys vegetation cover, compacts soil, and can lead to desertification. 3. Unsustainable agricultural practices: Monoculture, excessive use of chemical fertilizers and pesticides, and improper irrigation can lead to soil degradation, nutrient depletion, and water pollution. 4. Urban sprawl and industrialization: Conversion of agricultural or natural land for buildings, roads, and industries, leading to habitat loss and pollution. 5. Mining and quarrying: Extraction of minerals can cause landscape destruction, soil erosion, and water contamination if not managed properly. 6. Improper waste disposal: Dumping of solid and hazardous waste can contaminate land and water resources.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 14. Define soil and give its basic constituents. (OR) What is soil? (OR) What is soil? Give its basic constituents. (LB-2016,2018)",
    answer:
      "Soil is the upper layer of the Earth's crust, formed by the weathering of rocks and the decomposition of organic matter, which supports plant life. It is a complex mixture of minerals, organic matter, water, and air. Basic constituents of soil are: 1. Mineral particles: Derived from the breakdown of parent rock material (e.g., sand, silt, clay). 2. Organic matter (humus): Decomposed remains of plants and animals, which improves soil structure and fertility. 3. Water: Held within the pore spaces of the soil, essential for plant growth and soil processes. 4. Air: Also present in pore spaces, providing oxygen for plant roots and soil organisms. 5. Soil organisms: A diverse community of bacteria, fungi, insects, earthworms, etc., that contribute to nutrient cycling and soil structure.",
    chapter: 27,
  },
  {
    question: "(Chapter 27) 15. Differentiate between health and disease.",
    answer:
      "Health is a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity. It implies that all body systems are functioning optimally and in harmony with each other and the environment. Disease is any condition that impairs the normal functioning of an organism or any of its parts. It is often characterized by specific signs and symptoms and can be caused by various factors such as pathogens (infections), genetic disorders, environmental factors, or lifestyle choices. Health is a positive state of well-being, while disease represents a deviation from that state due to some impairment.",
    chapter: 27,
  },
  {
    question: "(Chapter 27) 16. Discuss importance of forests.",
    answer:
      "Forests are vitally important for numerous reasons: 1. Ecological balance: They play a crucial role in maintaining ecological balance by producing oxygen, absorbing carbon dioxide (mitigating climate change), regulating water cycles (influencing rainfall and preventing floods), and preventing soil erosion. 2. Biodiversity hotspots: Forests are home to a vast majority of terrestrial biodiversity, providing habitats for countless species of plants, animals, fungi, and microorganisms. 3. Economic resources: They provide valuable resources such as timber, fuelwood, medicinal plants, fruits, nuts, and resins, supporting livelihoods and industries. 4. Watershed protection: Forests help in maintaining the quality and quantity of water in watersheds. 5. Climate regulation: They influence local and global climates through transpiration and their effect on albedo. 6. Recreational and cultural value: Forests offer opportunities for recreation, tourism, and hold cultural and spiritual significance for many communities.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 17. Differentiate between Population Explosion and Population Pressure. (OR) Enlist some reasons of Population Explosion in the world also describe Population Pressure. (OR) Write the reasons of world Population Explosion. (OR) What do you mean by Population Explosion and give its two causes? (LB-2010,2013,2014)",
    answer:
      "Population Explosion refers to a rapid and dramatic increase in the size of a population, particularly the human population, over a relatively short period. Two main causes for world population explosion are: (a) Decreased death rates due to advancements in medicine, sanitation, and nutrition, leading to increased life expectancy. (b) High birth rates, particularly in developing countries, due to factors like lack of access to family planning, cultural norms favoring large families, and early marriages. Population Pressure is the stress or strain exerted on resources (like food, water, land, energy) and the environment due to a large or rapidly growing population. It arises when the demands of the population exceed the carrying capacity of its environment, leading to problems like resource depletion, pollution, poverty, and social unrest. So, population explosion is the rapid increase in numbers, while population pressure is the consequence of that increase on resources and environment.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 18. How is air important to life as a source? (LB-2012)",
    answer:
      "Air is important to life as a source for several reasons: 1. Oxygen: Air provides oxygen, which is essential for aerobic respiration in most living organisms (including humans, animals, and many microorganisms) to release energy from food. 2. Carbon Dioxide: Air is the source of carbon dioxide, which plants and other photosynthetic organisms use during photosynthesis to produce organic compounds (food) and release oxygen. 3. Nitrogen: Although most organisms cannot use atmospheric nitrogen directly, it is the ultimate source of nitrogen for all life, converted into usable forms by nitrogen-fixing bacteria. Nitrogen is a key component of proteins and nucleic acids. 4. Medium for dispersal: Air acts as a medium for the dispersal of pollen, spores, seeds, and even small organisms. 5. Gaseous exchange: It facilitates the exchange of gases between organisms and their environment.",
    chapter: 27,
  },
  {
    question: "(Chapter 27) 19. Give uses and misuses of agrochemicals.",
    answer:
      "Agrochemicals are chemicals used in agriculture to enhance crop production or protect crops. Uses: 1. Fertilizers (e.g., nitrogen, phosphorus, potassium compounds): Used to supplement soil nutrients and increase crop yields. 2. Pesticides (including insecticides, herbicides, fungicides): Used to control pests (insects, weeds, fungi) that damage crops or reduce yield, thereby protecting food supply. 3. Growth regulators: Used to modify plant growth, such as promoting ripening or rooting. Misuses/Negative Impacts: 1. Environmental pollution: Runoff of fertilizers and pesticides can contaminate water bodies (eutrophication, toxicity to aquatic life) and soil. Pesticides can harm non-target beneficial organisms like pollinators and natural pest enemies. 2. Health risks: Improper handling or residues of pesticides on food can pose health risks to humans and animals. 3. Pest resistance: Overuse or improper use of pesticides can lead to the development of pesticide-resistant pest populations. 4. Soil degradation: Excessive use of certain chemical fertilizers can alter soil pH and structure over time.",
    chapter: 27,
  },
  {
    question:
      "(Chapter 27) 20. Name two pathogenic and two congenital diseases. (LB-2018)",
    answer:
      "Pathogenic diseases are caused by pathogens (disease-causing organisms like bacteria, viruses, fungi, protozoa). Two examples: 1. Gonorrhea (caused by the bacterium Neisseria gonorrhoeae - mentioned in Ch 18). 2. AIDS (Acquired Immune Deficiency Syndrome, caused by HIV virus - mentioned in Ch 18). Congenital diseases are conditions present at birth, which may be inherited or caused by environmental factors during embryonic/fetal development. Two examples: 1. Cleft palate (a structural defect where parts of the palate fail to fuse - mentioned in Ch 19). 2. Microcephaly (a condition where an individual is born with a small skull - mentioned in Ch 19). (Note: Some congenital diseases like Down's syndrome (Ch 21) are due to chromosomal abnormalities present from conception).",
    chapter: 27,
  },
];
