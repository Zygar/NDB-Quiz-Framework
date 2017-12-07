// Import subtypes here and reference them in children

export default {
    name: "Ampoules, vials for reconstitution, multi-dose vials",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelVerb: "Inject",
        labelDose: "1 unit",
        labelFrequency: "intravenously every 4 hours"
    },
    adviceToClient: require('./advice.md'),
    // children: []
}
