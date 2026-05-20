import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleTruckMid() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-trucks-11"
      vehicleLabel="Truck Retitle & Registration"
      vehicleSubtitle="Trucks 1 Ton or Less · 1997–2015 · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Truck &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-truck-mid.png"
    />
  );
}
