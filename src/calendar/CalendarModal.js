import React, {useState} from 'react';
import Modal from 'react-modal';

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

	const [isOpen, setIsOpen,] = useState(true);

	const closeModal = () => {
		setIsOpen(false)
	}

	return (
		<Modal // Working with Redux, not useState
			isOpen={isOpen}
			// onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={400}
			className='modal'
			overlayClassName='modal-fondo'
		>
			<h1>Hola mundo</h1>
			<hr />
			<span>Hola de nuevo</span>
		</Modal>
	);
};
