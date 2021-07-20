import React from 'react';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ConversationCard } from '../../components/ConversationCard';
import Link from 'next/link';
import { Axios } from '../../core/axios';

const speakers = [
	{
		avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		fullname: 'Jeam Beam',
		id: 1
	},
	{
		avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
		fullname: 'Aria Stark',
		id: 2
	}
];

export default function RoomsPage({ rooms }) {
	return (
		<>
			<Header />
			<div className="container">
				<div className="mt-40 d-flex align-items-center justify-content-between">
					<h1>All conversations</h1>
					<Button color="green">+ Start Room</Button>
				</div>
				<div className="mt-30 grid">
					{rooms.map((room) => (
						<Link key={room.id} href={`/rooms/${room.id}`}>
							<a>
								<ConversationCard title={room.title} avatars={room.avatars} guestsCount={room.guestsCount} guests={room.guests} />
							</a>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export const getServerSideProps = async () => {
	try {
		const { data } = await Axios.get('/rooms.json');
		return {
			props: {
				rooms: data
			}
		};
	} catch (e) {
		console.log(e);
		return {
			props: {
				rooms: []
			}
		};
	}
};
