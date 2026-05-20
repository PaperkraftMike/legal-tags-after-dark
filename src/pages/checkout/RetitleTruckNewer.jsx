import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleTruckNewer() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-newer-truck"
      vehicleLabel="Truck Retitle & Registration"
      vehicleSubtitle="Trucks 1 Ton or Less · 2016 or Newer · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Truck &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-truck-newer.png"
    />
  );
}
