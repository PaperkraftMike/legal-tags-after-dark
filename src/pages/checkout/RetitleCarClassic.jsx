import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleCarClassic() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-classic-cars"
      vehicleLabel="Classic Vehicle Retitle"
      vehicleSubtitle="Cars 1996 & Older · Title Only"
      headlineAction="Retitle"
      headlineVehicle="Classic Car"
      includesPlates={false}
      heroImage="/images/checkout/retitle-car-classic.png"
    />
  );
}
