import { Tab, TabGroup } from '@altenull/foret-react';
import React from 'react';
import { TabContentWrapper } from '../common';
import { ResponsiveContentLayout } from '../foundation';
import InstallationSection from './InstallationSection';
import SettingUpSection from './SettingUpSection';

const TabbableGetStarted = () => {
  return (
    <ResponsiveContentLayout>
      <TabGroup selectedValue={'tabbableGetStartedReactTap'} name={'tabbable-get-started-tap'}>
        <Tab id={'tabbable-get-started-react-tap'} labelText={'React'} value={'tabbableGetStartedReactTap'}>
          <TabContentWrapper>
            <InstallationSection isReactVersion={true} />
            <SettingUpSection />
          </TabContentWrapper>
        </Tab>

        <Tab id={'tabbable-get-started-ng-tap'} labelText={'Angular'} value={'tabbableGetStartedNgTap'}>
          <TabContentWrapper>
            <InstallationSection isAngularVersion={true} />
          </TabContentWrapper>
        </Tab>
      </TabGroup>
    </ResponsiveContentLayout>
  );
};

export default TabbableGetStarted;
