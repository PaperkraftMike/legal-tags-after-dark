import CheckoutTemplate from '../CheckoutTemplate';

const socialProof = [
  {
    "name": "Walt T.",
    "state": "CA",
    "action": "just retitled",
    "vehicle": "2018 Winnebago Vista",
    "time": "4 min ago"
  },
  {
    "name": "Fran M.",
    "state": "FL",
    "action": "just retitled",
    "vehicle": "2015 Thor Ace",
    "time": "11 min ago"
  },
  {
    "name": "Hal R.",
    "state": "TX",
    "action": "just retitled",
    "vehicle": "2019 Tiffin Allegro",
    "time": "18 min ago"
  },
  {
    "name": "Irma K.",
    "state": "AZ",
    "action": "just retitled",
    "vehicle": "2012 Fleetwood Bounder",
    "time": "25 min ago"
  },
  {
    "name": "Jack W.",
    "state": "CO",
    "action": "just retitled",
    "vehicle": "2017 Forest River Georgetown",
    "time": "32 min ago"
  },
  {
    "name": "Kay L.",
    "state": "GA",
    "action": "just retitled",
    "vehicle": "2020 Coachmen Pursuit",
    "time": "39 min ago"
  },
  {
    "name": "Leo H.",
    "state": "NV",
    "action": "just retitled",
    "vehicle": "2014 Newmar Canyon Star",
    "time": "46 min ago"
  },
  {
    "name": "May P.",
    "state": "WA",
    "action": "just retitled",
    "vehicle": "2016 Entegra Aspire",
    "time": "53 min ago"
  }
];

export default function RetitleRv() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-rv"
      vehicleLabel="RV Retitle & Registration"
      vehicleSubtitle="RVs & Motorhomes · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="RV &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-rv.png"
      socialProof={socialProof}
    />
  );
}
