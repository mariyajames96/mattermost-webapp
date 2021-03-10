// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import AppIcon from './app_icon';

import {App} from './types';

import './app_bar.scss';

interface ComponentProps {
    show?: boolean;
}

const apps: App[]= [
    {
        name: 'GitHub',
        icon: 'fa-github',
        notifications_categories: [
            {
                name: 'Pull Requests',
                hoverText: 'PRs to review',
                notifications: [
                    {
                        message: '',
                        link: 'https://github.com',
                    }
                ]
            }
        ],
    },
    {
        name: 'GitLab',
        icon: 'fa-gitlab',
        notifications_categories: [
            {
                name: 'Merge Requests',
                hoverText: 'MRs to review',
                notifications: []
            }
        ],
    },
    {
        name: 'JIRA',
        icon: 'fa-rocket',
        notifications_categories: [
            {
                name: 'Unread Comments',
                hoverText: 'Unread comments',
                notifications: [
                    {
                        message: '',
                        link: 'https://gitlab.com',
                    }
                ]
            }
        ],
    }
];

const AppBar = (props: ComponentProps) => {
    const {show} = props;

    if (!show) {
        return null;
    }

    return (
        <div className='AppBar'>
            {apps.map(app => <AppIcon app={app}/>)} 
        </div>
    );
};

AppBar.defaultProps = {
    show: true,
};

export default AppBar;
