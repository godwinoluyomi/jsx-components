import React, { useState } from 'react';
import CardBox from './components/CardBox';
import NavBar from './components/NavBar';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

  // Set states for firstname and form submitted
  const [firstName, setFirstName] = useState('there');
  const [firstNameInput, setFirstNameInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to run on click of save button
  const sendValue = () => {

    // If first name is not empty set the firstname and submit status else default firstname to there and submit status to falsse
    if (firstNameInput.trim() !== '') {
      setFirstName(firstNameInput);
      setSubmitted(true);
    } else {
      setFirstName('there');
      setSubmitted(false);
    }
  };

  const handleTextInputChange = event => {
    setFirstName(event.target.value);
  };


  return (
    <>
      {/* NAVBAR */}
      <NavBar></NavBar>

      <div className=' '>
        <div className="grid grid-cols-1 place-items-center h-48">
          {/* Input */}
          <div className="place-self-auto w-1/4 mb-5 ">
            <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" value={firstNameInput} onChange={(event) => setFirstNameInput(event.target.value)}></TextField>
            <span className=' mr-6'></span>
            <Button variant="contained" onClick={sendValue}> Save </Button>
          </div>
          {/* Card */}
          <div className="place-self-auto w-1/4">
            <CardBox firstName={firstName} submitted={submitted} />
          </div>
          {/* Alert */}
          <div className="place-self-auto mt-4  w-1/4">
            <Alert severity="info"> Hello, {firstName}! </Alert>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
