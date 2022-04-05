import React, { useState } from "react";
import { useSelector } from "react-redux";
import NoAuth from "./NoAuth";
import "../styles/table.css";

function Table() {
    const notebooks = useSelector((state) => state.dataReducer.notebooks);
    const parameters = useSelector((state) => state.dataReducer.parameters);
    const username = useSelector((state) => state.loginReducer.userName);

    const [selectedRows, setSelectedRows] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const countRows = notebooks.length;

    const selectRow = (e) => {
        e.currentTarget.parentNode.classList.toggle("selected-row");
        e.currentTarget.classList.toggle("selected-hd");
        let rows = document.getElementsByClassName("selected-row");
        setSelectedRows(rows.length);
    };

    const acceptChanges = () => {
        let input = document.getElementsByClassName("show_input")[0];
        input.classList.remove("show_input");
        input.placeholder = input.value;
        let span = input.previousSibling;
        span.innerHTML = input.value;
        input.value = "";
        setIsEditing(false);
    };
    const cancelChanges = () => {
        let input = document.getElementsByClassName("show_input")[0];
        input.classList.remove("show_input");
        input.value = "";
        setIsEditing(false);
    };

    const changeCell = (e) => {
        if (e.key === "Enter") {
            acceptChanges(e);
        } else if (e.key === "Escape") {
            cancelChanges(e);
        }
    };

    const showInput = (e) => {
        if (!isEditing) {
            let input = e.currentTarget.lastChild;
            input.classList.add("show_input");
            setIsEditing(true);
        }
    };

    const changeTr = () => {
        const tr = document.getElementsByClassName("tbody_first-row")[0];
        const table = document.getElementsByClassName("table-notebooks")[0];

        tr.style.top = table.scrollTop + "px";
        tr.style.left = table.scrollLeft + "px";
    };

    const uniqueKeyFunction = () => {
        let key = 0;
        return () => {
            return key++;
        };
    };
    const uniqueKey = uniqueKeyFunction();

    return (
        <>
            {username ? (
                <div className='table-wrap'>
                    <div className='data-table'>
                        <div className='count_selected_rows'>
                            All rows:{" "}
                            <span className='count_rows'>{countRows}</span>
                        </div>
                        <div className='count_selected_rows'>
                            Selected rows:{" "}
                            <span className='count_rows'>{selectedRows}</span>
                        </div>
                    </div>
                    <table
                        cellPadding='15'
                        cellSpacing='0'
                        className='table-notebooks'
                        onScroll={() => changeTr()}>
                        <thead className='table-head'>
                            <tr className='thead_first-row'>
                                <th className='first-th'></th>
                                {parameters.map((parameter) => (
                                    <th
                                        className='title-column'
                                        key={parameter}>
                                        {parameter}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='tbody_first-row'></tr>
                            {notebooks.map((notebook) => (
                                <tr className='row' key={uniqueKey()}>
                                    <th
                                        key={uniqueKey()}
                                        onClick={(e) => selectRow(e)}>
                                        {notebook.name}
                                    </th>
                                    <td
                                        key={uniqueKey()}
                                        onDoubleClick={(e) => showInput(e)}>
                                        <span>{notebook.resolution}</span>
                                        <input
                                            key={uniqueKey()}
                                            placeholder={notebook.resolution}
                                            className='td_input'
                                            onKeyDown={(e) =>
                                                changeCell(e)
                                            }></input>
                                    </td>
                                    <td
                                        key={uniqueKey()}
                                        onDoubleClick={(e) => showInput(e)}>
                                        <span>{notebook.year}</span>
                                        <input
                                            key={uniqueKey()}
                                            placeholder={notebook.year}
                                            className='td_input'
                                            onKeyDown={(e) =>
                                                changeCell(e)
                                            }></input>
                                    </td>
                                    <td
                                        key={uniqueKey()}
                                        onDoubleClick={(e) => showInput(e)}>
                                        <span>{notebook.memory}</span>
                                        <input
                                            key={uniqueKey()}
                                            placeholder={notebook.memory}
                                            className='td_input'
                                            onKeyDown={(e) =>
                                                changeCell(e)
                                            }></input>
                                    </td>
                                    <td
                                        key={uniqueKey()}
                                        onDoubleClick={(e) => showInput(e)}>
                                        <span>{notebook.screen}</span>
                                        <input
                                            key={uniqueKey()}
                                            placeholder={notebook.screen}
                                            className='td_input'
                                            onKeyDown={(e) =>
                                                changeCell(e)
                                            }></input>
                                    </td>
                                    <td
                                        key={uniqueKey()}
                                        onDoubleClick={(e) => showInput(e)}>
                                        <span>{notebook.RAM}</span>
                                        <input
                                            key={uniqueKey()}
                                            placeholder={notebook.RAM}
                                            className='td_input'
                                            onKeyDown={(e) =>
                                                changeCell(e)
                                            }></input>
                                    </td>
                                    <td
                                        key={uniqueKey()}
                                        onDoubleClick={(e) => showInput(e)}>
                                        <span>{notebook.disk}</span>
                                        <input
                                            key={uniqueKey()}
                                            placeholder={notebook.disk}
                                            className='td_input'
                                            onKeyDown={(e) =>
                                                changeCell(e)
                                            }></input>
                                    </td>
                                    <td
                                        key={uniqueKey()}
                                        onDoubleClick={(e) => showInput(e)}>
                                        <span>{notebook["CPU frequency"]}</span>
                                        <input
                                            key={uniqueKey()}
                                            placeholder={
                                                notebook["CPU frequency"]
                                            }
                                            className='td_input'
                                            onKeyDown={(e) =>
                                                changeCell(e)
                                            }></input>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {isEditing ? (
                        <div className='btns'>
                            <button
                                className='btn-accept'
                                onClick={() => {
                                    acceptChanges();
                                }}>
                                Accept
                            </button>
                            <button
                                className='btn-cancel'
                                onClick={() => {
                                    cancelChanges();
                                }}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            ) : (
                <NoAuth></NoAuth>
            )}
        </>
    );
}

export default Table;
