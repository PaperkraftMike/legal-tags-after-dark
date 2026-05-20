import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationTruckOlder() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-trucks-11"
      vehicleLabel="Truck Registration"
      vehicleSubtitle="Trucks 1 Ton or Less · 2015 or Older"
      headlineAction="Registration"
      headlineVehicle="Truck"
      includesPlates={true}
      heroImage="/images/checkout/registration-truck-older.png"
    />
  );
}
