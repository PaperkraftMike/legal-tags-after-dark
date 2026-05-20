import CheckoutTemplate from '../CheckoutTemplate';

export default function RetitleTrailer() {
  return (
    <CheckoutTemplate
      samcartSlug="retitle-trailers"
      vehicleLabel="Trailer Retitle & Registration"
      vehicleSubtitle="Trailers & Toy Haulers · Lost Title"
      headlineAction="Retitle"
      headlineVehicle="Trailer &"
      includesPlates={true}
      heroImage="/images/checkout/retitle-trailer.png"
    />
  );
}
