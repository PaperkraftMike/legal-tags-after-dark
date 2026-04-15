import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Hank T.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2020 Ford F-350",
    "time": "6 min ago"
  },
  {
    "name": "Bo M.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2018 RAM 3500",
    "time": "14 min ago"
  },
  {
    "name": "Ace R.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2019 Chevy 2500HD",
    "time": "22 min ago"
  },
  {
    "name": "Rex K.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2021 GMC Sierra 3500",
    "time": "30 min ago"
  },
  {
    "name": "Tex W.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2017 Ford F-250",
    "time": "38 min ago"
  },
  {
    "name": "Bud L.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "2022 RAM 2500",
    "time": "46 min ago"
  },
  {
    "name": "Red H.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "2016 Chevy 3500",
    "time": "54 min ago"
  },
  {
    "name": "Slim P.",
    "state": "VA",
    "action": "just retitled",
    "vehicle": "2020 Ford F-450",
    "time": "62 min ago"
  }
];

export default function RetitleHeavyTruck() {
  return (
    <CheckoutTemplate
      samcartSlug="heavy-truck-retitle"
      vehicleLabel="Heavy Truck Retitle & Registration"
      vehicleSubtitle="Trucks Over 1 Ton · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Heavy Truck &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-heavy-truck.png"
      socialProof={socialProof}
    />
  );
}
