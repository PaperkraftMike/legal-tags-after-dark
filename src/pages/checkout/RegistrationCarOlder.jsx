import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Tom R.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "2012 Toyota Camry",
    "time": "3 min ago"
  },
  {
    "name": "Linda K.",
    "state": "TX",
    "action": "saved $2,400 in sales tax",
    "vehicle": "2008 Honda Accord",
    "time": "7 min ago"
  },
  {
    "name": "Mark S.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "2014 Chevy Malibu",
    "time": "12 min ago"
  },
  {
    "name": "Nancy W.",
    "state": "NY",
    "action": "just registered",
    "vehicle": "2010 Ford Fusion",
    "time": "15 min ago"
  },
  {
    "name": "Kevin D.",
    "state": "NJ",
    "action": "saved $1,800 in sales tax",
    "vehicle": "2013 Nissan Altima",
    "time": "20 min ago"
  },
  {
    "name": "Barbara M.",
    "state": "IL",
    "action": "just registered",
    "vehicle": "2009 Subaru Outback",
    "time": "24 min ago"
  },
  {
    "name": "Greg P.",
    "state": "WA",
    "action": "just registered",
    "vehicle": "2015 VW Jetta",
    "time": "28 min ago"
  },
  {
    "name": "Susan F.",
    "state": "AZ",
    "action": "saved $2,100 in sales tax",
    "vehicle": "2011 Hyundai Sonata",
    "time": "31 min ago"
  }
];

export default function RegistrationCarOlder() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-cars-11"
      vehicleLabel="Car Registration"
      vehicleSubtitle="Cars 2015 or Older"
      headlineAction="Registration"
      headlineVehicle="Car"
      includesPlates={true}
      heroImage="/images/checkout/registration-car-older.png"
      socialProof={socialProof}
    />
  );
}
