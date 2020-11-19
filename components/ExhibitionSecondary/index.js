import { useState } from "react";
import DidYouKnow from "../Icons/DidYouKnow";
import Activities from "../Icons/Activities";
import Questions from "../Icons/Questions";
import KeyConcepts from "../Icons/KeyConcepts";
import Close from "../Icons/Close";

import MAMBOImage from "../MAMBOImage";

import {
  ContainerDetail,
  ContainerTitle,
  Title,
  ContainerContentSecond,
  TextContent,
  ImageBackground,
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
            <MenuContentTitleContainer>
              <div>
                <DidYouKnow />
                <MenuContentTitle>{config.didYouKnow}</MenuContentTitle>
              </div>
              <CloseButton onClick={() => changeCurrent("")}>
                <Close />
              </CloseButton>
            </MenuContentTitleContainer>
            <MenuContentDetailContainer>
              <BigFont>
                <MAMBOImage src={didYouKnowImg.src} alt={didYouKnowImg.alt} />
                {didYouKnow}
              </BigFont>
            </MenuContentDetailContainer>
          </>
        );
      case menu.ACTIVITY:
        return (
          <>
            <MenuContentTitleContainer>
              <div>
                <Activities />
                <MenuContentTitle>{config.activity}</MenuContentTitle>
              </div>
              <CloseButton onClick={() => changeCurrent("")}>
                <Close />
              </CloseButton>
            </MenuContentTitleContainer>
            <MenuContentDetailContainer>
              <BigFont>
                <MAMBOImage src={activityImg.src} alt={activityImg.alt} />
                {activity}
              </BigFont>
            </MenuContentDetailContainer>
          </>
        );
      case menu.QUESTIONS:
        return (
          <>
            <MenuContentTitleContainer>
              <div>
                <Questions />
                <MenuContentTitle>{config.questions}</MenuContentTitle>
              </div>
              <CloseButton onClick={() => changeCurrent("")}>
                <Close />
              </CloseButton>
            </MenuContentTitleContainer>
            <MenuContentDetailContainer>
              <QuestionContainer>
                <MAMBOImage src={questionImg.src} alt={questionImg.alt} />
                <div>
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
            <MenuContentTitleContainer>
              <div>
                <KeyConcepts />
                <MenuContentTitle>{config.keyConcepts}</MenuContentTitle>
              </div>
              <CloseButton onClick={() => changeCurrent("")}>
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
    <ContainerDetail id="content2">
      <ContainerTitle>
        <Title color={color}>{forWhat}</Title>
      </ContainerTitle>
      <ContainerContent>
        <TextContent>{forWhatContent}</TextContent>
      </ContainerContent>
      <ContainerContentSecond>
        <TextContent>{proposal}</TextContent>
      </ContainerContentSecond>
      <ContainerMenu>
        {didYouKnow && (
          <ItemMenu
            color={color}
            onClick={() => changeCurrent(menu.DID_YOU_KNOW)}
          >
            <DidYouKnow />
            <TextItem>{config.didYouKnow}</TextItem>
          </ItemMenu>
        )}
        {activity && (
          <ItemMenu color={color} onClick={() => changeCurrent(menu.ACTIVITY)}>
            <Activities />
            <TextItem>{config.activity}</TextItem>
          </ItemMenu>
        )}
        {questions && (
          <ItemMenu color={color} onClick={() => changeCurrent(menu.QUESTIONS)}>
            <Questions />
            <TextItem>{config.questions}</TextItem>
          </ItemMenu>
        )}
        {keyConcepts && (
          <ItemMenu color={color} onClick={() => changeCurrent(menu.CONCEPTS)}>
            <KeyConcepts />
            <TextItem>{config.keyConcepts}</TextItem>
          </ItemMenu>
        )}
      </ContainerMenu>
      <ImageBackground src={img2.src} />
      {current !== "" && (
        <MenuContentContainer color={color}>
          {renderCurrentItem(current)}
        </MenuContentContainer>
      )}
    </ContainerDetail>
  );
}
export default ExhibitionSecondary;
