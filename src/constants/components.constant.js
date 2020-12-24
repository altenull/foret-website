import { ComponentHashEnum } from '../enums/components/component-hash.enum';
import { PropsTableColumnEnum } from '../enums/components/props-table-column.enum';

export const COMPONENT_HASHES = [
  ComponentHashEnum.Button,
  ComponentHashEnum.Checkbox,
  ComponentHashEnum.DatePicker,
  ComponentHashEnum.RadioButton,
  ComponentHashEnum.Select,
  ComponentHashEnum.Tab,
  ComponentHashEnum.Toggle,
];

export const PROPS_TABLE_COLUMNS = [
  PropsTableColumnEnum.Name,
  PropsTableColumnEnum.Type,
  PropsTableColumnEnum.Default,
  PropsTableColumnEnum.Description,
];

const ID_SUB_PROP = {
  key: 'id',
  name: 'id',
  type: 'string',
  default: '',
};

const ID_SUB_PROPERTY = {
  key: 'id',
  name: '@Input()\nid',
  type: 'string',
  default: '',
};

const LEGEND_TEXT_SUB_PROP = {
  key: 'legendText',
  name: 'legendText',
  type: 'string',
  default: '',
};

const LEGEND_TEXT_SUB_PROPERTY = {
  key: 'legendText',
  name: '@Input()\nlegendText',
  type: 'string',
  default: '',
};

const LABEL_TEXT_SUB_PROP = {
  key: 'labelText',
  name: 'labelText',
  type: 'string',
  default: '',
};

const LABEL_TEXT_SUB_PROPERTY = {
  key: 'labelText',
  name: '@Input()\nlabelText',
  type: 'string',
  default: '',
};

const VALUE_SUB_PROP = {
  key: 'value',
  name: 'value',
  type: 'string',
  default: '',
};

const VALUE_SUB_PROPERTY = {
  key: 'value',
  name: '@Input()\nvalue',
  type: 'string',
  default: '',
};

const SELECTED_VALUE_SUB_PROP = {
  key: 'selectedValue',
  name: 'selectedValue',
  type: 'string',
  default: '',
};

const CHECKED_SUB_PROP = {
  key: 'checked',
  name: 'checked',
  type: 'boolean',
  default: 'false',
};

const CHECKED_SUB_PROPERTY = {
  key: 'checked',
  name: '@Input()\nchecked',
  type: 'boolean',
  default: 'false',
};

const DISABLED_SUB_PROP = {
  key: 'disabled',
  name: 'disabled',
  type: 'boolean',
  default: 'false',
};

const DISABELD_SUB_PROPERTY = {
  key: 'disabled',
  name: '@Input()\ndisabled',
  type: 'boolean',
  default: 'false',
};

export const BUTTON_PROPS_WITHOUT_DESCRIPTION = [
  DISABLED_SUB_PROP,
  {
    key: 'children',
    name: 'children',
    type: 'React.Node',
    default: '',
  },
];

export const CHECKBOX_GROUP_PROPS_WITHOUT_DESCRIPTION = [
  LEGEND_TEXT_SUB_PROP,
  DISABLED_SUB_PROP,
  {
    key: 'onChange',
    name: 'onChange',
    type: 'function(id: string, newChecked: boolean)',
    default: '',
  },
];

export const CHECKBOX_PROPS_WITHOUT_DESCRIPTION = [ID_SUB_PROP, LABEL_TEXT_SUB_PROP, CHECKED_SUB_PROP];

export const CHECKBOX_GROUP_PROPERTIES_WITHOUT_DESCRIPTION = [
  LEGEND_TEXT_SUB_PROPERTY,
  DISABELD_SUB_PROPERTY,
  {
    key: 'changeCheckbox',
    name: '@Output()\nchangeCheckbox',
    type: 'function({ id: string, newChecked: boolean })',
    default: '',
  },
];

export const CHECKBOX_PROPERTIES_WITHOUT_DESCRIPTION = [ID_SUB_PROPERTY, LABEL_TEXT_SUB_PROPERTY, CHECKED_SUB_PROPERTY];

export const RADIO_BUTTON_GROUP_PROPS_WITHOUT_DESCRIPTION = [
  LEGEND_TEXT_SUB_PROP,
  DISABLED_SUB_PROP,
  {
    key: 'checkedValue',
    name: 'checkedValue',
    type: 'string',
    default: '',
  },
  {
    key: 'onChange',
    name: 'onChange',
    type: 'function(id: string, newCheckedValue: string)',
    default: '',
  },
];

