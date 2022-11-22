import React from 'react'
import Chat from './Chat'
import LogUser from './LogUser'

function IsLoged({user ,setUser}) {

    if(user) return <Chat user={user}/>
    else return<LogUser setUser = {setUser}/>
}

export default IsLoged