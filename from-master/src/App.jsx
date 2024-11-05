
import './App.css'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'

function App() {

  // Reusable form
    const handleSignUpSubmit = data =>{
        console.log('Sign-Up', data);
        
    }
    const handleProfileUpdateSubmit = data =>{
        console.log('Update Profile', data);
        
    }

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}

      {/* Reusable form */}
      <ReuseableForm fromTitle={'Sign-Up'} handleSubmit={handleSignUpSubmit}></ReuseableForm>
      <ReuseableForm fromTitle={'Profile Update'} handleSubmit={handleProfileUpdateSubmit} submitBtnText={'Update'}></ReuseableForm>
   
    </>
  )
}

export default App
