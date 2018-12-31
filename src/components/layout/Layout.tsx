import * as React from 'react';
import './Layout.css';
import { Route } from 'react-router-dom';
import { DdrCcr } from '../../containers/ddrccr/ddrccr';

export interface IAppProps {
}

export function Layout(props: IAppProps) {
    return (
        <div className="layout">

               <Route path="/ddrccr" component={DdrCcr} />
                
                <div>
                    E5 component
                </div>

        </div>
    );
}
