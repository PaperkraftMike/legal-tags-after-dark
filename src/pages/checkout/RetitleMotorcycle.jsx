import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Ace T.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2020 Harley Road King",
    "time": "4 min ago"
  },
  {
    "name": "Blaze M.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2018 Ducati Scrambler",
    "time": "11 min ago"
  },
  {
    "name": "Cruz R.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2019 BMW R1200GS",
    "time": "18 min ago"
  },
  {
    "name": "Duke K.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2021 Indian Chief",
    "time": "25 min ago"
  },
  {
    "name": "Finn W.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "2017 Triumph Bonneville",
    "time": "32 min ago"
  },
  {
    "name": "Hawk L.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2020 Honda CB1000R",
    "time": "39 min ago"
  },
  {
    "name": "Jet H.",
    "state": "NV",
    "action": "just retitled",
    "vehicle": "2018 Kawasaki Z900",
    "time": "46 min ago"
  },
  {
    "name": "Knox P.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "2022 Yamaha MT-09",
    "time": "53 min ago"
  }
];

export default function RetitleMotorcycle() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-motorcycles"
      vehicleLabel="Motorcycle Retitle & Registration"
      vehicleSubtitle="Street Legal Motorcycles · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Motorcycle &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-motorcycle.png"
      socialProof={socialProof}
    />
  );
}
