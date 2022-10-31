import React from 'react'

const AuthContext = React.createContext({
   isLogin:false ,
   onLogout: ()=>{}
})
 export default AuthContext