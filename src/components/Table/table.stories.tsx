import React from "react";
import '../../styles/index.scss';
import {storiesOf} from "@storybook/react";
import {Table} from "../../index";
import {AiOutlineCheck} from "react-icons/ai";
import _ from 'lodash'

storiesOf('Table Component',module)
    .add('基本使用',()=>{
        return <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderItem>Header</Table.HeaderItem>
                    <Table.HeaderItem>Header</Table.HeaderItem>
                    <Table.HeaderItem>Header</Table.HeaderItem>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Item>Cell</Table.Item>
                    <Table.Item>Cell</Table.Item>
                    <Table.Item>Cell</Table.Item>
                </Table.Row>
                <Table.Row>
                    <Table.Item>Cell</Table.Item>
                    <Table.Item>Cell</Table.Item>
                    <Table.Item>Cell</Table.Item>
                </Table.Row>
                <Table.Row>
                    <Table.Item>Cell</Table.Item>
                    <Table.Item>Cell</Table.Item>
                    <Table.Item>Cell</Table.Item>
                </Table.Row>
            </Table.Body>
        </Table>
    })
    .add('自定义',()=>{
        return(
            <Table definition>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderItem />
                        <Table.HeaderItem>Arguments</Table.HeaderItem>
                        <Table.HeaderItem>Description</Table.HeaderItem>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Item>reset rating</Table.Item>
                        <Table.Item>None</Table.Item>
                        <Table.Item>Resets rating to default value</Table.Item>
                    </Table.Row>
                    <Table.Row>
                        <Table.Item>set rating</Table.Item>
                        <Table.Item>rating (integer)</Table.Item>
                        <Table.Item>Sets the current star rating to specified value</Table.Item>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    })
    .add('结构化',()=>{
        return(
            <Table celled structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderItem rowSpan='2'>Name</Table.HeaderItem>
                        <Table.HeaderItem rowSpan='2'>Type</Table.HeaderItem>
                        <Table.HeaderItem rowSpan='2'>Files</Table.HeaderItem>
                        <Table.HeaderItem colSpan='3'>Languages</Table.HeaderItem>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderItem>Ruby</Table.HeaderItem>
                        <Table.HeaderItem>JavaScript</Table.HeaderItem>
                        <Table.HeaderItem>Python</Table.HeaderItem>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Item>Alpha Team</Table.Item>
                        <Table.Item>Project 1</Table.Item>
                        <Table.Item textAlign='right'>2</Table.Item>
                        <Table.Item textAlign='center'>
                            <AiOutlineCheck style={{color:'green'}}/>
                        </Table.Item>
                        <Table.Item />
                        <Table.Item />
                    </Table.Row>
                    <Table.Row>
                        <Table.Item rowSpan='3'>Beta Team</Table.Item>
                        <Table.Item>Project 1</Table.Item>
                        <Table.Item textAlign='right'>52</Table.Item>
                        <Table.Item textAlign='center'>
                            <AiOutlineCheck style={{color:'green'}}/>
                        </Table.Item>
                        <Table.Item />
                        <Table.Item />
                    </Table.Row>
                    <Table.Row>
                        <Table.Item>Project 2</Table.Item>
                        <Table.Item textAlign='right'>12</Table.Item>
                        <Table.Item />
                        <Table.Item textAlign='center'>
                            <AiOutlineCheck style={{color:'green'}}/>
                        </Table.Item>
                        <Table.Item />
                    </Table.Row>
                    <Table.Row>
                        <Table.Item>Project 3</Table.Item>
                        <Table.Item textAlign='right'>21</Table.Item>
                        <Table.Item textAlign='center'>
                            <AiOutlineCheck style={{color:'green'}}/>
                        </Table.Item>
                        <Table.Item />
                        <Table.Item />
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    })
    .add('Primary / Info /Warning / Error',()=>{
        return(
            <>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>No Name Specified</Table.Item>
                            <Table.Item>Unknown</Table.Item>
                            <Table.Item Error>None</Table.Item>
                        </Table.Row>
                        <Table.Row warning>
                            <Table.Item>Jimmy</Table.Item>
                            <Table.Item>
                                Approved
                            </Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Unknown</Table.Item>
                            <Table.Item primary>
                                Requires call
                            </Table.Item>
                        </Table.Row>
                        <Table.Row info>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item>Unknown</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    })
    .add('激活状态',()=>{
        return(
            <>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row active>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Selected</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item active>Jill</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    })
    .add('禁用',()=>{
        return(
            <>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row disabled>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Selected</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item disabled>Jill</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    })
    .add('吸附',()=>{
        const header = (
            <Table.Header>
                <Table.Row>
                    <Table.HeaderItem>Header</Table.HeaderItem>
                    <Table.HeaderItem>Header</Table.HeaderItem>
                    <Table.HeaderItem>Header</Table.HeaderItem>
                </Table.Row>
            </Table.Header>
        )
        const body = (
            <Table.Body>
                <Table.Row>
                    <Table.Item>Cell</Table.Item>
                    <Table.Item>Cell</Table.Item>
                    <Table.Item>Cell</Table.Item>
                </Table.Row>
            </Table.Body>
        )

        return(
            <div>
                <Table attached='top'>
                    {header}
                    {body}
                </Table>

                <Table attached='bottom'>{body}</Table>

                <Table attached='top' celled selectable>
                    {body}
                </Table>

                <Table attached='bottom' celled>
                    {header}
                    {body}
                </Table>
            </div>
        )
    })
    .add('Fixed',()=>{
        return(
            <>
                <Table fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Description</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>
                                John is an interesting boy but sometimes you don't really have enough
                                room to describe everything you'd like
                            </Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>
                                Jamie is a kind girl but sometimes you don't really have enough room
                                to describe everything you'd like
                            </Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item>Denied</Table.Item>
                            <Table.Item>
                                Jill is an alright girl but sometimes you don't really have enough
                                room to describe everything you'd like
                            </Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    })
    .add('可选择-行',()=>{
        return(
            <>
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>No Action</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item>Denied</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row warning>
                            <Table.Item>John</Table.Item>
                            <Table.Item>No Action</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item positive>Approved</Table.Item>
                            <Table.Item warning>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item negative>Denied</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    })
    .add('可选择-单元格',()=>{
        return(
            <>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>No Action</Table.Item>
                            <Table.Item selectable>
                                <a href='#'>Edit</a>
                            </Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item selectable>
                                <a href='#'>Edit</a>
                            </Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item>Denied</Table.Item>
                            <Table.Item selectable>
                                <a href='#'>Edit</a>
                            </Table.Item>
                        </Table.Row>
                        <Table.Row warning>
                            <Table.Item>John</Table.Item>
                            <Table.Item>No Action</Table.Item>
                            <Table.Item selectable warning>
                                <a href='#'>Requires change</a>
                            </Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item info>Approved</Table.Item>
                            <Table.Item selectable warning>
                                <a href='#'>Approve</a>
                            </Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item primary>Denied</Table.Item>
                            <Table.Item selectable negative>
                                <a href='#'>Remove</a>
                            </Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    })
    .add('垂直布局',()=>{
        return(
            <>
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row verticalAlign='top'>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item verticalAlign='top'>
                                Notes
                                <br />
                                1<br />
                                2<br />
                            </Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item verticalAlign='bottom'>Approved</Table.Item>
                            <Table.Item>
                                Notes
                                <br />
                                1<br />
                                2<br />
                            </Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    })
    .add('文字布局',()=>{
        return(
            <Table striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderItem>Name</Table.HeaderItem>
                        <Table.HeaderItem>Status</Table.HeaderItem>
                        <Table.HeaderItem textAlign='right'>Notes</Table.HeaderItem>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row textAlign='center'>
                        <Table.Item>John</Table.Item>
                        <Table.Item>Approved</Table.Item>
                        <Table.Item textAlign='right'>None</Table.Item>
                    </Table.Row>
                    <Table.Row>
                        <Table.Item>Jamie</Table.Item>
                        <Table.Item>Approved</Table.Item>
                        <Table.Item textAlign='right'>Requires call</Table.Item>
                    </Table.Row>
                    <Table.Row>
                        <Table.Item>Jill</Table.Item>
                        <Table.Item>Denied</Table.Item>
                        <Table.Item textAlign='right'>None</Table.Item>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    })
    .add('条纹',()=>{
        return (
            <>
                <Table striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Date Joined</Table.HeaderItem>
                            <Table.HeaderItem>E-mail</Table.HeaderItem>
                            <Table.HeaderItem>Called</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John Lilki</Table.Item>
                            <Table.Item>September 14, 2013</Table.Item>
                            <Table.Item>jhlilk22@yahoo.com</Table.Item>
                            <Table.Item>No</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie Harington</Table.Item>
                            <Table.Item>January 11, 2014</Table.Item>
                            <Table.Item>jamieharingonton@yahoo.com</Table.Item>
                            <Table.Item>Yes</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill Lewis</Table.Item>
                            <Table.Item>May 11, 2014</Table.Item>
                            <Table.Item>jilsewris22@yahoo.com</Table.Item>
                            <Table.Item>Yes</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>John Lilki</Table.Item>
                            <Table.Item>September 14, 2013</Table.Item>
                            <Table.Item>jhlilk22@yahoo.com</Table.Item>
                            <Table.Item>No</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>John Lilki</Table.Item>
                            <Table.Item>September 14, 2013</Table.Item>
                            <Table.Item>jhlilk22@yahoo.com</Table.Item>
                            <Table.Item>No</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie Harington</Table.Item>
                            <Table.Item>January 11, 2014</Table.Item>
                            <Table.Item>jamieharingonton@yahoo.com</Table.Item>
                            <Table.Item>Yes</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill Lewis</Table.Item>
                            <Table.Item>May 11, 2014</Table.Item>
                            <Table.Item>jilsewris22@yahoo.com</Table.Item>
                            <Table.Item>Yes</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>John Lilki</Table.Item>
                            <Table.Item>September 14, 2013</Table.Item>
                            <Table.Item>jhlilk22@yahoo.com</Table.Item>
                            <Table.Item>No</Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    })
    .add('单元格',()=>{
        return(
            <>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item>Denied</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderItem>3 People</Table.HeaderItem>
                            <Table.HeaderItem>2 Approved</Table.HeaderItem>
                            <Table.HeaderItem />
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </>
        )
    })
    .add('列数',()=>{
        return(
            <Table columns={5}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderItem>Name</Table.HeaderItem>
                        <Table.HeaderItem>Status</Table.HeaderItem>
                        <Table.HeaderItem>Age</Table.HeaderItem>
                        <Table.HeaderItem>Gender</Table.HeaderItem>
                        <Table.HeaderItem>Notes</Table.HeaderItem>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Item>John</Table.Item>
                        <Table.Item>Approved</Table.Item>
                        <Table.Item>22</Table.Item>
                        <Table.Item>Male</Table.Item>
                        <Table.Item>None</Table.Item>
                    </Table.Row>
                    <Table.Row>
                        <Table.Item>Jamie</Table.Item>
                        <Table.Item>Approved</Table.Item>
                        <Table.Item>32</Table.Item>
                        <Table.Item>Male</Table.Item>
                        <Table.Item>Requires call</Table.Item>
                    </Table.Row>
                    <Table.Row>
                        <Table.Item>Jill</Table.Item>
                        <Table.Item>Denied</Table.Item>
                        <Table.Item>22</Table.Item>
                        <Table.Item>Other</Table.Item>
                        <Table.Item>None</Table.Item>
                    </Table.Row>
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderItem>3 People</Table.HeaderItem>
                        <Table.HeaderItem>2 Approved</Table.HeaderItem>
                        <Table.HeaderItem />
                        <Table.HeaderItem />
                        <Table.HeaderItem />
                    </Table.Row>
                </Table.Footer>
            </Table>
        )
    })
    .add('宽度',()=>{
        return(
            <>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem width={10}>Name</Table.HeaderItem>
                            <Table.HeaderItem width='six'>Status</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item>Denied</Table.Item>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderItem>3 People</Table.HeaderItem>
                            <Table.HeaderItem>2 Approved</Table.HeaderItem>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </>
        )
    })
    .add('主题色-header',()=>{

        const colors = ['primary', 'orange', 'yellow', 'indigo', 'green', 'teal', 'red', 'purple', 'pink', 'cyan', 'gray', 'black',]
        return(
            <div>
                {colors.map((color) => (
                    <Table color={color as any} key={color}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderItem>Food</Table.HeaderItem>
                                <Table.HeaderItem>Calories</Table.HeaderItem>
                                <Table.HeaderItem>Protein</Table.HeaderItem>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Item>Apples</Table.Item>
                                <Table.Item>200</Table.Item>
                                <Table.Item>0g</Table.Item>
                            </Table.Row>
                            <Table.Row>
                                <Table.Item>Orange</Table.Item>
                                <Table.Item>310</Table.Item>
                                <Table.Item>0g</Table.Item>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                ))}
            </div>
        )
    })
    .add('主题色-table',()=>{
        const colors = ['primary', 'orange', 'yellow', 'indigo', 'green', 'teal', 'red', 'purple', 'pink', 'cyan', 'gray', 'black',]
        return(
            <div>
                {colors.map((color) => (
                    <Table color={color as any} key={color} inverted>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderItem>Food</Table.HeaderItem>
                                <Table.HeaderItem>Calories</Table.HeaderItem>
                                <Table.HeaderItem>Protein</Table.HeaderItem>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Item>Apples</Table.Item>
                                <Table.Item>200</Table.Item>
                                <Table.Item>0g</Table.Item>
                            </Table.Row>
                            <Table.Row>
                                <Table.Item>Orange</Table.Item>
                                <Table.Item>310</Table.Item>
                                <Table.Item>0g</Table.Item>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                ))}
            </div>
        )
    })
    .add('排序',()=>{

        const tableData = [
            { name: 'John', age: 15, gender: 'Male' },
            { name: 'Amber', age: 40, gender: 'Female' },
            { name: 'Leslie', age: 25, gender: 'Other' },
            { name: 'Ben', age: 70, gender: 'Male' },
        ]

        function exampleReducer(state:any, action:any) {
            switch (action.type) {
                case 'CHANGE_SORT':
                    if (state.column === action.column) {
                        return {
                            ...state,
                            data: state.data.slice().reverse(),
                            direction:
                                state.direction === 'ascending' ? 'descending' : 'ascending',
                        }
                    }

                    return {
                        column: action.column,
                        data: _.sortBy(state.data, [action.column]),
                        direction: 'ascending',
                    }
                default:
                    throw new Error()
            }
        }

        const [state, dispatch] = React.useReducer(exampleReducer, {
            column: null,
            data: tableData,
            direction: null,
        })
        const { column, data, direction } = state

        return (
            <Table sortable celled fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderItem
                            sorted={column === 'name' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'name' })}
                        >
                            Name
                        </Table.HeaderItem>
                        <Table.HeaderItem
                            sorted={column === 'age' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'age' })}
                        >
                            Age
                        </Table.HeaderItem>
                        <Table.HeaderItem
                            sorted={column === 'gender' ? direction : null}
                            onClick={() => dispatch({ type: 'CHANGE_SORT', column: 'gender' })}
                        >
                            Gender
                        </Table.HeaderItem>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map(({ age, gender, name }:any) => (
                        <Table.Row key={name}>
                            <Table.Item>{name}</Table.Item>
                            <Table.Item>{age}</Table.Item>
                            <Table.Item>{gender}</Table.Item>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        )

    })
    .add('全长',()=>{
         return(
             <Table celled definition>
                 <Table.Header fullWidth>
                     <Table.Row>
                         <Table.HeaderItem />
                         <Table.HeaderItem>Arguments</Table.HeaderItem>
                         <Table.HeaderItem>Description</Table.HeaderItem>
                     </Table.Row>
                 </Table.Header>

                 <Table.Body>
                     <Table.Row>
                         <Table.Item>reset rating</Table.Item>
                         <Table.Item>None</Table.Item>
                         <Table.Item>Resets rating to default value</Table.Item>
                     </Table.Row>
                     <Table.Row>
                         <Table.Item>set rating</Table.Item>
                         <Table.Item>rating (integer)</Table.Item>
                         <Table.Item>Sets the current star rating to specified value</Table.Item>
                     </Table.Row>
                 </Table.Body>
             </Table>
         )
     })
    .add('宽松Mode / 紧凑Mode',()=>{
        return(
            <>
                <Table padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>
                                He is a very nice guy and I enjoyed talking to him on the telephone. I
                                hope we get to talk again.
                            </Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>
                                Jamie was not interested in purchasing our product.
                            </Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>

                <Table compact>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </>
        )
    })
    .add('尺寸',()=>{
        return(
            <>
                <Table size='small'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item>Denied</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderItem>3 People</Table.HeaderItem>
                            <Table.HeaderItem>2 Approved</Table.HeaderItem>
                            <Table.HeaderItem />
                        </Table.Row>
                    </Table.Footer>
                </Table>

                <Table size='large'>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderItem>Name</Table.HeaderItem>
                            <Table.HeaderItem>Status</Table.HeaderItem>
                            <Table.HeaderItem>Notes</Table.HeaderItem>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Item>John</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jamie</Table.Item>
                            <Table.Item>Approved</Table.Item>
                            <Table.Item>Requires call</Table.Item>
                        </Table.Row>
                        <Table.Row>
                            <Table.Item>Jill</Table.Item>
                            <Table.Item>Denied</Table.Item>
                            <Table.Item>None</Table.Item>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderItem>3 People</Table.HeaderItem>
                            <Table.HeaderItem>2 Approved</Table.HeaderItem>
                            <Table.HeaderItem />
                        </Table.Row>
                    </Table.Footer>
                </Table>
            </>
        )
    })