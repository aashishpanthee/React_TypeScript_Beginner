import React,{useState} from 'react'

const users=[
{name:"Sarah",age:30},
{name:"Alex",age:20},
{name:"Michael",age:25}
]

const UserSearch = () => {
    const [name,setName]=useState('');
    const [user,setUser]=useState<{name:string,age:number}| undefined>();
    const onClick=()=>{
    const foundUser=users.find((user)=>{
        return user.name === name;
    })
    setUser(foundUser);
    }
  return (
    <div>UserSearch
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <button onClick={onClick}>Find</button>
        <div>
            {user && user.name}
        </div>
    </div>
  )
}

export default UserSearch