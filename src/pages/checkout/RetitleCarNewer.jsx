import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleCarNewer() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-vehicles-newer-than-10-years"
      vehicleLabel="Car Retitle & Registration"
      vehicleSubtitle="Cars 2016 or Newer · Lost or Missing Title"
      headlineAction="Retitle"
      headlineVehicle="Car &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-car-newer.png"
    />
  );
}
