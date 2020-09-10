import { PropsTableColumnEnum } from '../enums/components/props-table-column.enum';

export const PROPS_TABLE_COLUMNS = [
  PropsTableColumnEnum.Name,
  PropsTableColumnEnum.Type,
  PropsTableColumnEnum.Default,
  PropsTableColumnEnum.Description,
];

export const BUTTON_PROPS_WITHOUT_DESCRIPTION = [
  {
    key: 'disabled',
    name: 'disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    key: 'children',
    name: 'children',
    type: 'React.Node',
    default: '',
  },
];

export const CHECKBOX_GROUP_PROPS_WITHOUT_DESCRIPTION = [
  {
    key: 'legendText',
    name: 'legendText',
    type: 'string',
    default: '',
  },
  {
    key: 'disabled',
    name: 'disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    key: 'onChange',
    name: 'onChange',
    type: 'function(id: string, newChecked: boolean)',
    default: '',
  },
];

export const CHECKBOX_PROPS_WITHOUT_DESCRIPTION = [
  {
    key: 'id',
    name: 'id',
    type: 'string',
    default: '',
  },
  {
    key: 'labelText',
    name: 'labelText',
    type: 'string',
    default: '',
  },
  {
    key: 'checked',
    name: 'checked',
    type: 'boolean',
    default: 'false',
  },
];

export const CHECKBOX_GROUP_PROPERTIES_WITHOUT_DESCRIPTION = [
  {
    key: 'legendText',
    name: '@Input() legendText',
    type: 'string',
    default: '',
  },
  {
    key: 'disabled',
    name: '@Input() disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    key: 'changeCheckbox',
    name: '@Output() changeCheckbox',
    type: 'function({ id: string, newChecked: boolean })',
    default: '',
  },
];

export const CHECKBOX_PROPERTIES_WITHOUT_DESCRIPTION = [
  {
    key: 'id',
    name: '@Input() id',
    type: 'string',
    default: '',
  },
  {
    key: 'labelText',
    name: '@Input() labelText',
    type: 'string',
    default: '',
  },
  {
    key: 'checked',
    name: '@Input() checked',
    type: 'boolean',
    default: 'false',
  },
];

export const TOGGLE_PROPS_WITHOUT_DESCRIPTION = [
  {
    key: 'id',
    name: 'id',
    type: 'string',
    default: '',
  },
  {
    key: 'disabled',
    name: 'disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    key: 'checked',
    name: 'checked',
    type: 'boolean',
    default: 'false',
  },
  {
    key: 'onToggle',
    name: 'onToggle',
    type: 'function(id: string, newChecked: boolean)',
    default: '',
  },
];

export const TOGGLE_PROPERTIES_WITHOUT_DESCRIPTION = [
  {
    key: 'id',
    name: '@Input() id',
    type: 'string',
    default: '',
  },
  {
    key: 'disabled',
    name: '@Input() disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    key: 'checked',
    name: '@Input() checked',
    type: 'boolean',
    default: 'false',
  },
  {
    key: 'toggle',
    name: '@Output() toggle',
    type: 'function({ id: string, newChecked: boolean })',
    default: '',
  },
];
