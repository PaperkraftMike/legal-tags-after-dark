import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationCarOlder() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-cars-11"
      vehicleLabel="Car Registration"
      vehicleSubtitle="Cars 2015 or Older"
      headlineAction="Registration"
      headlineVehicle="Car"
      includesPlates={true}
      heroImage="/images/checkout/registration-car-older.png"
    />
  );
}
