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
  GalleryImageContainer,
  GalleryContainer,
  AudioContainer,
  AudioContainerHistory,
} from "./styles";

import Accessibility from "../Icons/Accessibility";
import MAMBOImage from "../MAMBOImage";
import MAMBOGallery from "../MAMBOGallery";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

export default function ExhibitionPrimary({ exhibition, config }) {
  const {
    history,
    historyDescription,
    mainAudio,
    color,
    text,
    author,
    keyConcepts,
    didYouKnowImg,
    activityImg,
    questionImg,
    img1,
    img2,
    img3,
  } = exhibition;

  const [numberOfSlides, setNumberOfSlides] = useState(3);

  const [width] = useWindowSize();

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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    if (width <= 575) {
      setNumberOfSlides(1);
    } else {
      setNumberOfSlides(3);
    }
  }, [width]);

  let generatedGallery = [
    ...keyConcepts.map(({ img }) => img),
    img1,
    img2,
    img3,
    activityImg,
    didYouKnowImg,
    questionImg,
  ];

  generatedGallery = generatedGallery.filter((img) => img);
  return (
    <>
      <GridHistory>
        <ContainerTitle>
          <Title color={color}>{history}</Title>
        </ContainerTitle>
        <ContainerImagePrincipal>
          <MAMBOImage {...img1} loading="eager" />
        </ContainerImagePrincipal>
        <ContentHistory>
          <TextContentHistory>
            {mainAudio && (
              <AudioContainerHistory>
                <Accessibility />
              </AudioContainerHistory>
            )}
            <p dangerouslySetInnerHTML={{ __html: historyDescription }}></p>
          </TextContentHistory>
        </ContentHistory>
        <ContentSecond background={color}>
          {img1.audio && (
            <AudioContainer stroke={text}>
              <Accessibility />
            </AudioContainer>
          )}
          <TitleContentSecond
            color={text}
            dangerouslySetInnerHTML={{ __html: author }}
          ></TitleContentSecond>
          <TextContentSecond color={text}>
            <p dangerouslySetInnerHTML={{ __html: img1.caption }}></p>
          </TextContentSecond>
        </ContentSecond>
        <FirstEmpty />
        <SecondEmpty />
      </GridHistory>
      <GalleryContainer>
        <Slider
          {...settings}
          slidesToShow={process.env.SPA ? numberOfSlides : 1}
        >
          {generatedGallery?.map((img, index) => (
            <GalleryImageContainer num={index + 1} key={index}>
              <MAMBOGallery
                gallery={generatedGallery}
                index={index}
                animation={true}
              />
            </GalleryImageContainer>
          ))}
        </Slider>
      </GalleryContainer>
    </>
  );
}
