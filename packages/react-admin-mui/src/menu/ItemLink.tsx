import { ListItemProps } from "@material-ui/core/ListItem";
import * as React from "react";
import { Link, LinkProps, Route } from "react-router-dom";
import { IMenuItemProps, MenuItem } from "./Item";

export interface IMenuItemLink extends IMenuItemProps {
    path?: string;
}

export class MenuItemLink extends React.Component<IMenuItemLink & ListItemProps & Partial<LinkProps>> {
    public render() {
        const { path, ...otherProps } = this.props;
        if (!path) {
            // eg. external link
            return <MenuItem selected={false} {...otherProps} />;
        }

        return (
            <Route
                path={path}
                strict={false}
                children={({ location, match }) => {
                    // @ts-ignore
                    return <MenuItem selected={!!match} component={Link} to={path} {...otherProps} />;
                }}
            />
        );
    }
}
