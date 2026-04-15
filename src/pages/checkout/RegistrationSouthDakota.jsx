import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Mark T.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "2024 Tesla Model 3 (financed)",
    "time": "3 min ago"
  },
  {
    "name": "Lisa M.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "2023 BMW X3 (financed)",
    "time": "9 min ago"
  },
  {
    "name": "Ryan R.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "2024 Audi A4 (financed)",
    "time": "15 min ago"
  },
  {
    "name": "Amy K.",
    "state": "NY",
    "action": "just registered",
    "vehicle": "2023 Mercedes C300 (financed)",
    "time": "21 min ago"
  },
  {
    "name": "John W.",
    "state": "NJ",
    "action": "just registered",
    "vehicle": "2024 Lexus ES (financed)",
    "time": "27 min ago"
  },
  {
    "name": "Kate L.",
    "state": "IL",
    "action": "just registered",
    "vehicle": "2023 Volvo XC60 (financed)",
    "time": "33 min ago"
  },
  {
    "name": "Dave H.",
    "state": "WA",
    "action": "just registered",
    "vehicle": "2024 Genesis G70 (financed)",
    "time": "39 min ago"
  },
  {
    "name": "Sara P.",
    "state": "CT",
    "action": "just registered",
    "vehicle": "2023 Acura TLX (financed)",
    "time": "45 min ago"
  }
];

export default function RegistrationSouthDakota() {
  return (
    <CheckoutTemplate
      samcartSlug="south-dakota-registration"
      vehicleLabel="South Dakota Registration"
      vehicleSubtitle="For Financed Vehicles"
      headlineAction="Registration"
      headlineVehicle="Vehicle"
      includesPlates={true}
      heroImage="/images/checkout/registration-south-dakota.png"
      socialProof={socialProof}
    />
  );
}
