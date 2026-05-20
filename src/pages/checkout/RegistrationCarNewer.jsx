import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationCarNewer() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-newer-vehicles"
      vehicleLabel="Car Registration"
      vehicleSubtitle="Cars 2016 or Newer"
      headlineAction="Registration"
      headlineVehicle="Car"
      includesPlates={true}
      heroImage="/images/checkout/registration-car-newer.png"
    />
  );
}
