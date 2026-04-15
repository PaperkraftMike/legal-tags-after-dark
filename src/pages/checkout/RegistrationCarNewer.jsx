import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "James T.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "2024 Porsche Cayenne",
    "time": "2 min ago"
  },
  {
    "name": "Sarah M.",
    "state": "NY",
    "action": "saved $6,200 in sales tax",
    "vehicle": "2023 Tesla Model Y",
    "time": "5 min ago"
  },
  {
    "name": "Robert K.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "2022 BMW X5",
    "time": "8 min ago"
  },
  {
    "name": "Amanda L.",
    "state": "TX",
    "action": "saved $4,800 in sales tax",
    "vehicle": "2024 Lexus RX 350",
    "time": "11 min ago"
  },
  {
    "name": "Michael D.",
    "state": "NJ",
    "action": "just registered",
    "vehicle": "2023 Mercedes GLE 350",
    "time": "14 min ago"
  },
  {
    "name": "Chris W.",
    "state": "IL",
    "action": "saved $5,400 in sales tax",
    "vehicle": "2024 Audi Q5",
    "time": "18 min ago"
  },
  {
    "name": "Patricia R.",
    "state": "WA",
    "action": "just registered",
    "vehicle": "2022 Genesis GV80",
    "time": "22 min ago"
  },
  {
    "name": "Daniel F.",
    "state": "CT",
    "action": "saved $9,400 in sales tax",
    "vehicle": "2024 Porsche Macan",
    "time": "25 min ago"
  }
];

export default function RegistrationCarNewer() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-newer-vehicles"
      vehicleLabel="Car Registration"
      vehicleSubtitle="Cars 2016 or Newer"
      headlineAction="Registration"
      headlineVehicle="Car"
      includesPlates={true}
      heroImage="/images/checkout/registration-car-newer.png"
      socialProof={socialProof}
    />
  );
}
