import CheckoutTemplate from '../CheckoutTemplate';

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
    />
  );
}
