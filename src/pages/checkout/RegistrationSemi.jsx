import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationSemi() {
  return (
    <CheckoutTemplate
      samcartSlug="semi-truck-registration"
      vehicleLabel="Semi Truck Registration"
      vehicleSubtitle="Semi Trucks & Semi Trailers"
      headlineAction="Registration"
      headlineVehicle="Semi Truck"
      includesPlates={true}
      heroImage="/images/checkout/registration-semi.png"
    />
  );
}
