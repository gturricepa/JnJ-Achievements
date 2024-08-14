import React from "react";
import { Header } from "../../components/Header";
import * as XLSX from 'xlsx';
import { Subscriptions } from "../../components/Subscriptions";
import * as Styled from './styles';

export const Home = () => {
  const [data, setData] = React.useState([]);
  const [originalData, setOriginalData] = React.useState([]);
  const [fleetOptions, setFleetOptions] = React.useState([]);
  const [legalEntityOptions, setLegalEntityOptions] = React.useState([]);
  const [selectedFleet, setSelectedFleet] = React.useState('All'); 
  const [selectedLegalEntities, setSelectedLegalEntities] = React.useState(new Set()); 

  React.useEffect(() => {
    const readXlsxFile = async () => {
      try {
        const response = await fetch('/data/files/EUA/eua-metrics.xlsx');
        if (!response.ok) throw new Error('Network response was not ok');
        
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        setOriginalData(jsonData);
        setData(jsonData);


        const fleets = jsonData.map(item => item.Fleet).filter(Boolean); //Unique value collun fleet 
        const uniqueFleets = [...new Set(fleets)];
        setFleetOptions(['All', ...uniqueFleets]);

        
        const legalEntities = jsonData.map(item => item['Legal Entity Name']).filter(Boolean);  //Unique value collun Legal Entity Name
        const uniqueLegalEntities = [...new Set(legalEntities)];
        setLegalEntityOptions(uniqueLegalEntities);

        
        setSelectedLegalEntities(new Set(uniqueLegalEntities)); // select defaul all checkbox
      } catch (error) {
        console.error('Error reading XLSX file:', error);
      }
    };

    readXlsxFile();
  }, []);

  React.useEffect(() => {
      const filteredData = originalData.filter(item => {
      const isFleetMatch = selectedFleet === 'All' || item.Fleet === selectedFleet; //filtering data 
      const isLegalEntityMatch = selectedLegalEntities.has(item['Legal Entity Name']);

      return isFleetMatch && isLegalEntityMatch;
    });

    setData(filteredData);
  }, [selectedFleet, selectedLegalEntities, originalData]);

  const handleFleetChange = (event) => {
    setSelectedFleet(event.target.value);
  };

  const handleLegalEntityChange = (event) => {
    const value = event.target.value;
    setSelectedLegalEntities(prevSelected => {
      const newSelection = new Set(prevSelected);
      if (newSelection.has(value)) {
        newSelection.delete(value);
      } else {
        newSelection.add(value);
      }
      return newSelection;
    });
  };
  console.log(data)

  return (
    <>
      <Header />
    <Styled.Master>
       <Styled.Left>
       <Styled.Title>Fleet</Styled.Title>
       {fleetOptions.map((fleet, index) => (
          <Styled.LabelHolderRadio key={index}>
            <input
              type="radio"
              id={`fleet-${index}`}
              name="fleet"
              value={fleet}
              checked={selectedFleet === fleet}
              onChange={handleFleetChange}
            />
            <label htmlFor={`fleet-${index}`}>{fleet}</label>
          </Styled.LabelHolderRadio>
        ))}
        <Styled.Title>Legal Entity Name</Styled.Title>
        {legalEntityOptions.map((entity, index) => (
  <Styled.LabelHolderCheck key={index}>
    <input
      type="checkbox"
      id={`legal-entity-${index}`}
      name="legal-entity"
      value={entity}
      checked={selectedLegalEntities.has(entity)}
      onChange={handleLegalEntityChange}
    />
    <label htmlFor={`legal-entity-${index}`}>{entity}</label>
  </Styled.LabelHolderCheck>
))}
       </Styled.Left>
       <Styled.Right>
        p
       </Styled.Right>
    </Styled.Master>


    </>
  );
};
