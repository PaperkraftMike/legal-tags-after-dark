import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Sgt. Mike R.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "M35 Deuce & a Half",
    "time": "8 min ago"
  },
  {
    "name": "Dan K.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "Humvee HMMWV",
    "time": "15 min ago"
  },
  {
    "name": "Pat W.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "M151 MUTT",
    "time": "22 min ago"
  },
  {
    "name": "Tom L.",
    "state": "VA",
    "action": "just registered",
    "vehicle": "LMTV M1078",
    "time": "30 min ago"
  },
  {
    "name": "Jim H.",
    "state": "GA",
    "action": "just registered",
    "vehicle": "M998 Humvee",
    "time": "38 min ago"
  },
  {
    "name": "Bob P.",
    "state": "AZ",
    "action": "just registered",
    "vehicle": "Willys MB Jeep",
    "time": "45 min ago"
  },
  {
    "name": "Al M.",
    "state": "CO",
    "action": "just registered",
    "vehicle": "M939 5-Ton",
    "time": "52 min ago"
  },
  {
    "name": "Ron B.",
    "state": "NC",
    "action": "just registered",
    "vehicle": "M1097 Humvee",
    "time": "58 min ago"
  }
];

export default function RegistrationMilitary() {
  return (
    <CheckoutTemplate
      samcartSlug="military-vehicle-retitle"
      vehicleLabel="Military Vehicle Registration"
      vehicleSubtitle="Military Vehicles"
      headlineAction="Registration"
      headlineVehicle="Military Vehicle"
      includesPlates={true}
      heroImage="/images/checkout/registration-military.png"
      socialProof={socialProof}
    />
  );
}
