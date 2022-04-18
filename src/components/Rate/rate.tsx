import React, {CSSProperties, ReactElement, useEffect, useState} from "react";
import {AiFillStar} from 'react-icons/ai';
import classnames from "classnames";

interface BaseRateProps {
    /*默认值*/
    defaultValue?: number;

    /*禁用*/
    disabled?: boolean;

    /*是否允许清除*/
    allowedClear?: boolean;

    /*是否支持半选*/
    allowHalf?: boolean;

    /*选项自定义*/
    character?: ReactElement[];

    /*改变时回调*/
    onChange?: (value: number) => any;

    /*悬停时回调*/
    onHover?: (value: number) => any;

    /*自定义样式类名*/
    className?:string;

    /*自定义样式对象*/
    style?:CSSProperties;

    /*rate总数*/
    count?:number;

    /*文本渲染*/
    text?:string[];

    /*是否渲染文本*/
    show?:boolean;
}

const Rate: React.FC<BaseRateProps> = (props) => {

    const {
        defaultValue = 0,
        disabled,
        allowedClear,
        allowHalf,
        character,
        onChange,
        onHover,
        className,
        style,
        count = 5,
        text = [],
        show,
        ...restProps
    } = props;

    const defaultRateIcon = new Array(count).fill(<AiFillStar size='30px'/>);

    const [currentSelect, setCurrentSelect] = useState<number>(defaultValue);
    const [currentHover, setCurrentHover] = useState<number>(defaultValue);
    const [halfSelected, setHalfSelected] = useState<number>(-1);
    const [characterInner, setCharacterInner] = useState<ReactElement[]>(defaultRateIcon);

    const classes = classnames('lole-rate', className, {
        'disabled': disabled,
    })

    useEffect(() => {
        if (defaultValue) {
            const value = defaultValue>count?count:defaultValue;
            const floorValue = Math.floor(value)
            if (value - floorValue > 0 && allowHalf) {
                setHalfSelected(floorValue)
            }
            setCurrentSelect(floorValue)
        }
    }, [])

    useEffect(() => {
        character ? setCharacterInner(character) : setCharacterInner(defaultRateIcon)
    }, [])


    const handleOnMouseEnter = (index: number, area: 'half' | 'whole') => {
        setCurrentHover(index);
        if (area === 'half') {
            onHover && onHover(index + 0.5);
        } else {
            onHover && onHover(index + 1);
        }
    }

    const handleOnMouseLeave = () => {
        setCurrentHover(0);
    }

    const handleClick = (index: number, area: 'half' | 'whole') => {
        console.log('rate',currentSelect)
        if (area === 'whole') {
            if (allowedClear && currentSelect === index + 1) {
                setCurrentSelect(0);
                setHalfSelected(-1);
                onChange && onChange(0);
            } else {
                setCurrentSelect(index + 1);
                setHalfSelected(-1);
                onChange && onChange(index + 1);
            }
        }
        if (area === 'half') {
            if (allowedClear && currentSelect === index) {
                setCurrentSelect(0);
                setHalfSelected(-1);
                onChange && onChange(0);
            } else {
                setCurrentSelect(index);
                setHalfSelected(index);
                onChange && onChange(index + 0.5);
            }
        }
    }

    const renderTextList = (text:string[]) => {
        if (text.length === 0){
            // arr don't have param
            // render index + 0.5
            if (halfSelected !== -1)
                return <span>{(currentSelect + 0.5)}</span>;
            else
                return <span>{currentSelect}</span>;
        }else{
            // judge arr.length and half/normal index's length
            if (allowHalf){
                if (text.length < (count *2)){
                    if (halfSelected !== -1)
                        return <span>{(currentSelect + 0.5)}</span>;
                    else
                        return <span>{currentSelect}</span>;
                }
                else{
                    if (halfSelected !== -1)
                        //when you click the half star, currentSelect === (stars' count of you have clicked sub 1)
                        return <span>{text[(currentSelect + 1) * 2 - 2]}</span>
                    else
                        //when you click the whole star, currentSelect === (stars' count of you have clicked)
                        return <span>{text[(currentSelect + 1) * 2  - 3]}</span>
                }
            }else{
                if (text.length < count){
                        return <span>{currentSelect}</span>;
                }else{
                    return <span>{text[currentSelect -1]}</span>
                }
            }

        }

    }

    return(
        <>
            <div className={classes} style={style} {...restProps}>
                <ul>
                    {
                        characterInner.map((item, index) => (
                            <li key={index}
                                className={`${index < currentSelect && 'selected'} ${index < currentHover && "hoverSelected"} ${index === halfSelected && 'halfSelected'}`}
                            >
                                {
                                    allowHalf && (
                                        <div className="half"
                                             onMouseEnter={() => handleOnMouseEnter(index, 'half')}
                                             onMouseLeave={handleOnMouseLeave}
                                             onClick={() => handleClick(index, 'half')}
                                        >
                                            {(characterInner as any)[index]}
                                        </div>
                                    )
                                }
                                <div key={index} className="normal"
                                     onMouseEnter={() => handleOnMouseEnter(index, 'whole')}
                                     onMouseLeave={handleOnMouseLeave}
                                     onClick={() => handleClick(index, 'whole')}
                                >
                                    {(characterInner as any)[index]}
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <div className='lole-rate-text-wrapper' style={{display:show?'block':'none',paddingLeft:'5px'}}>
                   {renderTextList(text)}
                </div>
            </div>

        </>
    )
}

Rate.defaultProps = {
    defaultValue: 0,
    allowedClear: false,
    allowHalf: false,
    count: 5,
    disabled: false,
    show:false,
}

export default Rate;