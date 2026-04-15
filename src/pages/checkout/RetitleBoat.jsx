import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Skip T.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2015 Sea Ray 260",
    "time": "5 min ago"
  },
  {
    "name": "Bud M.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2018 Grady-White 236",
    "time": "12 min ago"
  },
  {
    "name": "Cliff R.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2012 Chaparral 236 SSi",
    "time": "19 min ago"
  },
  {
    "name": "Dock K.",
    "state": "SC",
    "action": "just retitled",
    "vehicle": "2017 Yamaha AR190",
    "time": "26 min ago"
  },
  {
    "name": "Earl W.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "2019 Cobalt R3",
    "time": "33 min ago"
  },
  {
    "name": "Finn L.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2014 Malibu Wakesetter",
    "time": "40 min ago"
  },
  {
    "name": "Gil H.",
    "state": "MD",
    "action": "just retitled",
    "vehicle": "2016 Boston Whaler 230",
    "time": "47 min ago"
  },
  {
    "name": "Hal P.",
    "state": "NJ",
    "action": "just retitled",
    "vehicle": "2020 Wellcraft 182",
    "time": "54 min ago"
  }
];

export default function RetitleBoat() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-boat"
      vehicleLabel="Boat Retitle & Registration"
      vehicleSubtitle="Boats & Watercraft · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Boat &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-boat.png"
      socialProof={socialProof}
    />
  );
}
