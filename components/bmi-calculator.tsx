/* "use client"
import React, { useState, useEffect } from 'react';

const BMICalculator: React.FC = () => {
  const [feet, setFeet] = useState<number>(0);
  const [inches, setInches] = useState<number>(0);
  const [pounds, setPounds] = useState<number>(0);
  const [bmi, setBmi] = useState<number>(0);
  const [isBariatric, setIsBariatric] = useState<boolean>(false);

  useEffect(() => {
    calculateBMI();
  }, [feet, inches, pounds]);

  const calculateBMI = () => {
    if (feet > 0 && pounds > 0) {
      const totalInches = feet * 12 + inches;
      const heightInMeters = totalInches * 0.0254;
      const weightInKg = pounds * 0.453592;
      const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
      setBmi(parseFloat(calculatedBmi.toFixed(2)));
    } else {
      setBmi(0);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Body Mass Index Calculator (BMI)</h1>
      
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <input 
            type="checkbox" 
            id="bariatric-checkbox"
            checked={isBariatric}
            onChange={() => setIsBariatric(!isBariatric)}
            className="mr-2"
          />
          <label htmlFor="bariatric-checkbox" className="text-sm font-medium text-gray-700">
            Applies to Bariatric Surgery Only
          </label>
        </div>
        
        {isBariatric && (
          <p className="text-xs text-gray-500 mb-4">
            If you're considering weight loss surgery, use this calculator to determine eligibility.
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Height</h2>
          <p className="text-sm text-gray-500 mb-3">
            Please enter your feet and inches in separate boxes. If you're 5 ft 4 in, put 5 in the first box and 4 in the second.
          </p>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="feet" className="block text-sm font-medium text-gray-700 mb-1">Feet</label>
              <input
                type="number"
                id="feet"
                min="0"
                max="8"
                value={feet || ''}
                onChange={(e) => setFeet(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="inches" className="block text-sm font-medium text-gray-700 mb-1">Inches</label>
              <input
                type="number"
                id="inches"
                min="0"
                max="11"
                value={inches || ''}
                onChange={(e) => setInches(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Weight</h2>
          <p className="text-sm text-gray-500 mb-3">
            After entering your weight, make sure to press enter, or tap/click anywhere to make the BMI formula update.
          </p>
          <div>
            <label htmlFor="pounds" className="block text-sm font-medium text-gray-700 mb-1">Pounds</label>
            <input
              type="number"
              id="pounds"
              min="0"
              value={pounds || ''}
              onChange={(e) => setPounds(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Your BMI</h2>
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
            <div>
              <p className="text-sm text-gray-500">BMI Result</p>
              <p className="text-3xl font-bold text-indigo-600">{bmi.toFixed(2)}</p>
            </div>
            <div className="text-sm text-gray-500">
              {bmi === 0 ? (
                <p>Enter your height and weight to calculate</p>
              ) : (
                <p>Calculated from your height and weight</p>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Calculate BMI
        </button>
      </form>

      {isBariatric && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Are You A Weight Loss Surgery Candidate?</h3>
          <p className="text-sm text-gray-600 mb-3">
            If you're considering weight loss surgery, there are a few general requirements to factor in.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 font-bold">• BMI of 26+</span>
              <span>Most weight loss surgeries require BMI ≥ 30+, ESG is 26+</span>
            </li>
            <li>• 16 – 70 years old. Minors accepted in some circumstances</li>
            <li>• Have tried conventional weight loss methods like diet and exercise but can't maintain a healthy BMI</li>
          </ul>
          {bmi > 0 && (
            <div className="mt-4 p-3 rounded-md bg-white">
              <p className="font-medium text-gray-800">
                {bmi >= 26 ? (
                  <span className="text-green-600">Based on your BMI, you may be eligible for bariatric surgery.</span>
                ) : (
                  <span className="text-red-600">Based on your BMI, you may not meet the minimum requirements for bariatric surgery.</span>
                )}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BMICalculator; */ 
"use client"
import React, { useState, useEffect } from 'react';

