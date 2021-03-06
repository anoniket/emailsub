import React,{useState,useEffect} from "react";
import Axios from "axios"
import "./App.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f6dfeb"
    },
    '& .MuiTextField-root': {
      
      width: "100%",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#ffed99"
    },
   
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#ffed99"
    },
    "& .MuiInputLabel-outlined": {
      color: "#f6dfeb"
    },
   
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#ffed99"
    }
  }
});


function App() {
  const classes = useStyles();  
  const [email,setEmail] = useState(""); 
  const [age,setAge] = useState("");
  const [err,setErr] = useState("");
  const [loading,setLoading] = useState(false);
  const [counter,setCounter] = useState(60);
  useEffect(()=>{
    setErr("");
  },[email])


  useEffect(()=>{
   runCounter();
  },[])

  useEffect(()=>{
    if(counter>0){
      setTimeout(()=>{
        setCounter(counter-1);
       },1000)
    }

  },[counter])

  const runCounter = () => {
    setTimeout(()=>{
      setCounter(counter-1);
    },1000)
    
  }

  const handleChange = (e) => {
    
    if(e.target.name === "age"){
      setAge(e.target.value);
    }
    else{
      setEmail(e.target.value);
    }
  
  }
   
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

  const submit = async () => {
    setLoading(true);
    if(validateEmail(email) && age>0){
      await Axios.post("/email/add",{
        email:email,
        age:age
      })
      .then((res)=>{
        setLoading(false);
        if(res.data.success){
         setEmail("");
         setAge("");
         setLoading(false);
         notify();
        }

        else{
         
         setLoading(false);
         toast.error(res.data.data, {
          position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
          });
          
        }

      })
      .catch((err)=>{
        setLoading(false);
        toast.error('Something went wrong, Please try again !!', {
          position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
          });

      })
    }
    else{
      setErr("Enter Valid Email Please");
      setLoading(false);
      
    }
  } 

  const notify = ()=> {
    toast.dark('Subscribed Successfully !!', {
      position: "bottom-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
      });
  }
 
  return (
    <div style={{height:"100%",width:"100%"}}>

    <div className="container">
    <div className="headi">
      <h1>Subscribe to the news letter</h1>
    </div>
    <div className="formD">
      
      <TextField id="outlined-basic" label="email Please?" variant="outlined" 
      className={classes.root}
      name="email"
      value={email}
      inputProps={{style:{fontFamily:'Krona One'}}}
      style={{width:"100%"}}
      onChange={handleChange}
      type="email"
      />
      
      <TextField id="outlined-basic" label="age Please?" variant="outlined" 
      className={classes.root}
      name="age"
      value={age}
      inputProps={{style:{fontFamily:'Krona One'}}}
      style={{width:"100%"}}
      onChange={handleChange}
      type="number"
      />


     <p style={{color:"red",textAlign:"right",marginTop:"1rem"}}>{err}</p>
    </div>
    <div>
    {loading ? <Spinner animation="border" variant="light" /> :<Button disabled={counter===0} variant="outline-light" onClick={submit} className="cstmBtn">Let's Go!!</Button> }
    <h1 style={{color:"yellow"}}>{counter}</h1>
    </div>
             
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    
    </div>
    </div>
  );
}

export default App;
