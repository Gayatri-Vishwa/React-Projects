import { useState,useEffect } from 'react';
import styled from 'styled-components'
import SearchResults from './components/SearchResults';

export const BASE_URL="http://localhost:9000"

function App() {

  const [data,setData]=useState(null);
  const [selectedButton,setselectedButton]=useState("all")
   const [filteredData,setFilteredData]=useState(null)
  const [error,setError]=useState(null)
   const[loading,setLoading]=useState(false)
 
                                         
  const fetchFoodData=async()=>{       //first we have to run server( npm run server) folder  on web then it will work  
    setLoading(true);
    try{
          let response= await fetch(BASE_URL);
    response= await response.json()
    console.log(response.foodData)
    setData(response)
    setFilteredData(response)
      setLoading(false)

    }catch (error){
        console.log("error unable to fetch data",error)
        setError("unable to fetch data")
    }

  };

    useEffect(() => {
    fetchFoodData();

     }, []);



  const searchFood=(e)=>{
    const searchvalue=e.target.value
  if (searchvalue===""){
  setFilteredData(null)
  }
  const filter=data?.filter((food)=>food.name.toLowerCase().includes(searchvalue.toLowerCase()))      //includes(searchvalue) on string  ,strin in which include e.target.value
    setFilteredData(filter)
  }

  const filteredFood=(type)=>{
    if(type==="all"){
      setFilteredData(data);
      setselectedButton("all");
      return
    }
    const filter=data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))      //includes(searchvalue) on string  ,strin in which include e.target.value
    setFilteredData(filter)
    setselectedButton(type)


  }

const filterBtns=[                //array of buttons  ,can make more btns here easily  btn name for key in loop
  {
    name:"all",
    type:"all"
  },
  {
    name:"lunch",
    type:"lunch"
  },
  {
    name:"breakfast",
    type:"breakfast"
  },
  {
    name:"dinner",
    type:"dinner"
  }
]


  return (
    <>

    <Container>
    <TopContainer>
      <div className="logo">
        <img src="/logo.svg" alt="logo" />
      </div>

      <div className="search">
        <input onChange={searchFood} type="text" placeholder='Search food' />
      </div>
    </TopContainer>

    <FilterContainer>

      {
        filterBtns?.map((value)=>(
           <Button
           isSelected={selectedButton===value.type}         //should be boolean value
           key={value.name} onClick={()=>filteredFood(value.type)}>{value.name}</Button>
        ))
      }

      {/* <Button onClick={()=>filteredFood("all")}>All</Button>
      <Button onClick={()=>filteredFood("breakfast")}>Breakfast</Button>
      <Button onClick={()=>filteredFood("lunch")}> Lunch</Button>
      <Button onClick={()=>filteredFood("dinner")}>Dinner</Button> */}

    </FilterContainer>
 
  
    </Container>
     <SearchResults data={filteredData}/>
        </>
  )
}

export default App


 export const Container=styled.div`
max-width: 1200px;
margin: 40px auto;
`;

const TopContainer=styled.section`
height: 100px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

.search{
  input{
    background-color: transparent;
    border:1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 4px;
    &::placeholder{
      color: white;
    }
  }
}
@media (0 < width < 600px) {
  flex-direction: column;
  gap: 20px;
  height: 90px;
}

`;

const FilterContainer=styled.section`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 12px;
  color: white;
  padding-bottom: 40px;
 
`;


 export const Button =styled.button`        //by export we can access it in another components of this folder Searchresult.jsx
  background: ${({isSelected})=>isSelected?"#b00c0c":"#ef2020"};       //props with dollar sign and distructuring
   outline: 1px solid  ${({isSelected})=>isSelected?"white":"#ed4444"};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  color: white;

&:hover{
background-color: #b00c0c;
}
`;

