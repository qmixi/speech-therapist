import React, { Component, createContext } from 'react';
import { node } from 'prop-types';

import Modal from './Modal';

const ModalContext = createContext();

export const ModalConsumer = ModalContext.Consumer;

export class ModalProvider extends Component {
  state = {
    modalContent: null,
    title: '',
  };

  show = (modalContent, title) => {
    this.setState({
      modalContent,
      title,
    });
  };

  hide = () => {
    this.setState({
      modalContent: null,
    });
  };

  render() {
    const { children } = this.props;
    const { modalContent, title } = this.state;
    const ContentComponent = modalContent;
    return (
      <ModalContext.Provider
        value={{
          modalContent: modalContent,
          showModal: this.show,
        }}
      >
        {children}
        {ContentComponent ? (
          <Modal
            content={ContentComponent}
            hideModal={this.hide}
            title={title}
          />
        ) : (
          ''
        )}
      </ModalContext.Provider>
    );
  }
}

ModalProvider.propTypes = {
  children: node.isRequired,
};
