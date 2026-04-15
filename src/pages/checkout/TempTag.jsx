import CheckoutTemplate from '../CheckoutTemplate';

export default function TempTag() {
  return (
    <CheckoutTemplate
      samcartSlug="insta-temp-tag-copy"
      vehicleLabel="Temporary Tag"
      vehicleSubtitle="Instant Montana Temp Tag"
      headlineAction="Temp Tag"
      headlineVehicle=""
      priceAfter="$497"
      includesPlates={false}
      heroImage="/images/checkout/temp-tag.png"
    />
  );
}
