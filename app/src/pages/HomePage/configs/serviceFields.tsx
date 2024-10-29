import { serviceFieldInterface } from "../../../interfaces/serviceFields.interface"

const serviceFields: serviceFieldInterface[] = [
  {
    title: "Find one flight",
    desc: "Find a specific flight by filtering through various options to view all the details of that flight.",
    image: "/ticketOne_blue.png",
    link: "/flight",
  },

  {
    title: "Find various flights",
    desc: "Find multiple flights by filtering through advanced options tailored to your needs.",
    image: "/ticketMult_blue.png",
    link: "/flights",
  },

  {
    title: "Find airports",
    desc: "Find airports by filtering through advanced options to access detailed information. NOT AVAILABLE YET",
    image: "/landing_blue.png",
    link: "/#",
  },
]

export default serviceFields
