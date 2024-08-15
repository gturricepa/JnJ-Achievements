import React from "react";
import { Header } from "../../components/Header";
import * as XLSX from 'xlsx';
import * as Styled from './styles';
import Skeleton from '@mui/material/Skeleton';
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import { TwoColumnsCard } from "../../components/Cards/TwoColumnsCard";
import { Subscriptions } from "../Subscriptions";
import { Charts } from "../../components/Charts";



export const Home = () => {
  const [data, setData] = React.useState([]);
  const [originalData, setOriginalData] = React.useState([]);
  const [fleetOptions, setFleetOptions] = React.useState([]);
  const [legalEntityOptions, setLegalEntityOptions] = React.useState([]);
  const [selectedFleet, setSelectedFleet] = React.useState('All'); 
  const [selectedLegalEntities, setSelectedLegalEntities] = React.useState(new Set());
  const [loading, setLoading] = React.useState(true);
  const [sub, setSub] = React.useState(true)
  const [over, setOver] = React.useState(false)

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

        const fleets = jsonData.map(item => item.Fleet).filter(Boolean);
        const uniqueFleets = [...new Set(fleets)];
        setFleetOptions(['All', ...uniqueFleets]);

        const legalEntities = jsonData.map(item => item['Legal Entity Name']).filter(Boolean);
        const uniqueLegalEntities = [...new Set(legalEntities)];
        setLegalEntityOptions(uniqueLegalEntities);
        setSelectedLegalEntities(new Set(uniqueLegalEntities)); 
        setLoading(false); 
      } catch (error) {
        console.error('Error reading XLSX file:', error);
        setLoading(false); 
      }
    };

    readXlsxFile();
  }, []);

  React.useEffect(() => {
    if (loading) return; 

    const filteredData = originalData.filter(item => {
      const isFleetMatch = selectedFleet === 'All' || item.Fleet === selectedFleet;
      const isLegalEntityMatch = selectedLegalEntities.has(item['Legal Entity Name']);

      return isFleetMatch && isLegalEntityMatch;
    });

    setData(filteredData);
  }, [selectedFleet, selectedLegalEntities, originalData, loading]);



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

  const handleSub = () => {
    setSub(true)
    setOver(false)
  };
  const handleOverview = () => {
    setOver(true)
    setSub(false)
  };


  return (
    <Styled.Holder>
      <Header />
      <Styled.Master>
        <Styled.Left> 
          <h3>Fleet</h3>
          {loading ? (
            <>
              <Skeleton variant="text" width={200} height={30} />
              <Skeleton variant="text" width={200} height={30} />
              <Skeleton variant="text" width={200} height={30} />
              <Skeleton variant="text" width={200} height={30} />
            </>
          ) : (
            fleetOptions.map((fleet, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`fleet-${index}`}
                  name="fleet"
                  value={fleet}
                  checked={selectedFleet === fleet}
                  onChange={handleFleetChange}
                />
                <label htmlFor={`fleet-${index}`}>{fleet}</label>
              </div>
            ))
          )}

          <h3>Legal Entity Name</h3>
          {loading ? (
            <>
              <Skeleton variant="text" width={200} height={30} />
              <Skeleton variant="text" width={200} height={30} />
              <Skeleton variant="text" width={200} height={30} />
              <Skeleton variant="text" width={200} height={30} />
            </>
          ) : (
            legalEntityOptions.map((entity, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={`legal-entity-${index}`}
                  name="legal-entity"
                  value={entity}
                  checked={selectedLegalEntities.has(entity)}
                  onChange={handleLegalEntityChange}
                />
                <label htmlFor={`legal-entity-${index}`}>{entity}</label>
              </div>
            ))
          )}

        </Styled.Left>
        <Styled.Right>
          {loading ? (
            <Styled.Loading></Styled.Loading>
           ) : (
            <Styled.ComponentHolderTab>
              <Styled.LeftComponent active={sub} onClick={handleSub}><h3>Charts Overview</h3>
              <BarChartSharpIcon style={{ fontSize: 35,}} />
              </Styled.LeftComponent>
              <Styled.LeftComponent active={over} onClick={handleOverview}><h3></h3>Subscriptions
              <PeopleAltSharpIcon style={{ fontSize: 35,}} /> 
              </Styled.LeftComponent>
            </Styled.ComponentHolderTab>
          )}
          
          {data && !loading && !sub && (
  <Styled.Actions>
        <Subscriptions data={data} country="US" />
  </Styled.Actions>

  
)}


{data && !loading && sub && (
  <Styled.Actions>
        <Charts data={data} country="US" />
  </Styled.Actions>

  
)}

          
        </Styled.Right>

      </Styled.Master>
    </Styled.Holder>
  );
};
