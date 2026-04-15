import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Alex T.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "1998 Nissan Skyline R33",
    "time": "6 min ago"
  },
  {
    "name": "Jason M.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "1997 Toyota Land Cruiser 70",
    "time": "14 min ago"
  },
  {
    "name": "Derek R.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "1996 Mitsubishi Delica",
    "time": "22 min ago"
  },
  {
    "name": "Sean K.",
    "state": "WA",
    "action": "just retitled",
    "vehicle": "2000 Suzuki Cappuccino",
    "time": "30 min ago"
  },
  {
    "name": "Blake W.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "1995 Honda Acty Van",
    "time": "38 min ago"
  },
  {
    "name": "Dylan L.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "1999 Subaru Sambar",
    "time": "46 min ago"
  },
  {
    "name": "Evan H.",
    "state": "NY",
    "action": "just retitled",
    "vehicle": "1997 Mazda Autozam AZ-1",
    "time": "54 min ago"
  },
  {
    "name": "Grant P.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2001 Toyota HiLux Surf",
    "time": "62 min ago"
  }
];

export default function RetitleImport() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-for-imported-vehicles"
      vehicleLabel="Imported Vehicle Retitle & Registration"
      vehicleSubtitle="Imported Vehicles · No Import Documents"
      headlineAction="Retitle"
      headlineVehicle="Imported Vehicle &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-import.png"
      socialProof={socialProof}
    />
  );
}
