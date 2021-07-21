import React from 'react';
import Modal from 'react-modal';
import { EventModal } from '../ui/EventModal'

const customStyles = {
	content: {
		top			:'50%',
		left		:'50%',
		right		:'auto',
		bottom		:'auto',
		marginRight	:'-50%',
		transform	:'translate(-50%, -50%)'
	}
}

Modal.setAppElement('#root')

export const CalendarModal = () => {

	const closeModal = () => {

	}

	return (
		<Modal // Working with Redux, not useState
			isOpen={true}
			// onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={400}
			className='modal __modal-main mt-2'
			overlayClassName='modal-fondo'
		>
			<EventModal />
		</Modal>
	);
};
