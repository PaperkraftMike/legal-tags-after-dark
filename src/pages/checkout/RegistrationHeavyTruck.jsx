import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationHeavyTruck() {
  return (
    <CheckoutTemplate
      samcartSlug="heavy-truck-registration"
      vehicleLabel="Heavy Truck Registration"
      vehicleSubtitle="Trucks Over 1 Ton (F-250, F-350, 2500, 3500+)"
      headlineAction="Registration"
      headlineVehicle="Heavy Truck"
      includesPlates={true}
      heroImage="/images/checkout/registration-heavy-truck.png"
    />
  );
}
