import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationBoat() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-boat"
      vehicleLabel="Boat Registration"
      vehicleSubtitle="Boats & Watercraft"
      headlineAction="Registration"
      headlineVehicle="Boat"
      includesPlates={true}
      heroImage="/images/checkout/registration-boat.png"
    />
  );
}
