import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleMilitary() {
  return (
    <CheckoutTemplate
      samcartSlug="military-vehicle-retitle"
      vehicleLabel="Military Vehicle Retitle & Registration"
      vehicleSubtitle="Military Vehicles · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Military Vehicle &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-military.png"
    />
  );
}
