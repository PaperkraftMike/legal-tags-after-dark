import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationSouthDakota() {
  return (
    <CheckoutTemplate
      samcartSlug="south-dakota-registration"
      vehicleLabel="South Dakota Registration"
      vehicleSubtitle="For Financed Vehicles"
      headlineAction="Registration"
      headlineVehicle="Vehicle"
      includesPlates={true}
      heroImage="/images/checkout/registration-south-dakota.png"
    />
  );
}
