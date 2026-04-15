import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Andy T.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2005 Chevy Impala",
    "time": "4 min ago"
  },
  {
    "name": "Donna M.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2010 Honda Accord",
    "time": "10 min ago"
  },
  {
    "name": "Larry R.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2003 Toyota Corolla",
    "time": "16 min ago"
  },
  {
    "name": "Cindy K.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2008 Ford Focus",
    "time": "22 min ago"
  },
  {
    "name": "Roger W.",
    "state": "OH",
    "action": "just retitled",
    "vehicle": "2012 Nissan Altima",
    "time": "28 min ago"
  },
  {
    "name": "Pam L.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "2001 Subaru Legacy",
    "time": "34 min ago"
  },
  {
    "name": "Harold H.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2006 VW Passat",
    "time": "40 min ago"
  },
  {
    "name": "Jean P.",
    "state": "NJ",
    "action": "just retitled",
    "vehicle": "2014 Hyundai Sonata",
    "time": "46 min ago"
  }
];

export default function RetitleCarMid() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-cars-11"
      vehicleLabel="Car Retitle & Registration"
      vehicleSubtitle="Cars 1997–2015 · Lost or Missing Title"
      headlineAction="Retitle"
      headlineVehicle="Car &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-car-mid.png"
      socialProof={socialProof}
    />
  );
}
