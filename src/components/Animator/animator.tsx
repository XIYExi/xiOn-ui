import React from "react";
import {CSSTransition} from 'react-transition-group';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';

type AnimatorName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-right' | 'zoom-in-bottom';

type AnimatorProps = CSSTransitionProps & {
    animation?: AnimatorName;
    wrapper?: boolean;
}

const Animator: React.FC<AnimatorProps> = (props) => {
    const {
        children,
        classNames,
        animation,
        wrapper,
        ...restProps
    } = props;

    return(
        <CSSTransition
            classNames={classNames?classNames:animation}
            {...restProps}
        >
            {wrapper?<div>{children}</div>:children}
        </CSSTransition>
    )
}

Animator.defaultProps={
    unmountOnExit:true,
    appear:true,
    wrapper:true,
}

export default Animator;


