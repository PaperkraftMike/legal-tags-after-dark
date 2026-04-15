import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Rick T.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "2024 Sea Ray 320",
    "time": "3 min ago"
  },
  {
    "name": "Alan M.",
    "state": "TX",
    "action": "saved $6,800 in sales tax",
    "vehicle": "2023 Boston Whaler 280",
    "time": "8 min ago"
  },
  {
    "name": "Howard R.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "2022 Grady-White 271",
    "time": "13 min ago"
  },
  {
    "name": "Bruce K.",
    "state": "SC",
    "action": "saved $5,400 in sales tax",
    "vehicle": "2024 Yamaha AR250",
    "time": "18 min ago"
  },
  {
    "name": "Glenn W.",
    "state": "NC",
    "action": "just registered",
    "vehicle": "2023 Chaparral 280 OSX",
    "time": "23 min ago"
  },
  {
    "name": "Dale L.",
    "state": "GA",
    "action": "saved $8,200 in sales tax",
    "vehicle": "2022 Cobalt R5",
    "time": "28 min ago"
  },
  {
    "name": "Vernon H.",
    "state": "MD",
    "action": "just registered",
    "vehicle": "2024 Wellcraft 222",
    "time": "33 min ago"
  },
  {
    "name": "Roy P.",
    "state": "NJ",
    "action": "saved $4,600 in sales tax",
    "vehicle": "2023 Malibu Wakesetter",
    "time": "37 min ago"
  }
];

export default function RegistrationBoat() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-boat"
      vehicleLabel="Boat Registration"
      vehicleSubtitle="Boats & Watercraft"
      headlineAction="Registration"
      headlineVehicle="Boat"
      includesPlates={true}
      heroImage="/images/checkout/registration-boat.png"
      socialProof={socialProof}
    />
  );
}
