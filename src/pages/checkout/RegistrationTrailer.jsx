import CheckoutTemplate from '../CheckoutTemplate';

export default function RegistrationTrailer() {
  return (
    <CheckoutTemplate
      samcartSlug="registration-trailers"
      vehicleLabel="Trailer Registration"
      vehicleSubtitle="Trailers & Toy Haulers · Permanent Registration"
      headlineAction="Registration"
      headlineVehicle="Trailer"
      includesPlates={true}
      heroImage="/images/checkout/registration-trailer.png"
    />
  );
}
