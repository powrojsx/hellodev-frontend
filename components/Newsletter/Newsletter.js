import React, { useState } from 'react';
import { connect } from 'react-redux';
import css from './Newsletter.scss';
import classNames from 'classnames';
import { useScrollYPosition } from 'react-use-scroll-position';
import Modal from 'react-modal';

import form from '../Form.scss';
import helpers from '../Helpers.scss';
import { Button } from '../Buttons/Buttons';

import Lottie from 'react-lottie';
import animation from '../../assets/email.json';
import {
  showNewsletterModal,
  hideNewsletterModal,
} from '../../redux/actions/newsletter';

export const _Newsletter = ({ isOpen, openModal, closeModal }) => {
  const scrollY = useScrollYPosition();

  const newsletterClasses = classNames({
    [css.Newsletter]: true,
    [css.Scrolled]: scrollY > 100,
  });

  const formClasses = classNames({
    [form.Form]: true,
    [form.Center]: true,
  });

  return (
    <>
      <button className={newsletterClasses} onClick={openModal}>
        <svg id='svg2439' viewBox='0 0 439.37 331.47'>
          <g id='g2449' transform='translate(-145.33 -145.33)'>
            <path
              id='path2451'
              style={{ stroke: '#fff', strokeWidth: 30.655, fill: 'none' }}
              d='m569.37 461.47v-300.81h-408.71v300.81h408.71z'
            />
            <path
              id='path2455'
              style={{ stroke: '#fff', strokeWidth: 30.655, fill: 'none' }}
              d='m164.46 164.49l176.32 178.67c13.07 13.17 36.85 13.01 49.64 0.12l176.2-177.35'
            />
            <path
              id='path2457'
              style={{ stroke: '#fff', strokeWidth: 30.655, fill: 'none' }}
              d='m170.52 451.57l135.09-138.11'
            />
            <path
              id='path2459'
              style={{ stroke: '#fff', strokeWidth: 30.655, fill: 'none' }}
              d='m557.97 449.97l-131.45-134.59'
            />
          </g>
        </svg>
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel='Newsletter'
        className={css.Modal}
        overlayClassName={css.Overlay}
      >
        <h2 className={css.Heading}>Newsletter</h2>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animation,
          }}
          width={150}
          height={150}
        />
        <p className={css.Paragraph}>
          Dołącz do nas już dziś, aby otrzymywać wiadomości z najlepiej
          ocenianymi postami!
        </p>
        <form className={formClasses}>
          <div className={form.FormGroup}>
            <label htmlFor='email' className={helpers.VisuallyHidden}>
              E-mail
            </label>
            <input
              type='email'
              required
              className={form.Text}
              placeholder='Podaj swój email'
            />
            <Button primary={true} type='submit'>
              Zapisz mnie!
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  isOpen: state.newsletter.isOpen,
});

const mapDispatchToProps = {
  openModal: showNewsletterModal,
  closeModal: hideNewsletterModal,
};

export const Newsletter = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Newsletter);
