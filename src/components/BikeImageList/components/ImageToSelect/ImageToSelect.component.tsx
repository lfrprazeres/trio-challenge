import { Container } from './ImageToSelect.styles'

interface ImageToSelectComponentProps {
  imageUrl: string
  isSelected: boolean
  index: number
  handleSelectImage: (imageUrl: string, index: number) => void
}

const ImageToSelect = ({
  imageUrl,
  isSelected,
  index,
  handleSelectImage,
}: ImageToSelectComponentProps) => {
  return (
    <Container
      isSelected={isSelected}
      variant='outlined'
      onClick={() => handleSelectImage(imageUrl, index)}
      data-testid='image-to-select'
    >
      <img src={imageUrl} width='100%' />
    </Container>
  )
}

export default ImageToSelect
