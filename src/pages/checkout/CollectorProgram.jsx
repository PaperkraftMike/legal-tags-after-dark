import CheckoutTemplate from '../CheckoutTemplate';

export default function CollectorProgram() {
  return (
    <CheckoutTemplate
      samcartSlug="dealer-program-llc-creation"
      vehicleLabel="Collector Program"
      vehicleSubtitle="Volume Pricing for Collectors & Flippers"
      headlineAction="Registration"
      headlineVehicle="Collector"
      priceAfter="$1,097"
      includesPlates={false}
      heroImage="/images/checkout/collector-program.png"
    />
  );
}
