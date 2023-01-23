import { render, screen } from '@testing-library/react'
import { mockedImageUrls } from 'mocks/Bike'
import BikeImageList from '.'

describe('BikeImageList component', () => {
  beforeEach(() => {
    render(
      <BikeImageList
        imageUrls={mockedImageUrls}
        selectedImageUrl={mockedImageUrls[0]}
        handleSelectImage={jest.fn}
        selectedImageIndex={0}
      />,
    )
  })

  it('should has images to select', async () => {
    const imagesElement = await screen.findAllByTestId('image-to-select')
    expect(imagesElement).not.toBeUndefined()
    expect(imagesElement.length).toBe(mockedImageUrls.length)
  })
})
