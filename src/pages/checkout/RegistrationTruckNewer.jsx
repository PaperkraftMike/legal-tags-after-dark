import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Brad T.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "2024 Ford F-150",
    "time": "2 min ago"
  },
  {
    "name": "Keith M.",
    "state": "FL",
    "action": "saved $4,200 in sales tax",
    "vehicle": "2023 RAM 1500",
    "time": "6 min ago"
  },
  {
    "name": "Jeff R.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "2022 Chevy Silverado 1500",
    "time": "10 min ago"
  },
  {
    "name": "Scott L.",
    "state": "GA",
    "action": "saved $3,800 in sales tax",
    "vehicle": "2024 Toyota Tundra",
    "time": "14 min ago"
  },
  {
    "name": "Brian W.",
    "state": "NC",
    "action": "just registered",
    "vehicle": "2023 GMC Sierra 1500",
    "time": "18 min ago"
  },
  {
    "name": "Derek H.",
    "state": "AZ",
    "action": "saved $5,100 in sales tax",
    "vehicle": "2024 Ford Ranger",
    "time": "22 min ago"
  },
  {
    "name": "Randy K.",
    "state": "CO",
    "action": "just registered",
    "vehicle": "2022 Nissan Frontier",
    "time": "26 min ago"
  },
  {
    "name": "Larry P.",
    "state": "VA",
    "action": "saved $3,400 in sales tax",
    "vehicle": "2023 Toyota Tacoma",
    "time": "30 min ago"
  }
];

export default function RegistrationTruckNewer() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-trucks"
      vehicleLabel="Truck Registration"
      vehicleSubtitle="Trucks 1 Ton or Less · 2016 or Newer"
      headlineAction="Registration"
      headlineVehicle="Truck"
      includesPlates={true}
      heroImage="/images/checkout/registration-truck-newer.png"
      socialProof={socialProof}
    />
  );
}
