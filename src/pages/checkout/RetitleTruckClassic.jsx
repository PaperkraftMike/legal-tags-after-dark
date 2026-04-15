import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Buck T.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "1978 Ford F-100",
    "time": "6 min ago"
  },
  {
    "name": "Chet M.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "1972 Chevy C10",
    "time": "14 min ago"
  },
  {
    "name": "Dale R.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "1969 Ford Bronco",
    "time": "22 min ago"
  },
  {
    "name": "Gus K.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "1985 Toyota Pickup",
    "time": "30 min ago"
  },
  {
    "name": "Hoss W.",
    "state": "TN",
    "action": "just retitled",
    "vehicle": "1966 Chevy Stepside",
    "time": "38 min ago"
  },
  {
    "name": "Ike L.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "1976 Dodge Power Wagon",
    "time": "46 min ago"
  },
  {
    "name": "Jeb H.",
    "state": "OH",
    "action": "just retitled",
    "vehicle": "1970 International Scout",
    "time": "54 min ago"
  },
  {
    "name": "Luke P.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "1988 Jeep Comanche",
    "time": "62 min ago"
  }
];

export default function RetitleTruckClassic() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-classic-cars"
      vehicleLabel="Classic Truck Retitle"
      vehicleSubtitle="Trucks 1996 & Older · Title Only"
      headlineAction="Retitle"
      headlineVehicle="Classic Truck"
      includesPlates={false}
      heroImage="/images/checkout/retitle-truck-classic.png"
      socialProof={socialProof}
    />
  );
}