const CalculadoraIMC: React.FC = () => {
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);
  const [esCirugiaBariatrica, setEsCirugiaBariatrica] = useState<boolean>(false);

  useEffect(() => {
    calcularIMC();
  }, [altura, peso]);

  const calcularIMC = () => {
    if (altura > 0 && peso > 0) {
      const alturaEnMetros = altura / 100;
      const calculoImc = peso / (alturaEnMetros * alturaEnMetros);
      setImc(parseFloat(calculoImc.toFixed(2)));
    } else {
      setImc(0);
    }
  };

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    calcularIMC();
  };

  const obtenerClasificacionIMC = () => {
    if (imc < 18.5) return "Bajo peso";
    if (imc >= 18.5 && imc < 25) return "Peso normal";
    if (imc >= 25 && imc < 30) return "Sobrepeso";
    if (imc >= 30 && imc < 35) return "Obesidad grado I";
    if (imc >= 35 && imc < 40) return "Obesidad grado II";
    return "Obesidad grado III";
  };

  return (
    <div className='m-6'>
     <h2 className="text-4xl font-light text-gray-800 text-center mb-16">
     Calculadora de Índice de Masa Corporal (IMC)
        </h2>
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
        <h2 className='text-2xl font-light text-gray-800 text-center mb-16'>Si estás considerando cirugía para bajar de peso, usa esta calculadora para determinar elegibilidad.</h2>
      <div className="mb-6">
        <div className="flex items-center text-center mb-2">
          <label htmlFor="cirugia-checkbox" className="text-sm font-medium text-gray-700">
            Información para cirugía bariátrica
          </label>
        </div>
     
      </div>

      <form onSubmit={manejarEnvio} className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Altura</h2>
          <p className="text-sm text-gray-500 mb-3">
            Por favor ingresa tu altura en centímetros. Ejemplo: si mides 1.70m, ingresa 170.
          </p>
          <div>
            <label htmlFor="altura" className="block text-sm font-medium text-gray-700 mb-1">Centímetros (cm)</label>
            <input
              type="number"
              id="altura"
              min="0"
              max="300"
              value={altura || ''}
              onChange={(e) => setAltura(parseInt(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#e5a600]"
            />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Peso</h2>
          <p className="text-sm text-gray-500 mb-3">
            Ingresa tu peso en kilogramos. El cálculo se actualizará automáticamente.
          </p>
          <div>
            <label htmlFor="peso" className="block text-sm font-medium text-gray-700 mb-1">Kilogramos (kg)</label>
            <input
              type="number"
              id="peso"
              min="0"
              value={peso || ''}
              onChange={(e) => setPeso(parseFloat(e.target.value) || 0)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#e5a600]"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Tu IMC</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-500">Resultado de IMC</p>
              <p className="text-3xl font-bold text-[#FFB800]">{imc.toFixed(2)}</p>
            </div>
            {imc > 0 ? (
              <div className="mt-2">
                <p className="text-sm font-medium text-gray-700">
                  Clasificación: <span className="text-[#FFB800]">{obtenerClasificacionIMC()}</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Calculado a partir de tu altura y peso
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-500">Ingresa tu altura y peso para calcular</p>
            )}
          </div>
        </div>

     
      </form>

      {esCirugiaBariatrica && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">¿Eres candidato para cirugía bariátrica?</h3>
          <p className="text-sm text-gray-600 mb-3">
            Si estás considerando cirugía para bajar de peso, hay algunos requisitos generales a considerar.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="mr-2 font-bold">• IMC de 26+</span>
              <span>La mayoría de cirugías requieren IMC ≥ 30+, ESG es 26+</span>
            </li>
            <li>• 16 – 70 años de edad. Menores de edad aceptados en algunas circunstancias</li>
            <li>• Haber intentado métodos convencionales de pérdida de peso como dieta y ejercicio sin poder mantener un IMC saludable</li>
          </ul>
          {imc > 0 && (
            <div className="mt-4 p-3 rounded-md bg-white">
              <p className="font-medium text-gray-800">
                {imc >= 26 ? (
                  <span className="text-green-600">Según tu IMC, podrías ser elegible para cirugía bariátrica.</span>
                ) : (
                  <span className="text-red-600">Según tu IMC, no cumples con los requisitos mínimos para cirugía bariátrica.</span>
                )}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 text-xs text-gray-500">
        <p><strong>Clasificación de IMC:</strong></p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>Menos de 18.5: Bajo peso</li>
          <li>18.5 - 24.9: Peso normal</li>
          <li>25 - 29.9: Sobrepeso</li>
          <li>30 - 34.9: Obesidad grado I</li>
          <li>35 - 39.9: Obesidad grado II</li>
          <li>40 o más: Obesidad grado III</li>
        </ul>
      </div>
      </div>
      </div>
  );
};

export default CalculadoraIMC;