import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Sgt. Dan T.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "M35A2 Deuce",
    "time": "10 min ago"
  },
  {
    "name": "Cpl. Jim M.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "HMMWV M1025",
    "time": "20 min ago"
  },
  {
    "name": "PFC Tom R.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "M151A2 MUTT",
    "time": "30 min ago"
  },
  {
    "name": "Maj. Pat K.",
    "state": "VA",
    "action": "just retitled",
    "vehicle": "LMTV M1078",
    "time": "40 min ago"
  },
  {
    "name": "Lt. Roy W.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "M998 Humvee",
    "time": "50 min ago"
  },
  {
    "name": "SSgt. Al L.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "Willys M38A1",
    "time": "60 min ago"
  },
  {
    "name": "Pvt. Ed H.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "M923 5-Ton",
    "time": "70 min ago"
  },
  {
    "name": "Cpt. Ben P.",
    "state": "NC",
    "action": "just retitled",
    "vehicle": "M1097A2 Humvee",
    "time": "80 min ago"
  }
];

export default function RetitleMilitary() {
  return (
    <CheckoutTemplate
      samcartSlug="military-vehicle-retitle"
      vehicleLabel="Military Vehicle Retitle & Registration"
      vehicleSubtitle="Military Vehicles · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Military Vehicle &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-military.png"
      socialProof={socialProof}
    />
  );
}
