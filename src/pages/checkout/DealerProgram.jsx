import CheckoutTemplate from '../CheckoutTemplate';

export default function DealerProgram() {
  return (
    <CheckoutTemplate
      samcartSlug="dealer-program-llc-creation"
      vehicleLabel="Dealer Program"
      vehicleSubtitle="Volume Pricing for Dealers"
      headlineAction="Registration"
      headlineVehicle="Dealer"
      priceAfter="$1,097"
      includesPlates={false}
      heroImage="/images/checkout/dealer-program.png"
    />
  );
}
