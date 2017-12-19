// Import subtypes here and reference them in children
// import SUBTYPE from './SUBTYPE/_data.js';

export default {
    name: "Paints (Pig.)",
    description: require('./desc.md'),
    label: {
        labelDescription: require('./label-desc.md'),
        labelSampleInstructions: [
            {
                labelWarning: "",
                labelVerb: "Paint",
                labelDose: "5ml",
                labelMeta: "onto affected area",
                labelFrequency: "2 times daily",
                labelSecondMeta: ""
            }
        ]
    },
    adviceToClient: require('./advice.md'),
    // children: [
    //     SUBTYPE
    // ]
}