import { Container, MapIframeContainer } from './BookingAddressMap.styles'

interface BookingAddressMapProps {
  address?: string
}

const mockedAddress =
  'https://maps.google.com/maps?width=750&height=400&hl=en&q=745 Atlantic Ave, Boston, MA 02111, Estados Unidos&t=&z=15&ie=UTF8&iwloc=B&output=embed'

const BookingAddressMap = ({ address = mockedAddress }: BookingAddressMapProps) => {
  return (
    <Container data-testid='booking-address-map'>
      <MapIframeContainer>
        <iframe
          height={400}
          width='100%'
          frameBorder='0'
          scrolling='no'
          marginHeight={0}
          marginWidth={0}
          src={address}
          data-testid='map'
        ></iframe>
      </MapIframeContainer>
    </Container>
  )
}

export default BookingAddressMap
