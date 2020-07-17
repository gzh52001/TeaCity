import React from 'react';
import { NavBar, Icon } from 'antd-mobile';

function HeaderBar() {
    return (
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="1" type="ellipsis" />,
                ]}
            >购物车</NavBar>

        </div>
    )
}

export default HeaderBar;

