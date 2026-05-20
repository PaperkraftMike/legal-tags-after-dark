import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleBoat() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-boat"
      vehicleLabel="Boat Retitle & Registration"
      vehicleSubtitle="Boats & Watercraft · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Boat &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-boat.png"
    />
  );
}
