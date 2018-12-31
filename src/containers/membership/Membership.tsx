import * as React from 'react';
import './Membership.css';

export interface IMembershipProps {
    membership: number,
    userAuthenticated: boolean
}

export class Membership extends React.Component<IMembershipProps> {
    constructor(props: IMembershipProps) {
        super(props);

        this.state = {
            membership: props.membership,
            userAuthenticated: props.userAuthenticated
        }
    }

    public render() {
        return (
            <div className="membership">
                <div className="membership-icon">
                    <img src={process.env.PUBLIC_URL + '/info-topbar.png'} />
                </div>
                <div className="membership-info">
                    <label>Select a connection fom the dropdown list, type the membership number in the search box and press Enter.</label>
                </div>
            </div>
        );
    }
}


