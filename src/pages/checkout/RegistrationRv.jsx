import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationRv() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-rv"
      vehicleLabel="RV Registration"
      vehicleSubtitle="RVs & Motorhomes"
      headlineAction="Registration"
      headlineVehicle="RV"
      includesPlates={true}
      heroImage="/images/checkout/registration-rv.png"
    />
  );
}
