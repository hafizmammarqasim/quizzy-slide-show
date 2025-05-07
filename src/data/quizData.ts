
export interface QuizQuestion {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export const quizQuestions: QuizQuestion[] = [
  [
    {
      "question": "1. Why metals are good conductors?",
      "answer": "According to the provided text (page 17, Section 7 Electrical Conductance): \"This property is mainly due to the presence of relatively loose electrons in the outermost shell of the element and ease of their movement in the solid lattice.\""
    },
    {
      "question": "2. Define hydration energy with examples.",
      "answer": "According to the provided text (page 18, Section 8 Hydration Energy): \"The hydration energy is the heat absorbed or evolved when one mole of gaseous ions dissolve in water to give an infinitely dilute solution.\" Example from the text (page 18): \"For example, when one mole of gaseous hydrogen ions are dissolved in water resulting an infinitely dilute solution, a large amount of heat is liberated: H⁺(g) + H₂O(l) → H₃O⁺(aq) ΔHh = -1075 kJ mol⁻¹\" The text also provides Table 1.2 (page 18) with hydration energies of various ions (e.g., Li⁺: -499 kJ mol⁻¹, Na⁺: -390 kJ mol⁻¹, F⁻: -457 kJ mol⁻¹)."
    },
    {
      "question": "3. Diamond is a non-conductor but graphite is good conductor. Why?",
      "answer": "According to the provided text (page 18, Section 7 Electrical Conductance): \"Carbon, in the form of diamond is non-conductor because all of its valence electrons are tetrahedrally bound and unable to move freely, while in the form of graphite, carbon is fairly good conductor because one of its four valence electrons is relatively free to move.\""
    },
    {
      "question": "4. Ionization energy increases from left to right in a period. Justify.",
      "answer": "According to the provided text (page 11, Section b) Variation Across a Period): \"By moving from left to right in a period, the outer shell remains the same, while the nuclear charge increases effectively that makes the removal of an electron difficult and hence the value of ionization energy increases.\" The text further adds (page 12): \"Although, the number of electrons also increases in this case but the shielding is not very effective within the same shell.\""
    },
    {
      "question": "5. How does hydrogen resemble with group IV-A elements.",
      "answer": "According to the provided text (page 25, Section 1.5 The Position of Hydrogen): \"Some of the characteristic properties of hydrogen also resemble with those of group IVA elements such as C and Si, etc. For example, valence shell of hydrogen is half filled like those of group IVA elements. Both, hydrogen and group IV elements combine with other elements through covalent bonding. Like carbon, hydrogen also possesses remarkable reducing properties.\""
    },
    {
      "question": "6. Why oxidation number of noble gases is usually zero?",
      "answer": "According to the provided text (page 17, Section 6 Oxidation State): \"Group VIIIA elements, which are also called zero group elements, usually show zero oxidation state because there is no vacancy in their outermost shells.\""
    },
    {
      "question": "7. What is electron affinity? Give its trend in periodic table.",
      "answer": "Definition from the provided text (page 12, Section 3 Electron Affinity (E.A)): \"The electron affinity is the energy released or absorbed, when an electron is added to a gaseous atom to form a negative ion.\" Trend from the provided text (page 13): \"Electron affinity generally increases with increasing atomic number within a period and decreases from lighter to heavier elements in a given group of the periodic table.\""
    },
    {
      "question": "8. Justify the position of hydrogen at the top of group VII-A elements.",
      "answer": "According to the provided text (page 24, Section 1.5 The Position of Hydrogen): \"Hydrogen resembles halogens in certain respects and can be placed at the top of VIIA group in the periodic table. Hydrogen is a gas like most of the halogens and is stable in diatomic form such as F₂, Cl₂ and Br₂. As required by halogens, hydrogen also needs one electron to complete its outermost shell. By accepting one electron hydrogen forms H⁻ (Hydride ion) similar to F⁻, Cl⁻ and Br⁻. Both hydrogen and halogens form stable ionic compounds with alkali metals.\""
    },
    {
      "question": "9. Give reasons that hydration energy of Al³⁺ ions more than Mg²⁺ ion?",
      "answer": "According to the provided text (page 18, Section 8 Hydration Energy): \"It is evident from the table that hydration energies highly depend upon charge to size ratio of the ions.\" And, \"On the contrary, the hydration energy increases significantly by moving from left to right in a period as the charge to size ratio increases, as found in the metal ions of third period.\" Al³⁺ has a higher charge (+3) and a smaller ionic radius compared to Mg²⁺ (+2). This results in a significantly higher charge-to-size ratio for Al³⁺ than for Mg²⁺, leading to stronger ion-dipole interactions with water molecules and thus a higher (more exothermic) hydration energy. (The provided text's Table 1.2 shows Al³⁺: -4613 kJ mol⁻¹, Mg²⁺: -1891 kJ mol⁻¹)."
    },
    {
      "question": "10. Give differences of lithium from its own family members.",
      "answer": "(This information was not found in the provided text. The following answer is based on general chemical knowledge.) \nLithium exhibits anomalous behavior compared to other alkali metals (its family members) due to its exceptionally small atomic and ionic size, and high charge density (high polarizing power). Key differences include:\n1.  **Hardness and Melting/Boiling Points:** Lithium is harder and has higher melting and boiling points than other alkali metals.\n2.  **Reactivity:** Lithium is less reactive than other alkali metals, though it is still a reactive metal. It reacts slowly with water, while others react vigorously.\n3.  **Nitrogen Reaction:** Lithium is the only alkali metal that reacts directly with nitrogen gas at room temperature to form lithium nitride (Li₃N).\n4.  **Nature of Compounds:** Lithium compounds tend to have more covalent character compared to the predominantly ionic compounds of other alkali metals. For example, LiCl is soluble in organic solvents like ethanol and acetone.\n5.  **Solubility of Salts:** Lithium carbonate (Li₂CO₃), lithium fluoride (LiF), and lithium phosphate (Li₃PO₄) are sparingly soluble in water, whereas the corresponding salts of other alkali metals are highly soluble.\n6.  **Thermal Stability of Carbonate and Nitrate:** Lithium carbonate decomposes on heating to give Li₂O and CO₂, unlike other alkali metal carbonates which are stable to heat. Lithium nitrate decomposes to give Li₂O, NO₂ and O₂, while other alkali metal nitrates give nitrites and oxygen.\n7.  **Formation of Bicarbonate:** Lithium does not form a solid bicarbonate, while other alkali metals do.\n8.  **Diagonal Relationship:** Lithium shows a diagonal relationship with magnesium (Mg) in Group 2, meaning it shares some similarities in properties with magnesium."
    },
    {
      "question": "11. Why the size of an anion is always greater than its parent atom?",
      "answer": "According to the provided text (page 9, b) Ionic Radius): \"On the contrary, a negative ion is always bigger than its parent atom. The reason is that addition of one or more electrons in the shell of a neutral atom enhances repulsion between the electrons causing expansion of the shell.\""
    },
    {
      "question": "12. Name various classes of hydrides.",
      "answer": "According to the provided text (page 21, b) Hydrides): \"According to the nature of bonding, hydrides may be broadly classified into three classes: ionic, covalent and intermediate.\""
    },
    {
      "question": "13. Why metallic character increases from top to bottom in a group of metals?",
      "answer": "According to the provided text (page 13, Section 4 Metallic and Non-Metallic Character): \"Chemically all the elements which have a tendency to form positive ions by losing electrons are considered metals.\" And \"As it becomes easier to remove the electron of an atom bigger in size, therefore metallic character increases from top to bottom in a given group of elements.\" This is because as atomic size increases down a group, the outermost electrons are further from the nucleus and experience greater shielding from inner electrons, making them easier to lose."
    },
    {
      "question": "14. Alkali metals give ionic hydrides. Why?",
      "answer": "According to the provided text (page 21, b) Hydrides): \"The elements of group IA ... form ionic hydrides, which contain H⁻ (Hydride) ion.\" The text implies this is due to their electropositive nature. Alkali metals are highly electropositive and have a strong tendency to lose their single valence electron. Hydrogen, in this case, gains an electron to form the hydride ion (H⁻). The large difference in electronegativity between the highly electropositive alkali metal and hydrogen (when it forms H⁻) leads to the formation of an ionic bond."
    },
    {
      "question": "15. Give four uses of nitric acid.",
      "answer": "(This information was not found in the provided text. The following answer is based on general chemical knowledge.)\nFour common uses of nitric acid (HNO₃) are:\n1.  **Manufacture of Fertilizers:** A primary use is in the production of ammonium nitrate (NH₄NO₃), which is a key component in many fertilizers.\n2.  **Production of Explosives:** Nitric acid is used to manufacture various explosives, such as nitroglycerin, trinitrotoluene (TNT), and gun cotton (nitrocellulose).\n3.  **Chemical Synthesis:** It serves as a reagent in the synthesis of various organic and inorganic chemicals, including dyes, plastics (like nylon precursors), and other nitrates.\n4.  **Metallurgy and Metal Treatment:** It is used in metallurgy for processes like pickling of stainless steel, etching, and dissolving noble metals like silver (though not gold without HCl, as in aqua regia)."
    }
  
,
    {
      "question": "1. How does hydrogen resemble with alkali metals?",
      "answer": "Based on Chapter 2's discussion of Group IA elements (alkali metals): Hydrogen (1s¹) and alkali metals (ns¹) both have a single electron in their outermost 's' orbital. Like alkali metals, hydrogen can lose this one electron to form a monopositive ion (H⁺) and typically shows a +1 oxidation state in many of its compounds. (Note: A more detailed comparison is often found in introductory chapters on periodic trends, but this resemblance in valence electron configuration and formation of M⁺ ions is consistent with Chapter 2's description of alkali metals on page 3.)"
    },
    {
      "question": "2. Write formula of borax and Chile saltpetre.",
      "answer": "Chile saltpetre: NaNO₃ (From Chapter 2, page 5, Table 2.3).\nBorax: Na₂B₄O₇.10H₂O (This information is not found in Chapter 2, which focuses on s-Block elements. Borax is a compound of boron, discussed in Chapter 3. The formula is based on general chemical knowledge and its presence in Chapter 3 of the provided text series)."
    },
    {
      "question": "3. Give formula of natron and halite.",
      "answer": "Natron: Na₂CO₃.H₂O (From Chapter 2, page 5, Table 2.3).\nHalite (also known as Rock Salt): NaCl (From Chapter 2, page 5, Table 2.3)."
    },
    {
      "question": "4. How will you distinguish between ethanol and propanol.",
      "answer": "(This information is not found in Chapter 2, which deals with s-Block elements. The following answer is based on general chemical knowledge.)\nEthanol can be distinguished from propan-1-ol using the iodoform test. Ethanol gives a positive iodoform test: when warmed with iodine and sodium hydroxide solution, it forms a yellow precipitate of iodoform (CHI₃) with a characteristic antiseptic smell. Propan-1-ol does not give this test. (Note: Propan-2-ol would also give a positive iodoform test. If 'propanol' is unspecified, this test distinguishes ethanol from propan-1-ol but not necessarily from propan-2-ol without further tests.)"
    },
    {
      "question": "5. Give two similar properties of lithium and magnesium.",
      "answer": "Based on the peculiar behavior of lithium discussed in Chapter 2, which often makes it resemble magnesium (due to diagonal relationship):\n1.  **Reaction with Nitrogen:** Lithium reacts with nitrogen to form lithium nitride (Chapter 2, page 9, point 13: 6Li + N₂ → 2Li₃N). Magnesium also readily reacts with nitrogen to form magnesium nitride (Chapter 2, page 14, regarding burning magnesium in air, and page 15, point 3: 3Mg + N₂ → Mg₃N₂).\n2.  **Formation of Normal Oxide:** When burnt in air, lithium forms only the normal oxide (Li₂O) (Chapter 2, page 8, point 6, and page 11). Magnesium similarly forms its normal oxide (MgO) when burnt in air (Chapter 2, page 14)."
    },
    {
      "question": "6. Write chemical formula of Beryl and Barite.",
      "answer": "Beryl: Be₃Al₂(SiO₃)₆ (From Chapter 2, page 7, Table 2.4).\nBarite: BaSO₄ (From Chapter 2, page 7, Table 2.4)."
    },
    {
      "question": "7. What are two major problems faced during the working of diaphragm cell?",
      "answer": "According to Chapter 2, page 24 (Commercial Preparation of Sodium Hydroxide by the Diaphragm Cell):\n1.  \"Chlorine produced can react with hydroxide ions in cold giving hypochlorite ions.\" (Cl₂(g) + 2OH⁻(aq) → OCl⁻(aq) + Cl⁻(aq) + H₂O)\n2.  \"Hydroxide ions may be attracted towards anode, where they can be discharged releasing oxygen gas. This oxygen gas may contaminate the chlorine and renders it impure.\""
    },
    {
      "question": "8. Why Down’s cell is preferable method for the preparation of sodium on large scale?",
      "answer": "According to Chapter 2, page 22 (Commercial Preparation of Sodium by Down's Cell), the Down's cell process has the following advantages, making it preferable:\n(a) \"The metallic fog is not produced.\"\n(b) \"Liquid sodium can easily be collected at 600°C.\"\n(c) \"Material of the cell is not attacked by the products formed during the electrolysis.\""
    },
    {
      "question": "9. Give formula of (i). Dolomite (ii.) Asbestos",
      "answer": "(i) Dolomite: MgCO₃.CaCO₃ (From Chapter 2, page 7, Table 2.4).\n(ii) Asbestos: CaMg₃(SiO₃)₄ (From Chapter 2, page 7, Table 2.4)."
    },
    {
      "question": "10. What reaction occur when (i). Lithium carbonate is heated (ii). Sodium bicarbonate is heated",
      "answer": "(i) Lithium carbonate is heated: According to Chapter 2, page 9 (point 11) and page 19, lithium carbonate decomposes upon heating to give lithium oxide and carbon dioxide. The equation is: Li₂CO₃(s) → Li₂O(s) + CO₂(g).\n(ii) Sodium bicarbonate is heated: Chapter 2 (page 31, Q1 (ix) in exercises) indicates that metallic bicarbonates decompose on heating into their carbonates, along with water and carbon dioxide. Thus, for sodium bicarbonate, the reaction is: 2NaHCO₃(s) → Na₂CO₃(s) + H₂O(g) + CO₂(g)."
    }
,
    {
      "question": "1. Write four uses of Borax.",
      "answer": "According to Chapter 3, page 9 (Uses of Borax):\n1.  \"It is used to prepare borate glass, which is heat resistant.\"\n2.  \"It is used in softening of water.\"\n3.  \"It is employed in borax bead test, for the detection of metallic cations.\"\n4.  \"It is used in metallurgical operations.\" (Other uses mentioned include: as a flux in welding, in making washing powders, in leather industry for tanning and dyeing, in cosmetics, soaps, textiles, paints, medicine, match industry, and as a preservative.)"
    },
    {
      "question": "2. What is borax bead test?",
      "answer": "According to Chapter 3, page 8 (Section 6. Borax Bead Test): \"Prepare a loop at the end of a platinum wire. Heat the wire and take a little powdered borax on the hot loop. Heat again, borax first swells up and then melts into colourless, glasslike bead on the loop. Now put a few grains of the substance, under examination, on the beads and re-heat it first in the oxidizing flame and then in the reducing flame.\" \nThe Chemistry of the Borax-bead Test (Chapter 3, pages 8-9) explains: \"Borax, when fused, is decomposed into sodium metaborate and boric anhydride. (Na₂B₄O₇ → 2NaBO₂ + B₂O₃). The metallic oxide formed from the substance, under examination, combines with B₂O₃ giving the coloured metallic borates. With cupric oxide, the beads are coloured blue in the oxidizing flame because cupric borates are blue in colour. (CuO + B₂O₃ → Cu(BO₂)₂).\""
    },
    {
      "question": "3. How is Borax used as a water softening agent?",
      "answer": "Chapter 3, page 9, under 'Uses of Borax', states: \"It is used in softening of water.\"\n(The provided text in Chapter 3 does **not** explain *how* borax acts as a water softening agent. The following explanation is from general chemical knowledge.) Borax (sodium tetraborate, Na₂B₄O₇) softens water by reacting with dissolved calcium (Ca²⁺) and magnesium (Mg²⁺) ions, which are responsible for water hardness. Borax precipitates these ions as insoluble calcium borate and magnesium borate, effectively removing them from the solution. For example: Na₂B₄O₇ + Ca²⁺ → CaB₄O₇(s) + 2Na⁺. Additionally, the hydrolysis of borax produces a slightly alkaline solution, which can also help in precipitating some hardness-causing ions as hydroxides."
    },
    {
      "question": "4. Why are borate glazes preferred over silicate glazes?",
      "answer": "According to Chapter 3, page 12 (Uses of Boric Acid, which is related to borates): \"It is used in pottery as a glaze because borate glazes are more fusible than silicate glazes and possess a higher coefficient of expansion.\""
    },
    {
      "question": "5. Give any four uses of aluminium in our daily life.",
      "answer": "According to Chapter 3, page 14 (USES of Aluminium):\n1.  \"It is very-light (nearly three times less dense than iron) but posseses high tensile strength. These properties account for its extensive use in the transport industries, in the construction of aircrafts, ships and cars.\"\n2.  \"It is an excellent conductor of both electricity and heat. Thus, it is used as heat exchanger in chemical, oil and other industries. Heavy duty electrical cables are made of aluminium metal.\"\n3.  \"Aluminium foil is also used to jam radar.\" (And for insulating buildings, implying uses beyond just daily life but foil is a daily item).\n4.  \"At homes, aluminium is found in the form of cooking utensils, window frames and kitchen foil.\"\n(Other uses include: non-toxic and used for food/brewing equipment and packaging, forms alloys, making petrol/milk storage tanks)."
    },
    {
      "question": "6. Give two similarities between carbon and silicon.",
      "answer": "According to Chapter 3, page 16 (discussion of Group IVA elements):\n1.  \"Carbon and silicon both form acidic oxides\".\n2.  \"Both carbon and silicon form covalent bonds. Their oxides are acidic and both form hydrides and chlorides.\"\n(The text on page 17 further lists common properties: \"All the elements of this group show a valency of four. All of them form hydrides, MH₄. They form tetrachlorides, MCl₄. They also form the dioxides, MO₂.\" Carbon and silicon fit these general properties.)"
    },
    {
      "question": "7. Give reaction of P2O5 with cold and hot water",
      "answer": "(This information is **not found in Chapter 3**, which covers Group IIIA and Group IVA elements. Phosphorus (P) and its oxides are Group VA elements, discussed in Chapter 4 of the provided text series.)\nAccording to Chapter 4, pages 23-24:\nWith cold water: Phosphorus pentoxide (P₂O₅ or P₄O₁₀) forms metaphosphoric acid. P₂O₅(s) + H₂O(l) [cold] → 2HPO₃(aq)\nWith hot water: It forms orthophosphoric acid. P₂O₅(s) + 3H₂O(l) [hot] → 2H₃PO₄(aq)"
    },
    {
      "question": "8. The aqueous solution of borax is alkaline. Give reason.",
      "answer": "According to Chapter 3, page 7 (Properties of Borax): \"Its aqueous solution is alkaline in nature due to hydrolysis. Na₂B₄O₇ + 7H₂O ⇌ 2NaOH + 4H₃BO₃\".\nThe text further explains on page 8: \"So, a strong alkali (NaOH) is formed which is highly ionized. On the other hand, boric acid (H₃BO₃) is ionized to a little extent, because it is a weak acid. Hence, solution of borax as a whole is alkaline in nature.\" The hydrolysis of the tetraborate ion itself can be written as: B₄O₇²⁻(aq) + 7H₂O(l) ⇌ 4H₃BO₃(aq) + 2OH⁻(aq), showing the production of hydroxide ions which causes alkalinity."
    },
    {
      "question": "9. What is carbonization?",
      "answer": "(The term 'carbonization' is **not explicitly defined in Chapter 3**. While Chapter 3 discusses carbon, its allotropes, and compounds, a formal definition of 'carbonization' is not provided. The following answer is based on general chemical knowledge.)\nCarbonization is a thermochemical process of converting organic substances into carbon or a carbon-containing residue through pyrolysis or destructive distillation. It involves heating the material to high temperatures in an inert atmosphere or in the absence (or limited supply) of air, which drives off volatile components like water, methane, and other hydrocarbons, leaving behind a carbon-rich solid (char, coke, or charcoal)."
    },
    {
      "question": "10. Explain the structure of CO2.",
      "answer": "According to Chapter 3, page 19 (Structure of the Carbon Dioxide): \"Carbon dioxide exists in the gaseous state as linear molecules. The observed C-O bond distance is 115 pm and is in agreement with the Structure shown [referring to implied O=C=O]. Solid CO₂ has a face-centered cubic structure. Being linear its dipole moment is zero.\"\nThe linearity implies that the carbon atom is sp hybridized and forms two sigma bonds and two pi bonds with the two oxygen atoms, resulting in a double bond to each oxygen (O=C=O)."
    },
    {
      "question": "11. Write two uses of sodium silicate.",
      "answer": "According to Chapter 3, page 22 (Uses of Sodium Silicate):\n1.  \"It is used as a filler for soap in soap industry.\"\n2.  \"It is used in textile as a fire proof.\" (Other uses mentioned: furniture polish, calico printing.)"
    },
    {
      "question": "12. How borax can be prepared from colemanite? Give equation",
      "answer": "According to Chapter 3, page 6 (Manufacture of Borax, point 2): \"Now-a-days borax is almost exclusively obtained from calcium borate. Finely powdered colemanite is boiled with Na₂CO₃ solution, when CaCO₃ precipitates out and a mixture of borax and sodium metaborate is formed.\"\nEquation from the text: Ca₂B₆O₁₁(s) [Colemanite] + 2Na₂CO₃(s) → 2CaCO₃(s) + Na₂B₄O₇(s) [Borax] + 2NaBO₂(s)"
    },
    {
      "question": "13. Write names and formulas of oxyacids of nitrogen.",
      "answer": "(This information is **not found in Chapter 3**, which covers Group IIIA and Group IVA elements. Nitrogen (N) and its oxyacids are Group VA elements, discussed in Chapter 4 of the provided text series.)\nAccording to Chapter 4, page 10:\n\"There are two important oxyacids of nitrogen, nitrous acid and nitric acid.\"\n1.  Nitrous Acid: HNO₂\n2.  Nitric Acid: HNO₃"
    }
  ,
    {
      "question": "How does nitrogen differ from other elements of its group?",
      "answer": "Nitrogen differs from other elements of its group (Group VA) in several ways:\n1.  **Physical State:** Nitrogen is a colorless gas at room temperature, while phosphorus is a solid, and arsenic, antimony, and bismuth are metallic solids.\n2.  **Electronegativity and Metallic Character:** Nitrogen is the most electronegative element in the group and has the greatest tendency to attract electrons. The metallic character increases down the group, with bismuth showing definite metallic properties, while nitrogen and phosphorus are typical non-metals.\n3.  **Availability of d-orbitals:** Phosphorus and other heavier members of the group can use d-orbitals in their bonding, allowing them to exhibit valencies like +5 by promoting an s-electron to a d-orbital. Nitrogen, being in the second period, lacks available d-orbitals in its valence shell and thus cannot expand its octet in the same way.\n4.  **Occurrence:** Nitrogen is present in its free state as a major constituent of air (78% by volume) and is relatively inactive. Inorganic compounds of nitrogen are not commonly found as minerals. In contrast, phosphorus does not occur in a free state in nature and is found in deposits of phosphate rock. (This information is from Chapter 4, referencing Table 4.1, Section 4.1.1, Section 4.2.1, and Section 4.3.1)."
    },
    {
      "question": "Why does aqua regia dissolve gold and platinum?",
      "answer": "Aqua regia, a mixture of one volume of concentrated HNO₃ and three volumes of concentrated HCl, dissolves noble metals like gold and platinum due to the formation of nitrosyl chloride (NOCl) and nascent chlorine, or Cl₂. The reactions are:\n\nHNO₃(conc.) + 3HCl(conc.) → NOCl(aq) + Cl₂(g) + 2H₂O(l)\n\nThe NOCl formed can further decompose:\nNOCl(g) → NO(g) + [Cl](g) (nascent chlorine)\n\nThis liberated chlorine (either Cl₂ or nascent [Cl]) is highly reactive and converts noble metals like gold and platinum into their water-soluble chlorides.\nFor example, with gold:\nAu(s) + 3[Cl](aq) → AuCl₃(aq)\n(This information is from Chapter 4, Page 18, Section 4.2.3, Point 5)."
    },
    {
      "question": "Why the elements of group VIA other than oxygen show more than two oxidation states?",
      "answer": "Elements of Group VIA, other than oxygen, show more than two oxidation states (specifically +2, +4, and +6) because they can utilize their vacant d-orbitals for bonding. \n- The +2 oxidation state is shown due to the two unpaired electrons in their p-orbitals.\n- The +4 oxidation state is exhibited when one electron from a p-orbital is promoted to an available d-orbital, resulting in four unpaired electrons.\n- The +6 oxidation state is shown when another electron, this time from the s-orbital, is also promoted to a d-orbital, leading to six unpaired electrons available for bonding.\nOxygen, being in the second period, does not have d-orbitals in its valence shell and is thus generally restricted to an oxidation state of -2 (except in peroxides, superoxides, or when bonded to fluorine). (This information is from Chapter 4, Page 28, Section 4.4.1)."
    },
    {
      "question": "Write down a comparison of the properties of oxygen and sulphur.",
      "answer": "Oxygen and sulphur, both in Group VIA, show similarities and dissimilarities:\n\n**Similarities:**\n1.  Both have the same outer electronic configuration (ns²np⁴).\n2.  Both are usually divalent.\n3.  Both exhibit allotropic forms (Oxygen: O₂, O₃; Sulphur: α, β, γ forms).\n4.  Both can form polyatomic molecules (O₂; Sulphur: S₂, S₈).\n5.  Both combine with metals forming O⁻² and S⁻² ions (oxidation state -2).\n6.  Both combine with non-metals to form covalent compounds (e.g., H₂O and H₂S; CO₂ and CS₂).\n7.  Both are typical non-metals.\n8.  Both are found in free and combined states in nature.\n\n**Dissimilarities:**\n| Property                       | Oxygen                                                                    | Sulphur                                                                                              |\n|--------------------------------|---------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|\n| Allotropic Forms               | Two (O₂ and O₃).                                                          | Three (rhombic, monoclinic, and plastic).                                                            |\n| Physical State (ordinary temp.)| Gas.                                                                      | Solid.                                                                                               |\n| Solubility in Water            | Sparingly soluble.                                                        | Not soluble.                                                                                         |\n| Combustion                     | Helps in combustion.                                                      | Is itself combustible.                                                                               |\n| Magnetic Nature                | Paramagnetic.                                                             | Diamagnetic.                                                                                         |\n| Reaction with Water            | Does not react.                                                           | When steam is passed through boiling sulphur, a little H₂S and SO₂ are formed.                       |\n| Reaction with Acids            | Does not react.                                                           | Readily oxidized by concentrated H₂SO₄ or HNO₃.                                                        |\n| Reaction with Alkalies         | Does not react.                                                           | Reacts with alkali solution to form sulphides and thiosulphates.                                     |\n| Oxidation States               | Generally -2.                                                             | Shows -2, +2, +4, and +6.                                                                            |\n(This information is from Chapter 4, Page 28-29, Section 4.4.3)."
    },
    {
      "question": "Write down the equation for the reaction between conc. H2SO4 and copper and explain what type of reaction is it.",
      "answer": "The reaction between hot concentrated sulphuric acid (H₂SO₄) and copper (Cu) is:\n\nCu(s) + 2H₂SO₄(conc.) → CuSO₄(aq) + 2H₂O(l) + SO₂(g)\n\n**Explanation of the reaction type:**\nThis is a **redox reaction** (oxidation-reduction reaction).\n-   **Oxidation:** Copper (Cu) is oxidized. Its oxidation state changes from 0 in elemental Cu to +2 in CuSO₄.\n-   **Reduction:** Sulphuric acid (H₂SO₄) is reduced. The oxidation state of sulphur changes from +6 in H₂SO₄ to +4 in sulphur dioxide (SO₂).\nIn this reaction, concentrated sulphuric acid acts as an **oxidizing agent**.\n(This information is from Chapter 4, Page 35, Section 4.5.2, Point 3 (iv) (c) and Point 5)."
    }
  

    ,
        {
          "question": "What is “Iodized Salt”?",
          "answer": "Iodized salt is common salt (sodium chloride) to which sodium or potassium iodide has been added. This is done to ensure the presence of iodide ion in the diet, as insufficient iodide can lead to an enlargement of the thyroid gland (Goiter). (This information is from Chapter 5, Page 21, Section 5.6)."
        },
        {
          "question": "What are Freons and Teflon?",
          "answer": "Freons and Teflon are compounds prepared using fluorine:\n-   **Freons:** Freon is the commercial name for low molecular mass fluorochlorocarbons, such as CCl₂F₂ and CClF₃. They are used as refrigerants and aerosol propellants. (This information is from Chapter 5, Page 20, Section 5.6).\n-   **Teflon:** Teflon is a polymerized tetrafluoroethylene compound, with the general formula (-CF₂— CF₂-)n. It is a valuable plastic that resists the action of oxidants, acids, and alkalies. It is used for making corrosion-proof parts of machinery, for coating electrical wiring, and as a non-stick coating for cooking pans. (This information is from Chapter 5, Page 20, Section 5.6)."
        },
        {
          "question": "Arrange the following ions in order of increasing size: F-, Cl-, I-, Br-",
          "answer": "The order of increasing ionic size for the given halide ions is: F⁻ < Cl⁻ < Br⁻ < I⁻.\nThis is based on their ionic radii (pm) values provided in the textbook: F⁻ (136 pm), Cl⁻ (181 pm), Br⁻ (196 pm), I⁻ (216 pm). (This information is from Chapter 5, Table 5.1, Page 4)."
        },
        {
          "question": "Why iodine has metallic luster?",
          "answer": "The textbook states that iodine is a \"metallic-appearing shiny greyish black solid\" (Chapter 5, Page 2, Section 5.1), which indicates it has metallic luster. The textbook does not explicitly detail the reason for this luster. \n\n(Information not explicitly from the textbook, but a general chemical explanation): The metallic luster of iodine is attributed to its ability to absorb light over a wide range of wavelengths and re-emit it, similar to metals. This is due to the relatively large size of iodine atoms and the delocalization or ease of excitation of its outermost electrons. In solid iodine, the molecules are packed in a layered lattice, and the interactions between these layers allow for some electron mobility, which contributes to its shiny appearance and electrical conductivity (though it's a semiconductor, not a full metallic conductor)."
        },
        {
          "question": "Which halogen sublimes to violet vapours?",
          "answer": "Iodine is the halogen that sublimes to produce violet vapors. While this specific property is not explicitly stated in the main descriptive text of Chapter 5, it is a well-known characteristic of iodine, and its relevance to the chapter is indicated by an exercise question (Q.13 v) asking this very point. (This information is based on common chemical knowledge related to the content of Chapter 5)."
        },
        {
          "question": "Which halogen is used as an antiseptic?",
          "answer": "Iodine is used as an antiseptic. The textbook mentions that its major applications are in the pharmaceutical industry, and it is used as a disinfectant and germicide. Tincture of iodine is a popular preparation. (This information is from Chapter 5, Page 21, Section 5.6 and implied by Q.13 (vi) on Page 30)."
        },
        {
          "question": "Which halogen is used in water treatment to kill bacteria ?",
          "answer": "Chlorine is used in water treatment to kill bacteria. It is used as a disinfectant in swimming pools and water treatment plants. (This information is from Chapter 5, Page 20, Section 5.6 and implied by Q.13 (vii) on Page 30)."
        },
        {
          "question": "Name the gas, which is used for earthquake prediction.",
          "answer": "Radon is the noble gas used for earthquake prediction. (This information is from Chapter 5, Page 27, Section 5.7.6, Point 10 and Q.13 (viii) on Page 30)."
        },
        {
          "question": "Name the gas, which is used in bactericidal lamps.",
          "answer": "Xenon is the noble gas used in bactericidal lamps. (This information is from Chapter 5, Page 27, Section 5.7.6, Point 9 and Q.13 (ix) on Page 30)."
        }
      ,

      
        {
          "question": "(Chapter 7) 1. What is meant by organic chemistry?",
          "answer": "According to the modern definition provided in the text, organic chemistry is that branch of chemistry which deals with the study of compounds of carbon and hydrogen (hydrocarbons) and their derivatives. (from Chapter 7, Section 7.1.1)"
        },
        {
          "question": "(Chapter 7) 2. What are homocyclic and heterocyclic compounds? Give examples.",
          "answer": "-   **Homocyclic or Carbocyclic Compounds:** These are cyclic compounds in which the ring consists of only carbon atoms. Example: Benzene or Cyclohexane.\n-   **Heterocyclic Compounds:** These are cyclic compounds in which the ring consists of atoms of more than one kind, typically carbon along with elements like nitrogen (N), oxygen (O), or sulphur (S). Example: Pyridine.\n(from Chapter 7, Section 7.7 (2))"
        },
        {
          "question": "(Chapter 7) 3. Why is ethene an important industrial element? (Also asked as Q.12)",
          "answer": "The text states that cracking of petroleum produces large amounts of useful by-products, including ethene. These by-products (ethene being one of them) are used for manufacturing drugs, plastics, detergents, synthetic fibres, fertilizers, weed killers and important chemicals like ethanol, phenol and acetone. This indicates its importance as a starting material in various industrial processes. (from Chapter 7, Section 7.5, paragraph 3)"
        },
        {
          "question": "(Chapter 7) 4. Define isomers. Write the names of its four types.",
          "answer": "Isomers are two or more compounds having the same molecular formula but different structural formulas and properties. The phenomenon is called isomerism.\nThe text mentions five types of structural isomerism (not four):\n1.  Chain Isomerism\n2.  Position Isomerism\n3.  Functional Group Isomerism\n4.  Metamerism\n5.  Tautomerism\nIt also discusses Cis-trans (Geometric) Isomerism separately.\n(from Chapter 7, Section 7.10 and 7.10.1)"
        },
        {
          "question": "(Chapter 7) 5. What is meant by a functional group? Name typical functional groups containing oxygen.",
          "answer": "A functional group is an atom or a group of atoms or a double bond or a triple bond whose presence imparts specific properties to organic compounds; they are the chemically functional parts of molecules.\nTypical functional groups containing oxygen include:\n-   Hydroxyl group (-OH) in Alcohols/Phenols\n-   Ether linkage (-O-) in Ethers\n-   Formyl group (-CHO) in Aldehydes\n-   Carbonyl group (>C=O) in Ketones\n-   Carboxyl group (-COOH) in Carboxylic acids\n-   Ester group (-COOR) in Esters\n(from Chapter 7, Section 7.8 and Table 7.2)"
        },
        {
          "question": "(Chapter 7) 6. Define thermal cracking and steam cracking.",
          "answer": "-   **Thermal Cracking:** Breaking down of large molecules by heating at high temperature and pressure.\n-   **Steam Cracking:** A process where higher hydrocarbons in the vapour phase are mixed with steam, heated for a short duration to about 900°C, and cooled rapidly.\n(from Chapter 7, Section 7.5)"
        },
        {
          "question": "(Chapter 7) 7. What is meant by catenation? Give examples.",
          "answer": "Catenation is the self-linking property of an element, where atoms link with other atoms of the same element to form long chains or rings. Carbon shows this property uniquely and extensively, forming the basis for the large number of organic compounds. Examples include the carbon chains in n-butane (CH₃-CH₂-CH₂-CH₃) or the ring in cyclohexane. (from Chapter 7, Section 7.2 (1))"
        },
        {
          "question": "(Chapter 7) 8. What is meant by cis-trans isomerism?",
          "answer": "Cis-trans isomerism (or geometric isomerism) is a type of isomerism that arises due to restricted rotation around a carbon-carbon double bond. Compounds which possess the same structural formula but differ with respect to the positions of the identical groups in space are called cis-trans isomers. In the cis-form, similar groups lie on the same side of the double bond, while in the trans-form, they lie on opposite sides. (from Chapter 7, Section 7.10.1 (2))"
        },
        {
          "question": "(Chapter 7) 9. Define tautomerism and give example.",
          "answer": "Tautomerism is a type of isomerism that arises due to the shifting of a proton from one atom to another in the same molecule. (from Chapter 7, Section 7.10.1 (v)). An example is not provided in the text for this specific type."
        },
        {
          "question": "(Chapter 7) 10. Define alicyclic and aromatic compounds.",
          "answer": "-   **Alicyclic Compounds:** These are homocyclic compounds which contain a ring of three or more carbon atoms and resemble aliphatic compounds.\n-   **Aromatic Compounds:** These are carbocyclic compounds that contain at least one benzene ring (six carbon atoms with three alternate double and single bonds).\n(from Chapter 7, Section 7.7 (a))"
        },
        {
          "question": "(Chapter 7) 11. What is petroleum? Give its origin.",
          "answer": "Petroleum, also called mineral oil when refined, is a liquid of blackish colour known as crude oil when extracted. It is thought to have been formed by the slow chemical and biochemical decomposition of the remains of organic matters found between sedimentary rocks. (from Chapter 7, Section 7.4, Petroleum section)"
        },
        {
          "question": "(Chapter 7) 12. Why is ethene an important industrial chemical? (Duplicate of Q.3)",
          "answer": "The text states that cracking of petroleum produces large amounts of useful by-products, including ethene. These by-products (ethene being one of them) are used for manufacturing drugs, plastics, detergents, synthetic fibres, fertilizers, weed killers and important chemicals like ethanol, phenol and acetone. This indicates its importance as a starting material in various industrial processes. (from Chapter 7, Section 7.5, paragraph 3)"
        },
        {
          "question": "(Chapter 7) 13. What is coal tar? Give its fractions.",
          "answer": "Coal tar is one of the products obtained when coal is subjected to destructive distillation (heated in the absence of air). It contains a large number of organic compounds which separate out on fractional distillation. The specific fractions obtained from coal tar distillation are not listed in the provided text of Chapter 7. (from Chapter 7, Section 7.4, Coal section)"
        },
        {
          "question": "(Chapter 7) 14. How will you define octane number? How it can be improved?",
          "answer": "The quality of a fuel (like gasoline) is indicated by its octane number. It relates to how smoothly the fuel burns in an engine. Isooctane (2,2,4-trimethyl pentane) burns very smoothly and is arbitrarily given an octane number of 100. Fuels with low octane numbers (like straight-chain hydrocarbons) cause knocking.\nThe octane number can be improved by:\n1.  **Reforming:** Converting straight-chain hydrocarbons into branched-chain ones by heating in the absence of oxygen and presence of a catalyst.\n2.  **Adding Additives:** Blending the fuel with a small amount of an additive like tetraethyl lead (TEL), although TEL causes lead pollution.\n(from Chapter 7, Section 7.6)"
        },
        {
          "question": "(Chapter 7) 15. What is iodized salt?",
          "answer": "This answer is not found in the provided textbook text for Chapter 7. (It is found in Chapter 5)."
        },
        {
          "question": "(Chapter 7) 16. Write the structural formula of two possible isomers of C4H10.",
          "answer": "The two possible isomers of C₄H₁₀ (butane) are:\n1.  **n-Butane:** CH₃ — CH₂ — CH₂ — CH₃\n2.  **Isobutane:** CH₃—CH(CH₃)—CH₃\n(from Chapter 7, Section 7.10)"
        },
        {
          "question": "(Chapter 7) 17. Describe important sources of organic compounds.",
          "answer": "The important sources of organic compounds described are fossil fuels:\n1.  **Coal:** Formed from ancient plant remains. Destructive distillation yields coke, coal gas, and coal tar (a source of many organic compounds).\n2.  **Natural Gas:** Primarily methane, formed from organic matter decomposition. Used as fuel and in fertilizer/cement industries.\n3.  **Petroleum (Mineral Oil):** Formed from decomposition of organic matter in sedimentary rocks. Refined via fractional distillation into fractions like gasoline, kerosene, etc., which are sources of various organic compounds.\n(from Chapter 7, Section 7.4)"
        },
        {
          "question": "(Chapter 7) 18. What is catalytic cracking",
          "answer": "Catalytic cracking is a process where higher hydrocarbons are cracked (broken down into smaller, lower-boiling hydrocarbons) at a lower temperature (around 500°C) and lower pressure (around 2 atm) in the presence of a suitable catalyst, typically a mixture of silica (SiO₂) and alumina (Al₂O₃). This method is used for obtaining better quality gasoline with a higher octane number. (from Chapter 7, Section 7.5 (2))"
        },
        {
          "question": "(Chapter 8) 1. How do you distinguish between ethane and ethyne?",
          "answer": "Ethane (an alkane) and ethyne (an alkyne) can be distinguished using chemical tests that react with the triple bond in ethyne but not the single bonds in ethane:\n1.  **Reaction with Ammoniacal Silver Nitrate (Tollen's Reagent for Alkynes):** Ethyne reacts with ammoniacal silver nitrate to form a white precipitate of disilver acetylide. Ethane does not react.\n    HC≡CH + 2AgNO₃ + 2NH₄OH → AgC≡CAg↓ + 2NH₄NO₃ + 2H₂O\n2.  **Reaction with Ammoniacal Cuprous Chloride:** Ethyne reacts with ammoniacal cuprous chloride to form a reddish-brown precipitate of dicopper acetylide. Ethane does not react.\n    HC≡CH + Cu₂Cl₂ + 2NH₄OH → CuC≡CCu↓ + 2NH₄Cl + 2H₂O\n3.  **Reaction with Baeyer's Reagent (Cold Alkaline KMnO₄):** Ethyne decolorizes the pink/purple KMnO₄ solution (though the reaction is complex, oxidation occurs). Ethane does not react under these mild conditions.\n(Based on reactions in Chapter 8, Section 8.5.4 D and lack of reactivity of alkanes Section 8.3.3)"
        },
        {
          "question": "(Chapter 8) 2. Why the π bond is more reactive than σ bond?",
          "answer": "In the formation of a π-bond, the partially filled p-orbitals overlap in a parallel fashion. The probability of finding the π-electrons is away from the line joining the two nuclei. Because of this, π-electrons are less firmly held between the nuclei compared to σ-electrons (where electron density is concentrated between the nuclei). A π-bond is, therefore, weaker than a σ-bond and breaks more easily during reactions. Furthermore, the loosely held and more exposed π-electrons are readily available for attack by electrophilic reagents, making compounds with π-bonds (like alkenes and alkynes) more reactive than those with only σ-bonds (like alkanes). (from Chapter 8, Section 8.4.3 and 8.3.3)"
        },
        {
          "question": "(Chapter 8) 3. Convert 1-butene to 1-butyne.",
          "answer": "The direct conversion of 1-butene to 1-butyne is not described in a single step in the text. It typically involves multiple steps:\n1.  **Halogenation:** Add Br₂ to 1-butene to form 1,2-dibromobutane.\n    CH₂=CH-CH₂-CH₃ + Br₂ → CH₂(Br)-CH(Br)-CH₂-CH₃\n2.  **Double Dehydrohalogenation:** Treat 1,2-dibromobutane with a strong base like alcoholic KOH (first step, may yield bromobutene) followed by a stronger base like sodamide (NaNH₂) to eliminate two molecules of HBr and form the triple bond of 1-butyne.\n    CH₂(Br)-CH(Br)-CH₂-CH₃ + 2KOH (alc.) → HC≡C-CH₂-CH₃ + 2KBr + 2H₂O (Simplified - NaNH₂ is often required for terminal alkyne formation)\n(This answer outlines a plausible route based on reactions covered in Chapter 8, like dehydrohalogenation in Section 8.5.1, but the specific conversion isn't explicitly given)."
        },
        {
          "question": "(Chapter 8) 4. Give fours uses of methane.",
          "answer": "Four uses of methane are:\n1.  As a fuel and as an illuminating gas.\n2.  For the preparation of methyl chloride, dichloromethane, chloroform, and carbon tetrachloride.\n3.  For the industrial preparation of methyl alcohol, formaldehyde, and hydrogen cyanide.\n4.  For the preparation of carbon black (used in paints, printing inks, automobile tires).\n(An additional use mentioned is manufacturing urea fertilizer).\n(from Chapter 8, Section 8.3.5)"
        },
        {
          "question": "(Chapter 8) 5. Synthesize i.benzene ii. Oxalic acid from ethyne.",
          "answer": "i. **Benzene from Ethyne:** When ethyne (acetylene) is passed through a copper tube heated to 300°C, it polymerizes to form benzene.\n   3HC≡CH ---(Cu tube, 300°C)--> C₆H₆\nii. **Oxalic Acid from Ethyne:** The text describes the oxidation of ethyne with strong alkaline KMnO₄ to give glyoxal (OHC-CHO). Further oxidation of glyoxal would yield oxalic acid (HOOC-COOH), although this second step is not explicitly shown in the text.\n   HC≡CH + [O] (from alk. KMnO₄) → OHC-CHO (Glyoxal)\n   OHC-CHO + [O] → HOOC-COOH (Oxalic Acid) (This second oxidation step is implied but not explicitly stated).\n(from Chapter 8, Section 8.5.4 C2 and 8.5.4 B1)"
        },
        {
          "question": "(Chapter 8) 6. Convert ethene into ethylalcohol? (Also asked as Q14)",
          "answer": "Ethene can be converted into ethyl alcohol (ethanol) by hydration. This involves treating ethene with cold concentrated sulphuric acid to form ethyl hydrogen sulphate, which is then boiled with water.\n   CH₂=CH₂ + H₂SO₄(conc.) → CH₃-CH₂-OSO₃H (Ethyl hydrogen sulphate)\n   CH₃-CH₂-OSO₃H + H₂O --(Boil)--> CH₃-CH₂-OH + H₂SO₄\n(from Chapter 8, Section 8.4.4 A3)"
        },
        {
          "question": "(Chapter 8) 7. What is Markonikov’s rule?",
          "answer": "Markownikov’s Rule states that in the addition of an unsymmetrical reagent to an unsymmetrical alkene, the negative part of the adding reagent goes to that carbon atom of the double bond which has the least number of hydrogen atoms attached to it. (from Chapter 8, Section 8.4.4 A2)"
        },
        {
          "question": "(Chapter 8) 8. Write a note on acidity of ethene?",
          "answer": "The provided text for Chapter 8 does not discuss the acidity of ethene. It focuses on the acidity of ethyne (and terminal alkynes) due to the sp hybridization of the carbon atoms involved in the triple bond, which increases their electronegativity and makes the attached hydrogen slightly acidic. Ethene involves sp² hybridized carbons, which are less electronegative than sp hybridized carbons, and the C-H bonds in ethene are not considered acidic under normal conditions."
        },
        {
          "question": "(Chapter 8) 9. Convert methane into formic acid.",
          "answer": "Methane can be converted to formic acid via catalytic oxidation. When methane is oxidized in the presence of a copper catalyst at 400°C and 200 atm pressure, it first forms methyl alcohol, then formaldehyde, and finally formic acid (which can be further oxidized to CO₂ and H₂O).\n   CH₄ + [O] --(Cu, 400°C, 200atm)--> CH₃OH\n   CH₃OH + [O] --(Cu, 400°C, 200atm)--> HCHO + H₂O\n   HCHO + [O] --(Cu, 400°C, 200atm)--> HCOOH (Formic acid)\n(from Chapter 8, Section 8.3.4 (ii))"
        },
        {
          "question": "(Chapter 8) 10. What is Raney-Nickel? Give its uses.",
          "answer": "Raney Nickel is a catalyst prepared by treating a Nickel-Aluminium (Ni-Al) alloy with caustic soda (NaOH). The reaction is:\n   Ni-Al + NaOH + H₂O → Ni + NaAlO₂ + 3/2 H₂\nIt is used as a catalyst for the hydrogenation of alkenes to alkanes, typically carried out at about 100°C and up to 3 atmospheres pressure. It is also used industrially for the hydrogenation of vegetable oils to produce vegetable ghee. (from Chapter 8, Section 8.4.4 A1)"
        },
        {
          "question": "(Chapter 8) 11. Alkanes are less reactive than alkenes. Comment.",
          "answer": "Alkanes are less reactive than alkenes primarily due to the nature of their bonding. Alkanes contain only strong sigma (σ) bonds (C-C and C-H). The electrons in these σ-bonds are tightly held between the nuclei and are not readily available for attack by electrophilic or nucleophilic reagents, making the σ-bond inert under normal conditions. Alkenes, in addition to σ-bonds, contain a pi (π) bond. The π-electrons are located above and below the plane of the nuclei, are less firmly held, and more exposed. This makes the π-bond weaker and more susceptible to attack by electrophilic reagents, leading to the characteristic addition reactions of alkenes. Therefore, the presence of the reactive π-bond makes alkenes significantly more reactive than alkanes. (from Chapter 8, Sections 8.3.3 and 8.4.3)"
        },
        {
          "question": "(Chapter 8) 12. Convert ethyne into acetaldehyde.",
          "answer": "Ethyne (acetylene) can be converted into ethanal (acetaldehyde) by the addition of water in the presence of mercuric sulphate (HgSO₄) dissolved in sulphuric acid (H₂SO₄) at 75°C.\n   HC≡CH + HOH --(HgSO₄/H₂SO₄, 75°C)--> [CH₂=CHOH] (Vinyl alcohol) → CH₃CHO (Acetaldehyde)\nThe initial product, vinyl alcohol, is unstable and immediately isomerizes (tautomerizes) to the more stable acetaldehyde. (from Chapter 8, Section 8.5.4 A4)"
        },
        {
          "question": "(Chapter 8) 13. How cis and trans alkenes are produced? Give reactions.",
          "answer": "Cis and trans alkenes can be produced by the partial hydrogenation of alkynes, using different conditions:\n1.  **Cis-Alkene Production:** Controlled hydrogenation of an alkyne using hydrogen gas with Lindlar's catalyst (finely divided palladium supported on BaSO₄, poisoned with quinoline) yields a cis-alkene.\n    R-C≡C-R + H₂ --(Lindlar's Catalyst)--> R-CH=CH-R (cis)\n2.  **Trans-Alkene Production:** Treating an alkyne with sodium (Na) in liquid ammonia (NH₃) at -33°C yields a trans-alkene.\n    R-C≡C-R + 2Na + 2NH₃ --(liq. NH₃, -33°C)--> R-CH=CH-R (trans) + 2NaNH₂\n(from Chapter 8, Section 8.4.1 (5))"
        },
        {
          "question": "(Chapter 8) 14. Convert ethene into ethylalcohol? (Duplicate of Q6)",
          "answer": "Ethene can be converted into ethyl alcohol (ethanol) by hydration. This involves treating ethene with cold concentrated sulphuric acid to form ethyl hydrogen sulphate, which is then boiled with water.\n   CH₂=CH₂ + H₂SO₄(conc.) → CH₃-CH₂-OSO₃H (Ethyl hydrogen sulphate)\n   CH₃-CH₂-OSO₃H + H₂O --(Boil)--> CH₃-CH₂-OH + H₂SO₄\n(from Chapter 8, Section 8.4.4 A3)"
        },
        {
          "question": "(Chapter 8) 15. What is hydrogenolysis?",
          "answer": "Hydrogenolysis is a process where alkanes are prepared from alkyl halides using palladium-charcoal as a catalyst. It involves hydrogenation (addition of H₂) accompanied by bond cleavage (breaking the C-X bond).\n   R-X + H₂ --(Pd/C, Δ)--> R-H + HX\n(from Chapter 8, Section 8.3.1 (2))"
        },
        {
          "question": "(Chapter 8) 16. What is Baeyer’s Test? Give its uses",
          "answer": "Baeyer's Test involves treating a compound with a mild oxidizing agent, typically cold, dilute (1%), alkaline potassium permanganate (KMnO₄) solution (also known as Baeyer's Reagent). \n*Reaction with Alkenes:* Alkenes react with Baeyer's reagent undergoing hydroxylation (addition of -OH groups across the double bond) to form vicinal glycols (1,2-diols). During this reaction, the pink/purple colour of the KMnO₄ solution is discharged, and often a brown precipitate of MnO₂ is formed.\n   3CH₂=CH₂ + 2KMnO₄ + 4H₂O → 3CH₂(OH)-CH₂(OH) + 2MnO₂ + 2KOH\n*Uses:* Baeyer's test is used as a qualitative test for the detection of unsaturation (specifically carbon-carbon double or triple bonds) in an organic molecule. The disappearance of the pink/purple KMnO₄ colour indicates the presence of unsaturation. (from Chapter 8, Section 8.4.4 B2)"
        },
        {
          "question": "(Chapter 9) 1. Briefly describe x-ray studies of benzene structure.",
          "answer": "X-ray studies of benzene have confirmed its hexagonal planar structure. These studies revealed that all six carbon atoms and all six hydrogen atoms lie in the same plane. All C-C-C and H-C-C bond angles are 120°. Furthermore, all carbon-carbon bond lengths are identical (1.397 Å), which is intermediate between a typical C-C single bond (1.54 Å) and a C=C double bond (1.34 Å). The C-H bond length was found to be 1.09 Å. (from Chapter 9, Section 9.3.4)"
        },
        {
          "question": "(Chapter 9) 2. Define electrophile. Give two examples.",
          "answer": "The text in Chapter 9 uses the term electrophile extensively in the context of benzene's reactions but does not provide a formal definition. It describes electrophiles as species that attack the electron-rich benzene ring. Examples generated or used in the reactions within Chapter 9 include:\n-   Halogenonium ions (X⁺, e.g., Cl⁺, Br⁺) generated from halogens using a catalyst like FeX₃ or AlCl₃.\n-   Nitronium ion (NO₂⁺) generated from a mixture of concentrated HNO₃ and H₂SO₄.\n-   Sulphonium species (like SO₃ or HSO₃⁺) from H₂SO₄ or fuming H₂SO₄.\n-   Carbocations (R⁺) generated from alkyl halides and AlCl₃ in Friedel-Crafts alkylation.\n-   Acylium ions (RCO⁺) generated from acyl halides and AlCl₃ in Friedel-Crafts acylation.\n(Examples derived from mechanisms in Chapter 9, Section 9.5.2; formal definition implied)"
        },
        {
          "question": "(Chapter 9) 3. Give reaction of benzene with ozone.(ozonolysis)",
          "answer": "Benzene reacts with ozone (O₃) to first form an unstable intermediate, benzene triozonide. This triozonide is then typically hydrolyzed (e.g., with Zn/H₂O) to yield three molecules of glyoxal (OHC-CHO).\n   C₆H₆ + 3O₃ → C₆H₆(O₃)₃ (Benzene triozonide)\n   C₆H₆(O₃)₃ + 3H₂O --(Zn)--> 3 OHC-CHO + 3H₂O₂\n(from Chapter 9, Section 9.5.3 (d) ii)"
        },
        {
          "question": "(Chapter 9) 4. How benzene is converted into maleic acid by catalytic oxidation?",
          "answer": "Benzene is oxidized when strongly heated with air in the presence of vanadium pentoxide (V₂O₅) as a catalyst. The benzene ring is destroyed, and maleic anhydride is formed, which upon hydrolysis yields maleic acid.\n   C₆H₆ + 9/2 O₂ --(V₂O₅, Heat)--> C₄H₂O₃ (Maleic Anhydride) + 2CO₂ + 2H₂O\n   C₄H₂O₃ + H₂O → HOOC-CH=CH-COOH (Maleic Acid)\n(from Chapter 9, Section 9.5.3 (d) i)"
        },
        {
          "question": "(Chapter 9) 5. What are aromatic compounds?",
          "answer": "Aromatic hydrocarbons include benzene and all those compounds that are structurally related to benzene. They originally derived their name from their characteristic aroma, but this is not a defining feature. They generally have a low hydrogen-to-carbon ratio and often contain a six-carbon unit similar to benzene. (from Chapter 9, Section 9.1)"
        },
        {
          "question": "(Chapter 9) 6. Why benzene is less reactive than alkene?",
          "answer": "Benzene is less reactive than alkenes despite being highly unsaturated because of its unique stability derived from the extensive delocalization of its π-electrons. The π-electrons form a continuous sheath above and below the ring, making them less available for electrophilic attack compared to the localized π-electrons in an alkene double bond. While alkenes readily undergo addition reactions, benzene resists addition reactions (which would destroy the stable delocalized system) and prefers electrophilic substitution reactions, which require more powerful electrophiles and often catalysts, allowing the stable aromatic ring to be retained. (from Chapter 9, Section 9.6 and 9.5.1)"
        },
        {
          "question": "(Chapter 9) 7. What is Wurts Fitting reaction? Give its importance.",
          "answer": "The Wurtz-Fittig reaction involves reacting an aryl halide (like bromobenzene) with an alkyl halide (like bromoethane) and sodium metal in dry ether. It results in the formation of an alkyl aromatic hydrocarbon.\n   C₆H₅Br + 2Na + BrC₂H₅ --(Ether)--> C₆H₅C₂H₅ + 2NaBr\n*Importance:* It extends the Wurtz reaction (used for alkane synthesis) to the synthesis of alkyl aromatic hydrocarbons. (from Chapter 9, Section 9.4 (5))"
        },
        {
          "question": "(Chapter 9) 8. Give two oxidation reactions of benzene.",
          "answer": "Two oxidation reactions of benzene are:\n1.  **Catalytic Oxidation:** Benzene is oxidized by heating strongly with air in the presence of V₂O₅ catalyst to form maleic anhydride, CO₂, and H₂O.\n    C₆H₆ + 9/2 O₂ --(V₂O₅, Heat)--> C₄H₂O₃ + 2CO₂ + 2H₂O\n2.  **Ozonolysis:** Benzene reacts with ozone to form benzene triozonide, which upon hydrolysis yields glyoxal.\n    C₆H₆ + 3O₃ → C₆H₆(O₃)₃ --(H₂O/Zn)--> 3 OHC-CHO\n(Combustion is also an oxidation reaction: 2C₆H₆ + 15O₂ → 12CO₂ + 6H₂O)\n(from Chapter 9, Section 9.5.3 (c) and (d))"
        },
        {
          "question": "(Chapter 9) 9. What are fused rings aromatic compounds?",
          "answer": "Fused ring aromatic compounds are polycyclic aromatic hydrocarbons in which the benzene rings are fused together at ortho positions, meaning the adjacent rings share a common carbon-to-carbon bond (two carbon atoms). Examples given are naphthalene, phenanthrene, and anthracene. (from Chapter 9, Section 9.1 (b) ii)"
        },
        {
          "question": "(Chapter 9) 10. Give reaction of benzene with SO3.",
          "answer": "SO₃ (sulfur trioxide) is the actual electrophile in the sulphonation of benzene when concentrated sulfuric acid is used. It attacks the benzene ring to form a carbocation intermediate, which then loses a proton to form benzenesulphonic acid. The direct attack step can be represented as:\n   C₆H₆ + SO₃ → [C₆H₆SO₃] (intermediate) → C₆H₅SO₃H\n(from Chapter 9, Section 9.5.2 (3) - Mechanism)"
        },
        {
          "question": "(Chapter 9) 11. Prepare benzene from i. n-Hexane ii. Sodium benzoate",
          "answer": "i.  **From n-Hexane:** Benzene is prepared by passing the vapours of n-hexane over a mixture of catalysts (Cr₂O₃ + Al₂O₃ + SiO₂) at 500°C. This process is called aromatization or reforming.\n    CH₃(CH₂)₄CH₃ --(Cr₂O₃/Al₂O₃/SiO₂, 500°C)--> C₆H₆ + 4H₂\nii. **From Sodium Benzoate:** Benzene is prepared in the laboratory by heating sodium benzoate with soda lime (NaOH + CaO).\n    C₆H₅COONa + NaOH --(CaO, Heat)--> C₆H₆ + Na₂CO₃\n(from Chapter 9, Section 9.4 (3) and (4) i)"
        },
        {
          "question": "(Chapter 9) 12. Give the mechanism of nitration of Benzene.",
          "answer": "The mechanism for the nitration of benzene involves three steps:\n1.  **Generation of the Electrophile (Nitronium ion, NO₂⁺):** Concentrated sulfuric acid protonates nitric acid, which then loses water to form the nitronium ion.\n    HNO₃ + H₂SO₄ ⇌ H₂NO₃⁺ + HSO₄⁻\n    H₂NO₃⁺ ⇌ NO₂⁺ + H₂O\n2.  **Attack of Electrophile on Benzene Ring:** The electrophile NO₂⁺ attacks the π-electron cloud of benzene to form a resonance-stabilized carbocation intermediate (arenium ion or sigma complex).\n    C₆H₆ + NO₂⁺ → [C₆H₆NO₂]⁺ (sigma complex)\n3.  **Removal of Proton:** The HSO₄⁻ ion (or another base like H₂O) removes a proton from the carbon atom bearing the NO₂ group, restoring the stable aromatic ring and forming nitrobenzene.\n    [C₆H₆NO₂]⁺ + HSO₄⁻ → C₆H₅NO₂ + H₂SO₄\n(from Chapter 9, Section 9.5.2 (2))"
        },
        {
          "question": "(Chapter 9) 13. Give reactivity of benzene towards electrophiles.",
          "answer": "Benzene's delocalized π-electrons are less available for attack by weak electrophiles compared to the localized π-electrons of alkenes. Therefore, benzene requires more powerful electrophiles to react. Reactions like halogenation require catalysts (e.g., FeX₃, AlCl₃) to generate strong electrophiles (like X⁺). Benzene undergoes electrophilic substitution reactions, where an electrophile replaces a hydrogen atom on the ring, rather than addition reactions (which occur less readily) because substitution allows the stable, delocalized aromatic system to be retained in the product. (from Chapter 9, Section 9.5.1)"
        },
        {
          "question": "(Chapter 9) 14. Show Benzene’s cyclic structure with diagram.",
          "answer": "Benzene has a cyclic, regular hexagonal structure. It can be represented by Kekule structures with alternating single and double bonds, or often by a hexagon with an inscribed circle representing the delocalized π-electron cloud.\n\n   [Diagram showing a hexagon with alternating double bonds] \n   OR \n   [Diagram showing a hexagon with a circle inside]\n(Based on structures shown throughout Chapter 9, e.g., Section 9.3.3, 9.3.7)"
        },
        {
          "question": "(Chapter 9) 15. Define aromatization.",
          "answer": "Aromatization is the process of converting non-aromatic hydrocarbons (like alkanes or cycloalkanes) into aromatic hydrocarbons (like benzene or its derivatives). An example given is the conversion of n-hexane into benzene by passing its vapours over specific catalysts (Cr₂O₃ + Al₂O₃ + SiO₂) at 500°C. (from Chapter 9, Section 9.4 (3))"
        },
        {
          "question": "(Chapter 10) 1. Prepare (i) ethyl thioalcohol (ii) ethyl acetate from ethyl bromide.",
          "answer": "(i) **Ethyl thioalcohol (Ethanethiol):** React ethyl bromide (CH₃CH₂Br) with sodium hydrogen sulphide (NaSH) or potassium hydrogen sulphide (KSH). The SH⁻ ion acts as a nucleophile.\n   CH₃CH₂Br + NaSH → CH₃CH₂SH + NaBr\n(ii) **Ethyl acetate:** React ethyl bromide (CH₃CH₂Br) with sodium acetate (CH₃COONa). The acetate ion (CH₃COO⁻) acts as a nucleophile.\n   CH₃CH₂Br + CH₃COONa → CH₃COOCH₂CH₃ + NaBr\n(These reactions are shown in the table of SN reactions in Chapter 10, Page 14)"
        },
        {
          "question": "(Chapter 10) 2. What are primary, secondary and tertiary alkyl halides? Give example of each.",
          "answer": "-   **Primary (1°) Alkyl Halide:** The halogen atom is attached to a primary carbon atom (a carbon attached to only one or no other carbon atom). Example: Chloroethane (CH₃CH₂Cl).\n-   **Secondary (2°) Alkyl Halide:** The halogen atom is attached to a secondary carbon atom (a carbon attached to two other carbon atoms). Example: 2-Chloropropane (CH₃CHClCH₃).\n-   **Tertiary (3°) Alkyl Halide:** The halogen atom is attached to a tertiary carbon atom (a carbon attached to three other carbon atoms). Example: 2-Chloro-2-methylpropane ((CH₃)₃CCl).\n(from Chapter 10, Section 10.1)"
        },
        {
          "question": "(Chapter 10) 3. Explain Markownikov’s rule with suitable example.",
          "answer": "This answer is not found in the provided textbook text for Chapter 10. (Markownikov's rule is discussed in Chapter 8 concerning addition to alkenes)."
        },
        {
          "question": "(Chapter 10) 4. Starting from C2H5Br how will you prepare ethane and ethene?",
          "answer": "-   **Ethane from Ethyl Bromide:** Ethyl bromide can be reduced to ethane using Zinc (Zn) metal in the presence of an aqueous acid (like HCl or CH₃COOH), or via hydrogenolysis using H₂ gas with a Pd/C catalyst.\n    CH₃CH₂Br + Zn + H⁺ + Br⁻ → CH₃CH₃ + ZnBr₂ (using Zn/acid)\n    OR\n    CH₃CH₂Br + H₂ --(Pd/C, Δ)--> CH₃CH₃ + HBr (hydrogenolysis)\n-   **Ethene from Ethyl Bromide:** Ethene can be prepared by β-elimination reaction. Treating ethyl bromide with a strong base, such as alcoholic potassium hydroxide (KOH), causes the removal of HBr.\n    CH₃CH₂Br + KOH(alc.) → CH₂=CH₂ + KBr + H₂O\n(Reduction from Section 10.5.3 (2); Elimination reaction implied by mechanism discussion in Section 10.5.3)"
        },
        {
          "question": "(Chapter 10) 5. Explain the following reaction: CH4 CH3CH2COOH.",
          "answer": "The conversion of Methane (CH₄) to Propanoic Acid (CH₃CH₂COOH) involves multiple steps and is not shown as a direct reaction in Chapter 10. A possible synthetic route might involve:\n1.  CH₄ + Cl₂ --(UV light)--> CH₃Cl (Methyl chloride)\n2.  CH₃Cl + Mg --(Dry Ether)--> CH₃MgI (Methyl magnesium chloride - Grignard)\n3.  CH₃MgI + CH₂O (Formaldehyde) → Intermediate --(H₃O⁺)--> CH₃CH₂OH (Ethanol)\n4.  CH₃CH₂OH + PBr₃ → CH₃CH₂Br (Ethyl bromide)\n5.  CH₃CH₂Br + KCN(alc.) → CH₃CH₂CN (Propanenitrile)\n6.  CH₃CH₂CN + 2H₂O + HCl --(Heat)--> CH₃CH₂COOH + NH₄Cl\n(This involves reactions described or similar to those in Chapters 8, 10, 11, 12, and 13, but the specific sequence isn't given in Chapter 10)."
        },
        {
          "question": "(Chapter 10) 6. How do you compare SN1 and SN2 mechanism?",
          "answer": "**Comparison of SN1 and SN2 Mechanisms:**\n| Feature          | SN1 (Nucleophilic Substitution Unimolecular) | SN2 (Nucleophilic Substitution Bimolecular) |\n|------------------|----------------------------------------------|----------------------------------------------|\n| **Steps**        | Two steps (Ionization then Attack)           | One step (Simultaneous attack and departure) |\n| **Intermediate** | Carbocation                                  | Transition state (no true intermediate)      |\n| **Molecularity** | Unimolecular (Rate-det. step = 1 molecule) | Bimolecular (Rate-det. step = 2 molecules) |\n| **Kinetics**     | First order (Rate = k[Alkyl Halide])         | Second order (Rate = k[Alkyl Halide][Nu⁻])  |\n| **Stereochem.**  | Racemization (50% Inversion, 50% Retention)| Complete Inversion of configuration          |\n| **Nu⁻ Attack**   | Either side of planar carbocation            | Backside attack (opposite leaving group)     |\n| **Substrate**    | Favored by Tertiary (3°) alkyl halides       | Favored by Primary (1°) alkyl halides        |\n(Based on descriptions in Chapter 10, Section 10.5.2)"
        },
        {
          "question": "(Chapter 10) 7. How do we get alkyl nitriles from Grignard’s reagent?",
          "answer": "Alkyl nitriles (R-CN) can be prepared by reacting a Grignard reagent (R-MgX) with cyanogen chloride (Cl-C≡N).\n   R-MgX + Cl-C≡N → R-C≡N + Mg(X)Cl\n(from Chapter 10, Section 10.6, Reaction iii)"
        },
        {
          "question": "(Chapter 10) 8. What are elimination reactions? Give an example of E1 reaction.",
          "answer": "Elimination reactions involve the removal of two atoms or groups from adjacent carbon atoms in a substrate molecule, typically under the influence of a base or nucleophile, resulting in the formation of a multiple bond (e.g., a double bond in β-elimination).\n**Example of E1 Reaction:** The E1 mechanism involves two steps. First, the alkyl halide ionizes slowly to form a carbocation. Second, a base (like water or the nucleophile itself) removes a proton from the β-carbon adjacent to the carbocation center, forming an alkene.\n*Step 1 (Ionization):* (CH₃)₃C-Br ⇌ (CH₃)₃C⁺ + Br⁻ (slow)\n*Step 2 (Proton removal):* (CH₃)₃C⁺ + H₂O → CH₂=C(CH₃)₂ + H₃O⁺ (fast)\n(Definition and mechanism from Chapter 10, Section 10.5.3)"
        },
        {
          "question": "(Chapter 10) 9. What is Grignard reagent? (Also asked as Q14)",
          "answer": "A Grignard reagent is an organometallic compound, specifically an alkyl magnesium halide with the general formula R-MgX, where R is an alkyl group and X is a halogen (Cl, Br, I). It is prepared by reacting an alkyl halide with magnesium metal in dry ether. (from Chapter 10, Section 10.6)"
        },
        {
          "question": "(Chapter 10) 10. What are Alkyl halides? Give their general formula.",
          "answer": "Alkyl halides are monohalo derivatives of alkanes. Their general formula is R-X, where R is an alkyl group (like methyl, ethyl, propyl) and X represents a halogen atom (F, Cl, Br, I). (from Chapter 10, Section 10.1)"
        },
        {
          "question": "(Chapter 10) 11. What are types of nucleophilic substitution reaction?",
          "answer": "There are two main types (mechanisms) of nucleophilic substitution reactions discussed for alkyl halides:\n1.  Nucleophilic Substitution Bimolecular (SN2)\n2.  Nucleophilic Substitution Unimolecular (SN1)\n(from Chapter 10, Section 10.5.2)"
        },
        {
          "question": "(Chapter 10) 12. Convert ethyl alcohol into their respective halides by using PCl3 and PCl5",
          "answer": "Ethyl alcohol (Ethanol) can be converted to ethyl halides using phosphorus halides:\n-   **Using PCl₃:** 3CH₃CH₂OH + PCl₃ → 3CH₃CH₂Cl + H₃PO₃\n-   **Using PCl₅:** CH₃CH₂OH + PCl₅ → CH₃CH₂Cl + POCl₃ + HCl\n(from Chapter 10, Section 10.3 (1) c)"
        },
        {
          "question": "(Chapter 10) 13. What is Wurtz synthesis?",
          "answer": "Wurtz synthesis is a reaction where alkyl halides react with sodium metal in an ether solvent to couple the alkyl groups and form an alkane, usually with double the number of carbon atoms as the original alkyl halide. It is particularly useful for preparing symmetrical alkanes (R-R).\n   Example: 2 CH₃CH₂Cl + 2Na --(Ether)--> CH₃CH₂CH₂CH₃ + 2NaCl\n(from Chapter 10, Section 10.5.3 (1))"
        },
        {
          "question": "(Chapter 10) 14. What is Grignard reagent? (Duplicate of Q9)",
          "answer": "A Grignard reagent is an organometallic compound, specifically an alkyl magnesium halide with the general formula R-MgX, where R is an alkyl group and X is a halogen (Cl, Br, I). It is prepared by reacting an alkyl halide with magnesium metal in dry ether. (from Chapter 10, Section 10.6)"
        },
        {
          "question": "(Chapter 11) 1. Convert methanol into ethanol",
          "answer": "The conversion of methanol to ethanol is not explicitly shown in Chapter 11. A typical route involves:\n1.  Convert methanol to methyl halide (e.g., CH₃OH + PBr₃ → CH₃Br).\n2.  React methyl halide with KCN to form ethanenitrile (CH₃Br + KCN → CH₃CN).\n3.  Reduce the nitrile to ethylamine (e.g., CH₃CN + H₂/Ni → CH₃CH₂NH₂).\n4.  React ethylamine with nitrous acid to form ethanol (CH₃CH₂NH₂ + HNO₂ → CH₃CH₂OH + N₂ + H₂O).\nAlternatively, using Grignard reaction (requires reactions from Ch 10):\n1.  CH₃OH → CH₃Br\n2.  CH₃Br + Mg → CH₃MgBr\n3.  CH₃MgBr + HCHO (formaldehyde) → Intermediate --(H₃O⁺)--> CH₃CH₂OH.\n(This answer is not found in the provided textbook text for Chapter 11)."
        },
        {
          "question": "(Chapter 11) 2. Differentiate between primary and secondary alcohols.",
          "answer": "The difference lies in the type of carbon atom the hydroxyl (-OH) group is attached to:\n-   **Primary (1°) Alcohol:** The -OH group is attached to a primary carbon atom (a carbon atom attached to only one or no other carbon atom). Example: Ethanol (CH₃CH₂OH).\n-   **Secondary (2°) Alcohol:** The -OH group is attached to a secondary carbon atom (a carbon atom attached to two other carbon atoms). Example: 2-Propanol (CH₃CHOHCH₃).\nThey also differ in their oxidation products (primary alcohols oxidize to aldehydes then carboxylic acids; secondary alcohols oxidize to ketones) and their reactivity in the Lucas test (secondary react in 5-10 mins, primary react only on heating).\n(Definitions from Chapter 11, Section 11.2; Lucas test from 11.3; Oxidation from 11.2.7)"
        },
        {
          "question": "(Chapter 11) 3. Write structural formula of a)carbolic acid b)glycerol",
          "answer": "a)  **Carbolic Acid (Phenol):** C₆H₅OH or [A benzene ring with an -OH group attached]\nb)  **Glycerol (1,2,3-Propanetriol):**\n    CH₂OH\n     |\n    CHOH\n     |\n    CH₂OH\n(Phenol structure from 11.5; Glycerol structure shown in diagram in 11.2.1 (iii))"
        },
        {
          "question": "(Chapter 11) 4. What are rectified spirit, commercial alcohol and absolute alcohol?",
          "answer": "-   **Rectified Spirit:** Ethanol obtained by repeated distillation of the fermentation product (which is usually up to 12-14% alcohol). Rectified spirit contains about 95% ethanol.\n-   **Absolute Alcohol:** Highly pure ethanol (close to 100%). It can be obtained by redistilling rectified spirit in the presence of a dehydrating agent like CaO to absorb the remaining moisture.\n-   **Commercial Alcohol:** This term is not explicitly defined in the text, but usually refers to ethanol sold for industrial use, often meaning rectified spirit (95% ethanol).\n(Definitions derived from Chapter 11, Section 11.2.2, Ethanol section)"
        },
        {
          "question": "(Chapter 11) 5. Why water has higher boiling point than ethanol?",
          "answer": "The text states that alcohols have higher boiling points than corresponding alkanes due to hydrogen bonding. It does not explicitly compare the boiling points of water and ethanol or provide the reasons. (Reasons generally involve water's ability to form more hydrogen bonds per molecule and its smaller size, leading to stronger overall intermolecular forces compared to ethanol). (Inference based on discussion in Chapter 11, Section 11.2.3, but direct comparison is missing)."
        },
        {
          "question": "(Chapter 11) 6. Convert methanol into ethanol and acetone into ethyle alcohol.",
          "answer": "-   **Methanol into Ethanol:** This conversion is not explicitly detailed in Chapter 11. See answer to Q1 of Chapter 11 for possible routes.\n-   **Acetone into Ethyl Alcohol:** This conversion is not explicitly detailed in Chapter 11. Reduction of acetone (propanone) yields 2-propanol (a secondary alcohol), not ethanol (a primary alcohol).\n    CH₃COCH₃ + [H] → CH₃CHOHCH₃ (2-Propanol)\n(Therefore, the conversion of acetone to ethanol is not a direct standard reaction shown)."
        },
        {
          "question": "(Chapter 11) 7. What is Lucas test?",
          "answer": "Lucas test is used to identify and distinguish between primary, secondary, and tertiary alcohols. The test involves reacting the alcohol with the Lucas reagent (concentrated HCl in anhydrous ZnCl₂). An oily layer of the corresponding alkyl chloride separates out at different rates:\n-   Tertiary alcohols: Form an oily layer immediately.\n-   Secondary alcohols: Form an oily layer in five to ten minutes.\n-   Primary alcohols: Form an oily layer only upon heating.\n(from Chapter 11, Section 11.3)"
        },
        {
          "question": "(Chapter 11) 8. Give the uses of ethyle alcohols and methyl alcohols.",
          "answer": "-   **Methyl Alcohol (Methanol):** Used as a solvent (for fats, oils, paints, varnishes), as antifreeze in automobile radiators, and for denaturing ethyl alcohol.\n-   **Ethyl Alcohol (Ethanol):** Used as a solvent, as a drink (beverage), as a fuel (in some countries), in pharmaceutical preparations, and as a preservative for biological specimens.\n(from Chapter 11, Section 11.4)"
        },
        {
          "question": "(Chapter 11) 9. Ethyl alcohol is liquid while methyl chloride is a gas. Why?",
          "answer": "The text states that lower alcohols (like ethanol) are liquids due to intermolecular hydrogen bonding. Methyl chloride is not discussed in Chapter 11, but it is known to be a gas at room temperature. (The reason, not explicitly stated in comparison in Ch 11, is that ethanol molecules are strongly associated via hydrogen bonds, requiring more energy to vaporize, while methyl chloride molecules are held together by much weaker dipole-dipole and van der Waals forces). (Hydrogen bonding in alcohols mentioned in Chapter 11, Section 11.2.3)"
        },
        {
          "question": "(Chapter 11) 10. Write the names and formulas of two polyhydric alcohols.",
          "answer": "Polyhydric alcohols contain more than one -OH group. Two examples shown in the text are:\n1.  **Ethylene Glycol (1,2-Ethanediol):** CH₂(OH)CH₂(OH)\n2.  **Glycerol (1,2,3-Propanetriol):** CH₂(OH)CH(OH)CH₂(OH)\n(from Chapter 11, Section 11.2.1 (iii))"
        },
        {
          "question": "(Chapter 11) 11. Define fermentation. Give its conditions.",
          "answer": "Fermentation is a biochemical process which occurs in the presence of certain enzymes secreted by microorganisms such as yeast. It is used industrially to prepare ethanol.\n**Conditions:**\n-   Optimum temperature: 25-35°C.\n-   Presence of enzymes (from yeast).\n-   Proper aeration.\n-   Dilution of solution.\n-   Absence of any preservative.\n(from Chapter 11, Section 11.2.2, Ethanol section)"
        },
        {
          "question": "(Chapter 11) 12. Absolute alcohols cannot be prepared by fermentation. Why?",
          "answer": "Absolute alcohol (nearly 100% ethanol) cannot be prepared directly by fermentation because the enzymes responsible for fermentation become inactive when the alcohol concentration reaches about 12%, and it never exceeds 14%. To get higher concentrations, the fermentation product must be distilled (yielding 95% rectified spirit), and then further dehydrated (e.g., using CaO) to obtain absolute alcohol. (from Chapter 11, Section 11.2.2, Ethanol section)"
        },
        {
          "question": "(Chapter 11) 13. What is wood-spirit? How is it prepared from water gas?",
          "answer": "Wood-spirit is another name for methanol (methyl alcohol). It was formerly called this because it was prepared by the distillation of wood.\nIt is prepared industrially from water gas (a mixture of carbon monoxide and hydrogen) by passing the purified and compressed gases over a catalyst mixture (ZnO + Cr₂O₃) heated to 450-500°C under 200 atm pressure.\n   CO(g) + 2H₂(g) --(ZnO+Cr₂O₃, 450-500°C, 200atm)--> CH₃OH(g)\n(from Chapter 11, Section 11.2.2, Methanol section)"
        },
        {
          "question": "(Chapter 11) 14. Write equation for the reaction of C2H5OH with PBr3, PCI5",
          "answer": "-   **Reaction with PBr₃:**\n    3CH₃CH₂OH + PBr₃ → 3CH₃CH₂Br + H₃PO₃\n-   **Reaction with PCl₅:**\n    CH₃CH₂OH + PCl₅ → CH₃CH₂Cl + POCl₃ + HCl\n(from Chapter 11, Section 11.2.7 (iii))"
        },
        {
          "question": "(Chapter 13) 1. What are peptides and peptide linkage?",
          "answer": "Peptides are compounds formed by the condensation of two or more (same or different) α-amino acids. The condensation occurs between the carboxyl group of one amino acid and the amino group of another, with the elimination of a water molecule. The resulting -CO-NH- linkage formed between the amino acids is called a peptide linkage. (from Chapter 13, Section 13.8.8)"
        },
        {
          "question": "(Chapter 13) 2. What is ninhydrin test?",
          "answer": "Ninhydrin test is a chemical test for amino acids. Ninhydrin reacts with an amino acid to form an intensely coloured bluish-violet product. This reaction is widely used to 'visualize' amino acids, for example, after separation by paper chromatography. (from Chapter 13, Section 13.8.7)"
        },
        {
          "question": "(Chapter 13) 3. What are aromatic carboxylic acids?",
          "answer": "Aromatic carboxylic acids are organic compounds containing a carboxyl group (-COOH) attached directly to an aryl group (like a benzene ring). Their general formula can be represented as Ar-COOH. Example: Benzoic acid (C₆H₅COOH). (from Chapter 13, Section 13.1)"
        },
        {
          "question": "(Chapter 13) 4. Give the mechanism for the esterification of the carboxylic acids.",
          "answer": "The mechanism for the acid-catalyzed esterification between a carboxylic acid (e.g., acetic acid) and an alcohol (e.g., ethanol) involves several steps:\n1.  **Protonation of Carboxylic Acid:** The carbonyl oxygen of the carboxylic acid is protonated by the acid catalyst (H₂SO₄), making the carbonyl carbon more electrophilic.\n    CH₃COOH + H⁺ ⇌ [CH₃C(OH)₂]⁺\n2.  **Nucleophilic Attack by Alcohol:** The alcohol molecule acts as a nucleophile and attacks the protonated carbonyl carbon.\n    [CH₃C(OH)₂]⁺ + C₂H₅OH ⇌ CH₃C(OH)₂(O⁺H C₂H₅)\n3.  **Proton Transfer:** A proton is transferred, typically to one of the -OH groups, preparing it to leave as water.\n    CH₃C(OH)₂(O⁺H C₂H₅) ⇌ CH₃C(OH)(OH₂⁺)(OC₂H₅)\n4.  **Elimination of Water and Deprotonation:** Water molecule leaves, and a proton is removed from the remaining oxygen, regenerating the acid catalyst and forming the ester.\n    CH₃C(OH)(OH₂⁺)(OC₂H₅) ⇌ [CH₃C(OH)(OC₂H₅)]⁺ + H₂O\n    [CH₃C(OH)(OC₂H₅)]⁺ ⇌ CH₃COOC₂H₅ + H⁺\n(from Chapter 13, Section 13.6 (b) 2, Mechanism)"
        },
        {
          "question": "(Chapter 13) 5. What are essential and non-essential amino acids?",
          "answer": "-   **Non-essential Amino Acids:** These are the amino acids that the human body can synthesize itself. The text states the body can synthesize ten out of the twenty required for protein synthesis.\n-   **Essential Amino Acids:** These are the amino acids that the human body cannot synthesize and must be supplied through the diet. They are required for proper health and growth, and their deficiency can cause diseases. The text mentions there are ten essential amino acids.\n(from Chapter 13, Section 13.8.1)"
        },
        {
          "question": "(Chapter 13) 6. Name five dicarboxylic acids and give their formulas.",
          "answer": "The text explicitly shows the formulas for two aliphatic dicarboxylic acids and one aromatic dicarboxylic acid:\n1.  **Oxalic Acid:** HOOC-COOH\n2.  **Malonic Acid:** HOOC-CH₂-COOH\n3.  **Phthalic Acid:** C₆H₄(COOH)₂ (specifically benzene-1,2-dicarboxylic acid)\n(Other common examples like Succinic acid, Glutaric acid, Adipic acid are not explicitly named or shown with formulas in Chapter 13). (from Chapter 13, Section 13.1)"
        },
        {
          "question": "(Chapter 13) 7. What is strecker’s synthesis?",
          "answer": "The Strecker synthesis is a method for preparing α-amino acids. It involves adding hydrogen cyanide (HCN) to an aldehyde in the presence of ammonia (NH₃). This forms an intermediate α-amino nitrile, which upon acidic hydrolysis yields an α-amino acid.\n   RCHO + HCN + NH₃ → R-CH(NH₂)-CN (α-amino nitrile)\n   R-CH(NH₂)-CN + 2H₂O + H⁺ → R-CH(NH₂)-COOH + NH₄⁺\n(from Chapter 13, Section 13.8.5 (2))"
        },
        {
          "question": "(Chapter 13) 8. Give four uses of nitric acid.",
          "answer": "This answer is not found in the provided textbook text for Chapter 13. (Uses of nitric acid are listed in Chapter 4)."
        },
        {
          "question": "(Chapter 13) 9. How carboxylic acid is converted into a-amino acids?",
          "answer": "Carboxylic acids can be converted into α-amino acids indirectly. First, the carboxylic acid is halogenated at the α-position (e.g., using Br₂/P) to form an α-bromo carboxylic acid. Then, this α-bromoacid is reacted with ammonia to substitute the bromine atom with an amino group, yielding the α-amino acid.\n   RCH₂COOH + Br₂ --(P)--> RCH(Br)COOH + HBr\n   RCH(Br)COOH + 2NH₃ → RCH(NH₂)COOH + NH₄Br\n(from Chapter 13, Section 13.8.5 (1))"
        },
        {
          "question": "(Chapter 13) 10. Give four uses of acetic acid.",
          "answer": "Four uses of acetic acid are:\n1.  As a coagulant for latex in the rubber industry.\n2.  In the manufacture of plastics (polyvinyl acetate), rayon (cellulose acetate), and silk.\n3.  In medicine as a local irritant.\n4.  As a solvent in the laboratory for carrying out reactions.\n(Other uses mentioned: manufacture of pickles, manufacture of acetone, acetates, esters).\n(from Chapter 13, Section 13.7.5)"
        },
        {
          "question": "(Chapter 13) 11. How ethanol is converted into acetic acid and vice versa?",
          "answer": "-   **Ethanol to Acetic Acid:** Ethanol (a primary alcohol) can be oxidized to acetic acid using strong oxidizing agents like potassium dichromate (K₂Cr₂O₇) in an acidic medium (e.g., dilute H₂SO₄). The oxidation proceeds via acetaldehyde as an intermediate.\n    C₂H₅OH + [O] --(K₂Cr₂O₇/H₂SO₄)--> CH₃CHO + H₂O\n    CH₃CHO + [O] --(K₂Cr₂O₇/H₂SO₄)--> CH₃COOH\n-   **Acetic Acid to Ethanol:** Acetic acid can be reduced to ethanol (a primary alcohol) using a strong reducing agent like lithium aluminium hydride (LiAlH₄).\n    4CH₃COOH + 3LiAlH₄ → [Complex] --(H₂O/H⁺)--> 4CH₃CH₂OH + ...\n(Oxidation from 13.3 (1); Reduction from 13.6 (c) i)"
        },
        {
          "question": "(Chapter 13) 12. Define proteins? How do they differ from polypeptides?",
          "answer": "Proteins are defined as high molecular weight organic materials, which upon complete hydrolysis, yield amino acids. They are extremely complicated nitrogenous compounds made up of amino acids.\nThey differ from polypeptides based on molecular mass. By convention, a peptide having a molecular mass up to 10,000 is called a polypeptide, while a peptide having a molecular mass greater than 10,000 is called a protein. (from Chapter 13, Section 14.6.3 and 14.8.8)"
        },
        {
          "question": "(Chapter 13) 13. What are fatty acids? Give examples.",
          "answer": "Fatty acids are aliphatic monocarboxylic acids. The name is used particularly for the higher members of the series (like C₁₂ onwards) which are obtained by the hydrolysis of fats and oils. Examples mentioned are Palmitic acid (C₁₅H₃₁COOH) and Stearic acid (C₁₇H₃₅COOH). (from Chapter 13, Section 13.2)"
        },
        {
          "question": "(Chapter 13) 14. What are Zwitter ions? Give equation.",
          "answer": "A Zwitter ion is a dipolar ion formed by amino acids, having both a positive and a negative charge within the same molecule. It is formed when the proton from the carboxyl group (-COOH) transfers to the amino group (-NH₂).\nEquation:\n   R-CH(NH₂)COOH ⇌ R-CH(N⁺H₃)COO⁻\nThis dipolar structure is also called an internal salt. (from Chapter 13, Section 13.8.3)"
        },
        {
          "question": "(Chapter 13) 15. How will you prepare acetic acid from ethynes?",
          "answer": "Acetic acid can be prepared from ethyne (acetylene) in two main steps:\n1.  **Hydration of Ethyne:** Treat ethyne with 20% H₂SO₄ and 1.0% HgSO₄ at 80°C. This adds water across the triple bond, initially forming unstable vinyl alcohol which rearranges to ethanal (acetaldehyde).\n    HC≡CH + H₂O --(H₂SO₄/HgSO₄)--> [CH₂=CHOH] → CH₃CHO\n2.  **Oxidation of Ethanal:** Oxidize the ethanal formed using an oxidizing agent like V₂O₅ (for industrial process) or K₂Cr₂O₇/H₂SO₄ (general method).\n    CH₃CHO + [O] → CH₃COOH\n(from Chapter 13, Section 13.7.2 (1))"
        },
        {
          "question": "(Chapter 14) 1. Define carbohydrates. Classify them and give example of each.",
          "answer": "**Definition:** Carbohydrates (hydrates of carbon) are a large group of naturally occurring organic compounds, commonly called 'sugars'. Chemically, they are polyhydroxy compounds of aldehydes and ketones. Early examples fit the empirical formula Cx(H₂O)y.\n**Classification:**\n1.  **Monosaccharides:** Simple sugars that cannot be hydrolyzed further. Empirical formula (CH₂O)n, n ≥ 3. Examples: Glucose, Fructose, Glyceraldehyde.\n2.  **Oligosaccharides:** Formed when 2 to 9 monosaccharide units combine via glycosidic linkages with loss of water. Hydrolysis yields monosaccharides. Example: Sucrose (a disaccharide of glucose and fructose), Lactose, Maltose.\n3.  **Polysaccharides:** High molecular mass carbohydrates yielding many monosaccharide units on hydrolysis. Formula often (C₆H₁₀O₅)n. They are generally amorphous, insoluble in water, and tasteless ('non-sugars'). Examples: Starch, Cellulose, Glycogen.\n(from Chapter 14, Sections 14.6.1 and 14.6.2)"
        },
        {
          "question": "(Chapter 14) 2. What do you mean by rancidity of fats and oils?",
          "answer": "Rancidity refers to the spoilage of fats or oils, which results in them giving off an unpleasant odour. It is mainly caused by hydrolytic or oxidative reactions that release foul-smelling aldehydes and fatty acids. Oils containing a higher proportion of unsaturated fatty acid chains (like those from sea animals) tend to deteriorate or become rancid more rapidly. (from Chapter 14, Section 14.6.15)"
        },
        {
          "question": "(Chapter 14) 3. Define the following: i. proteins ii. Lipids iii. polymers",
          "answer": "i.  **Proteins:** High molecular weight organic materials, which upon complete hydrolysis, yield amino acids. They are nitrogenous compounds essential for life, present in all living organisms, making up tissues like muscles, skin, hair, etc.\nii. **Lipids:** Naturally occurring organic compounds of animal and plant origin which are soluble in organic solvents (like ether, chloroform) and insoluble in water. Their primary building blocks include fatty acids, glycerol, and sterols. They are utilized by living organisms.\niii. **Polymers:** A polymer is a large molecule (macromolecule) built up by the repetition of small and simple chemical units known as monomers. The repeating units link linearly, branched, or in a network.\n(Proteins from 14.6.3; Lipids from 14.6.8; Polymers from 14.2)"
        },
        {
          "question": "(Chapter 14) 4. How is polystyrene prepared? Give its two uses.",
          "answer": "**Preparation:** Polystyrene is prepared by the addition polymerization of styrene monomer, typically in the presence of a catalyst. The reaction involves initiation, propagation, and termination steps involving free radicals.\n   n(C₆H₅-CH=CH₂) --(Catalyst)--> [-CH(C₆H₅)-CH₂-]n\n**Uses:**\n1.  Manufacture of food containers.\n2.  Manufacture of cosmetic bottles, toys, and packing material.\n(from Chapter 14, Section 14.5 (2) and 14.4 (1))"
        },
        {
          "question": "(Chapter 14) 5. Give the structure of cholesterol.",
          "answer": "The structure of cholesterol is based on the perhydrocyclopentanophenanthrene nucleus, which consists of three fused six-membered rings (A, B, C) and one five-membered ring (D). The specific structure with attached groups (like -OH, alkyl side chain) is depicted in the text figure associated with Section 14.6.18 (1). (A textual description is difficult, refer to the structure diagram in the text)."
        },
        {
          "question": "(Chapter 14) 6. Write down uses of proteins.",
          "answer": "Proteins have various uses and importance:\n1.  Essential part in forming protoplasm.\n2.  Nucleoproteins serve as carriers of heredity.\n3.  Enzymes (biological catalysts) are proteins.\n4.  Specialized functions: Haemoglobin transports O₂, some proteins act as hormones (insulin, thyroxine).\n5.  Industrial uses: Leather (tanned hides), Gelatin (from bones/skin for bakery), Casein (for buttons/buckles).\n(from Chapter 14, Section 14.6.7)"
        },
        {
          "question": "(Chapter 14) 7. What is saponification number and iodine number?",
          "answer": "-   **Saponification Number:** It is defined as the number of milligrams of potassium hydroxide (KOH) or sodium hydroxide (NaOH) required to saponify one gram of a fat or oil.\n-   **Iodine Number:** It defines the extent of unsaturation in a fat or oil. It is defined as the number of grams of iodine which will add to 100 grams of the fat or oil. Its value depends on the number of double bonds in the fatty acid components.\n(from Chapter 14, Sections 14.6.14 and 14.6.16)"
        },
        {
          "question": "(Chapter 14) 8. What are fatty acids? Give examples.",
          "answer": "The text in Chapter 14 defines fatty acids as primary building blocks of lipids (specifically fats and oils, which are esters of glycerol and fatty acids). It mentions they are long-chain acids. Examples like palmitic acid and stearic acid are not explicitly given in Chapter 14 but are commonly understood components referred to implicitly in the discussion of triglycerides. (Definition implied in 14.6.8, 14.6.10; specific examples not listed in Ch 14)."
        },
        {
          "question": "(Chapter 14) 9. How polymers are classified on the basis of heat effect?",
          "answer": "Based on thermal properties (effect of heat), polymers are classified into two types:\n1.  **Thermoplastic Polymers:** These can be softened repeatedly when heated and hardened when cooled with little change in properties (e.g., PVC).\n2.  **Thermosetting Polymers:** These become hard on heating and cannot be softened again; they decompose on further heating instead of melting (e.g., epoxy resins).\n(from Chapter 14, Section 14.3)"
        },
        {
          "question": "(Chapter 15+16) 1. What reaction takes place in decomposition zone during manufacturing of cement?",
          "answer": "In the decomposition zone (moderate temperature zone, up to 900°C) of the rotary kiln during cement manufacturing, the limestone (CaCO₃) decomposes into lime (CaO) and carbon dioxide (CO₂).\n   CaCO₃(s) --(900°C)--> CaO(s) + CO₂(g)\n(from Chapter 15, Section 15.5.5 (3b))"
        },
        {
          "question": "(Chapter 15+16) 2. Which type of woody raw material is used in paper industry?",
          "answer": "Woody raw materials used in the paper industry mentioned in the text are Poplar (hardwood), Eucalyptus (hardwood), and Douglas fir (softwood). (from Chapter 15, Section 15.6.3)"
        },
        {
          "question": "(Chapter 15+16) 3. Write two woody and two non woody raw material for paper pulp manufacture.",
          "answer": "-   **Woody Raw Materials:** Poplar, Eucalyptus (or Douglas fir).\n-   **Non-woody Raw Materials:** Wheat straw, Rice straw (or Bagasse, Bamboo, Rags, Cotton stalk/linter, Kahi grass).\n(from Chapter 15, Section 15.6.3)"
        },
        {
          "question": "(Chapter 15+16) 4. What are macro nutrients?",
          "answer": "Macro-nutrients are essential elements required in large amounts for the growth of plants. These include Nitrogen, Phosphorus, Potassium, Calcium, Magnesium, Sulphur, Carbon, Hydrogen, and Oxygen. They are generally required in quantities ranging from 5 kg to 200 kg per acre. (from Chapter 15, Section 15.3.2)"
        },
        {
          "question": "(Chapter 15+16) 5. What is role of chlorofluorocarbons in destroying ozone?",
          "answer": "Chlorofluorocarbons (CFCs), used as refrigerants and propellants, are inert in the lower atmosphere (troposphere) but diffuse into the stratosphere. There, ultraviolet (UV) radiation breaks them down, generating Chlorine free radicals (Cl•). These radicals act as catalysts in the destruction of ozone (O₃):\n1.  A CFC molecule breaks down: CFCl₃ --(UV)--> •CFCl₂ + Cl•\n2.  Chlorine radical attacks ozone: Cl• + O₃ → ClO• + O₂\n3.  Chlorine monoxide radical reacts with an oxygen atom (present in stratosphere): ClO• + O → Cl• + O₂\nThe chlorine radical (Cl•) is regenerated in step 3, allowing it to destroy many more ozone molecules (up to 100,000) in a catalytic cycle. (from Chapter 16, Section 16.2.2 (3))"
        },
        {
          "question": "(Chapter 15+16) 6. How do you compare SN1 and SN2 mechanism?",
          "answer": "This answer is not found in the provided textbook text for Chapter 15 or 16. (SN1 and SN2 mechanisms are discussed in Chapter 10)."
        },
        {
          "question": "(Chapter 15+16) 7. What is need for fertilizers?",
          "answer": "Fertilizers are needed to make up the deficiency of essential elements (like N, P, K) required for the proper growth of plants. They enhance the natural fertility of the soil or replenish the chemical elements taken up from the soil by previous crops, especially necessary due to nutrient depletion from repeated cultivation. (from Chapter 15, Section 15.2.2 and 15.4.4)"
        },
        {
          "question": "(Chapter 15+16) 8. What do you mean by prilling of urea? (Also asked as Q15)",
          "answer": "Prilling of urea is the process of converting molten urea into solid, pellet-like form. The molten urea (around 99.7%) obtained after evaporation is sprayed down from the top of a prilling tower using a prilling bucket. As the droplets fall, they are cooled by an upward current of air, causing them to solidify into tiny, hard pellets called prills. (from Chapter 15, Section 15.4.1 (ii), Prilling section)"
        },
        {
          "question": "(Chapter 15+16) 9. What are some commonly used bleaching agents in paper manufacture?",
          "answer": "Commonly used bleaching agents in the paper industry in Pakistan mentioned in the text are chlorine, sodium hypochlorite, and hydrogen peroxide. (from Chapter 15, Section 15.6.5 (viii))"
        },
        {
          "question": "(Chapter 15+16) 10. Define clinker? How is it used in manufacturing of Cement.",
          "answer": "**Definition:** Cement clinker is the product obtained after heating the prepared mixture of raw materials (calcarious and argillaceous) in the rotary kiln to high temperatures (burning zone ~1500°C). It has the appearance of greenish black or grey coloured balls (pea to small nut size).\n**Use:** Clinker is the intermediate product in cement manufacturing. After cooling, it is ground to a fine powder along with a small percentage (around 2%) of gypsum to produce the final product, Portland cement. (from Chapter 15, Section 15.5.5 (iv) and (v))"
        },
        {
          "question": "(Chapter 15+16) 11. What is meant by setting of cement?",
          "answer": "Setting of cement refers to the property of cement paste (cement mixed with water) hardening to a stone-like mass when allowed to stand for some time. This process involves chemical reactions, primarily hydration and hydrolysis of the cement components (like tricalcium aluminate and tricalcium silicate), leading to the formation of colloidal gels and crystalline structures (like calcium hydroxide and calcium sulpho-aluminate) that interlock and harden the mass. (from Chapter 15, Section 15.5.6)"
        },
        {
          "question": "(Chapter 15+16) 12. What is the role of phosphorus in growth of plants?",
          "answer": "Phosphorus is required by plants to:\n-   Stimulate early growth.\n-   Accelerate seed and fruit formation during later stages of growth.\n-   Increase resistance to diseases.\n(from Chapter 15, Section 15.4.2)"
        },
        {
          "question": "(Chapter 15+16) 13. Give the role/importance of potassium in the growth of plants.",
          "answer": "Potassium is required by plants for:\n-   Formation of starch, sugar, and fibrous material.\n-   Increasing resistance to diseases.\n-   Making plants strong by helping in healthy root development.\n-   Helping in the ripening of seeds, fruits, and cereals.\n(Potassium fertilizers are noted as especially useful for tobacco, coffee, potato, and corn).\n(from Chapter 15, Section 15.4.3)"
        },
        {
          "question": "(Chapter 15+16) 14. Write names of steps in paper making process.",
          "answer": "The essential steps mentioned for the Neutral Sulphite Semi Chemical Process (pulping) and paper making are:\n**Pulping:**\n1.  Cutting of Raw Materials\n2.  Dry Cleaning\n3.  Wet Cleaning\n4.  Screening\n5.  Digestion\n6.  Blow Tank\n7.  Pulp Washing\n8.  Bleaching\n9.  Stock Preparation Plant\n**Paper Making Machine Stages:**\n1.  Flow Spreader\n2.  Head Box\n3.  Fourdrinier Table\n4.  Press Section\n5.  Dryer Section\n6.  Calendar Stock\n7.  Reel\n(from Chapter 15, Section 15.6.5)"
        },
        {
          "question": "(Chapter 15+16) 15. What do you mean by prilling of urea?* (Duplicate of Q8)",
          "answer": "Prilling of urea is the process of converting molten urea into solid, pellet-like form. The molten urea (around 99.7%) obtained after evaporation is sprayed down from the top of a prilling tower using a prilling bucket. As the droplets fall, they are cooled by an upward current of air, causing them to solidify into tiny, hard pellets called prills. (from Chapter 15, Section 15.4.1 (ii), Prilling section)"
        }
      ]



];
