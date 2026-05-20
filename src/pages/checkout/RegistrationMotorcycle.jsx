import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationMotorcycle() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-for-motorcycles"
      vehicleLabel="Motorcycle Registration"
      vehicleSubtitle="Street Legal Motorcycles"
      headlineAction="Registration"
      headlineVehicle="Motorcycle"
      includesPlates={true}
      heroImage="/images/checkout/registration-motorcycle.png"
    />
  );
}
