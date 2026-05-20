import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleSemi() {
  return (
    <CheckoutTemplate
      samcartSlug="semi-truck-trailer-retitle"
      vehicleLabel="Semi Truck Retitle & Registration"
      vehicleSubtitle="Semi Trucks & Semi Trailers · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Semi Truck &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-semi.png"
    />
  );
}
