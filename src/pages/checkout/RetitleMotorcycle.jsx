import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleMotorcycle() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-motorcycles"
      vehicleLabel="Motorcycle Retitle & Registration"
      vehicleSubtitle="Street Legal Motorcycles · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Motorcycle &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-motorcycle.png"
    />
  );
}
