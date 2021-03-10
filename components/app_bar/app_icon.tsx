// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {App, NotificationCategory} from './types';

import './app_icon.scss';

type Props = {
    app: App;
}

export default class AppIcon extends React.Component<Props> {
    render() {
        const {app} = this.props;
        const notificationCatgeories = app.notifications_categories;

        let numNotifications = 0;
        notificationCatgeories.forEach((category: NotificationCategory) => numNotifications += category.notifications.length)

        let badge = null;
        if (numNotifications > 0) {
            badge = <span className={'AppBadge'}>{numNotifications}</span>;
        }

        return (
            <button className='AppIcon'>
                <i className={'fa fa-2x ' + app.icon} />
                {badge} 
            </button>
        );
    }
}
