// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import React from 'react';

import './app_bar.scss';

interface ComponentProps {
    show?: boolean;
}

interface AppIcon {
    name: string;
    iconUrl: string;
    notifications: NotificationCategory[];
}

interface NotificationCategory {
    name: string;
    hoverText: string;
    notifications: Notification[];
}

interface Notification {
    message: string;
    link: string;
}

const apps = [
    {

    }
];

const AppBar = (props: ComponentProps) => {
    const {show} = props;

    if (!show) {
        return null;
    }

    return (
        <div className='AppBar'>

        </div>
    );
};

AppBar.defaultProps = {
    show: true,
};

export default AppBar;
