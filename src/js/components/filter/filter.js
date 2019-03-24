import Component from '../component';
import makeTemplate from './template';

export default class Filter extends Component {
  constructor(data) {
    super();
    this._name = data.name;
    this._checked = data.checked;
  }

  get template() {
    return makeTemplate(
        this._name,
        this._checked
    );
  }
}
