import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Doug M.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "2023 Airstream Classic",
    "time": "4 min ago"
  },
  {
    "name": "Ken R.",
    "state": "FL",
    "action": "saved $3,200 in sales tax",
    "vehicle": "2024 Grand Design",
    "time": "9 min ago"
  },
  {
    "name": "Phil K.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "2022 Forest River Toy Hauler",
    "time": "14 min ago"
  },
  {
    "name": "Bob W.",
    "state": "AZ",
    "action": "just registered",
    "vehicle": "2023 Jayco Eagle",
    "time": "19 min ago"
  },
  {
    "name": "Tim L.",
    "state": "CO",
    "action": "saved $4,100 in sales tax",
    "vehicle": "2024 Keystone Cougar",
    "time": "24 min ago"
  },
  {
    "name": "Don H.",
    "state": "GA",
    "action": "just registered",
    "vehicle": "2022 Coachmen Catalina",
    "time": "29 min ago"
  },
  {
    "name": "Art P.",
    "state": "NC",
    "action": "just registered",
    "vehicle": "2023 Winnebago Minnie",
    "time": "34 min ago"
  },
  {
    "name": "Lee B.",
    "state": "OH",
    "action": "saved $2,800 in sales tax",
    "vehicle": "2024 Heartland Bighorn",
    "time": "38 min ago"
  }
];

export default function RegistrationTrailer() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-trailers"
      vehicleLabel="Trailer Registration"
      vehicleSubtitle="Trailers & Toy Haulers · Permanent Registration"
      headlineAction="Registration"
      headlineVehicle="Trailer"
      includesPlates={true}
      heroImage="/images/checkout/registration-trailer.png"
      socialProof={socialProof}
    />
  );
}
