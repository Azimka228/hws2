import React from "react"
import s from "./FriendMessage.module.css"
import {MessageType} from "../HW1";

export type FriendMessagePropsType = {
	message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
	return (
		<div
			id={"hw1-friend-message-" + props.message.id}
			className={s.friendMessage}
		>
			<div className={s.friendImageAndText}>
				<img
					alt={props.message.user.name}
					id={"hw1-friend-avatar-" + props.message.id}
					// создаёт студент
					src={props.message.user.avatar}
					//
				/>
				<div className={s.friendText}>
					<div
						id={"hw1-friend-name-" + props.message.id}
						className={s.friendName}
					>
						{/*создаёт студент*/}
                        {props.message.user.name}
						{/**/}
					</div>
					<pre
						id={"hw1-friend-text-" + props.message.id}
						className={s.friendMessageText}
					>
                        {/*создаёт студент*/}
                        {props.message.message.text}
						{/**/}
                    </pre>
				</div>
			</div>
			<div
				id={"hw1-friend-time-" + props.message.id}
				className={s.friendTime}
			>   {props.message.message.time}
				{/*создаёт студент*/}

				{/**/}
			</div>
		</div>
	)
}

export default FriendMessage
