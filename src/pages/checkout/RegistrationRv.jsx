import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Frank T.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "2024 Winnebago Vista",
    "time": "2 min ago"
  },
  {
    "name": "Carol M.",
    "state": "FL",
    "action": "saved $9,800 in sales tax",
    "vehicle": "2023 Thor Challenger",
    "time": "6 min ago"
  },
  {
    "name": "George R.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "2022 Tiffin Allegro",
    "time": "11 min ago"
  },
  {
    "name": "Diane K.",
    "state": "AZ",
    "action": "saved $12,400 in sales tax",
    "vehicle": "2024 Newmar Bay Star",
    "time": "16 min ago"
  },
  {
    "name": "Henry W.",
    "state": "CO",
    "action": "just registered",
    "vehicle": "2023 Fleetwood Bounder",
    "time": "21 min ago"
  },
  {
    "name": "Louise L.",
    "state": "GA",
    "action": "saved $7,600 in sales tax",
    "vehicle": "2022 Coachmen Mirada",
    "time": "26 min ago"
  },
  {
    "name": "Walter H.",
    "state": "NV",
    "action": "just registered",
    "vehicle": "2024 Forest River Georgetown",
    "time": "31 min ago"
  },
  {
    "name": "Janet P.",
    "state": "WA",
    "action": "saved $11,200 in sales tax",
    "vehicle": "2023 Entegra Vision",
    "time": "35 min ago"
  }
];

export default function RegistrationRv() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-rv"
      vehicleLabel="RV Registration"
      vehicleSubtitle="RVs & Motorhomes"
      headlineAction="Registration"
      headlineVehicle="RV"
      includesPlates={true}
      heroImage="/images/checkout/registration-rv.png"
      socialProof={socialProof}
    />
  );
}
