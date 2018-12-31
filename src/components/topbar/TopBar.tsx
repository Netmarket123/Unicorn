import * as React from 'react';
import './TopBar.css';
import { BasicDropdown } from '../../containers/common/FluentUi/BasicDropDown';
import { DefaultSearchBox } from '../../containers/common/FluentUi/DefaultSearchBox';
import { Membership, IMembershipProps } from '../../containers/membership/Membership';
import AuthProvider from '../../containers/auth/AuthProvider';
import IAuthState from '../../interfaces/IAuth'

export interface ITopBarProps {
}

const membership: IMembershipProps = {
    membership: 1,
    userAuthenticated: false
};

export function TopBar(props: ITopBarProps) {
    return (
        <div className="topbar">
            <div className="topbar-dll">
                <BasicDropdown />
            </div>
            <div className="topbar-searchbox">
                <DefaultSearchBox />
            </div>
            <div className="topbar-membership">
                <Membership {...(membership)} />
            </div>
            <div>
                <AuthProvider/>
            </div>
        </div>
    );
}

