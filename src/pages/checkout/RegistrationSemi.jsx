import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Eddie T.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "2023 Peterbilt 579",
    "time": "5 min ago"
  },
  {
    "name": "Victor M.",
    "state": "CA",
    "action": "saved $8,400 in sales tax",
    "vehicle": "2024 Kenworth T680",
    "time": "12 min ago"
  },
  {
    "name": "Carl R.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "2022 Freightliner Cascadia",
    "time": "18 min ago"
  },
  {
    "name": "Oscar K.",
    "state": "IL",
    "action": "just registered",
    "vehicle": "2023 Volvo VNL 860",
    "time": "24 min ago"
  },
  {
    "name": "Ivan W.",
    "state": "GA",
    "action": "saved $7,200 in sales tax",
    "vehicle": "2024 Mack Anthem",
    "time": "30 min ago"
  },
  {
    "name": "Luis L.",
    "state": "AZ",
    "action": "just registered",
    "vehicle": "2022 International LT",
    "time": "36 min ago"
  },
  {
    "name": "Frank H.",
    "state": "PA",
    "action": "just registered",
    "vehicle": "2023 Western Star 5700",
    "time": "42 min ago"
  },
  {
    "name": "Albert P.",
    "state": "OH",
    "action": "saved $6,800 in sales tax",
    "vehicle": "2024 Peterbilt 389",
    "time": "48 min ago"
  }
];

export default function RegistrationSemi() {
  return (
    <CheckoutTemplate
      samcartSlug="semi-truck-registration"
      vehicleLabel="Semi Truck Registration"
      vehicleSubtitle="Semi Trucks & Semi Trailers"
      headlineAction="Registration"
      headlineVehicle="Semi Truck"
      includesPlates={true}
      heroImage="/images/checkout/registration-semi.png"
      socialProof={socialProof}
    />
  );
}
