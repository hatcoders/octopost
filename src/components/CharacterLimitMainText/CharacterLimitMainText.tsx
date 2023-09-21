import CharacterLimit from '~components/CharacterLimit/CharacterLimit';

import scss from './CharacterLimit.module.scss';

import Placeholder from './images/Placeholder.svg';

import {
  ICharacterLimitMainTextProps,
  ISocialItem,
} from './CharacterLimitMainText.types';

function CharacterLimitMainText(props: ICharacterLimitMainTextProps) {
  return props.socialList.map((socialItem: ISocialItem) => (
    <div key={socialItem.id} className={`social-item-${socialItem.id}`}>
      <div className={scss.social}>
        <img src={Placeholder} /> {/* adicionar svg por map aqui futuramente */}
        <CharacterLimit maxLength={socialItem.maxLength} value={props.value} />
      </div>
    </div>
  ));
}

export default CharacterLimitMainText;
