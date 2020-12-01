import { useEffect, useRef, useState } from "react";
import DidYouKnow from "../Icons/DidYouKnow";
import Activities from "../Icons/Activities";
import Questions from "../Icons/Questions";
import KeyConcepts from "../Icons/KeyConcepts";
import Accessibility from "../Icons/Accessibility";
import Close from "../Icons/Close";

import MAMBOImage from "../MAMBOImage";

import Image from "../Image";

import {
  ContainerDetail,
  ContainerTitle,
  Title,
  ContainerContentSecond,
  TextContent,
  ImageBgContainer,
  ContainerMenu,
  ItemMenu,
  TextItem,
  ContainerContent,
  MenuContentContainer,
  MenuContentTitleContainer,
  MenuContentDetailContainer,
  MenuContentTitle,
  BigFont,
  ConceptContainer,
  QuestionContainer,
  CloseButton,
  ConceptImageContainer,
  ConceptInfoContainer,
  AudioContainer,
  AudioContainerAlt,
  RowEnd,
  ImageOfMenuContainer,
} from "./styles";
import { useRouter } from "next/router";

const menu = {
  ACTIVITY: "activity",
  DID_YOU_KNOW: "did you know",
  QUESTIONS: "questions",
  CONCEPTS: "concepts",
};
function ExhibitionSecondary({ exhibition, config }) {
  const {
    color,
    text,
    forWhat,
    forWhatAudio,
    proposal,
    questions,
    questionsAudio,
    didYouKnow,
    didYouKnowAudio,
    activity,
    activityAudio,
    keyConcepts,
    img2,
    didYouKnowImg,
    activityImg,
    questionImg,
  } = exhibition;

  const [current, setCurrent] = useState("");

  const changeCurrent = (value) => setCurrent(value);

  function renderCurrentItem(value) {
    switch (value) {
      case menu.DID_YOU_KNOW:
        return (
          <>
            <MenuContentTitleContainer text={text}>
              <div>
                <DidYouKnow />
                <MenuContentTitle>{config.didYouKnow}</MenuContentTitle>
              </div>
              <CloseButton text={text} onClick={() => changeCurrent("")}>
                <Close />
              </CloseButton>
            </MenuContentTitleContainer>
            <MenuContentDetailContainer>
              <RowEnd>
                {didYouKnowAudio && (
                  <AudioContainerAlt text={text}>
                    <Accessibility />
                  </AudioContainerAlt>
                )}
              </RowEnd>
              <BigFont>
                {didYouKnowImg && (
                  <ImageOfMenuContainer>
                    <MAMBOImage
                      src={didYouKnowImg.src}
                      alt={didYouKnowImg.alt}
                    />
                  </ImageOfMenuContainer>
                )}
                {didYouKnow}
              </BigFont>
            </MenuContentDetailContainer>
          </>
        );
      case menu.ACTIVITY:
        return (
          <>
            <MenuContentTitleContainer text={text}>
              <div>
                <Activities />
                <MenuContentTitle>{config.activity}</MenuContentTitle>
              </div>
              <CloseButton text={text} onClick={() => changeCurrent("")}>
                <Close />
              </CloseButton>
            </MenuContentTitleContainer>
            <MenuContentDetailContainer>
              <RowEnd>
                {activityAudio && (
                  <AudioContainerAlt text={text}>
                    <Accessibility />
                  </AudioContainerAlt>
                )}
              </RowEnd>
              <BigFont>
                <ImageOfMenuContainer>
                  <MAMBOImage src={activityImg.src} alt={activityImg.alt} />
                </ImageOfMenuContainer>
                {activity}
              </BigFont>
            </MenuContentDetailContainer>
          </>
        );
      case menu.QUESTIONS:
        return (
          <>
            <MenuContentTitleContainer text={text}>
              <div>
                <Questions />
                <MenuContentTitle>{config.questions}</MenuContentTitle>
              </div>
              <CloseButton text={text} onClick={() => changeCurrent("")}>
                <Close />
              </CloseButton>
            </MenuContentTitleContainer>
            <MenuContentDetailContainer>
              <QuestionContainer height="100%">
                <MAMBOImage src={questionImg.src} alt={questionImg.alt} />
                <div>
                  {questionsAudio && (
                    <AudioContainerAlt text={text}>
                      <Accessibility />
                    </AudioContainerAlt>
                  )}
                  {questions.map((question) => (
                    <p>{question}</p>
                  ))}
                </div>
              </QuestionContainer>
            </MenuContentDetailContainer>
          </>
        );
      case menu.CONCEPTS:
        return (
          <>
            <MenuContentTitleContainer text={text}>
              <div>
                <KeyConcepts />
                <MenuContentTitle>{config.keyConcepts}</MenuContentTitle>
              </div>
              <CloseButton text={text} onClick={() => changeCurrent("")}>
                <Close />
              </CloseButton>
            </MenuContentTitleContainer>
            <MenuContentDetailContainer>
              {keyConcepts.map((keyConcept, index) => (
                <ConceptContainer key={index}>
                  <ConceptImageContainer>
                    <MAMBOImage {...keyConcept.img} />
                  </ConceptImageContainer>
                  <ConceptInfoContainer>
                    {keyConcept.audio && (
                      <AudioContainerAlt text={text}>
                        <Accessibility />
                      </AudioContainerAlt>
                    )}
                    <h3>{keyConcept.title}</h3>
                    <span>{keyConcept.content}</span>
                  </ConceptInfoContainer>
                </ConceptContainer>
              ))}
            </MenuContentDetailContainer>
          </>
        );
      default:
        break;
    }
  }

  const content = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (router.asPath.split("#")[1] === "content") {
      setTimeout(() => {
        function scrollToTargetAdjusted() {
          let headerOffset = 50;
          let elementPosition = content.current.getBoundingClientRect().top;
          let offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
          });
        }
        scrollToTargetAdjusted();
      }, 750);
    }
  }, []);
  return (
    <>
      <div ref={content}></div>
      <ContainerDetail>
        <ContainerTitle>
          <Title color={color}>
            {forWhatAudio && (
              <AudioContainer>
                <Accessibility />
              </AudioContainer>
            )}
            {forWhat}
          </Title>
        </ContainerTitle>
        <ContainerContent>
          <TextContent
            dangerouslySetInnerHTML={{ __html: proposal }}
          ></TextContent>
        </ContainerContent>
        <ContainerContentSecond></ContainerContentSecond>
        <ContainerMenu>
          {didYouKnow && (
            <ItemMenu
              color={color}
              text={text}
              onClick={() => changeCurrent(menu.DID_YOU_KNOW)}
            >
              <DidYouKnow />
              <TextItem>{config.didYouKnow}</TextItem>
            </ItemMenu>
          )}
          {activity && (
            <ItemMenu
              color={color}
              text={text}
              onClick={() => changeCurrent(menu.ACTIVITY)}
            >
              <Activities />
              <TextItem>{config.activity}</TextItem>
            </ItemMenu>
          )}
          {questions && (
            <ItemMenu
              color={color}
              text={text}
              onClick={() => changeCurrent(menu.QUESTIONS)}
            >
              <Questions />
              <TextItem>{config.questions}</TextItem>
            </ItemMenu>
          )}
          {keyConcepts && (
            <ItemMenu
              color={color}
              text={text}
              onClick={() => changeCurrent(menu.CONCEPTS)}
            >
              <KeyConcepts />
              <TextItem>{config.keyConcepts}</TextItem>
            </ItemMenu>
          )}
        </ContainerMenu>
        <ImageBgContainer>
          <Image
            src={img2.src}
            alt={img2.alt}
            width={1200}
            height={800}
            loading="eager"
          />
        </ImageBgContainer>
        {current !== "" && (
          <MenuContentContainer color={color} text={text}>
            {renderCurrentItem(current)}
          </MenuContentContainer>
        )}
      </ContainerDetail>
    </>
  );
}
export default ExhibitionSecondary;
