import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleTruckClassic() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-classic-cars"
      vehicleLabel="Classic Truck Retitle"
      vehicleSubtitle="Trucks 1996 & Older · Title Only"
      headlineAction="Retitle"
      headlineVehicle="Classic Truck"
      includesPlates={false}
      heroImage="/images/checkout/retitle-truck-classic.png"
    />
  );
}