export const RADIO_BUTTON_PROPS_WITHOUT_DESCRIPTION = [ID_SUB_PROP, LABEL_TEXT_SUB_PROP, VALUE_SUB_PROP];

export const RADIO_BUTTON_GROUP_PROPERTIES_WITHOUT_DESCRIPTION = [
  LEGEND_TEXT_SUB_PROPERTY,
  DISABELD_SUB_PROPERTY,
  {
    key: 'checkedValue',
    name: '@Input()\ncheckedValue',
    type: 'string',
    default: '',
  },
  {
    key: 'changeRadioButton',
    name: '@Output()\nchangeRadioButton',
    type: 'function({ id: string, newCheckedValue: string })',
    default: '',
  },
];

export const RADIO_BUTTON_PROPERTIES_WITHOUT_DESCRIPTION = [
  ID_SUB_PROPERTY,
  LABEL_TEXT_SUB_PROPERTY,
  VALUE_SUB_PROPERTY,
];

export const SELECT_PROPS_WITHOUT_DESCRIPTION = [
  ID_SUB_PROP,
  LEGEND_TEXT_SUB_PROP,
  DISABLED_SUB_PROP,
  SELECTED_VALUE_SUB_PROP,
  {
    key: 'placeholder',
    name: 'placeholder',
    type: 'string',
    default: '',
  },
  {
    key: 'onChange',
    name: 'onChange',
    type: 'function(id: string, newSelectedValue: string)',
    default: '',
  },
];

export const SELECT_ITEM_GROUP_PROPS_WITHOUT_DESCRIPTION = [LABEL_TEXT_SUB_PROP, DISABLED_SUB_PROP];

export const SELECT_ITEM_PROPS_WITHOUT_DESCRIPTION = [VALUE_SUB_PROP, LABEL_TEXT_SUB_PROP, DISABLED_SUB_PROP];

export const SELECT_PROPERTIES_WITHOUT_DESCRIPTION = [
  ID_SUB_PROPERTY,
  LEGEND_TEXT_SUB_PROPERTY,
  DISABELD_SUB_PROPERTY,
  {
    key: 'placeholder',
    name: '@Input()\nplaceholder',
    type: 'string',
    default: '',
  },
  {
    key: 'changeSelect',
    name: '@Output()\nchangeSelect',
    type: 'function({ id: string, newSelectedValue: string })',
    default: '',
  },
];

export const TAB_GROUP_PROPS_WITHOUT_DESCRIPTION = [
  SELECTED_VALUE_SUB_PROP,
  {
    key: 'onChange',
    name: 'onChange',
    type: 'function(id: string, newSelectedValue: string)',
    default: '',
  },
];

export const TAB_PROPS_WITHOUT_DESCRIPTION = [ID_SUB_PROP, LABEL_TEXT_SUB_PROP, VALUE_SUB_PROP];

export const TAB_GROUP_PROPERTIES_WITHOUT_DESCRIPTION = [
  {
    key: 'selectedValue',
    name: '@Input()\nselectedValue',
    type: 'string',
    default: '',
  },
  {
    key: 'changeTab',
    name: '@Output()\nchangeTab',
    type: 'function({ id: string, newSelectedValue: string })',
    default: '',
  },
];

export const TAB_PROPERTIES_WITHOUT_DESCRIPTION = [ID_SUB_PROPERTY, LABEL_TEXT_SUB_PROPERTY, VALUE_SUB_PROPERTY];

export const TOGGLE_PROPS_WITHOUT_DESCRIPTION = [
  ID_SUB_PROP,
  DISABLED_SUB_PROP,
  CHECKED_SUB_PROP,
  {
    key: 'onToggle',
    name: 'onToggle',
    type: 'function(id: string, newChecked: boolean)',
    default: '',
  },
];

export const TOGGLE_PROPERTIES_WITHOUT_DESCRIPTION = [
  ID_SUB_PROPERTY,
  DISABELD_SUB_PROPERTY,
  CHECKED_SUB_PROPERTY,
  {
    key: 'toggle',
    name: '@Output()\ntoggle',
    type: 'function({ id: string, newChecked: boolean })',
    default: '',
  },
];
