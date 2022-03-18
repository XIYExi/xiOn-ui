import React, {ChangeEvent, ReactElement, KeyboardEvent, useEffect, useState, useRef} from "react";
import classNames from "classnames";
import Input,{BaseInputProps} from "../Input/input";
import Icon, {ThemeProps} from "../Icon/icon";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
import Animator from "../Animator/animator";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

interface DataSourceObject{
    value:string;
}

export type DataSourceType<T = {}> = T & DataSourceObject;

export type AutoCompleteType = 'text'|'textarea';

export interface AutoCompleteProps extends Omit<BaseInputProps, 'onSelect'|'size'|'type'>{

    /** 搜索列表 */
    fetchSuggestions: (str:string) => DataSourceType[] | Promise<DataSourceType[]>;

    /** 选择子项 */
    onSelect?: (item:DataSourceType) => void;

    /** 自定义渲染模板 */
    renderOption?:(item:DataSourceType)=>ReactElement;

    /** 异步更新延时(ms) */
    delay?:number;

    /** 显示列表长度 */
    items?:number;

    /** icon主题 */
    theme?:ThemeProps;

    /** icon大小 */
    size?:SizeProp;

    /** 输入域类型(限制) */
    type?:AutoCompleteType;

}

const AutoComplete:React.FC<AutoCompleteProps> = (props) => {

    const {
        fetchSuggestions,
        onSelect,
        value,
        renderOption,
        delay,
        items,
        width,
        theme,
        size,
        ...restProps
    } = props;

    const [inputValue,setInputValue] = useState(value as string);
    const [suggestions,setSuggestions] = useState<DataSourceType[]>([]);
    const [loading, setLoading] = useState(false);
    const [highlightIndex, setHighlightIndex] = useState(-1);
    const [ showDropdown, setShowDropdown] = useState(false)
    const triggerSearch = useRef(false);
    const componentRef = useRef<HTMLDivElement>(null);
    const debouncedValue = useDebounce(inputValue, delay);

    useClickOutside(componentRef, () => {setSuggestions([])});

    useEffect(() => {

        if (debouncedValue && triggerSearch.current){
            setSuggestions([]);
            const results = fetchSuggestions(debouncedValue);

            if (results instanceof Promise) {
                setLoading(true);
                results.then(data => {
                    setLoading(false);
                    setSuggestions(data);
                    if (data.length > 0)
                        setShowDropdown(true)
                });
            }
            else{
                setSuggestions(results);
                setShowDropdown(true)
                if (results.length > 0)
                    setShowDropdown(true)
            }
        }else
            setShowDropdown(false);

        setHighlightIndex(-1);
    },[debouncedValue, fetchSuggestions])

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setInputValue(value);
        triggerSearch.current = true;
    }

    const handleSelect = (item:DataSourceType) => {
        setInputValue(item.value);
        setSuggestions([]);

        if (onSelect)
            onSelect(item);

        triggerSearch.current = false;
    }

    const renderTemplate = (item:DataSourceType) => {
        return renderOption ? renderOption(item):item.value;
    }

    const generateDropdown = () => {
        return(
            <>
                <Animator
                    in={showDropdown || loading}
                    animation="zoom-in-top"
                    timeout={300}
                    onExited={() => {setSuggestions([])}}
                >
                    <ul className='xiOn-suggestion-list'>
                        {
                            suggestions.slice(0, items).map((item,index)=>{
                                const classes = classNames('suggestion-item',{
                                    'is-active': index === highlightIndex
                                })
                                return(
                                    <li className={classes}
                                        key={index}
                                        onClick={()=>handleSelect(item)}
                                    >
                                        {renderTemplate(item)}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Animator>
            </>
        )
    }

    const highlight = (index:number) => {
        if(index < 0)
            index = 0;
        else if (index >= suggestions.length){
            index = suggestions.length - 1;
        }
        setHighlightIndex(index);
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.keyCode) {
            case 13:
                if (suggestions[highlightIndex])
                    handleSelect(suggestions[highlightIndex]);
                break;
            case 38:
                highlight(highlightIndex - 1);
                /** 向上 */
                break;
            case 40:
                /** 向下 */
                highlight(highlightIndex + 1);
                break;
            case 27:
                /** esc */
                setSuggestions([]);
                break;
            default:
                break;
        }

    }

    const loadIcon = () => {
        return (
            <>
                {
                    loading &&
                    <div className='suggestions-loading-icon'>
                        <Icon icon='spinner' size={size} spin theme={theme}/>
                    </div>
                }
            </>
        )
    }

    return(
        <div className='xiOn-auto-complete'
             style={{width: width}}
             ref={componentRef}
        >
            <Input
                value={inputValue}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
                width={width}
                {...restProps}
            />
            {
                loadIcon()
            }
            {
                (suggestions.length > 0) && generateDropdown()
            }
        </div>
    )

}

AutoComplete.defaultProps={
    delay:500,
    items:5,
    theme:'primary',
    size:'2x',
    width:'20vw',
}

export default AutoComplete;
