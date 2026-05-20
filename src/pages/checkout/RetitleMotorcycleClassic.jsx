import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleMotorcycleClassic() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-classic-cars"
      vehicleLabel="Classic Motorcycle Retitle"
      vehicleSubtitle="Motorcycles 1996 & Older · Title Only"
      headlineAction="Retitle"
      headlineVehicle="Classic Motorcycle"
      includesPlates={false}
      heroImage="/images/checkout/retitle-motorcycle-classic.png"
    />
  );
}
