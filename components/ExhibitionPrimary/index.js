import {
  GridHistory,
  ContainerTitle,
  Title,
  ContainerImagePrincipal,
  ContentHistory,
  TitleContentSecond,
  TextContentHistory,
  ContentSecond,
  TextContentSecond,
  FirstEmpty,
  SecondEmpty,
  Gallery,
  GalleryImageContainer,
  GalleryContainer,
  AudioContainer,
  AudioContainerHistory,
} from "./styles";

import Accessibility from "../Icons/Accessibility";
import MAMBOImage from "../MAMBOImage";
import MAMBOGallery from "../MAMBOGallery";
import Slider from "react-slick";

export default function ExhibitionPrimary({ exhibition, config }) {
  const {
    history,
    historyDescription,
    color,
    text,
    author,
    authorContent,
    img1,
    gallery,
  } = exhibition;

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60px",
          width: "30px",
          right: 0,
          background: "rgb(23, 3, 3, .55)",
          borderRadius: "10px 0 0 10px",
          zIndex: 99,
        }}
        onClick={onClick}
      />
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "60px",
          width: "30px",
          left: 0,
          background: "rgb(23, 3, 3, .55)",
          borderRadius: "0 10px 10px 0",
          zIndex: 99,
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <GridHistory>
        <ContainerTitle>
          <Title color={color}>{history}</Title>
        </ContainerTitle>
        <ContainerImagePrincipal>
          <MAMBOImage src={img1.src} alt={img1.alt} loading="eager" />
        </ContainerImagePrincipal>
        <ContentHistory>
          <TextContentHistory>
            <AudioContainerHistory>
              <Accessibility />
            </AudioContainerHistory>
            {historyDescription}
          </TextContentHistory>
        </ContentHistory>
        <ContentSecond background={color}>
          <AudioContainer stroke={text}>
            <Accessibility />
          </AudioContainer>
          <TitleContentSecond color={text}>{author}</TitleContentSecond>
          <TextContentSecond color={text}>{authorContent}</TextContentSecond>
        </ContentSecond>
        <FirstEmpty />
        <SecondEmpty />
      </GridHistory>
      <GalleryContainer>
        <Slider {...settings}>
          {gallery?.map((img, index) => (
            <GalleryImageContainer num={index + 1}>
              <MAMBOGallery gallery={gallery} index={index} />
            </GalleryImageContainer>
          ))}
        </Slider>
      </GalleryContainer>
    </>
  );
}
