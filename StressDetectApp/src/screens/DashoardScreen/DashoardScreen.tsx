import React from "react";
import DashboardContent from "./DashboardContent";

export interface Props {
  activeIndex: number;
}

interface State {}

export class DashoardScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    console.log("-------------->>>>>>>> Dashboard Screen init");
    return <DashboardContent />;
  }
}
