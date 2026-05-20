import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleCarMid() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-cars-11"
      vehicleLabel="Car Retitle & Registration"
      vehicleSubtitle="Cars 1997–2015 · Lost or Missing Title"
      headlineAction="Retitle"
      headlineVehicle="Car &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-car-mid.png"
    />
  );
}
