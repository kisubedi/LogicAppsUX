import { DesignerSearchBox } from '../..';
import type { CommonPanelProps } from '../panelUtil';
import { OperationCard } from './card';
import { Text, List, Panel } from '@fluentui/react';
import type { Operation } from '@microsoft-logic-apps/utils';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';

export type RecommendationPanelProps = {
  placeholder: string;
  onSearch: (term: string) => void;
  toggleCollapse: () => void;
  operationSearchResults: Operation[];
} & CommonPanelProps;

const getResultCards = (results: Operation[]) => {
  return results.map((operation) => (
    <>
      <OperationCard iconUrl={operation.iconUri} title={operation.title} key={operation.id} id={operation.id}></OperationCard>
      <div key={operation.id} style={{ height: '60px', border: '1px' }}>
        <Text>{operation.title}</Text>
      </div>
    </>
  ));
};

export const RecommendationPanel = (props: RecommendationPanelProps) => {
  const intl = useIntl();

  const panelLabel = intl.formatMessage({
    defaultMessage: 'panel',
    description: 'recommendation panel',
  });
  const [searchResults, setSearchResults] = React.useState<JSX.Element[]>([]);
  useEffect(() => setSearchResults(getResultCards(props.operationSearchResults)), [props.operationSearchResults]);
  return (
    <Panel
      headerText="Actions and Triggers"
      aria-label={panelLabel}
      customWidth={props.width}
      isOpen={!props.isCollapsed}
      onDismiss={props.toggleCollapse}
      closeButtonAriaLabel="close"
    >
      <DesignerSearchBox name="idk" onSearch={props.onSearch}></DesignerSearchBox>
      <OperationCard title="title" key="id" id="id" iconUrl="123"></OperationCard>
      <div className="msla-result-list">
        <List items={searchResults}></List>
      </div>
    </Panel>
  );
};
