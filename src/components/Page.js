import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class Page extends Component {
    static propTypes = {
        pageText: PropTypes.any,
        pageNumber: PropTypes.number,
        onClick: PropTypes.func,
        isActive: PropTypes.bool,
        isDisabled: PropTypes.bool,
        isEllipsis: PropTypes.bool,
        activeClass: PropTypes.string,
        activeLinkClass: PropTypes.string,
        itemClass: PropTypes.string,
        linkClass: PropTypes.string,
        disabledClass: PropTypes.string,
        ellipsisClass: PropTypes.string,
        ellipsisTextClass: PropTypes.string,
        href: PropTypes.string
    };

    static defaultProps = {
        activeClass: "active",
        disabledClass: "disabled",
        ellipsisClass: "ellipsis",
        ellipsisTextClass: "ellipsis-text",
        itemClass: undefined,
        linkClass: undefined,
        activeLinkCLass: undefined,
        isActive: false,
        isDisabled: false,
        isEllipsis: false,
        href: "#"
    };

    handleClick(e) {
        const { isDisabled, isEllipsis, pageNumber } = this.props;
        e.preventDefault();
        if (isDisabled || isEllipsis) {
            return;
        }
        this.props.onClick(pageNumber);
    }

    render() {
        let {
            pageText,
            pageNumber,
            activeClass,
            itemClass,
            linkClass,
            activeLinkClass,
            disabledClass,
            ellipsisClass,
            ellipsisTextClass,
            isActive,
            isDisabled,
            isEllipsis,
            href
        } = this.props;

        const css = cx(itemClass, {
            [activeClass]: isActive,
            [disabledClass]: isDisabled || isEllipsis,
            [ellipsisClass]: isEllipsis
        });

        const linkCss = cx(linkClass, {
            [activeLinkClass]: isActive,
            [ellipsisTextClass]: isEllipsis
        });

        return (
            <li className={css} onClick={::this.handleClick}>
                {isEllipsis
                    ? (<span className={linkCss}>{pageText}</span>)
                    : (<a className={linkCss} href={href}>{pageText}</a>)
                }
            </li>
        );
    }
}
