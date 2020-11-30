import React from "react";
import { Box, Link, Heading, Text } from "rimble-ui";
import AppHeader from "../../molecules/AppHeader";
import TokenList from "../../organisms/TokenList";
import { TokenListState } from "../../../reducers/tokens";
import SetTokenModal from "../../organisms/SetTokenModal";
import AddNewToken from "../../atoms/AddNewToken";

export interface ExplorePageTemplateProps {
  readonly color: string;
  readonly state: TokenListState;
  dispatch({}: object): void;
}

const ExplorePageTemplate = ({
  color,
  state,
  dispatch,
}: ExplorePageTemplateProps) => (
  <div>
    <AppHeader />
    <Box m={"auto"} my={5} width={[3 / 4, 1 / 2]}>
      <Heading as={"h1"}>Token Explorer</Heading>
      <Text>
        Check the status of the tokens you have been distributed and information
        on the campaign.
      </Text>
      <TokenList color={color} tokens={state.tokens} loading={false} />
      <AddNewToken color={color} dispatch={dispatch} />
      <SetTokenModal color={color} state={state} dispatch={dispatch} />
    </Box>
  </div>
);

export default ExplorePageTemplate;
