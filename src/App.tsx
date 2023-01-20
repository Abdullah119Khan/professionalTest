import React, { FC, SetStateAction, useEffect, useState } from 'react'
import "./App.css";


const get_Data = async () => {
  const MEASUREMENTS = [
    {greenhouse: 'Tomato Hut', measurement: '36 C', isNominal: false, sensor: 'Temp'},
    {greenhouse: 'Tomato Hut', measurement: '75 %', isNominal: true, sensor: 'Humidity'},
    {greenhouse: 'Tomato Hut', measurement: '400 ppm', isNominal: true, sensor: 'CO2'},
    {greenhouse: 'Beetville', measurement: '25 C', isNominal: true, sensor: 'Temp'},
    {greenhouse: 'Beetville', measurement: '88 %', isNominal: true, sensor: 'Humidity'},
    {greenhouse: 'Beetville', measurement: '900 ppm', isNominal: false, sensor: 'CO2'}
  ];
  return MEASUREMENTS;
}

const App: FC = () => {
  const [data, setData] = useState<SetStateAction<any>>([])
  const [checkData, setCheckData] = useState<SetStateAction<any>>([])

  useEffect(() => {
    const getData = async () => {
      const data = await get_Data();
      setData(data)
      console.log(data)
    }
    getData()
  }, [])


  return (
    <div className="App">
      <h3>Sensor Measurement</h3>
      {
       data.map((item: any, index: any) => (
        <div key={index}>
          {item.isNominal ? (
            <div>
              <h4>{item.greenhouse}</h4>
              <span>Temp: {item.measurement}</span>
              <span>{item.sensor}</span>
            </div>
          ) : null}
          {!item.isNominal ? (
            <div>
              <h4>{item.greenhouse}</h4>
              <span><strong style={{ color: "red"}}>Temp:</strong> {item.measurement}</span>
              <span>{item.sensor}</span>
            </div>
          ): null}
        </div>
      ))}
      
    </div>
  );
}

export default App;
