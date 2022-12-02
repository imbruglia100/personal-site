import travelImg from "../../assets/images/travel-advisor.png";
import cryptoImg from "../../assets/images/crypto-media.png";
import petImg from "../../assets/images/pet-adopt.png";
import speedtyper from "../../assets/images/speed-typer.png";

export const projects = [
  {
    title: "Travel Advisor",
    img: travelImg,
    desc: "Dynamically find hotels, restaurants, and attractions around your location. Scroll around on the map to change listings and find new places.",
    url: "https://travel-advisor-fji.netlify.app",
    chips: ["javascript", "css", "html", "react"],
  },
  {
    title: "Crypto Media",
    img: cryptoImg,
    url: "https://crypto-media.netlify.app",
    desc: "Crypto media shares up to date data of all coins, exchanges, and news.",
    chips: ["javascript", "css", "react"],
  },
  {
    title: "Measter of Keys",
    img: speedtyper,
    url: "https://storied-panda-9cbad4.netlify.app",
    desc: "Speed typing game made to improve your speed and accuracy when typing.",
    chips: ["javascript", "react", "tailwind"],
  },
  {
    title: "Pet Adoption",
    img: petImg,
    url: "https://objective-elion-283150.netlify.app",
    desc: "Adopt a pal, or set one up for adoption!",
    chips: ["javascript", "react", "redux", "css"],
  },
];
