import { ChangeEvent, ReactNode, useRef, useState } from 'react';

import classNames from 'classnames';
import { get } from 'node:http';

import useKeyPress from '~hooks/useKeyPress/useKeyPress';
import { useModulesStore } from '~stores/useModulesStore';

import AccordionTab from '~components/AccordionTab/AccordionTab';
import Button from '~components/Button/Button';
import { Icon } from '~components/Icon/Icon';
import InputSearch from '~components/InputSearch/InputSearch';
import { TInputComponent } from '~components/InputSearch/InputSearch.types';
import Modal from '~components/Modal/Modal';
import SearchClue from '~components/SearchClue/SearchClue';

import AddAccount from './components/AddAccount/AddAccount';
import SocialAccordion from './components/SocialAccordion/SocialAccordion';

import scss from './Sidebar.module.scss';

function Sidebar(): ReactNode {
  const { addAccount, getAllAccountsFrom, modules } = useModulesStore();
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  const inputSearchRef = useRef<TInputComponent | null>(null);

  const handleToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectSocialMedia = (
    e: ChangeEvent<HTMLSelectElement>,
    addonId: string
  ): void => {
    addAccount(addonId);
    setIsOpen(false);
  };

  const renderSearchClue = (): ReactNode => (
    <SearchClue
      clearInput={inputSearchRef.current?.clearInput}
      label="Searching for"
      value={value}
    />
  );

  useKeyPress('Escape', (e: KeyboardEvent) => {
    e.preventDefault();
    setIsOpen(false);
  });

  return (
    <div className={scss.container}>
      <Button
        onClick={() => setMobileIsOpen((prev) => !prev)}
        variant="outlined"
      >
        Abre
      </Button>
      <AccordionTab
        className={classNames(scss.mobile, { [scss.openMobile]: mobileIsOpen })}
        hideCloseButton
        title="Select Social Media"
      >
        <div className={scss.content}>
          <InputSearch
            error={false}
            onChange={(data) => setValue(data as string)}
            placeholder="Search for social media"
            ref={inputSearchRef}
          />

          {value && renderSearchClue()}

          <div className={scss.items}>
            {modules.map((module) => {
              getAllAccountsFrom(module.id).then((res) => console.log(res))
              return <SocialAccordion accountList={[]} key={module.id} socialMediaName={module.name} />
            })}
          </div>
          <div className={scss.newAccountButtonMobileContainer}>
            <Button
              className={scss.newAccountButton}
              onClick={handleToggleModal}
              variant="container"
            >
              + &ensp; New Account
            </Button>
            <div className={scss.newAccountButtonMobileContainer}>
              <Button
                circle
                className={scss.newAccountButtonMobile}
                icon={<Icon icon="plus" size={16} />}
                onClick={handleToggleModal}
                variant="container"
              />
            </div>
            <Modal
              footer={<div>footer</div>}
              isOpen={isOpen}
              onClickOutside={() => setIsOpen(false)}
              title="Adicionar Social"
            >
              <AddAccount onChange={handleSelectSocialMedia} />
            </Modal>
          </div>
        </div>
      </AccordionTab>
    </div>
  );
}

export default Sidebar;
