import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Jake M.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "2024 Harley Road Glide",
    "time": "3 min ago"
  },
  {
    "name": "Chris R.",
    "state": "FL",
    "action": "saved $1,800 in sales tax",
    "vehicle": "2023 BMW R1250GS",
    "time": "7 min ago"
  },
  {
    "name": "Pete K.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "2022 Ducati Monster",
    "time": "12 min ago"
  },
  {
    "name": "Sam W.",
    "state": "NY",
    "action": "saved $2,400 in sales tax",
    "vehicle": "2024 Indian Scout",
    "time": "17 min ago"
  },
  {
    "name": "Nick L.",
    "state": "AZ",
    "action": "just registered",
    "vehicle": "2023 Kawasaki Ninja",
    "time": "22 min ago"
  },
  {
    "name": "Ryan D.",
    "state": "CO",
    "action": "saved $1,200 in sales tax",
    "vehicle": "2024 Triumph Tiger",
    "time": "27 min ago"
  },
  {
    "name": "Matt P.",
    "state": "GA",
    "action": "just registered",
    "vehicle": "2022 Honda Africa Twin",
    "time": "32 min ago"
  },
  {
    "name": "Eric B.",
    "state": "NV",
    "action": "just registered",
    "vehicle": "2023 Harley Sportster S",
    "time": "36 min ago"
  }
];

export default function RegistrationMotorcycle() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-for-motorcycles"
      vehicleLabel="Motorcycle Registration"
      vehicleSubtitle="Street Legal Motorcycles"
      headlineAction="Registration"
      headlineVehicle="Motorcycle"
      includesPlates={true}
      heroImage="/images/checkout/registration-motorcycle.png"
      socialProof={socialProof}
    />
  );
}
