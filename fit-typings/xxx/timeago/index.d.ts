declare module 'fit-timeago' {
import * as React from 'react';
import { Props, State } from './module';
export default class Timeago extends React.Component<Props, State> {
    static defaultProps: Props;
    state: State;
    _isMounted: boolean;
    timeoutId: number;
    constructor(props: any);
    protected componentWillMount(): void;
    protected componentDidMount(): void;
    protected componentDidUpdate(nextProps: Props): void;
    protected componentWillUnmount(): void;
    private tick(refresh?);
    render(): React.ReactElement<any>;
}

}