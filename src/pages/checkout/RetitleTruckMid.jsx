import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Lenny T.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2008 Ford F-150",
    "time": "5 min ago"
  },
  {
    "name": "Norm M.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2005 Chevy Silverado",
    "time": "12 min ago"
  },
  {
    "name": "Cliff R.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2010 RAM 1500",
    "time": "19 min ago"
  },
  {
    "name": "Woody K.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2003 Toyota Tacoma",
    "time": "26 min ago"
  },
  {
    "name": "Sam W.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2012 GMC Sierra",
    "time": "33 min ago"
  },
  {
    "name": "Gus L.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "2007 Nissan Titan",
    "time": "39 min ago"
  },
  {
    "name": "Max H.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "2014 Ford Ranger",
    "time": "45 min ago"
  },
  {
    "name": "Ned P.",
    "state": "OH",
    "action": "just retitled",
    "vehicle": "2009 Chevy Colorado",
    "time": "51 min ago"
  }
];

export default function RetitleTruckMid() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-trucks-11"
      vehicleLabel="Truck Retitle & Registration"
      vehicleSubtitle="Trucks 1 Ton or Less · 1997–2015 · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Truck &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-truck-mid.png"
      socialProof={socialProof}
    />
  );
}
