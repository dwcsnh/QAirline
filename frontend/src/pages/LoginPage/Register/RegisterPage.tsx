import React, { useState } from 'react'

interface Props {
    handleSetRegister: () => void;
}

const RegisterPage: React.FC<Props> = ({handleSetRegister}) => {
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  return (
    <div className = "font-space-grotesk h-[40rem] w-[50%] relative">
        
    </div>
  )
}

export default RegisterPage