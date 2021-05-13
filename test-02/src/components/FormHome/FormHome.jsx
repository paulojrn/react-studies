import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import DeliveryData from "./DeliveryData";
import PersonalData from "./PersonalData";
import UserData from "./UserData";

function FormHome ({sendFormData, validateCpf})
{
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (currentStep === (componentsArray.length -1)) {
            sendFormData(formData);
        }        
    });

    let nextStep = () => {setCurrentStep(currentStep + 1);};
    let collectData = (data) => {setFormData({...formData, ...data}); nextStep();}

    let component = <Typography>Ocorreu um erro</Typography>;
    let componentsArray = [
        <UserData collectData={collectData} />,
        <PersonalData collectData={collectData} validateCpf={validateCpf}/>,
        <DeliveryData collectData={collectData}/>,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>
    ];

    if (currentStep <= (componentsArray.length - 1)) {
        component = componentsArray[currentStep];
        
    }

    return (
        <>
            <Stepper activeStep={currentStep}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessol</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>

            {component}
        </>
    );
}

export default FormHome;