import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleOffRoad() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-off-road-vehicles"
      vehicleLabel="Off-Road Vehicle Retitle & Registration"
      vehicleSubtitle="UTVs · ATVs · Side-by-Sides · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Off-Road Vehicle &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-off-road.png"
    />
  );
}
