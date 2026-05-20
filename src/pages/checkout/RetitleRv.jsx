import CheckoutTemplate from '../CheckoutTemplate';

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
    />
  );
}
