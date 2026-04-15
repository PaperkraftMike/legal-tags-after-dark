import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Bill T.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2018 Airstream Bambi",
    "time": "5 min ago"
  },
  {
    "name": "Chuck M.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2015 Grand Design Reflection",
    "time": "12 min ago"
  },
  {
    "name": "Dirk R.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2020 Forest River Salem",
    "time": "19 min ago"
  },
  {
    "name": "Ernie K.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2012 Jayco Jay Flight",
    "time": "26 min ago"
  },
  {
    "name": "Floyd W.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "2017 Keystone Passport",
    "time": "33 min ago"
  },
  {
    "name": "Glen L.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2019 Coachmen Freedom",
    "time": "40 min ago"
  },
  {
    "name": "Hugh H.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "2014 Winnebago Micro Minnie",
    "time": "47 min ago"
  },
  {
    "name": "Ivan P.",
    "state": "OH",
    "action": "just retitled",
    "vehicle": "2016 Heartland Trail Runner",
    "time": "54 min ago"
  }
];

export default function RetitleTrailer() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-trailers"
      vehicleLabel="Trailer Retitle & Registration"
      vehicleSubtitle="Trailers & Toy Haulers · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Trailer &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-trailer.png"
      socialProof={socialProof}
    />
  );
}
