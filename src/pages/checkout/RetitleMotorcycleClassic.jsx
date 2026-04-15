import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Ace T.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "1975 Honda CB750",
    "time": "8 min ago"
  },
  {
    "name": "Blaze M.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "1968 Triumph Bonneville",
    "time": "16 min ago"
  },
  {
    "name": "Cruz R.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "1972 Harley Shovelhead",
    "time": "24 min ago"
  },
  {
    "name": "Duke K.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "1985 BMW R80",
    "time": "32 min ago"
  },
  {
    "name": "Finn W.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "1970 Norton Commando",
    "time": "40 min ago"
  },
  {
    "name": "Hawk L.",
    "state": "TN",
    "action": "just retitled",
    "vehicle": "1978 Kawasaki KZ1000",
    "time": "48 min ago"
  },
  {
    "name": "Jet H.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "1965 Indian Chief",
    "time": "56 min ago"
  },
  {
    "name": "Knox P.",
    "state": "OH",
    "action": "just retitled",
    "vehicle": "1980 Yamaha XS650",
    "time": "64 min ago"
  }
];

export default function RetitleMotorcycleClassic() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-classic-cars"
      vehicleLabel="Classic Motorcycle Retitle"
      vehicleSubtitle="Motorcycles 1996 & Older · Title Only"
      headlineAction="Retitle"
      headlineVehicle="Classic Motorcycle"
      includesPlates={false}
      heroImage="/images/checkout/retitle-motorcycle-classic.png"
      socialProof={socialProof}
    />
  );
}
