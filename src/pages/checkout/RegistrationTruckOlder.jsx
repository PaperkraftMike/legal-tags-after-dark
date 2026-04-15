import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Dave J.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "2010 Ford F-150",
    "time": "4 min ago"
  },
  {
    "name": "Ron M.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "2008 Chevy Silverado",
    "time": "9 min ago"
  },
  {
    "name": "Bill S.",
    "state": "GA",
    "action": "saved $1,900 in sales tax",
    "vehicle": "2012 RAM 1500",
    "time": "15 min ago"
  },
  {
    "name": "Wayne K.",
    "state": "NC",
    "action": "just registered",
    "vehicle": "2014 Toyota Tacoma",
    "time": "20 min ago"
  },
  {
    "name": "Gary L.",
    "state": "AZ",
    "action": "just registered",
    "vehicle": "2007 Nissan Titan",
    "time": "25 min ago"
  },
  {
    "name": "Rick P.",
    "state": "CO",
    "action": "saved $2,200 in sales tax",
    "vehicle": "2011 GMC Sierra",
    "time": "29 min ago"
  },
  {
    "name": "Joe D.",
    "state": "OH",
    "action": "just registered",
    "vehicle": "2013 Ford Ranger",
    "time": "33 min ago"
  },
  {
    "name": "Carl W.",
    "state": "VA",
    "action": "just registered",
    "vehicle": "2009 Chevy Colorado",
    "time": "37 min ago"
  }
];

export default function RegistrationTruckOlder() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-trucks-11"
      vehicleLabel="Truck Registration"
      vehicleSubtitle="Trucks 1 Ton or Less · 2015 or Older"
      headlineAction="Registration"
      headlineVehicle="Truck"
      includesPlates={true}
      heroImage="/images/checkout/registration-truck-older.png"
      socialProof={socialProof}
    />
  );
}
