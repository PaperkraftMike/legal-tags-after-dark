import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Zack T.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2020 Polaris RZR XP",
    "time": "4 min ago"
  },
  {
    "name": "Wyatt M.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2018 Can-Am Maverick",
    "time": "11 min ago"
  },
  {
    "name": "Trey R.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "2019 Yamaha YXZ1000R",
    "time": "18 min ago"
  },
  {
    "name": "Seth K.",
    "state": "UT",
    "action": "just retitled",
    "vehicle": "2021 Honda Pioneer 1000",
    "time": "25 min ago"
  },
  {
    "name": "Reese W.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2017 Kawasaki Mule Pro",
    "time": "32 min ago"
  },
  {
    "name": "Quinn L.",
    "state": "NV",
    "action": "just retitled",
    "vehicle": "2020 Polaris General",
    "time": "39 min ago"
  },
  {
    "name": "Owen H.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2019 Can-Am Defender",
    "time": "46 min ago"
  },
  {
    "name": "Nash P.",
    "state": "MT",
    "action": "just retitled",
    "vehicle": "2018 Arctic Cat Wildcat",
    "time": "53 min ago"
  }
];

export default function RetitleOffRoad() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-off-road-vehicles"
      vehicleLabel="Off-Road Vehicle Retitle & Registration"
      vehicleSubtitle="UTVs · ATVs · Side-by-Sides · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Off-Road Vehicle &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-off-road.png"
      socialProof={socialProof}
    />
  );
}
