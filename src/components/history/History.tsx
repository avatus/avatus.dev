import React from "react";
import { History as HistoryInterface } from "../../hooks/history";
import { Ps1 } from "../ps1";

export const History: React.FC<{ history: Array<HistoryInterface> }> = ({
    history,
}) => {
    return (
        <>
            {history.map((entry: HistoryInterface, index: number) => (
                <div key={entry.command + index}>
                    <div className="flex space-x-2">
                        <div className="">
                            <Ps1 />
                        </div>

                        <div className="flex-grow">{entry.command}</div>
                    </div>

                    <p
                        className="mb-2 whitespace-pre-wrap"
                        style={{ lineHeight: "normal" }}
                        dangerouslySetInnerHTML={{ __html: entry.output }}
                    />
                </div>
            ))}
        </>
    );
};

export default History;
