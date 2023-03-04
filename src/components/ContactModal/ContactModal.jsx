import { EditContactForm } from 'components/EditContactForm';
import { Overlay, ModalContainer } from './ContactModal.styled';

export const ContactModal = () => {
  return (
    <Overlay>
      <ModalContainer>
        <EditContactForm />
      </ModalContainer>
    </Overlay>
  );
};
