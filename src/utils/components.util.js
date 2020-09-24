import { Table, TableBody, TableCell, TableHead, TableRow } from '@altenull/foret-react';
import { css } from '@emotion/core';
import React from 'react';
import {
  ButtonSection,
  CheckboxSection,
  RadioButtonSection,
  SelectSection,
  TabSection,
  ToggleSection,
} from '../components/components';
import { PROPS_TABLE_COLUMNS } from '../constants/components.constant';
import { ComponentHashEnum } from '../enums/components/component-hash.enum';
import { PropsTableColumnEnum } from '../enums/components/props-table-column.enum';

export const getComponentSections = (componentHashes) => {
  const componentHashToComponentSectionMap = {
    [ComponentHashEnum.Button]: ButtonSection,
    [ComponentHashEnum.Checkbox]: CheckboxSection,
    [ComponentHashEnum.RadioButton]: RadioButtonSection,
    [ComponentHashEnum.Select]: SelectSection,
    [ComponentHashEnum.Tab]: TabSection,
    [ComponentHashEnum.Toggle]: ToggleSection,
  };

  return componentHashes.map((componentHash) => {
    const SectionComponent = componentHashToComponentSectionMap[componentHash];

    return <SectionComponent key={componentHash} headingHash={componentHash} />;
  });
};

export const getTocItems = (intl, componentHashes) => {
  const componentHashToIntlIdMap = {
    [ComponentHashEnum.Button]: 'components.button.title',
    [ComponentHashEnum.Checkbox]: 'components.checkbox.title',
    [ComponentHashEnum.RadioButton]: 'components.radioButton.title',
    [ComponentHashEnum.Select]: 'components.select.title',
    [ComponentHashEnum.Tab]: 'components.tab.title',
    [ComponentHashEnum.Toggle]: 'components.toggle.title',
  };

  return componentHashes.map((componentHash) => ({
    to: componentHash,
    text: intl.formatMessage({ id: componentHashToIntlIdMap[componentHash] }),
  }));
};

export const getPropsOfComponentFactor = (intl, componentFactor, targetComponent, propsWithoutDescription) =>
  propsWithoutDescription.map(({ key, ...rest }) => {
    return {
      ...rest,
      [PropsTableColumnEnum.Description]: intl.formatMessage({
        id: `components.${componentFactor}.propsDescription.${targetComponent}.${key}`,
      }),
    };
  });

export const getPropertiesOfComponentFactor = (intl, componentFactor, targetComponent, proppertiesWithoutDescription) =>
  proppertiesWithoutDescription.map(({ key, ...rest }) => {
    return {
      ...rest,
      [PropsTableColumnEnum.Description]: intl.formatMessage({
        id: `components.${componentFactor}.propertiesDescription.${targetComponent}.${key}`,
      }),
    };
  });

export const getPropsTable = (componentProps) => {
  const getPropsTableHeader = () =>
    PROPS_TABLE_COLUMNS.map((propsTableColumn) => (
      <TableCell key={propsTableColumn} type={'th'}>
        {propsTableColumn}
      </TableCell>
    ));

  const getPropsTableRows = () =>
    componentProps.map((prop, index) => (
      <TableRow key={index}>
        <TableCell
          css={css`
            white-space: pre-line;
          `}>
          {prop.name}
        </TableCell>
        <TableCell
          css={css`
            font-style: italic;
          `}>
          {prop.type}
        </TableCell>
        <TableCell>{prop.default}</TableCell>
        <TableCell>{prop.description}</TableCell>
      </TableRow>
    ));

  return (
    <Table>
      <TableHead>
        <TableRow>{getPropsTableHeader()}</TableRow>
      </TableHead>
      <TableBody>{getPropsTableRows()}</TableBody>
    </Table>
  );
};
