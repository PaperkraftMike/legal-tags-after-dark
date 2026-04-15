import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Big Al T.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2019 Peterbilt 389",
    "time": "8 min ago"
  },
  {
    "name": "Mack M.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2017 Kenworth T880",
    "time": "16 min ago"
  },
  {
    "name": "Diesel R.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2020 Freightliner Cascadia",
    "time": "24 min ago"
  },
  {
    "name": "Hammer K.",
    "state": "IL",
    "action": "just retitled",
    "vehicle": "2018 Volvo VNL 760",
    "time": "32 min ago"
  },
  {
    "name": "Tank W.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2021 Mack Pinnacle",
    "time": "40 min ago"
  },
  {
    "name": "Axle L.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2016 International ProStar",
    "time": "48 min ago"
  },
  {
    "name": "Turbo H.",
    "state": "PA",
    "action": "just retitled",
    "vehicle": "2019 Western Star 4900",
    "time": "56 min ago"
  },
  {
    "name": "Crusher P.",
    "state": "OH",
    "action": "just retitled",
    "vehicle": "2020 Peterbilt 567",
    "time": "64 min ago"
  }
];

export default function RetitleSemi() {
  return (
    <CheckoutTemplate
      samcartSlug="semi-truck-trailer-retitle"
      vehicleLabel="Semi Truck Retitle & Registration"
      vehicleSubtitle="Semi Trucks & Semi Trailers · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Semi Truck &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-semi.png"
      socialProof={socialProof}
    />
  );
}
