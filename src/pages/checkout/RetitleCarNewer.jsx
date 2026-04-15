import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Brian T.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2022 BMW 330i",
    "time": "3 min ago"
  },
  {
    "name": "Karen M.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2023 Honda Civic",
    "time": "8 min ago"
  },
  {
    "name": "Steve R.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2020 Toyota Camry",
    "time": "14 min ago"
  },
  {
    "name": "Debbie K.",
    "state": "NY",
    "action": "just retitled",
    "vehicle": "2021 Hyundai Elantra",
    "time": "20 min ago"
  },
  {
    "name": "Gary W.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2019 Mazda3",
    "time": "26 min ago"
  },
  {
    "name": "Helen L.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2022 Kia K5",
    "time": "32 min ago"
  },
  {
    "name": "Frank H.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "2020 Subaru WRX",
    "time": "38 min ago"
  },
  {
    "name": "Rose P.",
    "state": "NJ",
    "action": "just retitled",
    "vehicle": "2023 VW Taos",
    "time": "44 min ago"
  }
];

export default function RetitleCarNewer() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-vehicles-newer-than-10-years"
      vehicleLabel="Car Retitle & Registration"
      vehicleSubtitle="Cars 2016 or Newer · Lost or Missing Title"
      headlineAction="Retitle"
      headlineVehicle="Car &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-car-newer.png"
      socialProof={socialProof}
    />
  );
}
