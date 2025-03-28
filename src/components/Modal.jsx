import Portal from './Portal'
import Button from './Button'
import { FaX } from 'react-icons/fa6'

const Modal = ({ showModal, handleModal, children }) => {
	return (
		<Portal>
			{
				showModal && (
					<div className='bg-black/50 absolute inset-0 size-full flex flex-col items-center justify-center'>
						<div>
							<div className='bg-white flex justify-end rounded-t'>
								<Button
									className='p-4 text-text-color/50 hover:text-text-color/75 outline-none rounded-none hover:bg-transparent active:bg-transparent'
									onClick={handleModal}
								>
									<FaX className='size-6' />
								</Button>
							</div>
							<div className='bg-white pb-8 px-24 flex flex-col items-center justify-center rounded rounded-t-none'>
								{children}
							</div>
						</div>
					</div>
				)
			}

		</Portal>
	)
}

export default Modal