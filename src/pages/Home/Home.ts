// home.ts

// Define and export the CardData type
export type CardData = {
    cardTitle: string;
    value: number;
};

// Define the homeData array
const homeData: CardData[] = [
    { cardTitle: "All Cases", value: 150 },
    { cardTitle: "Filed Cases", value: 30 },
    { cardTitle: "Accepted Cases", value: 25 },
    { cardTitle: "Rejected Cases", value: 10 },
    { cardTitle: "Registered Cases", value: 50 },
    { cardTitle: "Resolved Cases", value: 20 },
    { cardTitle: "Closed Cases", value: 15 },
];

// Export homeData as the default export
export default homeData;
