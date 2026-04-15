import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Bobby T.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "1969 Chevy Camaro SS",
    "time": "5 min ago"
  },
  {
    "name": "Roy M.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "1972 Ford Mustang Mach 1",
    "time": "12 min ago"
  },
  {
    "name": "Earl R.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "1967 Pontiac GTO",
    "time": "19 min ago"
  },
  {
    "name": "Hank K.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "1970 Plymouth Barracuda",
    "time": "26 min ago"
  },
  {
    "name": "Clyde W.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "1965 Ford Thunderbird",
    "time": "33 min ago"
  },
  {
    "name": "Burt L.",
    "state": "TN",
    "action": "just retitled",
    "vehicle": "1955 Chevy Bel Air",
    "time": "40 min ago"
  },
  {
    "name": "Otis H.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "1968 Dodge Charger",
    "time": "47 min ago"
  },
  {
    "name": "Floyd P.",
    "state": "OH",
    "action": "just retitled",
    "vehicle": "1963 Corvette Stingray",
    "time": "54 min ago"
  }
];

export default function RetitleCarClassic() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-classic-cars"
      vehicleLabel="Classic Vehicle Retitle"
      vehicleSubtitle="Cars 1996 & Older · Title Only"
      headlineAction="Retitle"
      headlineVehicle="Classic Car"
      includesPlates={false}
      heroImage="/images/checkout/retitle-car-classic.png"
      socialProof={socialProof}
    />
  );
}
