import { DatePicker, Heading3, Paragraph, Subtitle2, Tab, TabGroup } from '@altenull/foret-react';
import { useIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import { DATE_PICKER_PROPS_WITHOUT_DESCRIPTION } from '../../constants/components.constant';
import { CodeViewerContainer } from '../../containers/code';
import { ComponentFactorEnum } from '../../enums/components/component-factor.enum';
import { useDatePickerSectionQuery } from '../../hooks/components';
import { getPropsOfComponentFactor, getPropsTable } from '../../utils/components.util';
import { marginTopForHeading2, marginTopForHeading3, marginTopForSubtitle2 } from '../../utils/margin.util';
import { ComponentDemoBox } from '../code';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';
import AnchorHeading2 from './AnchorHeading2';

const DatePickerSection = ({ componentHash, onAnchorHeading2Click }) => {
  const [demoDatePickerSelectedDate, setDemoDatePickerSelectedDate] = useState(new Date());
  const intl = useIntl();
  const {
    importDatePickerReactCode,
    demoDatePickerReactCode,
    demoDatePickerSelectedDateReactCode,
    demoDatePickerLocaleReactCode,
  } = useDatePickerSectionQuery();

  const getDemoDatePicker = () => <DatePicker id='date-picker' />;

  const getDemoDatePickerSelectedDate = () => {
    const handleDatePicker = (newSelectedDate, id) => {
      setDemoDatePickerSelectedDate(newSelectedDate);
    }

    return <DatePicker id='date-picker-selected-date' selectedDate={demoDatePickerSelectedDate} onChange={handleDatePicker}/>
  };

  const getDemoDatePickerLocale = () => <DatePicker id='date-picker-locale' locale={'ko'} />;

  const getReactVersionContent = () => {
    const datePickerProps = getPropsOfComponentFactor(
      intl,
      ComponentFactorEnum.DatePicker,
      'datePicker',
      DATE_PICKER_PROPS_WITHOUT_DESCRIPTION
    );

    return (
      <TabContentWrapper>
        <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.shared.liveDemo' })}
        </Heading3>
        <Subtitle2>Date Picker:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoDatePicker()}
          codeInHtml={demoDatePickerReactCode.nodes[0].html}
          codeInMarkdown={demoDatePickerReactCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>With selected date:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoDatePickerSelectedDate()}
          codeInHtml={demoDatePickerSelectedDateReactCode.nodes[0].html}
          codeInMarkdown={demoDatePickerSelectedDateReactCode.nodes[0].rawMarkdownBody}
        />
        <Subtitle2 css={marginTopForSubtitle2}>With locale:</Subtitle2>
        <ComponentDemoBox
          demo={getDemoDatePickerLocale()}
          codeInHtml={demoDatePickerLocaleReactCode.nodes[0].html}
          codeInMarkdown={demoDatePickerLocaleReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.shared.imports' })}
        </Heading3>
        <CodeViewerContainer
          codeInHtml={importDatePickerReactCode.nodes[0].html}
          codeInMarkdown={importDatePickerReactCode.nodes[0].rawMarkdownBody}
        />

        <Heading3 css={marginTopForHeading3} enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.shared.props' })}
        </Heading3>
        {getPropsTable(datePickerProps)}
      </TabContentWrapper>
    );
  };

  return (
    <section>
      <ResponsiveContentLayout>
        <AnchorHeading2
          css={marginTopForHeading2}
          componentHash={componentHash}
          onAnchorHeading2Click={onAnchorHeading2Click}>
          {intl.formatMessage({ id: 'components.datePicker.title' })}
        </AnchorHeading2>
        <Paragraph enableMargin enableResponsive>
          {intl.formatMessage({ id: 'components.datePicker.description' })}
        </Paragraph>

        <TabGroup selectedValue={'datePickerSectionReactTap'} name={'datePicker-section-tap'}>
          <Tab id={'datePicker-section-react-tap'} labelText={'React'} value={'datePickerSectionReactTap'}>
            {getReactVersionContent()}
          </Tab>
        </TabGroup>
      </ResponsiveContentLayout>
    </section>
  );
};

export default DatePickerSection;
