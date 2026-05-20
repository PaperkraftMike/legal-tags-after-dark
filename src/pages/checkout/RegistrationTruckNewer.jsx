import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationTruckNewer() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-trucks"
      vehicleLabel="Truck Registration"
      vehicleSubtitle="Trucks 1 Ton or Less · 2016 or Newer"
      headlineAction="Registration"
      headlineVehicle="Truck"
      includesPlates={true}
      heroImage="/images/checkout/registration-truck-newer.png"
    />
  );
}
