import React from 'react';
import { node, func, string } from 'prop-types';

import { useScrollLocker } from 'utils/hooks';
import { ModalScene, Content, Modal, Header, Close } from './styles';

const ModalWindow = ({ content, title, hideModal }) => {
  useScrollLocker();
  return (
    <>
      <ModalScene onClick={hideModal} />
      <Modal>
        <Header>{title}</Header>
        <Close onClick={hideModal}>+</Close>
        <Content>
          <div className="modal__content">{content}</div>
        </Content>
      </Modal>
    </>
  );
};

ModalWindow.propTypes = {
  content: node.isRequired,
  hideModal: func.isRequired,
  title: string.isRequired,
};

export default ModalWindow;
