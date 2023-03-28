import styled from 'styled-components'

export const Img = ({ src }, { alt }) => {
  return <ImgCover src={src} alt={alt} />
}

const ImgCover = styled.img`
  object-fit: cover;
  width: 100%;
`
