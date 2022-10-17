import React, {ChangeEvent, KeyboardEvent, useState} from "react"
import Greeting from "./Greeting"
import {UserType} from "./HW3"

type GreetingContainerPropsType = {
	users: Array<UserType>
	addUserCallback: (e: string) => void
}

export const pureAddUser = (name: string, setError: any, setName: any, addUserCallback: (e: string) => void) => {
    if (name === "") {
        setError("Field is required")
    } else {
        addUserCallback(name)
        setName("")
    }
	// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: any, setError: any) => {
	if (name === "") {
        setError("Field is required")
    }
        // если имя пустое - показать ошибку
}

export const pureOnEnter = (e: any, addUser: any) => {
	if (e.key === "Enter") {
		addUser()
	}// если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
																	 users,
																	 addUserCallback,
																 }) => {
	// деструктуризация пропсов
	const [name, setName] = useState<string>("") // need to fix any
	const [error, setError] = useState<string>("") // need to fix any

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
		setName(e.currentTarget.value) // need to fix

		error && setError("")
	}
	const addUser = () => {
		pureAddUser(name, setError, setName, addUserCallback)
	}

	const onBlur = () => {
		pureOnBlur(name, setError)
	}

	const onEnter = (e:any) => {
		pureOnEnter(e, addUser)
	}

	const totalUsers = users.length // need to fix
	const lastUserName = users[users.length-1]?.name// need to fix
	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			onBlur={onBlur}
			onEnter={onEnter}
			error={error}
			totalUsers={totalUsers}
			lastUserName={lastUserName}
		/>
	)
}

export default GreetingContainer
