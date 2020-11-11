import { useState } from "react";
import DidYouKnow from "../Icons/DidYouKnow";
import Activities from "../Icons/Activities";
import Questions from "../Icons/Questions";
import KeyConcepts from "../Icons/KeyConcepts";
import Close from "../Icons/Close";

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
    questions,
    didYouKnow,
    activity,
    keyConcepts,
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
              {keyConcepts.map((keyConcept) => (
                <ConceptContainer>
                  <img
                    src="https://www.mambogota.com/wp-content/uploads/2020/04/DSC_0343.jpg"
                    alt=""
                  />
                  <p>
                    <h3>{keyConcept.title}</h3>
                    <span>{keyConcept.content}</span>
                  </p>
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
        <Title color={color}>{forWhat}</Title>
      </ContainerTitle>
      <ContainerContent>
        <TextContent>{forWhatContent}</TextContent>
      </ContainerContent>
      <ContainerContentSecond>
        <TextContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          corporis harum maxime veniam, odit doloribus neque ea error suscipit
          dolorum iure, in laborum voluptate quia alias! Maiores ipsum dolore
          maxime?
        </TextContent>
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
      <ImageBackground src="https://ivital.mx/wp-content/uploads/2020/02/James-Turrell_Foto-Florian-Holzerr_Museo-Jumex-4.jpg" />
      {current !== "" && (
        <MenuContentContainer color={color}>
          {renderCurrentItem(current)}
        </MenuContentContainer>
      )}
    </ContainerDetail>
  );
}
export default DetailHistory;
