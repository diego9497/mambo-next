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
function DetailHistory({ exhibition, config }) {
  const {
    color,
    forWhat,
    forWhatContent,
    proposal,
    questions,
    didYouKnow,
    activity,
    keyConcepts,
    img4,
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
              <BigFont>{didYouKnow}</BigFont>
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
              <BigFont>{activity}</BigFont>
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
                <img
                  src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
                  alt=""
                />
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
                    <MAMBOImage src={keyConcept.img.src} />
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
          <ItemMenu onClick={() => changeCurrent(menu.DID_YOU_KNOW)}>
            <DidYouKnow />
            <TextItem>{config.didYouKnow}</TextItem>
          </ItemMenu>
        )}
        {activity && (
          <ItemMenu onClick={() => changeCurrent(menu.ACTIVITY)}>
            <Activities />
            <TextItem>{config.activity}</TextItem>
          </ItemMenu>
        )}
        {questions && (
          <ItemMenu onClick={() => changeCurrent(menu.QUESTIONS)}>
            <Questions />
            <TextItem>{config.questions}</TextItem>
          </ItemMenu>
        )}
        {keyConcepts && (
          <ItemMenu onClick={() => changeCurrent(menu.CONCEPTS)}>
            <KeyConcepts />
            <TextItem>{config.keyConcepts}</TextItem>
          </ItemMenu>
        )}
      </ContainerMenu>
      <ImageBackground src={img4.src} />
      {current !== "" && (
        <MenuContentContainer color={color}>
          {renderCurrentItem(current)}
        </MenuContentContainer>
      )}
    </ContainerDetail>
  );
}
export default DetailHistory;
