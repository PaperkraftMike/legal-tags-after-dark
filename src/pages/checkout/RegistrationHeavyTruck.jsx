import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Mike H.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "2023 Ford F-350",
    "time": "3 min ago"
  },
  {
    "name": "Dan R.",
    "state": "CA",
    "action": "saved $5,600 in sales tax",
    "vehicle": "2024 RAM 3500",
    "time": "8 min ago"
  },
  {
    "name": "Steve B.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "2022 Chevy 2500HD",
    "time": "13 min ago"
  },
  {
    "name": "Jim K.",
    "state": "GA",
    "action": "saved $4,800 in sales tax",
    "vehicle": "2023 Ford F-250",
    "time": "18 min ago"
  },
  {
    "name": "Paul W.",
    "state": "AZ",
    "action": "just registered",
    "vehicle": "2024 GMC Sierra 3500",
    "time": "23 min ago"
  },
  {
    "name": "Tony M.",
    "state": "CO",
    "action": "saved $6,200 in sales tax",
    "vehicle": "2022 RAM 2500",
    "time": "28 min ago"
  },
  {
    "name": "Ray L.",
    "state": "NC",
    "action": "just registered",
    "vehicle": "2023 Chevy 3500",
    "time": "33 min ago"
  },
  {
    "name": "Ed P.",
    "state": "VA",
    "action": "just registered",
    "vehicle": "2024 Ford F-450",
    "time": "38 min ago"
  }
];

export default function RegistrationHeavyTruck() {
  return (
    <CheckoutTemplate
      samcartSlug="heavy-truck-registration"
      vehicleLabel="Heavy Truck Registration"
      vehicleSubtitle="Trucks Over 1 Ton (F-250, F-350, 2500, 3500+)"
      headlineAction="Registration"
      headlineVehicle="Heavy Truck"
      includesPlates={true}
      heroImage="/images/checkout/registration-heavy-truck.png"
      socialProof={socialProof}
    />
  );
}
