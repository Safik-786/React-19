import React, { useState } from 'react';

const steps = [
    {
        label: 'Account Details',
        description: 'Enter your account details.'
    },
    {
        label: 'Profile Info',
        description: 'Provide your profile information.'
    },
    {
        label: 'Account Info',
        description: 'Provide your profile information.'
    },
    {
        label: 'Payment Info',
        description: 'Provide your profile information.'
    },
    {
        label: 'Review & Submit',
        description: 'Review your information and submit.'
    }
];

export default function Stepper() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <StepOne onNext={nextStep} />;
            case 1:
                return <StepTwo onNext={nextStep} onBack={prevStep} />;
            case 2:
                return <StepTwo onNext={nextStep} onBack={prevStep} />;
            case 3:
                return <StepTwo onNext={nextStep} onBack={prevStep} />;
            case 4:
                return <StepThree onBack={prevStep} />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
            <StepIndicator steps={steps} currentStep={currentStep} />
            <div className="mt-6">{renderStep()}</div>
        </div>
    );
}



function StepIndicator({ steps, currentStep }) {
    return (
        <div className="flex justify-between">
            {steps.map((step, index) => (
                <div key={index} className="flex-1 relative text-center">
                    <div
                        className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm font-semibold
              ${index <= currentStep ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'}
            `}
                    >
                        {index + 1}
                    </div>
                    <div className={`
          ${index > (steps.length - 2) && "hidden"} 
          ${index < currentStep ? 'border-indigo-600 text-white' : 'bg-gray-200 text-gray-500'} absolute top-4 left-[68px] w-20 border-b-2 `}></div>
                    <p className="mt-2 text-sm">{step.label}</p>
                </div>
            ))}
        </div>
    );
}


function StepOne({ onNext }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Account Details</h2>
            <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded mb-4"
            />
            <button
                onClick={onNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
            >
                Next
            </button>
        </div>
    );
}

function StepTwo({ onNext, onBack }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Profile Info</h2>
            <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-2 rounded mb-4"
            />
            <div className="flex justify-between">
                <button
                    onClick={onBack}
                    className="px-4 py-2 border rounded"
                >
                    Back
                </button>
                <button
                    onClick={onNext}
                    className="px-4 py-2 bg-indigo-600 text-white rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

function StepThree({ onBack }) {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
            <p className="text-gray-600 mb-4">
                Please review your information before submitting.
            </p>
            <div className="flex justify-between">
                <button
                    onClick={onBack}
                    className="px-4 py-2 border rounded"
                >
                    Back
                </button>
                <button
                    className="px-4 py-2 bg-green-600 text-white rounded"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

