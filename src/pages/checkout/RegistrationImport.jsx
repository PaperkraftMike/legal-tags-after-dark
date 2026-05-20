import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationImport() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-imports"
      vehicleLabel="Imported Vehicle Registration"
      vehicleSubtitle="Imported Vehicles · Has Import Documents"
      headlineAction="Registration"
      headlineVehicle="Imported Vehicle"
      includesPlates={true}
      heroImage="/images/checkout/registration-import.png"
    />
  );
}
