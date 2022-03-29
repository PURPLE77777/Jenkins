import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/table.css";

function Table() {
    const notebooks = useSelector((state) => state.dataReducer.notebooks);
    const parameters = useSelector((state) => state.dataReducer.parameters);

    const [selectedRows, setSelectedRows] = useState(0);

    const selectRow = (e) => {
        e.stopPropagation();
        e.currentTarget.classList.toggle("selected-row");
        let rows = document.getElementsByClassName("selected-row");
        setSelectedRows(rows.length);
    };

    const stopPropag = (e) => {
        e.stopPropagation();
    };

    const changeCell = (e) => {
        console.log(e.key);
        if (e.key === "Enter") {
            let input = e.target;
            input.classList.remove("show_input");
            input.placeholder = input.value;
            let span = input.previousSibling;
            span.innerHTML = input.value;
            input.value = "";
        } else if (e.key === "Escape") {
            let input = e.target;
            input.classList.remove("show_input");
            input.value = "";
        }
    };

    const showInput = (e) => {
        let input = e.currentTarget.lastChild;
        input.classList.add("show_input");
    };

    return (
        <div className="table-wrap">
            <div className="count_selected_rows">
                Selected rows:{" "}
                <span className="count_rows">{selectedRows}</span>
            </div>
            <table cellPadding="15" cellSpacing="0" className="table-notebooks">
                <thead>
                    <tr className="first-row">
                        <th></th>
                        {parameters.map((parameter) => (
                            <th className="title-column" key={parameter}>
                                {parameter}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {notebooks.map((notebook, index) => (
                        <tr
                            className="row"
                            key={index}
                            onClick={(e) => selectRow(e)}
                        >
                            <th key={index + 1}>{notebook.name}</th>
                            <td
                                key={index + 2}
                                onDoubleClick={(e) => showInput(e)}
                            >
                                <span>{notebook.resolution}</span>
                                <input
                                    key={"input" + index + 2}
                                    placeholder={notebook.resolution}
                                    className="td_input"
                                    onClick={(e) => stopPropag(e)}
                                    onKeyDown={(e) => changeCell(e)}
                                ></input>
                            </td>
                            <td
                                key={index + 3}
                                onDoubleClick={(e) => showInput(e)}
                            >
                                <span>{notebook.year}</span>
                                <input
                                    key={"input" + index + 3}
                                    placeholder={notebook.year}
                                    className="td_input"
                                    onClick={(e) => stopPropag(e)}
                                    onKeyDown={(e) => changeCell(e)}
                                ></input>
                            </td>
                            <td
                                key={index + 4}
                                onDoubleClick={(e) => showInput(e)}
                            >
                                <span>{notebook.memory}</span>
                                <input
                                    key={"input" + index + 4}
                                    placeholder={notebook.memory}
                                    className="td_input"
                                    onClick={(e) => stopPropag(e)}
                                    onKeyDown={(e) => changeCell(e)}
                                ></input>
                            </td>
                            <td
                                key={index + 5}
                                onDoubleClick={(e) => showInput(e)}
                            >
                                <span>{notebook.screen}</span>
                                <input
                                    key={"input" + index + 5}
                                    placeholder={notebook.screen}
                                    className="td_input"
                                    onClick={(e) => stopPropag(e)}
                                    onKeyDown={(e) => changeCell(e)}
                                ></input>
                            </td>
                            <td
                                key={index + 6}
                                onDoubleClick={(e) => showInput(e)}
                            >
                                <span>{notebook.RAM}</span>
                                <input
                                    key={"input" + index + 6}
                                    placeholder={notebook.RAM}
                                    className="td_input"
                                    onClick={(e) => stopPropag(e)}
                                    onKeyDown={(e) => changeCell(e)}
                                ></input>
                            </td>
                            <td
                                key={index + 7}
                                onDoubleClick={(e) => showInput(e)}
                            >
                                <span>{notebook.disk}</span>
                                <input
                                    key={"input" + index + 7}
                                    placeholder={notebook.disk}
                                    className="td_input"
                                    onClick={(e) => stopPropag(e)}
                                    onKeyDown={(e) => changeCell(e)}
                                ></input>
                            </td>
                            <td
                                key={index + 8}
                                onDoubleClick={(e) => showInput(e)}
                            >
                                <span>{notebook["CPU frequency"]}</span>
                                <input
                                    key={"input" + index + 8}
                                    placeholder={notebook["CPU frequency"]}
                                    className="td_input"
                                    onClick={(e) => stopPropag(e)}
                                    onKeyDown={(e) => changeCell(e)}
                                ></input>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
