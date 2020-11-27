import { useState } from "react";
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
} from "./styles";

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
    forWhatContent,
    proposal,
    questions,
    didYouKnow,
    activity,
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
              <BigFont>
                <AudioContainerAlt text={text}>
                  <Accessibility />
                </AudioContainerAlt>
                {didYouKnowImg && (
                  <MAMBOImage src={didYouKnowImg.src} alt={didYouKnowImg.alt} />
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
              <BigFont>
                <AudioContainerAlt text={text}>
                  <Accessibility />
                </AudioContainerAlt>
                <MAMBOImage src={activityImg.src} alt={activityImg.alt} />
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
              <QuestionContainer>
                <MAMBOImage src={questionImg.src} alt={questionImg.alt} />
                <div>
                  <AudioContainerAlt text={text}>
                    <Accessibility />
                  </AudioContainerAlt>
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
                    <MAMBOImage
                      src={keyConcept.img.src}
                      alt={keyConcept.img.alt}
                    />
                  </ConceptImageContainer>
                  <ConceptInfoContainer>
                    <AudioContainerAlt text={text}>
                      <Accessibility />
                    </AudioContainerAlt>
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

  return (
    <ContainerDetail>
      <ContainerTitle>
        <Title color={color}>
          <AudioContainer>
            <Accessibility />
          </AudioContainer>
          {forWhat}
        </Title>
      </ContainerTitle>
      <ContainerContent>
        <TextContent>{proposal}</TextContent>
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
  );
}
export default ExhibitionSecondary;
