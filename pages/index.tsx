import React from "react";
import { EnterNameStep } from "../components/steps/EnterNameStep";
import { WelcomeStep } from "../components/steps/WelcomeStep";
import { GitHubStep } from "../components/steps/GitHubStep";
import { ChooseAvatarStep } from "../components/steps/ChooseAvatarStep";
import { EnterPhoneStep } from "../components/steps/EnterPhoneStep";
import { EnterCodeStep } from "../components/steps/EnterCodeStep";

const stepsComponent = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: GitHubStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

type MainContextProps = {
  onNextStep: () => void;
  step: number;
};

export const MainContext = React.createContext<MainContextProps>(
  {} as MainContextProps
);

export default function Home() {
  const [step, setStep] = React.useState<number>(0);
  const Step = stepsComponent[step];

  const onNextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step />
    </MainContext.Provider>
  );
}
