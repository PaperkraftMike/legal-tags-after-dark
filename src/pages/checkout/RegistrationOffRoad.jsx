import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationOffRoad() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-off-road-vehicles"
      vehicleLabel="Off-Road Vehicle Registration"
      vehicleSubtitle="UTVs · ATVs · Side-by-Sides · E-Bikes"
      headlineAction="Registration"
      headlineVehicle="Off-Road Vehicle"
      includesPlates={true}
      heroImage="/images/checkout/registration-off-road.png"
    />
  );
}
