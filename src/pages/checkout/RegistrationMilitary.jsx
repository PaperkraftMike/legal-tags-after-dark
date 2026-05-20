import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationMilitary() {
  return (
    <CheckoutTemplate
      samcartSlug="military-vehicle-retitle"
      vehicleLabel="Military Vehicle Registration"
      vehicleSubtitle="Military Vehicles"
      headlineAction="Registration"
      headlineVehicle="Military Vehicle"
      includesPlates={true}
      heroImage="/images/checkout/registration-military.png"
    />
  );
}
