import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleHeavyTruck() {
  return (
    <CheckoutTemplate
      samcartSlug="heavy-truck-retitle"
      vehicleLabel="Heavy Truck Retitle & Registration"
      vehicleSubtitle="Trucks Over 1 Ton · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Heavy Truck &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-heavy-truck.png"
    />
  );
}
