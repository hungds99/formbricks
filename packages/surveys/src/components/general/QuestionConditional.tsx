import CTAQuestion from "@/components/questions/CTAQuestion";
import CalQuestion from "@/components/questions/CalQuestion";
import ConsentQuestion from "@/components/questions/ConsentQuestion";
import DateQuestion from "@/components/questions/DateQuestion";
import FileUploadQuestion from "@/components/questions/FileUploadQuestion";
import MultipleChoiceMultiQuestion from "@/components/questions/MultipleChoiceMultiQuestion";
import MultipleChoiceSingleQuestion from "@/components/questions/MultipleChoiceSingleQuestion";
import NPSQuestion from "@/components/questions/NPSQuestion";
import OpenTextQuestion from "@/components/questions/OpenTextQuestion";
import PictureSelectionQuestion from "@/components/questions/PictureSelectionQuestion";
import RatingQuestion from "@/components/questions/RatingQuestion";

import { TResponseData, TResponseTtc } from "@formbricks/types/responses";
import { TUploadFileConfig } from "@formbricks/types/storage";
import { TSurveyQuestion, TSurveyQuestionType } from "@formbricks/types/surveys";

interface QuestionConditionalProps {
  question: TSurveyQuestion;
  value: string | number | string[];
  onChange: (responseData: TResponseData) => void;
  onSubmit: (data: TResponseData, ttc: TResponseTtc) => void;
  onBack: () => void;
  onFileUpload: (file: File, config?: TUploadFileConfig) => Promise<string>;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  languageCode: string;
  ttc: TResponseTtc;
  setTtc: (ttc: TResponseTtc) => void;
  surveyId: string;
  isInIframe: boolean;
}

export default function QuestionConditional({
  question,
  value,
  onChange,
  onSubmit,
  onBack,
  isFirstQuestion,
  isLastQuestion,
  languageCode,
  ttc,
  setTtc,
  surveyId,
  onFileUpload,
  isInIframe,
}: QuestionConditionalProps) {
  return question.type === TSurveyQuestionType.OpenText ? (
    <OpenTextQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.MultipleChoiceSingle ? (
    <MultipleChoiceSingleQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.MultipleChoiceMulti ? (
    <MultipleChoiceMultiQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.NPS ? (
    <NPSQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.CTA ? (
    <CTAQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.Rating ? (
    <RatingQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.Consent ? (
    <ConsentQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.Date ? (
    <DateQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.PictureSelection ? (
    <PictureSelectionQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.FileUpload ? (
    <FileUploadQuestion
      surveyId={surveyId}
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      onFileUpload={onFileUpload}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : question.type === TSurveyQuestionType.Cal ? (
    <CalQuestion
      question={question}
      value={value}
      onChange={onChange}
      onSubmit={onSubmit}
      onBack={onBack}
      isFirstQuestion={isFirstQuestion}
      isLastQuestion={isLastQuestion}
      languageCode={languageCode}
      ttc={ttc}
      setTtc={setTtc}
      isInIframe={isInIframe}
    />
  ) : null;
}
