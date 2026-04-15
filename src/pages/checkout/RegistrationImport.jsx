import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Alex T.",
    "state": "CA",
    "action": "just registered",
    "vehicle": "1999 Nissan Skyline R34",
    "time": "5 min ago"
  },
  {
    "name": "Jason M.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "2000 Toyota Land Cruiser 80",
    "time": "12 min ago"
  },
  {
    "name": "Derek R.",
    "state": "TX",
    "action": "just registered",
    "vehicle": "1997 Mitsubishi Pajero",
    "time": "19 min ago"
  },
  {
    "name": "Sean K.",
    "state": "WA",
    "action": "just registered",
    "vehicle": "2001 Suzuki Jimny",
    "time": "26 min ago"
  },
  {
    "name": "Blake W.",
    "state": "AZ",
    "action": "just registered",
    "vehicle": "1998 Toyota HiAce",
    "time": "33 min ago"
  },
  {
    "name": "Dylan L.",
    "state": "CO",
    "action": "just registered",
    "vehicle": "2000 Nissan Silvia S15",
    "time": "40 min ago"
  },
  {
    "name": "Evan H.",
    "state": "NY",
    "action": "just registered",
    "vehicle": "1999 Honda Beat",
    "time": "47 min ago"
  },
  {
    "name": "Grant P.",
    "state": "GA",
    "action": "just registered",
    "vehicle": "2001 Mitsubishi Delica",
    "time": "54 min ago"
  }
];

export default function RegistrationImport() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-imports"
      vehicleLabel="Imported Vehicle Registration"
      vehicleSubtitle="Imported Vehicles · Has Import Documents"
      headlineAction="Registration"
      headlineVehicle="Imported Vehicle"
      includesPlates={true}
      heroImage="/images/checkout/registration-import.png"
      socialProof={socialProof}
    />
  );
}
