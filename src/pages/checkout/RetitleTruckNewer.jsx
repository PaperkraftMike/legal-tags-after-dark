import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Wade T.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2022 Ford F-150",
    "time": "4 min ago"
  },
  {
    "name": "Shane M.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2023 RAM 1500",
    "time": "10 min ago"
  },
  {
    "name": "Brett R.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2020 Chevy Silverado",
    "time": "16 min ago"
  },
  {
    "name": "Clint K.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2021 Toyota Tundra",
    "time": "22 min ago"
  },
  {
    "name": "Rusty W.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2019 GMC Sierra",
    "time": "28 min ago"
  },
  {
    "name": "Buck L.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "2022 Nissan Frontier",
    "time": "34 min ago"
  },
  {
    "name": "Troy H.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "2023 Ford Ranger",
    "time": "40 min ago"
  },
  {
    "name": "Vince P.",
    "state": "VA",
    "action": "just retitled",
    "vehicle": "2020 Toyota Tacoma",
    "time": "46 min ago"
  }
];

export default function RetitleTruckNewer() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-newer-truck"
      vehicleLabel="Truck Retitle & Registration"
      vehicleSubtitle="Trucks 1 Ton or Less · 2016 or Newer · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Truck &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-truck-newer.png"
      socialProof={socialProof}
    />
  );
}
