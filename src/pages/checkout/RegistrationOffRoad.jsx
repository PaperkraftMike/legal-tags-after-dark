import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Tyler M.",
    "state": "AZ",
    "action": "just registered",
    "vehicle": "2024 Polaris RZR Pro XP",
    "time": "3 min ago"
  },
  {
    "name": "Chad R.",
    "state": "TX",
    "action": "saved $1,800 in sales tax",
    "vehicle": "2023 Can-Am Maverick X3",
    "time": "8 min ago"
  },
  {
    "name": "Travis K.",
    "state": "CO",
    "action": "just registered",
    "vehicle": "2022 Yamaha YXZ1000R",
    "time": "13 min ago"
  },
  {
    "name": "Dustin W.",
    "state": "UT",
    "action": "just registered",
    "vehicle": "2024 Honda Talon 1000R",
    "time": "18 min ago"
  },
  {
    "name": "Kyle L.",
    "state": "CA",
    "action": "saved $2,200 in sales tax",
    "vehicle": "2023 Kawasaki Teryx KRX",
    "time": "23 min ago"
  },
  {
    "name": "Jason H.",
    "state": "NV",
    "action": "just registered",
    "vehicle": "2024 Polaris Ranger XP",
    "time": "28 min ago"
  },
  {
    "name": "Brandon P.",
    "state": "FL",
    "action": "just registered",
    "vehicle": "2022 Can-Am Defender",
    "time": "33 min ago"
  },
  {
    "name": "Cody B.",
    "state": "MT",
    "action": "saved $1,400 in sales tax",
    "vehicle": "2023 Arctic Cat Wildcat",
    "time": "37 min ago"
  }
];

export default function RegistrationOffRoad() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-off-road-vehicles"
      vehicleLabel="Off-Road Vehicle Registration"
      vehicleSubtitle="UTVs · ATVs · Side-by-Sides · E-Bikes"
      headlineAction="Registration"
      headlineVehicle="Off-Road Vehicle"
      includesPlates={true}
      heroImage="/images/checkout/registration-off-road.png"
      socialProof={socialProof}
    />
  );
}
